import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cloud, Upload, Shield, Gauge, Server, Database, Users, ArrowRight } from 'lucide-react';
import { cloudSubpages } from '../../data/services';

const iconMap: Record<string, React.ElementType> = {
  'cloud-migration': Upload,
  'cloud-security': Shield,
  'cloud-optimization': Gauge,
  'hybrid-cloud': Server,
  'cloud-storage': Database,
  'cloud-crm': Users,
};

export function CloudServices() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue/10 rounded-full blur-3xl" />
          
          {/* Floating Clouds */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`cloud-${i}`}
              className="absolute hidden md:block"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 2) * 40}%`,
              }}
              animate={{
                x: [0, 30, 0],
                y: [0, -10, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              <Cloud className="w-20 h-20 text-primary/20" />
            </motion.div>
          ))}

          {/* Data Upload Animation */}
          <div className="absolute right-[15%] top-[30%] hidden lg:block">
            <motion.div
              className="w-24 h-24 border-2 border-primary/30 rounded-xl flex items-center justify-center"
              animate={{
                borderColor: ['rgba(52,217,185,0.3)', 'rgba(52,217,185,0.6)', 'rgba(52,217,185,0.3)'],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Cloud className="w-12 h-12 text-primary/40" />
            </motion.div>
            {/* Upload Arrows */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`arrow-${i}`}
                className="absolute left-1/2 -translate-x-1/2"
                style={{ bottom: `-${30 + i * 20}px` }}
                animate={{
                  y: [-20, -60],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
              >
                <Upload className="w-4 h-4 text-primary/50" />
              </motion.div>
            ))}
          </div>

          {/* Server Racks Animation */}
          <div className="absolute left-[10%] top-[40%] hidden lg:flex gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`server-${i}`}
                className="w-8 h-24 bg-navy-light/50 border border-primary/20 rounded-lg overflow-hidden"
                animate={{
                  borderColor: ['rgba(52,217,185,0.2)', 'rgba(52,217,185,0.5)', 'rgba(52,217,185,0.2)'],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                {[...Array(4)].map((_, j) => (
                  <motion.div
                    key={j}
                    className="m-1 h-3 bg-primary/30 rounded-sm"
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{ duration: 1, repeat: Infinity, delay: j * 0.2 }}
                  />
                ))}
              </motion.div>
            ))}
          </div>

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20 hidden lg:block" viewBox="0 0 1000 600">
            {[
              { x1: 150, y1: 300, x2: 400, y2: 200 },
              { x1: 400, y1: 200, x2: 700, y2: 250 },
              { x1: 700, y1: 250, x2: 850, y2: 350 },
              { x1: 150, y1: 300, x2: 300, y2: 450 },
              { x1: 300, y1: 450, x2: 600, y2: 400 },
            ].map((line, i) => (
              <motion.line
                key={i}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="#34d9b9"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, repeatType: 'reverse' }}
              />
            ))}
          </svg>

          {/* Particle Cloud */}
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1.5 h-1.5 rounded-full bg-primary/40 hidden md:block"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Cloud className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Cloud Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-white mb-6">
              Power Your Business <span className="text-primary">in the Cloud</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
              Scalable, secure, and cost-effective cloud solutions that power your digital transformation journey. From migration to optimization, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/consultation"
                className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                Get Cloud Consultation
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

      {/* Services Grid */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Our Cloud <span className="text-primary">Solutions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive cloud services tailored to meet your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudSubpages.map((service, index) => {
              const Icon = iconMap[service.id];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={service.path}
                    className="group block h-full p-8 bg-navy-light/50 border border-primary/10 rounded-2xl hover:border-primary/50 hover:bg-navy-light transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-navy" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <div className="flex items-center text-primary font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
                Why Choose Cloud with <span className="text-primary">Kypex-Tech</span>?
              </h2>
              <ul className="space-y-4">
                {[
                  'Certified cloud architects and engineers',
                  'Multi-cloud expertise (AWS, Azure, GCP)',
                  '24/7 monitoring and support',
                  'Cost optimization strategies',
                  'Secure and compliant solutions',
                  'Seamless migration with minimal downtime',
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {benefit}
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
                <Cloud className="w-32 h-32 text-primary/30" />
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
              Ready for the <span className="text-primary">Cloud</span>?
            </h2>
            <p className="text-gray-300 mb-10">
              Let's discuss your cloud strategy and how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/consultation"
                className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                Schedule Consultation
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
    </div>
  );
}
