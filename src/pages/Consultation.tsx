import { useState, BaseSyntheticEvent } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Cloud, Users, Smartphone, BarChart, Clock } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

const services = [
  { id: 'cloud', title: 'Cloud Services', icon: Cloud, description: 'Cloud migration, optimization & security' },
  { id: 'consulting', title: 'IT Consulting', icon: Users, description: 'Strategic technology guidance' },
  { id: 'mobile', title: 'Mobile Development', icon: Smartphone, description: 'iOS & Android apps' },
  { id: 'data', title: 'Data Analytics', icon: BarChart, description: 'BI & predictive analytics' },
];

export function Consultation() {
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
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Free Consultation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-white mb-6">
              Schedule Your <span className="text-primary">Consultation</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Book a free consultation with our experts. We'll discuss your needs and how we can help transform your business.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-navy-light/50 border border-primary/10 rounded-xl text-center hover:border-primary/50 transition-colors"
              >
                <service.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-1">{service.title}</h3>
                <p className="text-sm text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
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
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Book Your Session</h2>
            <input type="hidden" name="access_key" value="af31cdca-fdb5-4fd7-81bd-762838f8e47f" />
            <input type="hidden" name="subject" value="Consultation Request" />
            <input type="hidden" name="form_name" value="Consultation Form" />
            <input type="hidden" name="redirect" value={redirectUrl} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                <input
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Service Interest *</label>
              <select
                {...register('service', { required: 'Please select a service' })}
                className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Select a service</option>
                <option value="cloud">Cloud Services</option>
                <option value="ai">AI Solutions</option>
                <option value="web">Website Development</option>
                <option value="mobile">Mobile App Development</option>
                <option value="security">Cybersecurity</option>
                <option value="consulting">IT Consulting</option>
                <option value="data">Data Analytics</option>
              </select>
              {errors.service && <p className="mt-1 text-sm text-red-400">{errors.service.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Date *</label>
                <input
                  type="date"
                  {...register('preferredDate', { required: 'Date is required' })}
                  className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                />
                {errors.preferredDate && <p className="mt-1 text-sm text-red-400">{errors.preferredDate.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Time *</label>
                <select
                  {...register('preferredTime', { required: 'Time is required' })}
                  className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Select time</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                </select>
                {errors.preferredTime && <p className="mt-1 text-sm text-red-400">{errors.preferredTime.message}</p>}
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-300 mb-2">Message (Optional)</label>
              <textarea
                {...register('message')}
                rows={4}
                className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell us about your project or questions..."
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
                  Scheduling...
                </>
              ) : (
                <>
                  Schedule Consultation
                  <Clock className="w-5 h-5" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
