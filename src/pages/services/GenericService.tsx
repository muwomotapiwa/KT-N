import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { services } from '../../data/services';
import * as Icons from 'lucide-react';

export function GenericService() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-navy">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Service not found</h1>
          <Link to="/#services" className="text-primary hover:underline">
            View all services
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = (Icons as unknown as Record<string, React.ElementType>)[service.icon] || Icons.Briefcase;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <IconComponent className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">{service.title}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-white mb-6">
              {service.title.split(' ').map((word, i, arr) => 
                i === arr.length - 1 ? <span key={i} className="text-primary">{word}</span> : `${word} `
              )}
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
              {service.shortDescription}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/consultation"
                className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                Get Consultation
              </Link>
              <Link
                to="/project-start"
                className="px-8 py-4 border border-primary/50 text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all duration-300"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-navy-light/50 border border-primary/10 rounded-2xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
                Why Choose <span className="text-primary">Us</span>?
              </h2>
              <p className="text-gray-400 mb-8">
                We combine industry expertise with cutting-edge technology to deliver solutions that drive real business results.
              </p>
              <ul className="space-y-4">
                {[
                  'Expert team with years of industry experience',
                  'Customized solutions for your unique needs',
                  'Transparent pricing and timelines',
                  'Ongoing support and maintenance',
                  'Proven track record of success',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-navy-light to-dark border border-primary/20 flex items-center justify-center">
                <IconComponent className="w-32 h-32 text-primary/30" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-navy-light to-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Ready to Get <span className="text-primary">Started</span>?
            </h2>
            <p className="text-gray-300 mb-10">
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/consultation"
                className="group px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-primary/50 text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
