import { useState, BaseSyntheticEvent } from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface FormData {
  projectName: string;
  company: string;
  projectType: string;
  description: string;
  budget: string;
  deadline: string;
  priority: string;
  contactName: string;
  email: string;
  phone: string;
}

export function ProjectStart() {
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
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Start a Project</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-white mb-6">
              Let's Build Something <span className="text-primary">Amazing</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Tell us about your project and we'll help you bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            action="https://api.web3forms.com/submit"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
            className="p-8 bg-navy-light/50 border border-primary/10 rounded-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Project Brief</h2>
            <input type="hidden" name="access_key" value="af31cdca-fdb5-4fd7-81bd-762838f8e47f" />
            <input type="hidden" name="subject" value="Project Start Request" />
            <input type="hidden" name="form_name" value="Project Start Form" />
            <input type="hidden" name="redirect" value={redirectUrl} />
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Project Name *</label>
                  <input
                    {...register('projectName', { required: 'Project name is required' })}
                    className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="My Awesome Project"
                  />
                  {errors.projectName && <p className="mt-1 text-sm text-red-400">{errors.projectName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                  <input
                    {...register('company')}
                    className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Project Type *</label>
                <select
                  {...register('projectType', { required: 'Please select a project type' })}
                  className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Select project type</option>
                  <option value="website">Website Development</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="cloud">Cloud Migration</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="consulting">IT Consulting</option>
                  <option value="data">Data Analytics</option>
                  <option value="ai">AI Solutions</option>
                </select>
                {errors.projectType && <p className="mt-1 text-sm text-red-400">{errors.projectType.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Project Description *</label>
                <textarea
                  {...register('description', { required: 'Description is required' })}
                  rows={5}
                  className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Describe your project goals, requirements, and any specific features you need..."
                />
                {errors.description && <p className="mt-1 text-sm text-red-400">{errors.description.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Budget Range</label>
                  <select
                    {...register('budget')}
                    className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select budget range</option>
                    <option value="<5k">Less than $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Target Deadline</label>
                  <input
                    type="date"
                    {...register('deadline')}
                    className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Priority Level</label>
                <div className="flex gap-4">
                  {['Low', 'Medium', 'High', 'Urgent'].map((priority) => (
                    <label key={priority} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        value={priority.toLowerCase()}
                        {...register('priority')}
                        className="accent-primary"
                      />
                      <span className="text-gray-300">{priority}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-t border-primary/10 pt-6">
                <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Contact Name *</label>
                    <input
                      {...register('contactName', { required: 'Contact name is required' })}
                      className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                      placeholder="John Doe"
                    />
                    {errors.contactName && <p className="mt-1 text-sm text-red-400">{errors.contactName.message}</p>}
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
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
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
                    Submit Project Brief
                    <Rocket className="w-5 h-5" />
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
