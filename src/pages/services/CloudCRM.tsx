import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Cloud, Zap, TrendingUp, Settings, BarChart, ArrowRight, Check, Star, Building2, Rocket } from 'lucide-react';

// Enterprise CRMs
const enterpriseCRMs = [
  {
    name: 'Salesforce',
    description: 'The world\'s #1 CRM platform with comprehensive cloud solutions for every business need.',
    featured: true,
    products: [
      { name: 'Sales Cloud', description: 'Accelerate sales with AI-powered insights and automation' },
      { name: 'Service Cloud', description: 'Deliver exceptional customer service at scale' },
      { name: 'Marketing Cloud', description: 'Personalized marketing journeys across all channels' },
      { name: 'Experience Cloud', description: 'Build connected digital experiences' },
      { name: 'Commerce Cloud', description: 'Unified commerce for B2B and B2C' },
    ],
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Microsoft Dynamics 365',
    description: 'Intelligent business applications that work seamlessly with Microsoft ecosystem.',
    featured: false,
    products: [
      { name: 'Sales', description: 'Empower sellers with AI-driven insights' },
      { name: 'Customer Service', description: 'Transform customer service operations' },
      { name: 'Marketing', description: 'Orchestrate personalized journeys' },
      { name: 'Field Service', description: 'Deliver proactive service experiences' },
    ],
    color: 'from-blue-600 to-purple-600',
  },
  {
    name: 'SAP Customer Experience',
    description: 'Enterprise-grade CRM solutions for large-scale operations.',
    featured: false,
    products: [
      { name: 'SAP Sales Cloud', description: 'Intelligent sales automation' },
      { name: 'SAP Service Cloud', description: 'Connected customer service' },
      { name: 'SAP Commerce Cloud', description: 'Scalable e-commerce platform' },
    ],
    color: 'from-blue-400 to-cyan-500',
  },
  {
    name: 'Oracle CX Cloud',
    description: 'Complete suite of cloud applications for customer experience.',
    featured: false,
    products: [
      { name: 'Oracle Sales', description: 'Modern selling in the cloud' },
      { name: 'Oracle Service', description: 'Complete service solutions' },
      { name: 'Oracle Marketing', description: 'Data-driven marketing automation' },
    ],
    color: 'from-red-500 to-orange-500',
  },
];

// Mid-Market CRMs
const midMarketCRMs = [
  {
    name: 'HubSpot',
    description: 'All-in-one CRM platform for growing businesses.',
    products: [
      { name: 'Marketing Hub', description: 'Inbound marketing software' },
      { name: 'Sales Hub', description: 'Sales CRM and automation' },
      { name: 'Service Hub', description: 'Customer service software' },
      { name: 'CMS Hub', description: 'Content management system' },
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Zoho CRM',
    description: 'Comprehensive CRM for businesses of all sizes.',
    products: [
      { name: 'Sales Automation', description: 'Streamline your sales process' },
      { name: 'Marketing Automation', description: 'Multi-channel campaigns' },
      { name: 'Analytics', description: 'Data-driven decisions' },
    ],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    name: 'Pipedrive',
    description: 'Sales-focused CRM built by salespeople for salespeople.',
    products: [
      { name: 'Deal Pipeline Management', description: 'Visual pipeline tracking' },
      { name: 'Sales Automation', description: 'Automate repetitive tasks' },
      { name: 'Reporting', description: 'Insights and forecasting' },
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Freshworks',
    description: 'Modern CRM with AI-powered insights.',
    products: [
      { name: 'Sales CRM', description: 'Close deals faster' },
      { name: 'AI Insights', description: 'Freddy AI assistant' },
      { name: 'Marketing Automation', description: 'Engage across channels' },
    ],
    color: 'from-blue-400 to-blue-600',
  },
];

const benefits = [
  { icon: TrendingUp, title: 'Increased Revenue', description: 'Boost sales with better lead management and customer insights.' },
  { icon: Users, title: 'Customer Retention', description: 'Build lasting relationships with 360° customer views.' },
  { icon: Zap, title: 'Automation', description: 'Automate workflows to save time and reduce errors.' },
  { icon: BarChart, title: 'Analytics', description: 'Make data-driven decisions with powerful reporting.' },
  { icon: Cloud, title: 'Scalability', description: 'Grow your CRM as your business expands.' },
  { icon: Settings, title: 'Integration', description: 'Connect with your existing tools and systems.' },
];

const services = [
  'CRM selection and strategy consulting',
  'Implementation and customization',
  'Data migration and integration',
  'User training and adoption',
  'Ongoing support and optimization',
  'Custom development and extensions',
];

export function CloudCRM() {
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
              <Users className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Cloud CRM Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-white mb-6">
              Transform Customer <span className="text-primary">Relationships</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
              Powerful cloud-based CRM solutions that help you manage customer relationships, automate sales processes, and drive business growth. We implement and optimize the world's leading CRM platforms.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/consultation"
                className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                Get CRM Consultation
              </Link>
              <Link
                to="/project-start"
                className="px-8 py-4 border border-primary/50 text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all duration-300"
              >
                Start Implementation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured: Salesforce */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
              <Star className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Featured Partner</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4">
              Salesforce <span className="text-primary">Implementation</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              As a Salesforce implementation partner, we help businesses leverage the world's #1 CRM platform to its full potential.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-12 bg-gradient-to-br from-blue-900/30 to-navy-light border border-blue-500/30 rounded-3xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  Complete Salesforce Cloud Suite
                </h3>
                <p className="text-gray-300 mb-8">
                  We implement, customize, and optimize all Salesforce Cloud products to help you build stronger customer relationships and accelerate business growth.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {enterpriseCRMs[0].products.map((product, index) => (
                    <motion.div
                      key={product.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-navy/50 rounded-xl border border-blue-500/20"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <Cloud className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{product.name}</div>
                        <div className="text-sm text-gray-400">{product.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <motion.div
                  className="relative w-64 h-64"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full" />
                  <div className="absolute inset-4 border-2 border-primary/30 rounded-full" />
                  <div className="absolute inset-8 border-2 border-blue-400/30 rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/30">
                      <Cloud className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enterprise CRMs */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Enterprise Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4">
              Enterprise CRM <span className="text-primary">Platforms</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We implement and support the world's leading enterprise CRM platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {enterpriseCRMs.slice(1).map((crm, index) => (
              <motion.div
                key={crm.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-navy-light/50 border border-primary/10 rounded-2xl hover:border-primary/50 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${crm.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Cloud className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{crm.name}</h3>
                <p className="text-gray-400 mb-6">{crm.description}</p>
                <div className="space-y-2">
                  {crm.products.map((product) => (
                    <div key={product.name} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-gray-300">{product.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Market CRMs */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Growth Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4">
              Mid-Market & Growth <span className="text-primary">CRMs</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Powerful CRM solutions perfect for growing businesses and startups.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {midMarketCRMs.map((crm, index) => (
              <motion.div
                key={crm.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 bg-navy-light/50 border border-primary/10 rounded-2xl hover:border-primary/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${crm.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{crm.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{crm.description}</p>
                <div className="space-y-1">
                  {crm.products.slice(0, 3).map((product) => (
                    <div key={product.name} className="flex items-center gap-2 text-xs">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      <span className="text-gray-400">{product.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4">
              Why Implement a Cloud <span className="text-primary">CRM</span>?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-navy-light/50 border border-primary/10 rounded-2xl"
              >
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-blue/20 flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
                Our CRM <span className="text-primary">Services</span>
              </h2>
              <p className="text-gray-400 mb-8">
                From strategy to implementation and beyond, we provide end-to-end CRM services to ensure your success.
              </p>
              <ul className="space-y-4">
                {services.map((service, index) => (
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
                    <span className="text-gray-300">{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="p-6 bg-navy-light border border-primary/20 rounded-2xl">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-400">CRM Implementations</div>
                </div>
                <div className="p-6 bg-navy-light border border-primary/20 rounded-2xl">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-gray-400">User Adoption Rate</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="p-6 bg-navy-light border border-primary/20 rounded-2xl">
                  <div className="text-4xl font-bold text-primary mb-2">5+</div>
                  <div className="text-gray-400">CRM Platforms</div>
                </div>
                <div className="p-6 bg-navy-light border border-primary/20 rounded-2xl">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-gray-400">Support Available</div>
                </div>
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
              Ready to Transform Your Customer <span className="text-primary">Relationships</span>?
            </h2>
            <p className="text-gray-300 mb-10">
              Let's discuss which CRM platform is right for your business and how we can help you implement it successfully.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/consultation"
                className="group px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Schedule CRM Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services/cloud-services"
                className="px-8 py-4 border border-primary/50 text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all duration-300"
              >
                Back to Cloud Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
