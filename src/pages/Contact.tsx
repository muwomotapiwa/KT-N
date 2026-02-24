import { useState, BaseSyntheticEvent, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Clock, Send, ShieldCheck, AlertTriangle, Zap, MessageSquare, Globe } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { ContactBackground } from '../components/ContactBackground';

interface FormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  engagementType: string;
  focus: string;
  industry?: string;
  companySize?: string;
  aiInterest?: string;
  budget?: string;
  timeline?: string;
  objectives: string;
}

const quickStartPoints = [
  'Build a website or app',
  'Implement cloud infrastructure',
  'Launch an MVP',
  'Improve analytics or automation',
  'Strengthen security posture',
];

const enterprisePoints = [
  'Leading AI adoption initiatives',
  'Modernizing enterprise infrastructure',
  'Designing multi-cloud architecture',
  'Strengthening cybersecurity and compliance',
  'Building internal AI capability',
];

const responseBullets = [
  'All inquiries reviewed by our solutions team',
  'Standard response within 24 business hours',
  'Enterprise and security escalation within 4 business hours',
];

const inputClass =
  'w-full px-4 py-3 rounded-lg bg-navy-light border border-primary/20 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();
  const { register, handleSubmit, setValue } = useForm<FormData>();
  const redirectUrl = typeof window !== 'undefined' ? `${window.location.origin}/thank-you` : '/thank-you';

  const onSubmit = (_data: FormData, event?: BaseSyntheticEvent) => {
    setIsSubmitting(true);
    const formElement = event?.target as HTMLFormElement | null;
    if (formElement) {
      formElement.submit();
    } else {
      setIsSubmitting(false);
    }
  };

  // Prefill form from query params (e.g., engagement, focus) to reduce typing
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const engagement = params.get('engagement');
    const focus = params.get('focus');
    const objectives = params.get('objectives');
    if (engagement) setValue('engagementType', engagement);
    if (focus) setValue('focus', focus);
    if (objectives) setValue('objectives', objectives);
  }, [location.search, setValue]);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
        <ContactBackground />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Let's Architect What's Next</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-white mb-6">
              Start a Strategic Conversation
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Engage our AI, Cloud, Security, and Data experts to design technology that scales with your ambition. Choose your path or submit a strategic brief.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <LinkButton to="/consultation" label="Book Strategy Session" variant="primary" />
              <LinkButton to="#brief" label="Submit Strategic Brief" variant="outline" />
              <a
                href="https://wa.me/27715731602"
                className="flex items-center gap-2 px-4 py-3 rounded-lg bg-green-500/15 text-green-400 border border-green-500/30 hover:border-green-400 transition-colors text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Paths */}
      <section className="py-16 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <PathCard
              title="Quick Start - For Growing Businesses & Startups"
              subtitle="Move fast. Launch smart. Scale confidently."
              bullets={quickStartPoints}
              primaryLabel="Start Your Project Brief"
              primaryHref="#brief"
              secondaryLabel="Book 30-Min Strategy Call"
              secondaryHref="/consultation?service=consulting&source=quick-start"
              icon={<Zap className="w-5 h-5 text-primary" />}
              preset={{ engagement: 'Quick Start (SMB / Startup)', focus: 'Custom Development', objectives: 'Launch MVP / modernize quickly' }}
            />
            <PathCard
              title="Enterprise Advisory - For CIOs, CTOs & Transformation Leaders"
              subtitle="Strategic alignment for organizations operating at scale."
              bullets={enterprisePoints}
              primaryLabel="Book Executive Strategy Session"
              primaryHref="/consultation?service=ai&source=enterprise"
              secondaryLabel="Priority Response: 4 Business Hours"
              secondaryHref="/contact?engagement=Enterprise Advisory&focus=AI Strategy & Implementation&objectives=Enterprise transformation#brief"
              icon={<ShieldCheck className="w-5 h-5 text-primary" />}
              preset={{ engagement: 'Enterprise Advisory', focus: 'AI Strategy & Implementation', objectives: 'Enterprise transformation / compliance' }}
            />
          </div>
        </div>
      </section>

      {/* AI-first intake */}
      <section className="py-12 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">AI-First Strategic Intake</h2>
          <p className="text-gray-300">
            Every engagement begins with an AI-aware review of your model, data maturity, and automation opportunities. Help us prepare with the brief below.
          </p>
        </div>
      </section>

      {/* Form */}
      <section id="brief" className="py-20 bg-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <input type="hidden" name="access_key" value="af31cdca-fdb5-4fd7-81bd-762838f8e47f" />
              <input type="hidden" name="redirect" value={redirectUrl} />
              <input type="hidden" name="subject" value="Strategic Brief Submission" />
              <input type="hidden" name="form_name" value="Strategic Brief" />

              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Full Name*" required>
                  <input {...register('fullName', { required: true })} name="fullName" required className={inputClass} placeholder="Your name" />
                </Field>
                <Field label="Company Name*" required>
                  <input {...register('company', { required: true })} name="company" required className={inputClass} placeholder="Company or team" />
                </Field>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Email Address*" required>
                  <input {...register('email', { required: true })} type="email" name="email" required className={inputClass} placeholder="name@company.com" />
                </Field>
                <Field label="Phone Number*" required>
                  <input
                    {...register('phone', { required: true })}
                    type="tel"
                    name="phone"
                    required
                    className={inputClass}
                    placeholder="+1 555 123 4567"
                  />
                </Field>
                <Field label="Engagement Type*" required>
                  <select {...register('engagementType', { required: true })} name="engagementType" required className={inputClass}>
                    <option value="">Select</option>
                    <option>Quick Start (SMB / Startup)</option>
                    <option>Enterprise Advisory</option>
                  </select>
                </Field>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Primary Focus Area*" required>
                  <select {...register('focus', { required: true })} name="focus" required className={inputClass}>
                    <option value="">Select</option>
                    <option>AI Strategy & Implementation</option>
                    <option>Cybersecurity & Compliance</option>
                    <option>Cloud Architecture & Migration</option>
                    <option>Data & Analytics</option>
                    <option>Custom Development</option>
                    <option>IT Consulting</option>
                  </select>
                </Field>
                <Field label="Industry">
                  <input {...register('industry')} name="industry" className={inputClass} placeholder="e.g., FinTech, Healthcare" />
                </Field>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Company Size">
                  <select {...register('companySize')} name="companySize" className={inputClass}>
                    <option value="">Select</option>
                    <option>1-10</option>
                    <option>11-50</option>
                    <option>51-200</option>
                    <option>200-1000</option>
                    <option>1000+</option>
                  </select>
                </Field>
                <Field label="AI & Automation Interest Level">
                  <select {...register('aiInterest')} name="aiInterest" className={inputClass}>
                    <option value="">Select</option>
                    <option>Exploring AI opportunities</option>
                    <option>Actively planning implementation</option>
                    <option>Scaling existing AI systems</option>
                    <option>No AI yet, but interested</option>
                  </select>
                </Field>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Estimated Budget Range">
                  <select {...register('budget')} name="budget" className={inputClass}>
                    <option value="">Select</option>
                    <option>Under $10K</option>
                    <option>$10K-$50K</option>
                    <option>$50K-$150K</option>
                    <option>$150K+</option>
                  </select>
                </Field>
                <Field label="Target Timeline">
                  <select {...register('timeline')} name="timeline" className={inputClass}>
                    <option value="">Select</option>
                    <option>Immediate (0-3 months)</option>
                    <option>Short-Term (3-6 months)</option>
                    <option>Strategic Initiative (6+ months)</option>
                  </select>
                </Field>
              </div>

              <Field label="Describe Your Objectives*" required>
                <textarea
                  {...register('objectives', { required: true })}
                  name="objectives"
                  required
                  className={`${inputClass} min-h-[140px]`}
                  placeholder="What are you solving? Target outcomes? Constraints?"
                />
              </Field>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Submitting...' : 'Submit Strategic Brief'}
              </button>
            </motion.form>

            {/* Side panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="p-6 rounded-2xl bg-navy-light/60 border border-primary/15">
                <h3 className="text-xl font-semibold text-white mb-2">Response Commitment</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {responseBullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-primary mt-0.5">*</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-navy-light/60 border border-primary/15">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold text-white">Enterprise Fast Track</h3>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  Priority routing for cybersecurity incidents and executive transformation needs. Expect initial response within 4 business hours.
                </p>
                <a
                  href="#brief"
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:text-primary/80"
                >
                  Flag as Enterprise Priority
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-navy-light/60 border border-primary/15">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold text-white">Secure & Confidential</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  All submissions are encrypted and handled in accordance with POPIA and GDPR best practices.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-navy-light/60 border border-primary/15">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold text-white">Global - Remote-First - Cloud-Native</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Distributed engineering and advisory teams collaborating securely across regions to deliver enterprise-grade outcomes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block space-y-2">
      <span className="text-sm text-gray-300">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      {children}
    </label>
  );
}

function LinkButton({ to, label, variant }: { to: string; label: string; variant: 'primary' | 'outline' }) {
  const classes =
    variant === 'primary'
      ? 'bg-gradient-to-r from-primary to-primary-dark text-navy'
      : 'border border-primary/50 text-primary hover:bg-primary/10';
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-primary/20 ${classes}`}
    >
      {label}
    </Link>
  );
}

function PathCard({
  title,
  subtitle,
  bullets,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  icon,
  preset,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  icon: React.ReactNode;
  preset: { engagement: string; focus?: string; objectives?: string };
}) {
  const contactPreset = `?engagement=${encodeURIComponent(preset.engagement)}${
    preset.focus ? `&focus=${encodeURIComponent(preset.focus)}` : ''
  }${preset.objectives ? `&objectives=${encodeURIComponent(preset.objectives)}` : ''}`;

  const primaryLink =
    primaryHref.startsWith('/')
      ? primaryHref
      : { pathname: '/contact', search: contactPreset, hash: primaryHref };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-6 rounded-2xl bg-navy-light/60 border border-primary/15 space-y-4"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-gray-300 text-sm">{subtitle}</p>
        </div>
      </div>
      <ul className="space-y-2 text-gray-300 text-sm">
        {bullets.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-primary mt-0.5">*</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          to={primaryLink}
          className="flex-1 text-center px-4 py-3 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all"
        >
          {primaryLabel}
        </Link>
        <Link
          to={secondaryHref}
          className="flex-1 text-center px-4 py-3 border border-primary/40 text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all"
        >
          {secondaryLabel}
        </Link>
      </div>
    </motion.div>
  );
}
