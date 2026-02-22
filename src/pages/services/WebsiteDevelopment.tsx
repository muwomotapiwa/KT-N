import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Globe, Monitor, Search, Code, Palette, 
  ArrowRight, Check, Layers, Database, Server, ShoppingCart, Building2,
  Gauge, Target, Star, CheckCircle2, Briefcase, Award
} from 'lucide-react';
import { countryConfigs } from '../../data/quotes';
import React from 'react';
import type { CountryConfig } from '../../data/quotes';

// Tech Stack
const techStack = [
  { category: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'CMS', items: ['WordPress', 'Headless CMS', 'Strapi', 'Contentful', 'Sanity'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'PHP', 'REST APIs', 'GraphQL'] },
  { category: 'E-Commerce', items: ['Shopify', 'WooCommerce', 'Magento', 'Custom Solutions'] },
];

// Service Features
const features = [
  { icon: Monitor, title: 'Responsive Design', description: 'Pixel-perfect layouts that adapt seamlessly across all devices and screen sizes.' },
  { icon: Code, title: 'Custom Development', description: 'Tailored web applications built with modern frameworks and best practices.' },
  { icon: Search, title: 'SEO Optimization', description: 'Built-in search engine optimization to improve your online visibility and rankings.' },
  { icon: Palette, title: 'Modern UI/UX', description: 'Beautiful, intuitive interfaces that delight users and drive engagement.' },
  { icon: Gauge, title: 'Page Speed', description: 'Optimized performance with fast load times for better user experience and SEO.' },
  { icon: Target, title: 'Conversion Optimization', description: 'Strategic design focused on converting visitors into customers.' },
];

// Website Types
const websiteTypes = [
  { icon: Building2, title: 'Corporate Websites', description: 'Professional sites that establish your brand authority' },
  { icon: ShoppingCart, title: 'E-Commerce Stores', description: 'Online stores that drive sales and growth' },
  { icon: Layers, title: 'Web Applications', description: 'Custom apps that solve business problems' },
  { icon: Globe, title: 'Landing Pages', description: 'High-converting pages for marketing campaigns' },
  { icon: Database, title: 'Portals & Dashboards', description: 'Internal tools and client portals' },
  { icon: Server, title: 'API Development', description: 'Backend services and integrations' },
];

const QUOTE_PACKAGE_KEY = 'kypex_selected_package';

// Packages shown on the marketing page.
// `quoteId` maps to the package id used in QuoteCalculator configs.
const packages = [
  {
    name: 'Starter',
    quoteId: 'starter',
    description: 'Perfect for small businesses getting started',
    features: ['Up to 5 pages', 'Responsive design', 'Basic SEO', 'Contact form', '3 months support'],
    highlight: false,
  },
  {
    name: 'Professional',
    quoteId: 'pro',
    description: 'For growing businesses that need more',
    features: ['Up to 15 pages', 'Custom design', 'Advanced SEO', 'CMS integration', 'Analytics setup', '6 months support'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    quoteId: 'ecommerce',
    description: 'Complete solution for large organizations',
    features: ['Unlimited pages', 'Custom functionality', 'E-commerce ready', 'API integrations', 'Performance optimization', '12 months support'],
    highlight: false,
  },
];

// Case Study
const caseStudy = {
  client: 'Minable Scientific',
  industry: 'Mining & Research',
  challenge: 'Needed a modern web presence to showcase their scientific research and mining consultancy services.',
  solution: 'Developed a responsive, SEO-optimized website with custom content management and lead generation forms.',
  results: [
    { metric: '+40%', label: 'User Engagement' },
    { metric: '+65%', label: 'Organic Traffic' },
    { metric: '2.5s', label: 'Load Time' },
    { metric: '+30%', label: 'Lead Generation' },
  ],
};

// Process Steps
const processSteps = [
  { step: '01', title: 'Discovery', description: 'Understanding your goals, audience, and requirements', details: ['Stakeholder interviews', 'Competitor analysis', 'User research'] },
  { step: '02', title: 'Strategy', description: 'Planning the structure, content, and technical approach', details: ['Information architecture', 'Content strategy', 'Technical planning'] },
  { step: '03', title: 'Design', description: 'Creating stunning visual designs and prototypes', details: ['Wireframes', 'UI design', 'Interactive prototypes'] },
  { step: '04', title: 'Development', description: 'Building with clean, efficient, scalable code', details: ['Frontend development', 'Backend integration', 'CMS setup'] },
  { step: '05', title: 'Testing', description: 'Ensuring quality across devices and browsers', details: ['QA testing', 'Performance optimization', 'Security audit'] },
  { step: '06', title: 'Launch', description: 'Deploying your site and providing ongoing support', details: ['Deployment', 'Training', 'Ongoing maintenance'] },
];

const mapIsoToConfigCode = (iso?: string) => {
  const code = (iso || '').toUpperCase();
  switch (code) {
    case 'ZA':
      return 'RSA';
    case 'ZW':
      return 'ZW';
    case 'ZM':
      return 'ZM';
    case 'BW':
      return 'BW';
    default:
      return 'INTL';
  }
};

export function WebsiteDevelopment() {
  const [showCountrySelector, setShowCountrySelector] = useState(false);
  const [detectedCountry, setDetectedCountry] = useState<string | null>(null);
  const [isResolvingCountry, setIsResolvingCountry] = useState(true);
  const [showOverrideList, setShowOverrideList] = useState(false);
  const [geoError, setGeoError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Resolve visitor country on the client using an IP geolocation API
  useEffect(() => {
    const cached = sessionStorage.getItem('kypex_country_resolved');
    if (cached) {
      setDetectedCountry(cached);
      setIsResolvingCountry(false);
      return;
    }

    const detectCountry = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        if (!res.ok) throw new Error('Geo lookup failed');

        const data = await res.json();
        const mapped = mapIsoToConfigCode(data?.country);
        const routeCode = mapped.toLowerCase();

        sessionStorage.setItem('kypex_country_resolved', routeCode);
        setDetectedCountry(routeCode);
        setGeoError(null);
      } catch (error) {
        const fallback = 'intl';
        sessionStorage.setItem('kypex_country_resolved', fallback);
        setDetectedCountry(fallback);
        setGeoError('Could not detect your location. Showing international pricing.');
      } finally {
        setIsResolvingCountry(false);
      }
    };

    detectCountry();
  }, []);

  const handleInstantQuote = async (pkgId?: string) => {
    if (pkgId) sessionStorage.setItem(QUOTE_PACKAGE_KEY, pkgId);

    const routeCode = (detectedCountry || 'intl').toLowerCase();
    sessionStorage.setItem('kypex_country_resolved', routeCode);
    setDetectedCountry(routeCode);
    setGeoError(null);
    setIsResolvingCountry(false);
    setShowCountrySelector(false);
    navigate(`/quote/${routeCode}`);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue/10 rounded-full blur-3xl" />
          
          {/* Floating Browser Windows */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`browser-${i}`}
              className="absolute hidden lg:block"
              style={{
                left: `${15 + (i % 3) * 30}%`,
                top: `${20 + Math.floor(i / 3) * 35}%`,
              }}
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                y: [50, 20, 50],
                rotateY: [i % 2 === 0 ? -5 : 5, i % 2 === 0 ? 5 : -5, i % 2 === 0 ? -5 : 5]
              }}
              transition={{ 
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 0.5
              }}
            >
              <div className="w-40 h-28 bg-[#152121]/40 backdrop-blur-sm rounded-lg border border-[#34d9b9]/30 overflow-hidden transform perspective-1000">
                <div className="h-5 bg-[#011f44]/60 flex items-center px-2 gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
                  <div className="flex-1 mx-2 h-2 bg-[#184470]/60 rounded" />
                </div>
                <div className="p-2 space-y-1">
                  {[...Array(4)].map((_, j) => (
                    <motion.div
                      key={j}
                      className="h-1.5 rounded"
                      style={{ 
                        width: `${40 + Math.random() * 50}%`,
                        backgroundColor: j === 0 ? 'rgba(52,217,185,0.4)' : 'rgba(137,168,192,0.3)'
                      }}
                      animate={{ opacity: [0.3, 0.7, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: j * 0.3 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Floating Code Snippets */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`code-${i}`}
              className="absolute text-[#34d9b9]/20 font-mono text-xs whitespace-nowrap hidden md:block"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
            >
              {['<div>', '</>', 'const', 'return', '{...}', '=> {}', 'import', 'export', '<App />', 'useState', 'async', 'await'][i % 12]}
            </motion.div>
          ))}
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(52, 217, 185, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(52, 217, 185, 0.3) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Website Development</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-white mb-6">
              Websites That <span className="text-primary">Convert</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
              Custom, high-performance websites built to drive results. From stunning designs to lightning-fast load times, 
              we create digital experiences that convert visitors into customers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/consultation"
                className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                Book Strategy Call
              </Link>
              <button
                onClick={() => handleInstantQuote()}
                className="px-8 py-4 border border-primary/50 text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all duration-300"
              >
                Get Instant Quote
              </button>
            </div>
            {isResolvingCountry && (
              <p className="text-xs text-gray-400 mt-3">Detecting your country for localized pricing...</p>
            )}
            {geoError && (
              <p className="text-xs text-red-300 mt-3">{geoError}</p>
            )}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: '100+', label: 'Websites Delivered' },
              { value: '<2s', label: 'Avg. Load Time' },
              { value: '95%', label: 'Client Satisfaction' },
              { value: '+150%', label: 'Avg. Traffic Increase' },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Website Types */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue/10 border border-blue/30 rounded-full mb-6">
              <Layers className="w-4 h-4 text-blue" />
              <span className="text-blue text-sm font-medium">What We Build</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Website <span className="text-primary">Solutions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From simple landing pages to complex web applications, we build websites that serve your business goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-navy-light/50 border border-primary/10 rounded-2xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <type.icon className="w-7 h-7 text-navy" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                <p className="text-gray-400">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Code className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Technology Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Built With Modern <span className="text-primary">Technologies</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We use industry-leading technologies to build fast, scalable, and maintainable websites.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-navy-light/50 border border-primary/10 rounded-2xl"
              >
                <h3 className="text-lg font-semibold text-primary mb-4">{category.category}</h3>
                <div className="space-y-2">
                  {category.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
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
              What Sets Us <span className="text-primary">Apart</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-navy-light/50 border border-primary/10 rounded-2xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-blue/20 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-blue/30 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Case Study</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4">
              Real <span className="text-primary">Results</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-gradient-to-br from-navy-light to-dark border border-primary/20 rounded-3xl"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <span className="text-sm text-gray-400">{caseStudy.industry}</span>
                <h3 className="text-2xl font-bold text-white mb-4">{caseStudy.client}</h3>
                
                <div className="mb-6">
                  <h4 className="text-primary font-semibold mb-2">Challenge</h4>
                  <p className="text-gray-400">{caseStudy.challenge}</p>
                </div>
                
                <div>
                  <h4 className="text-primary font-semibold mb-2">Solution</h4>
                  <p className="text-gray-400">{caseStudy.solution}</p>
                </div>
              </div>

              <div>
                <h4 className="text-primary font-semibold mb-6">Results</h4>
                <div className="grid grid-cols-2 gap-4">
                  {caseStudy.results.map((result) => (
                    <div key={result.label} className="p-6 bg-navy/50 border border-primary/20 rounded-xl text-center">
                      <div className="text-3xl font-bold text-primary mb-2">{result.metric}</div>
                      <div className="text-sm text-gray-400">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue/10 border border-blue/30 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-blue" />
              <span className="text-blue text-sm font-medium">Our Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              How We <span className="text-primary">Work</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 bg-navy-light/50 border border-primary/10 rounded-2xl hover:border-primary/30 transition-colors"
              >
                <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-sm text-gray-500">
                      <Check className="w-4 h-4 text-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Packages</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Choose Your <span className="text-primary">Package</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Flexible packages to suit businesses of all sizes. Need something custom? We can build a tailored solution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border-2 ${
                  pkg.highlight
                    ? 'bg-gradient-to-br from-primary/10 to-navy-light border-primary'
                    : 'bg-navy-light/50 border-primary/10'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-navy text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-400 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    if (pkg.quoteId) sessionStorage.setItem(QUOTE_PACKAGE_KEY, pkg.quoteId);
                    setShowCountrySelector(true);
                  }}
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    pkg.highlight
                      ? 'bg-primary text-navy hover:shadow-lg hover:shadow-primary/30'
                      : 'border border-primary text-primary hover:bg-primary/10'
                  }`}
                >
                  Get Quote
                </button>
              </motion.div>
            ))}
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
              Ready to Build Your <span className="text-primary">Website</span>?
            </h2>
            <p className="text-gray-300 mb-10">
              Get a free consultation to discuss your project and receive a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/consultation"
                className="group px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Book Free Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={handleInstantQuote}
                className="px-8 py-4 border border-primary/50 text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all duration-300"
              >
                Get Instant Quote
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Country Selector Modal */}
      {showCountrySelector && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setShowCountrySelector(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-navy-light border border-primary/20 rounded-2xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-white mb-4 text-center">We detected your location</h3>
            <DetectedCountryCard
              countryCode={detectedCountry || 'intl'}
              onConfirm={(code) => {
                sessionStorage.setItem('kypex_country_resolved', code);
                setShowCountrySelector(false);
                navigate(`/quote/${code}`);
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

function DetectedCountryCard({
  countryCode,
  onConfirm,
}: {
  countryCode: string;
  onConfirm: (code: string) => void;
}) {
  const country = countryConfigs.find((c) => c.code.toLowerCase() === countryCode.toLowerCase());
  if (!country) {
    return (
      <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-200 text-sm text-center">
        We couldn't detect your location.
      </div>
    );
  }

  return (
    <div className="p-4 bg-navy border border-primary/30 rounded-xl text-center">
      <p className="text-sm text-gray-400 mb-2">Detected country</p>
      <div className="text-xl font-semibold text-white">{country.name}</div>
      <div className="text-xs text-gray-400 mb-4">{country.currency}</div>
      <button
        onClick={() => onConfirm(country.code.toLowerCase())}
        className="w-full py-3 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all"
      >
        Continue with {country.name}
      </button>
    </div>
  );
}
