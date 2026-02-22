import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  LogIn,
  LogOut,
  Save,
  RefreshCw,
  CloudUpload,
  Plus,
  Trash2,
  Edit3,
  Coins,
  Globe,
  CheckCircle2,
  AlertTriangle,
  Info,
} from 'lucide-react';
import {
  countryConfigs as seedConfigs,
  type CountryConfig,
  type Package,
  type AddOn,
} from '../data/quotes';
import { supabase } from '../utils/supabaseClient';

type SyncState = 'idle' | 'saving' | 'saved' | 'pulling' | 'error';

const cloneConfigs = (): CountryConfig[] =>
  seedConfigs.map((c) => ({
    ...c,
    packages: c.packages.map((p) => ({ ...p, features: [...p.features] })),
    addOns: c.addOns.map((a) => ({ ...a })),
  }));

export default function AdminPortal() {
  const [isAuthed, setIsAuthed] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [configs, setConfigs] = useState<CountryConfig[]>(cloneConfigs());
  const [selectedCode, setSelectedCode] = useState<string>(seedConfigs[0]?.code ?? 'ZW');
  const [syncState, setSyncState] = useState<SyncState>('idle');
  const [syncMessage, setSyncMessage] = useState('');

  const selected = configs.find((c) => c.code === selectedCode) ?? configs[0];

  const totals = useMemo(() => {
    const pkgCount = configs.reduce((sum, c) => sum + c.packages.length, 0);
    const addonCount = configs.reduce((sum, c) => sum + c.addOns.length, 0);
    return { countries: configs.length, pkgCount, addonCount };
  }, [configs]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@kypextech.co.za' && password === 'admin123') {
      setIsAuthed(true);
      setLoginError('');
    } else {
      setLoginError('Invalid credentials. Use admin@kypextech.co.za / admin123');
    }
  };

  const resetDrafts = () => setConfigs(cloneConfigs());

  const updatePackage = (id: string, patch: Partial<Package>) => {
    setConfigs((prev) =>
      prev.map((c) =>
        c.code !== selected.code
          ? c
          : {
              ...c,
              packages: c.packages.map((p) => (p.id === id ? { ...p, ...patch } : p)),
            }
      )
    );
  };

  const addPackage = () => {
    const newPkg: Package = {
      id: `pkg-${Date.now()}`,
      name: 'New Package',
      minPages: 1,
      maxPages: 3,
      basePrice: 0,
      features: ['Feature A', 'Feature B'],
    };
    setConfigs((prev) =>
      prev.map((c) =>
        c.code !== selected.code ? c : { ...c, packages: [newPkg, ...c.packages] }
      )
    );
  };

  const removePackage = (id: string) => {
    setConfigs((prev) =>
      prev.map((c) =>
        c.code !== selected.code
          ? c
          : { ...c, packages: c.packages.filter((p) => p.id !== id) }
      )
    );
  };

  const updateAddOn = (id: string, patch: Partial<AddOn>) => {
    setConfigs((prev) =>
      prev.map((c) =>
        c.code !== selected.code
          ? c
          : { ...c, addOns: c.addOns.map((a) => (a.id === id ? { ...a, ...patch } : a)) }
      )
    );
  };

  const addAddOn = () => {
    const newAddon: AddOn = {
      id: `addon-${Date.now()}`,
      name: 'New Add-on',
      price: 0,
      description: 'Describe this add-on',
    };
    setConfigs((prev) =>
      prev.map((c) =>
        c.code !== selected.code ? c : { ...c, addOns: [newAddon, ...c.addOns] }
      )
    );
  };

  const removeAddOn = (id: string) => {
    setConfigs((prev) =>
      prev.map((c) =>
        c.code !== selected.code
          ? c
          : { ...c, addOns: c.addOns.filter((a) => a.id !== id) }
      )
    );
  };

  const pushToSupabase = async () => {
    setSyncState('saving');
    setSyncMessage('Syncing quote pricing to Supabase...');
    try {
      if (!supabase) {
        throw new Error('Supabase keys missing. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.');
      }

      const countryRows = configs.map((c) => ({
        code: c.code,
        name: c.name,
        currency: c.currency,
        currency_symbol: c.currencySymbol,
        whatsapp_number: c.whatsappNumber,
      }));

      const packageRows = configs.flatMap((c) =>
        c.packages.map((p) => ({
          id: `${c.code}-${p.id}`,
          country_code: c.code,
          package_id: p.id,
          name: p.name,
          min_pages: p.minPages,
          max_pages: p.maxPages,
          base_price: p.basePrice,
          features: p.features,
        }))
      );

      const addonRows = configs.flatMap((c) =>
        c.addOns.map((a) => ({
          id: `${c.code}-${a.id}`,
          country_code: c.code,
          addon_id: a.id,
          name: a.name,
          price: a.price,
          description: a.description,
        }))
      );

      const { error: countriesError } = await supabase
        .from('quote_countries')
        .upsert(countryRows);
      if (countriesError) throw countriesError;

      const { error: packagesError } = await supabase
        .from('quote_packages')
        .upsert(packageRows);
      if (packagesError) throw packagesError;

      const { error: addonsError } = await supabase
        .from('quote_addons')
        .upsert(addonRows);
      if (addonsError) throw addonsError;

      setSyncState('saved');
      setSyncMessage('Pushed to Supabase. Refresh frontend to pull live data.');
    } catch (err: any) {
      setSyncState('error');
      setSyncMessage(err.message || 'Failed to sync with Supabase');
    }
  };

  const pullFromSupabase = async () => {
    setSyncState('pulling');
    setSyncMessage('Pulling latest pricing from Supabase...');
    try {
      if (!supabase) {
        throw new Error('Supabase keys missing. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.');
      }

      const [{ data: countryRows, error: cErr }, { data: packageRows, error: pErr }, { data: addonRows, error: aErr }] =
        await Promise.all([
          supabase.from('quote_countries').select('code,name,currency,currency_symbol,whatsapp_number'),
          supabase
            .from('quote_packages')
            .select('country_code,package_id,name,min_pages,max_pages,base_price,features'),
          supabase
            .from('quote_addons')
            .select('country_code,addon_id,name,price,description'),
        ]);

      if (cErr) throw cErr;
      if (pErr) throw pErr;
      if (aErr) throw aErr;

      if (!countryRows?.length) {
        setSyncState('error');
        setSyncMessage('No data in Supabase yet. Push first.');
        return;
      }

      const nextConfigs: CountryConfig[] = countryRows.map((c) => ({
        code: c.code,
        name: c.name,
        currency: c.currency,
        currencySymbol: c.currency_symbol,
        whatsappNumber: c.whatsapp_number,
        packages:
          packageRows
            ?.filter((p) => p.country_code === c.code)
            .map((p) => ({
              id: p.package_id,
              name: p.name,
              minPages: p.min_pages,
              maxPages: p.max_pages,
              basePrice: p.base_price,
              features: p.features ?? [],
            })) ?? [],
        addOns:
          addonRows
            ?.filter((a) => a.country_code === c.code)
            .map((a) => ({
              id: a.addon_id,
              name: a.name,
              price: a.price,
              description: a.description,
            })) ?? [],
      }));

      setConfigs(nextConfigs);
      setSelectedCode(nextConfigs[0]?.code ?? selectedCode);
      setSyncState('saved');
      setSyncMessage('Pulled latest pricing from Supabase.');
    } catch (err: any) {
      setSyncState('error');
      setSyncMessage(err.message || 'Failed to pull from Supabase');
    }
  };

  if (!isAuthed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-navy via-navy-light to-navy flex items-center justify-center px-4">
        <div className="w-full max-w-xl bg-navy-light/70 border border-primary/15 rounded-2xl p-8 backdrop-blur">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-bold text-white">Admin Portal Access</h1>
          </div>
          <p className="text-gray-400 mb-6 text-sm">
            Sign in to manage website quote pricing. Demo credentials: admin@kypextech.co.za / admin123.
          </p>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                placeholder="admin@kypextech.co.za"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                placeholder="••••••••"
              />
            </div>
            {loginError && <p className="text-sm text-red-400">{loginError}</p>}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2"
            >
              <LogIn className="w-5 h-5" />
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark pt-20">
      <section className="relative py-16 bg-gradient-to-r from-navy via-navy-light to-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-10 top-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute right-10 bottom-10 w-80 h-80 bg-blue/30 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs uppercase tracking-wide">
                Site Admin
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mt-3">Quote Pricing Console</h1>
              <p className="text-gray-300 mt-2 max-w-2xl">
                Edit website quote packages and add-ons per country. Push updates to Supabase; the public site will fetch from there.
              </p>
            </div>
            <button
              onClick={() => {
                setIsAuthed(false);
                setEmail('');
                setPassword('');
              }}
              className="flex items-center gap-2 px-4 py-2 border border-primary/30 text-primary rounded-xl hover:bg-primary/10 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <StatCard label="Countries" value={totals.countries} accent="text-primary" />
            <StatCard label="Packages" value={totals.pkgCount} accent="text-emerald-300" />
            <StatCard label="Add-ons" value={totals.addonCount} accent="text-amber-300" />
          </div>

          <div className="flex flex-wrap gap-3">
            <ActionButton icon={Save} label="Save locally" onClick={() => setSyncMessage('Draft saved in memory. Push to Supabase to persist.')} variant="ghost" />
            <ActionButton icon={CloudUpload} label="Push to Supabase" onClick={pushToSupabase} variant="solid" />
            <ActionButton icon={RefreshCw} label="Pull latest" onClick={pullFromSupabase} variant="ghost" />
            <ActionButton icon={Edit3} label="Reset to defaults" onClick={resetDrafts} variant="ghost" />
          </div>

          {syncState !== 'idle' && (
            <div
              className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm ${
                syncState === 'error'
                  ? 'bg-red-500/10 border border-red-500/30 text-red-200'
                  : 'bg-primary/10 border border-primary/20 text-primary'
              }`}
            >
              {syncState === 'error' ? <AlertTriangle className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
              <span>{syncMessage}</span>
            </div>
          )}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Country Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-navy-light/40 border border-primary/10 rounded-2xl"
        >
          <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-white">Country</h2>
            </div>
            <select
              value={selected.code}
              onChange={(e) => setSelectedCode(e.target.value)}
              className="px-4 py-2 bg-navy border border-primary/20 rounded-lg text-white"
            >
              {configs.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.name} ({c.currency})
                </option>
              ))}
            </select>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Coins className="w-4 h-4 text-primary" />
              <span>Currency: {selected.currencySymbol} ({selected.currency})</span>
            </div>
            <div>WhatsApp: {selected.whatsappNumber}</div>
            <div className="flex items-center gap-2 text-gray-400 text-xs">
              <Info className="w-4 h-4" />
              <span>These configs feed the Quote Calculator flows.</span>
            </div>
          </div>
        </motion.div>

        {/* Packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-navy-light/30 border border-primary/10 rounded-2xl space-y-4"
        >
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Edit3 className="w-5 h-5 text-primary" />
              Packages ({selected.packages.length})
            </h3>
            <button
              onClick={addPackage}
              className="inline-flex items-center gap-2 px-3 py-2 bg-primary text-navy text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30"
            >
              <Plus className="w-4 h-4" />
              Add Package
            </button>
          </div>

          <div className="space-y-4">
            {selected.packages.map((pkg) => (
              <div key={pkg.id} className="p-4 bg-navy border border-primary/15 rounded-xl">
                <div className="flex items-center justify-between gap-3 flex-wrap mb-3">
                  <input
                    value={pkg.name}
                    onChange={(e) => updatePackage(pkg.id, { name: e.target.value })}
                    className="flex-1 px-3 py-2 bg-navy-light border border-primary/20 rounded-lg text-white"
                  />
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    ID: {pkg.id}
                    <button
                      onClick={() => removePackage(pkg.id)}
                      className="px-2 py-1 text-red-300 bg-red-500/10 rounded-lg hover:bg-red-500/20"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-3">
                  <NumberField
                    label="Min pages"
                    value={pkg.minPages}
                    onChange={(v) => updatePackage(pkg.id, { minPages: v })}
                  />
                  <NumberField
                    label="Max pages"
                    value={pkg.maxPages}
                    onChange={(v) => updatePackage(pkg.id, { maxPages: v })}
                  />
                  <NumberField
                    label="Base price"
                    value={pkg.basePrice}
                    onChange={(v) => updatePackage(pkg.id, { basePrice: v })}
                    prefix={selected.currencySymbol}
                  />
                  <TextField
                    label="Feature list (comma separated)"
                    value={pkg.features.join(', ')}
                    onChange={(v) =>
                      updatePackage(pkg.id, {
                        features: v
                          .split(',')
                          .map((f) => f.trim())
                          .filter(Boolean),
                      })
                    }
                  />
                </div>
              </div>
            ))}

            {selected.packages.length === 0 && (
              <div className="text-center text-gray-400 py-6 text-sm">
                No packages for this country yet. Add one to start.
              </div>
            )}
          </div>
        </motion.div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-navy-light/30 border border-primary/10 rounded-2xl space-y-4"
        >
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Plus className="w-5 h-5 text-primary" />
              Add-ons ({selected.addOns.length})
            </h3>
            <button
              onClick={addAddOn}
              className="inline-flex items-center gap-2 px-3 py-2 bg-primary text-navy text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30"
            >
              <Plus className="w-4 h-4" />
              Add Add-on
            </button>
          </div>

          <div className="space-y-4">
            {selected.addOns.map((addon) => (
              <div key={addon.id} className="p-4 bg-navy border border-primary/15 rounded-xl">
                <div className="flex items-center justify-between gap-3 flex-wrap mb-3">
                  <input
                    value={addon.name}
                    onChange={(e) => updateAddOn(addon.id, { name: e.target.value })}
                    className="flex-1 px-3 py-2 bg-navy-light border border-primary/20 rounded-lg text-white"
                  />
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    ID: {addon.id}
                    <button
                      onClick={() => removeAddOn(addon.id)}
                      className="px-2 py-1 text-red-300 bg-red-500/10 rounded-lg hover:bg-red-500/20"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-3">
                  <NumberField
                    label="Price"
                    value={addon.price}
                    onChange={(v) => updateAddOn(addon.id, { price: v })}
                    prefix={selected.currencySymbol}
                  />
                  <TextField
                    label="Description"
                    value={addon.description}
                    onChange={(v) => updateAddOn(addon.id, { description: v })}
                  />
                  <div className="text-xs text-gray-500 flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    Appears under add-ons in the Quote Calculator.
                  </div>
                </div>
              </div>
            ))}

            {selected.addOns.length === 0 && (
              <div className="text-center text-gray-400 py-6 text-sm">
                No add-ons for this country yet. Add one to start.
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function StatCard({ label, value, accent }: { label: string; value: string | number; accent: string }) {
  return (
    <div className="p-4 bg-navy/60 border border-primary/10 rounded-2xl">
      <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
      <p className={`text-2xl font-semibold ${accent}`}>{value}</p>
    </div>
  );
}

function ActionButton({
  icon: Icon,
  label,
  onClick,
  variant = 'solid',
}: {
  icon: typeof Save;
  label: string;
  onClick: () => void;
  variant?: 'solid' | 'ghost';
}) {
  const base = 'inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-all';
  const styles =
    variant === 'solid'
      ? 'bg-primary text-navy font-semibold hover:shadow-lg hover:shadow-primary/30'
      : 'border border-primary/30 text-primary hover:bg-primary/10';
  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      <Icon className="w-4 h-4" />
      {label}
    </button>
  );
}

function NumberField({
  label,
  value,
  onChange,
  prefix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
}) {
  return (
    <label className="block text-sm text-gray-400 space-y-1">
      <span>{label}</span>
      <div className="flex items-center gap-2">
        {prefix && <span className="text-gray-500">{prefix}</span>}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full px-3 py-2 bg-navy-light border border-primary/20 rounded-lg text-white"
        />
      </div>
    </label>
  );
}

function TextField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block text-sm text-gray-400 space-y-1">
      <span>{label}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 bg-navy-light border border-primary/20 rounded-lg text-white"
      />
    </label>
  );
}
