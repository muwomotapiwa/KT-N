import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Shield, Cloud, Users, BarChart, ArrowRight, Sparkles, Zap, Target } from 'lucide-react';
import { ShootingStars } from '../components/ShootingStars';
import { services } from '../data/services';

const iconMap: Record<string, React.ElementType> = {
  Globe, Smartphone, Shield, Cloud, Users, BarChart
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-navy-light to-navy">
        <ShootingStars />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(52, 217, 185, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(52, 217, 185, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">AI-Powered Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6"
            >
              <span className="text-white">Innovative</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-blue to-primary-dark bg-clip-text text-transparent gradient-animate">
                IT Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
            >
              Transform your business with cutting-edge technology solutions. From AI and cloud services to cybersecurity and custom development, we deliver excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/consultation"
                className="group px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/#services"
                className="px-8 py-4 border border-primary/50 text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all duration-300"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { value: '100+', label: 'Projects Delivered' },
                { value: '50+', label: 'Happy Clients' },
                { value: '5+', label: 'Years Experience' },
                { value: '24/7', label: 'Support' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="glass rounded-xl p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ height: ['20%', '80%', '20%'] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 bg-primary rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* AI Highlight Section */}
      <section className="relative py-24 bg-gradient-to-b from-navy to-dark overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue/10 border border-blue/30 rounded-full mb-6">
              <Zap className="w-4 h-4 text-blue" />
              <span className="text-blue text-sm font-medium">Powered by AI</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-6">
              AI-First Approach to <span className="text-primary">Innovation</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Leverage the power of artificial intelligence to transform your business operations, automate workflows, and gain competitive advantage.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {['GenAI & RAG', 'Natural Language', 'Computer Vision', 'Predictive AI', 'MLOps', 'Responsible AI'].map((capability) => (
              <motion.div
                key={capability}
                variants={itemVariants}
                className="group relative p-4 bg-navy-light/50 border border-primary/20 rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                <div className="relative text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-primary/20 to-blue/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{capability}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/ai-solutioning"
              className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-medium"
            >
              Explore AI Solutions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-6">
              Complete IT <span className="text-primary">Solutions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From concept to deployment, we provide end-to-end technology services that drive business growth and digital transformation.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="group"
                >
                  <Link
                    to={service.path}
                    className="block h-full p-8 bg-navy-light/50 border border-primary/10 rounded-2xl hover:border-primary/50 hover:bg-navy-light transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-navy" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center text-primary font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(52,217,185,0.1)_0%,_transparent_70%)]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-6">
              Ready to Transform Your <span className="text-primary">Business</span>?
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Let's discuss how our innovative IT solutions can help you achieve your goals. Schedule a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/consultation"
                className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                Schedule Consultation
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
