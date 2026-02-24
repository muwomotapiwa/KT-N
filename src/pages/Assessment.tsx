import { useState, BaseSyntheticEvent } from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Lock, Eye, Server } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  assessmentType: string;
  notes: string;
}

const reasons = [
  { icon: AlertTriangle, title: 'Identify Vulnerabilities', description: 'Discover security weaknesses before hackers do.' },
  { icon: Lock, title: 'Protect Your Data', description: 'Ensure sensitive information remains secure.' },
  { icon: Eye, title: 'Maintain Compliance', description: 'Meet industry regulations and standards.' },
  { icon: Server, title: 'Secure Infrastructure', description: 'Protect your networks and systems.' },
];

const steps = [
  { step: 1, title: 'Initial Consultation', description: 'Understand your security needs and concerns.' },
  { step: 2, title: 'Comprehensive Scan', description: 'Thorough analysis of your systems and networks.' },
  { step: 3, title: 'Vulnerability Report', description: 'Detailed findings with risk assessments.' },
  { step: 4, title: 'Remediation Plan', description: 'Actionable recommendations for improvement.' },
];

export function Assessment() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
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

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
              <Shield className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-sm font-medium">Free Security Assessment</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-white mb-6">
              Protect Your Business from <span className="text-primary">Cyber Threats</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Get a comprehensive security assessment to identify vulnerabilities and strengthen your defenses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Assessments Matter */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Why Security Assessments <span className="text-primary">Matter</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-navy-light/50 border border-primary/10 rounded-2xl"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-400">{reason.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary/30 mb-2">{step.step}</div>
                <h4 className="text-white font-semibold mb-1">{step.title}</h4>
                <p className="text-sm text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-navy">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            action="https://api.web3forms.com/submit"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
            className="p-8 bg-navy-light/50 border border-primary/10 rounded-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Request Your Free Assessment</h2>
            <input type="hidden" name="access_key" value="af31cdca-fdb5-4fd7-81bd-762838f8e47f" />
            <input type="hidden" name="subject" value="Security Assessment Request" />
            <input type="hidden" name="form_name" value="Assessment Form" />
            <input type="hidden" name="redirect" value={redirectUrl} />
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    {...register('email', { required: 'Email is required' })}
                    className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@company.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone *</label>
                  <input
                    type="tel"
                    {...register('phone', { required: 'Phone is required' })}
                    className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="+1 555 123 4567"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Company Name *</label>
                <input
                  {...register('company', { required: 'Company is required' })}
                  className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your Company"
                />
                {errors.company && <p className="mt-1 text-sm text-red-400">{errors.company.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Industry</label>
                  <select
                    {...register('industry')}
                    className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select industry</option>
                    <option value="finance">Finance & Banking</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="retail">Retail & E-commerce</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="technology">Technology</option>
                    <option value="government">Government</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Assessment Type</label>
                  <select
                    {...register('assessmentType')}
                    className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select type</option>
                    <option value="vulnerability">Vulnerability Assessment</option>
                    <option value="penetration">Penetration Testing</option>
                    <option value="compliance">Compliance Audit</option>
                    <option value="comprehensive">Comprehensive Assessment</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Additional Notes</label>
                <textarea
                  {...register('notes')}
                  rows={4}
                  className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Any specific concerns or areas you'd like us to focus on..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-navy border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Request Free Assessment
                    <Shield className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
