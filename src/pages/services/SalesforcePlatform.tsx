import { useState } from 'react';
import type { BaseSyntheticEvent, ReactNode } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Cloud, Send, ShieldCheck, Sparkles } from 'lucide-react';
import { useForm } from 'react-hook-form';
import {
  getSalesforcePlatform,
  getSalesforcePlatformPath,
  salesforcePlatforms,
  salesforcePlatformBasePath,
} from '../../data/salesforcePlatforms';

interface SalesforceInquiryForm {
  fullName: string;
  company: string;
  email: string;
  phone?: string;
  requirements: string[];
  timeline?: string;
  message: string;
}

const inputClass =
  'w-full px-4 py-3 rounded-lg bg-navy border border-primary/20 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors';

export function SalesforcePlatformPage() {
  const { platformSlug } = useParams();
  const platform = getSalesforcePlatform(platformSlug);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SalesforceInquiryForm>();
  const redirectUrl = typeof window !== 'undefined' ? `${window.location.origin}/thank-you` : '/thank-you';

  if (!platform) {
    return <Navigate to={salesforcePlatformBasePath} replace />;
  }

  const onSubmit = (_data: SalesforceInquiryForm, event?: BaseSyntheticEvent) => {
    setIsSubmitting(true);
    const formElement = event?.target as HTMLFormElement | null;
    if (formElement) {
      formElement.submit();
    } else {
      setIsSubmitting(false);
    }
  };

  const relatedPlatforms = salesforcePlatforms.filter((item) => item.slug !== platform.slug);

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to={salesforcePlatformBasePath}
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Cloud CRM
          </Link>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <Cloud className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">Salesforce Platform</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-white mb-6">
                {platform.name}
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl">{platform.heroDescription}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="#platform-form"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all"
                >
                  Specify Requirements
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/consultation?service=cloud"
                  className="inline-flex items-center justify-center px-8 py-4 border border-primary/50 text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all"
                >
                  Book Consultation
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/10 blur-3xl" />
              <div className="relative p-8 rounded-2xl border border-primary/20 bg-navy-light/50">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-8 shadow-xl shadow-blue-500/20">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-5">What We Configure</h2>
                <div className="space-y-4">
                  {platform.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-gray-200">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Implementation Details</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4">
              {platform.name} <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore the areas we can scope, configure, integrate, and support for your Salesforce environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {platform.sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="p-6 bg-navy-light/50 border border-primary/10 rounded-2xl"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{section.title}</h3>
                <p className="text-gray-400 mb-5">{section.description}</p>
                <ul className="space-y-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="platform-form" className="py-24 bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <Send className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">Platform Request</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-5">
                Tell Us What You Need From <span className="text-primary">{platform.name}</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Select the areas you want to discuss and share a few details. We will route the request with the selected Salesforce platform already attached.
              </p>
              <div className="space-y-3">
                {platform.requestOptions.slice(0, 5).map((option) => (
                  <div key={option} className="flex items-center gap-3 text-gray-300">
                    <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    {option}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={handleSubmit(onSubmit)}
              className="p-6 sm:p-8 bg-dark/80 border border-primary/15 rounded-2xl"
            >
              <input type="hidden" name="access_key" value="af31cdca-fdb5-4fd7-81bd-762838f8e47f" />
              <input type="hidden" name="subject" value={`Salesforce ${platform.name} Request`} />
              <input type="hidden" name="form_name" value="Salesforce Platform Request" />
              <input type="hidden" name="redirect" value={redirectUrl} />
              <input type="hidden" name="salesforce_platform" value={platform.name} />

              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Full Name*" error={errors.fullName?.message}>
                  <input
                    {...register('fullName', { required: 'Full name is required' })}
                    name="fullName"
                    className={inputClass}
                    placeholder="Your name"
                  />
                </Field>
                <Field label="Company*" error={errors.company?.message}>
                  <input
                    {...register('company', { required: 'Company is required' })}
                    name="company"
                    className={inputClass}
                    placeholder="Company or team"
                  />
                </Field>
              </div>

              <div className="grid md:grid-cols-2 gap-5 mt-5">
                <Field label="Email*" error={errors.email?.message}>
                  <input
                    {...register('email', { required: 'Email is required' })}
                    type="email"
                    name="email"
                    className={inputClass}
                    placeholder="name@company.com"
                  />
                </Field>
                <Field label="Phone">
                  <input
                    {...register('phone')}
                    type="tel"
                    name="phone"
                    className={inputClass}
                    placeholder="+1 555 123 4567"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <span className="block text-sm font-medium text-gray-300 mb-2">What do you want help with?*</span>
                <div className="grid sm:grid-cols-2 gap-3">
                  {platform.requestOptions.map((option) => (
                    <label
                      key={option}
                      className="flex items-start gap-3 p-3 rounded-lg bg-navy-light/40 border border-primary/10 text-sm text-gray-300 cursor-pointer hover:border-primary/40 transition-colors"
                    >
                      <input
                        type="checkbox"
                        value={option}
                        {...register('requirements', { required: 'Select at least one option' })}
                        name="requirements"
                        className="mt-1 accent-primary"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
                {errors.requirements?.message && (
                  <span className="block mt-1 text-sm text-red-400">{errors.requirements.message}</span>
                )}
              </div>

              <div className="mt-5">
                <Field label="Timeline">
                  <select {...register('timeline')} name="timeline" className={inputClass}>
                    <option value="">Select a timeline</option>
                    <option>Immediate: 0-3 months</option>
                    <option>Planning: 3-6 months</option>
                    <option>Strategic roadmap: 6+ months</option>
                    <option>Not sure yet</option>
                  </select>
                </Field>
              </div>

              <Field label="Project Details*" error={errors.message?.message} className="mt-5">
                <textarea
                  {...register('message', { required: 'Tell us a little about your goals' })}
                  name="message"
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell us about your current Salesforce setup, goals, users, integrations, or campaign needs."
                />
              </Field>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : `Submit ${platform.name} Request`}
                <Send className="w-5 h-5" />
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-bold font-display text-white mb-3">Other Salesforce Platforms</h2>
              <p className="text-gray-400 max-w-2xl">
                Move between Salesforce platform pages to compare scope and select the right mix for your implementation.
              </p>
            </div>
            <Link to={salesforcePlatformBasePath} className="text-primary font-semibold hover:text-primary/80">
              View overview
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedPlatforms.map((item) => (
              <Link
                key={item.slug}
                to={getSalesforcePlatformPath(item.slug)}
                className="group p-5 bg-navy-light/50 border border-primary/10 rounded-xl hover:border-primary/50 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Cloud className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 group-hover:text-primary transition-colors">{item.name}</h3>
                    <p className="text-sm text-gray-400">{item.shortDescription}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  error,
  className = '',
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-sm font-medium text-gray-300 mb-2">{label}</span>
      {children}
      {error && <span className="block mt-1 text-sm text-red-400">{error}</span>}
    </label>
  );
}
