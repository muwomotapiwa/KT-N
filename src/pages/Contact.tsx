import { useState, BaseSyntheticEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Clock, Send, ChevronDown } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

const faqs = [
  { q: 'What is your typical project timeline?', a: 'Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications may take 3-6 months. We\'ll provide a detailed timeline after understanding your requirements.' },
  { q: 'Do you offer ongoing support?', a: 'Yes! We offer comprehensive support packages including maintenance, updates, monitoring, and 24/7 emergency support for critical systems.' },
  { q: 'What technologies do you specialize in?', a: 'We work with a wide range of technologies including React, Node.js, Python, AWS, Azure, GCP, and various AI/ML frameworks. We choose the best tech stack for each project.' },
  { q: 'How do you handle project communication?', a: 'We use agile methodologies with regular updates, weekly calls, and project management tools. You\'ll have direct access to your project team throughout the process.' },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Get in Touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-white mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Have a question or ready to start your project? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <a href="mailto:infor@kypextech.co.za" className="text-gray-400 hover:text-primary transition-colors">infor@kypextech.co.za</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Working Hours</h3>
                    <p className="text-gray-400">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-400">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <h3 className="text-xl font-bold text-white mb-4">Frequently Asked Questions</h3>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-primary/10 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-4 py-3 flex items-center justify-between text-left text-white hover:bg-primary/5 transition-colors"
                    >
                      <span className="font-medium">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-primary transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        className="px-4 pb-4 text-gray-400 text-sm"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                onSubmit={handleSubmit(onSubmit)}
                className="p-8 bg-navy-light/50 border border-primary/10 rounded-2xl"
              >
                <input type="hidden" name="access_key" value="af31cdca-fdb5-4fd7-81bd-762838f8e47f" />
                <input type="hidden" name="subject" value="kypextech-Contact Form Submission,general" />
                <input type="hidden" name="form_name" value="Contact Form" />
                <input type="hidden" name="redirect" value={redirectUrl} />
                <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>
                
                <div className="space-y-6">
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

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone (Optional)</label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                    <select
                      {...register('subject', { required: 'Subject is required' })}
                      className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="quote">Request a Quote</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="careers">Careers</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      rows={5}
                      className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-navy border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portals temporarily hidden for launch */}
    </div>
  );
}
