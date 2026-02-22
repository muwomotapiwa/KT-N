import { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calculator, Package, Plus, Minus, Check, MessageCircle, Download, Mail, ArrowLeft } from 'lucide-react';
import { countryConfigs as seedConfigs, type CountryConfig } from '../data/quotes';
import { supabase } from '../utils/supabaseClient';

const QUOTE_PACKAGE_KEY = 'kypex_selected_package';

export function QuoteCalculator() {
  const { country } = useParams<{ country: string }>();
  const [configs, setConfigs] = useState<CountryConfig[]>(seedConfigs);
  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState('');
  const config = configs.find(c => c.code.toLowerCase() === country?.toLowerCase()) 
    || configs.find(c => c.code === 'INTL');

  const initialPackageId = (() => {
    const fallback = config?.packages[0]?.id || 'starter';
    if (typeof window === 'undefined') return fallback;
    const stored = sessionStorage.getItem(QUOTE_PACKAGE_KEY);
    if (stored && config?.packages.some(p => p.id.toLowerCase() === stored.toLowerCase())) {
      return stored.toLowerCase();
    }
    return fallback;
  })();

  const initialPageCount = (() => {
    const pkg = config?.packages.find(p => p.id.toLowerCase() === initialPackageId.toLowerCase());
    return pkg?.minPages ?? 1;
  })();

  const [selectedPackage, setSelectedPackage] = useState(initialPackageId);
  const [pageCount, setPageCount] = useState(initialPageCount);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', whatsapp: '' });
  const [showContactForm, setShowContactForm] = useState(false);

  // Load live pricing from Supabase; fall back to seeded data if unavailable.
  useEffect(() => {
    const fetchPricing = async () => {
      if (!supabase) return;
      try {
        setIsLoading(true);
        setLoadError('');

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

        if (cErr || pErr || aErr) throw cErr || pErr || aErr;
        if (!countryRows?.length) return;

        const next: CountryConfig[] = countryRows.map((c) => ({
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

        setConfigs(next);
      } catch (err: any) {
        setLoadError(err.message || 'Could not load live pricing; showing defaults.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPricing();
  }, []);

  const currentPackage = config?.packages.find(p => p.id === selectedPackage);

  // Reset selections when a different country config is active
  useEffect(() => {
    if (!config?.packages?.length) return;
    const stored = typeof window !== 'undefined' ? sessionStorage.getItem(QUOTE_PACKAGE_KEY) : null;
    const candidateIds = [
      stored?.toLowerCase(),
      selectedPackage?.toLowerCase(),
      config.packages[0].id.toLowerCase(),
    ].filter(Boolean) as string[];

    const nextId = candidateIds.find(id => config.packages.some(p => p.id.toLowerCase() === id));
    const pkg = config.packages.find(p => p.id.toLowerCase() === (nextId || ''));

    if (nextId && pkg) {
      setSelectedPackage(pkg.id);
      setPageCount(pkg.minPages);
    } else {
      setSelectedPackage(config.packages[0].id);
      setPageCount(config.packages[0].minPages);
    }
    setSelectedAddOns([]);
  // we intentionally omit selectedPackage from deps to avoid infinite loop
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config?.code, config?.packages]);

  const total = useMemo(() => {
    if (!config || !currentPackage) return 0;
    let sum = currentPackage.basePrice;
    
    // Add cost for extra pages
    const extraPages = Math.max(0, pageCount - currentPackage.minPages);
    const extraPageCost = config.addOns.find(a => a.id === 'extra-pages')?.price || 0;
    sum += extraPages * extraPageCost;
    
    // Add selected add-ons
    selectedAddOns.forEach(addOnId => {
      const addOn = config.addOns.find(a => a.id === addOnId);
      if (addOn && addOnId !== 'extra-pages') {
        sum += addOn.price;
      }
    });
    
    return sum;
  }, [config, currentPackage, pageCount, selectedAddOns]);

  if (!config) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-navy">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Country not found</h1>
          <Link to="/services/website-development" className="text-primary hover:underline">
            Go back to Website Development
          </Link>
        </div>
      </div>
    );
  }

  const handlePackageChange = (packageId: string) => {
    setSelectedPackage(packageId);
    const pkg = config.packages.find(p => p.id === packageId);
    if (pkg) {
      setPageCount(pkg.minPages);
    }
  };

  const toggleAddOn = (addOnId: string) => {
    setSelectedAddOns(prev => 
      prev.includes(addOnId) 
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  const generateWhatsAppMessage = () => {
    const message = `Hi! I'd like to get a website quote:\n\nPackage: ${currentPackage?.name}\nPages: ${pageCount}\nAdd-ons: ${selectedAddOns.length > 0 ? selectedAddOns.map(id => config.addOns.find(a => a.id === id)?.name).join(', ') : 'None'}\n\nTotal: ${config.currencySymbol}${total.toLocaleString()}\n\nName: ${contactInfo.name}\nEmail: ${contactInfo.email}`;
    return encodeURIComponent(message);
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-navy via-navy-light to-navy">
      {/* Header */}
      <section className="py-12 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services/website-development"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Website Development
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
              <Calculator className="w-7 h-7 text-navy" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">
                Website Quote Calculator
              </h1>
              <p className="text-gray-400">
                {config.name} • Prices in {config.currency}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Indicative pricing only – we confirm a tailored quote after a quick consult.
              </p>
            </div>
          </motion.div>

          {loadError && (
            <div className="mt-4 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-sm">
              {loadError}
            </div>
          )}
          {isLoading && (
            <div className="mt-4 px-4 py-3 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm">
              Loading live pricing from Supabase...
            </div>
          )}
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Package Selection */}
            <div className="lg:col-span-2 space-y-8">
              {/* Packages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 bg-navy-light/50 border border-primary/10 rounded-2xl"
              >
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  Select Package
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {config.packages.map((pkg) => (
                    <button
                      key={pkg.id}
                      onClick={() => handlePackageChange(pkg.id)}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        selectedPackage === pkg.id
                          ? 'border-primary bg-primary/10'
                          : 'border-primary/20 hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-white">{pkg.name}</span>
                        {selectedPackage === pkg.id && (
                          <Check className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      <div className="text-2xl font-bold text-primary mb-2">
                        {config.currencySymbol}{pkg.basePrice.toLocaleString()}
                      </div>
                      <ul className="space-y-1">
                        {pkg.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Page Count */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="p-6 bg-navy-light/50 border border-primary/10 rounded-2xl"
              >
                <h2 className="text-xl font-semibold text-white mb-6">Number of Pages</h2>
                <div className="flex items-center justify-center gap-6">
                  <button
                    onClick={() => setPageCount(Math.max(currentPackage?.minPages || 1, pageCount - 1))}
                    className="w-12 h-12 rounded-xl bg-navy border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-white mb-1">{pageCount}</div>
                    <div className="text-sm text-gray-400">pages</div>
                  </div>
                  <button
                    onClick={() => setPageCount(Math.min(currentPackage?.maxPages || 20, pageCount + 1))}
                    className="w-12 h-12 rounded-xl bg-navy border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <div className="mt-4">
                  <input
                    type="range"
                    min={currentPackage?.minPages || 1}
                    max={currentPackage?.maxPages || 20}
                    value={pageCount}
                    onChange={(e) => setPageCount(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>{currentPackage?.minPages} pages</span>
                    <span>{currentPackage?.maxPages} pages</span>
                  </div>
                </div>
              </motion.div>

              {/* Add-ons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-6 bg-navy-light/50 border border-primary/10 rounded-2xl"
              >
                <h2 className="text-xl font-semibold text-white mb-6">Optional Add-ons</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {config.addOns.filter(a => a.id !== 'extra-pages').map((addOn) => (
                    <button
                      key={addOn.id}
                      onClick={() => toggleAddOn(addOn.id)}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        selectedAddOns.includes(addOn.id)
                          ? 'border-primary bg-primary/10'
                          : 'border-primary/20 hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-white">{addOn.name}</span>
                        <span className="text-primary font-semibold">
                          +{config.currencySymbol}{addOn.price.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">{addOn.description}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quote Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="sticky top-24 p-6 bg-navy-light border border-primary/20 rounded-2xl"
              >
                <h2 className="text-xl font-semibold text-white mb-6">Quote Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Package</span>
                    <span className="text-white font-medium">{currentPackage?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Base Price</span>
                    <span className="text-white">{config.currencySymbol}{currentPackage?.basePrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Pages</span>
                    <span className="text-white">{pageCount}</span>
                  </div>
                  {selectedAddOns.length > 0 && (
                    <div className="pt-4 border-t border-primary/10">
                      <span className="text-gray-400 text-sm">Add-ons:</span>
                      {selectedAddOns.map(id => {
                        const addOn = config.addOns.find(a => a.id === id);
                        return addOn ? (
                          <div key={id} className="flex justify-between mt-2">
                            <span className="text-gray-300 text-sm">{addOn.name}</span>
                            <span className="text-white text-sm">+{config.currencySymbol}{addOn.price.toLocaleString()}</span>
                          </div>
                        ) : null;
                      })}
                    </div>
                  )}
                </div>

                <div className="p-4 bg-navy rounded-xl mb-6">
                  <div className="text-sm text-gray-400 mb-1">Total Estimate</div>
                  <div className="text-3xl font-bold text-primary">
                    {config.currencySymbol}{total.toLocaleString()}
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    This is an indicative estimate. We finalize after discussing your requirements.
                  </p>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="w-full py-3 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Get This Quote
                  </button>
                  <a
                    href={`https://wa.me/${config.whatsappNumber}?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Send via WhatsApp
                  </a>
                  <button className="w-full py-3 border border-primary/50 text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" />
                    Download PDF
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setShowContactForm(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-navy-light border border-primary/20 rounded-2xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get Your Quote</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                  className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                  className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">WhatsApp</label>
                <input
                  type="tel"
                  value={contactInfo.whatsapp}
                  onChange={(e) => setContactInfo({ ...contactInfo, whatsapp: e.target.value })}
                  className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                  placeholder="+263 77 123 4567"
                />
              </div>
              <button
                onClick={() => setShowContactForm(false)}
                className="w-full py-3 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                Submit Quote Request
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
