import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, Network, Database, Monitor, Cloud, Eye, Target, AlertTriangle,
  FileCheck, ArrowRight, CheckCircle2, Award, Briefcase,
  Server, Zap, Phone, Star
} from 'lucide-react';

// Core Services
const services = [
  { icon: Network, title: 'Network Security', description: 'Protect your network infrastructure with firewalls, intrusion detection, and secure architectures.' },
  { icon: Database, title: 'Data Protection', description: 'Secure your sensitive data with encryption, DLP, and access controls.' },
  { icon: Monitor, title: 'Endpoint Security', description: 'Comprehensive protection for all devices including EDR and MDM solutions.' },
  { icon: Cloud, title: 'Cloud Security', description: 'Secure your cloud infrastructure with CSPM, CASB, and workload protection.' },
  { icon: Eye, title: 'Threat Monitoring', description: '24/7 SOC monitoring for suspicious activities and rapid threat response.' },
  { icon: Target, title: 'Penetration Testing', description: 'Identify vulnerabilities with ethical hacking and red team exercises.' },
];

// Compliance & Regulations
const compliance = [
  { 
    name: 'POPIA', 
    fullName: 'Protection of Personal Information Act',
    description: 'South African data protection compliance',
    icon: FileCheck 
  },
  { 
    name: 'GDPR', 
    fullName: 'General Data Protection Regulation',
    description: 'European data privacy compliance',
    icon: Shield 
  },
  { 
    name: 'ISO 27001', 
    fullName: 'Information Security Management',
    description: 'International security standard alignment',
    icon: Award 
  },
  { 
    name: 'SOC 2', 
    fullName: 'Service Organization Control',
    description: 'Trust services criteria compliance',
    icon: CheckCircle2 
  },
];

// Security Packages
const packages = [
  {
    name: 'Essential Security',
    description: 'Core protection for small businesses',
    price: 'Starting from',
    features: [
      'Vulnerability assessment',
      'Firewall configuration',
      'Endpoint protection',
      'Security awareness training',
      'Monthly security reports',
      'Email support',
    ],
    highlight: false,
  },
  {
    name: 'Business Security',
    description: 'Comprehensive protection for growing organizations',
    price: 'Most Popular',
    features: [
      'Everything in Essential',
      'Penetration testing (annual)',
      '24/7 threat monitoring',
      'Incident response planning',
      'Compliance assessment',
      'Quarterly business reviews',
      'Priority support',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise Security',
    description: 'Full-scale security operations for enterprises',
    price: 'Custom',
    features: [
      'Everything in Business',
      'Dedicated security team',
      'Red team exercises',
      'SIEM implementation',
      'Custom security policies',
      'Executive briefings',
      'SLA guarantee',
      '24/7 phone support',
    ],
    highlight: false,
  },
];

// Incident Response
const incidentResponse = [
  { step: 1, title: 'Detection', time: '< 15 min', description: 'Threat identified and initial assessment completed' },
  { step: 2, title: 'Containment', time: '< 1 hour', description: 'Threat isolated to prevent further spread' },
  { step: 3, title: 'Eradication', time: '< 4 hours', description: 'Threat removed from all systems' },
  { step: 4, title: 'Recovery', time: '< 24 hours', description: 'Systems restored and verified secure' },
  { step: 5, title: 'Post-Incident', time: '< 72 hours', description: 'Full report and prevention recommendations' },
];

// Certifications & Partnerships
const certifications = [
  'Microsoft Security Partner',
  'AWS Security Competency',
  'Cisco Security Certified',
  'Palo Alto Networks Partner',
  'CrowdStrike Partner',
  'Fortinet Expert Partner',
];

// Stats
const stats = [
  { value: '99.9%', label: 'Threat Detection Rate' },
  { value: '24/7', label: 'Security Monitoring' },
  { value: '<1hr', label: 'Response Time' },
  { value: '0', label: 'Breaches in 2024' },
];

// Case Study
const caseStudy = {
  client: 'Financial Services Firm',
  industry: 'Finance',
  challenge: 'Needed to achieve POPIA compliance and strengthen security posture after a near-miss phishing attack.',
  solution: 'Implemented comprehensive security stack including SIEM, EDR, email security, and staff training program.',
  results: [
    { metric: '100%', label: 'POPIA Compliant' },
    { metric: '95%', label: 'Phishing Test Pass Rate' },
    { metric: '60%', label: 'Reduction in Incidents' },
    { metric: '< 30min', label: 'Mean Response Time' },
  ],
};

export function Cybersecurity() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          
          {/* Shield Pulse Animation */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-red-500/20 rounded-full"
                style={{
                  width: `${200 + i * 100}px`,
                  height: `${200 + i * 100}px`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 flex items-center justify-center"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <Shield className="w-20 h-20 text-red-500/20" />
            </motion.div>
          </div>

          {/* Scanning Lines */}
          <motion.div
            className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500/30 to-transparent"
            animate={{
              top: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          
          {/* Matrix-style falling characters */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`matrix-${i}`}
              className="absolute text-red-500/20 font-mono text-xs hidden md:block"
              style={{
                left: `${5 + i * 6.5}%`,
                top: '-20px',
              }}
              animate={{
                y: ['0vh', '100vh'],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            >
              {['0', '1', '█', '▓', '░', '◊', '▪', '■', '●', '○', '◘', '◙', '♦', '♠', '♣'][i % 15]}
            </motion.div>
          ))}

          {/* Lock Icons floating */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`lock-${i}`}
              className="absolute hidden md:flex items-center justify-center w-10 h-10 rounded-lg bg-red-500/5 border border-red-500/20"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              <Shield className="w-5 h-5 text-red-500/40" />
            </motion.div>
          ))}

          {/* Hex Pattern Grid */}
          <motion.div 
            className="absolute inset-0 opacity-5"
            animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(239, 68, 68, 0.3) 25%, transparent 25%), linear-gradient(-45deg, rgba(239, 68, 68, 0.3) 25%, transparent 25%)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
              <Shield className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-sm font-medium">Enterprise Cybersecurity</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-white mb-6">
              Protect Your <span className="text-primary">Digital Assets</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
              Comprehensive cybersecurity solutions to safeguard your business from evolving threats. 
              From compliance to 24/7 monitoring, we've got your security covered.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/assessment"
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <AlertTriangle className="w-5 h-5" />
                Free Security Assessment
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-primary/50 text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all duration-300"
              >
                Contact Security Team
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-xl p-6 text-center border border-red-500/20">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Server className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Security Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Comprehensive <span className="text-primary">Protection</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Multi-layered security services to protect every aspect of your digital infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-navy-light/50 border border-primary/10 rounded-2xl hover:border-red-500/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center mb-6 group-hover:from-red-500 group-hover:to-red-600 transition-all">
                  <service.icon className="w-7 h-7 text-red-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue/10 border border-blue/30 rounded-full mb-6">
              <FileCheck className="w-4 h-4 text-blue" />
              <span className="text-blue text-sm font-medium">Compliance & Regulations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Regulatory <span className="text-primary">Compliance</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We help you achieve and maintain compliance with industry regulations and standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {compliance.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-navy-light/50 border border-primary/10 rounded-2xl hover:border-primary/50 transition-all"
              >
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-blue/20 flex items-center justify-center mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-1">{item.name}</h3>
                <p className="text-white font-medium mb-2">{item.fullName}</p>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Security Packages</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Choose Your <span className="text-primary">Protection Level</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Scalable security packages designed for businesses of all sizes.
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
                    ? 'bg-gradient-to-br from-red-900/20 to-navy-light border-red-500'
                    : 'bg-navy-light/50 border-primary/10'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-red-500 text-white text-sm font-semibold rounded-full">
                    {pkg.price}
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
                <Link
                  to="/consultation"
                  className={`block w-full py-3 rounded-xl font-semibold text-center transition-all ${
                    pkg.highlight
                      ? 'bg-red-500 text-white hover:shadow-lg hover:shadow-red-500/30'
                      : 'border border-primary text-primary hover:bg-primary/10'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
              <Zap className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-sm font-medium">Incident Response</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Rapid <span className="text-primary">Response Protocol</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              When incidents occur, our team responds immediately with a proven process.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500/50 via-primary/50 to-primary/50 hidden lg:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {incidentResponse.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <motion.div
                    className="relative z-10 w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-navy-light to-dark border-2 border-red-500 flex flex-col items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-lg font-bold text-red-400">{item.step}</span>
                  </motion.div>
                  <div className="text-primary font-bold mb-1">{item.time}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-gradient-to-br from-red-900/20 to-navy-light border border-red-500/30 rounded-2xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <Phone className="w-7 h-7 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">24/7 Emergency Response</h3>
                  <p className="text-gray-400">Our security operations center is always ready</p>
                </div>
              </div>
              <Link
                to="/contact"
                className="px-8 py-4 bg-red-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-500/30 transition-all"
              >
                Contact SOC Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Certifications & Partnerships</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4">
              Trusted <span className="text-primary">Expertise</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 bg-navy-light border border-primary/20 rounded-xl text-gray-300 hover:border-primary/50 hover:text-white transition-colors"
              >
                {cert}
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
              Security <span className="text-primary">Success Story</span>
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

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-red-900/20 via-dark to-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Don't Wait Until It's <span className="text-red-400">Too Late</span>
            </h2>
            <p className="text-gray-300 mb-10">
              Get a free security assessment to identify vulnerabilities before attackers do.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/assessment"
                className="group px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Shield className="w-5 h-5" />
                Get Free Assessment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="px-8 py-4 border border-primary/50 text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
