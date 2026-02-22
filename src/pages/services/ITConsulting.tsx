import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, Briefcase, Cloud, Shield, Cog, TrendingUp, ArrowRight, Check,
  Building2, Stethoscope, ShoppingCart, Factory, GraduationCap, DollarSign,
  Lightbulb, Target, Layers, Cpu, CheckCircle2, Zap, RefreshCw, Star
} from 'lucide-react';

// Services
const services = [
  { icon: Lightbulb, title: 'IT Strategy Development', description: 'Comprehensive IT roadmaps aligned with your business objectives and growth plans.' },
  { icon: Target, title: 'Infrastructure Assessment', description: 'In-depth evaluation of your current IT setup with optimization recommendations.' },
  { icon: Layers, title: 'Technology Selection', description: 'Expert guidance on choosing the right technology investments for your needs.' },
  { icon: Cloud, title: 'Cloud Integration', description: 'Seamless integration of cloud services with your existing infrastructure.' },
  { icon: Shield, title: 'Cybersecurity Planning', description: 'Develop robust security strategies to protect your digital assets.' },
  { icon: Cog, title: 'Digital Transformation', description: 'Guide your organization through digital evolution and modernization.' },
  { icon: Users, title: 'Training & Adoption', description: 'Ensure your team effectively uses new technologies with comprehensive training.' },
  { icon: TrendingUp, title: 'Vendor Management', description: 'Strategic vendor selection, negotiation, and relationship management.' },
];

// Industries
const industries = [
  { icon: DollarSign, name: 'Financial Services', description: 'Banks, insurance, fintech, and investment firms' },
  { icon: Stethoscope, name: 'Healthcare', description: 'Hospitals, clinics, and medical practices' },
  { icon: ShoppingCart, name: 'Retail & E-Commerce', description: 'Online stores and retail chains' },
  { icon: Factory, name: 'Manufacturing', description: 'Production and industrial operations' },
  { icon: GraduationCap, name: 'Education', description: 'Schools, universities, and edtech' },
  { icon: Building2, name: 'Professional Services', description: 'Law firms, accounting, and consultancies' },
];

// Transformation Framework
const transformationFramework = [
  { 
    phase: 1, 
    title: 'Audit & Discovery', 
    description: 'Comprehensive assessment of current state',
    activities: ['Technology inventory', 'Process mapping', 'Stakeholder interviews', 'Gap analysis']
  },
  { 
    phase: 2, 
    title: 'Strategy & Planning', 
    description: 'Define the roadmap and priorities',
    activities: ['Vision alignment', 'Solution design', 'Roadmap creation', 'Budget planning']
  },
  { 
    phase: 3, 
    title: 'Implementation', 
    description: 'Execute with agile methodology',
    activities: ['Phased rollout', 'Change management', 'Integration', 'Testing']
  },
  { 
    phase: 4, 
    title: 'Optimization', 
    description: 'Continuous improvement and support',
    activities: ['Performance monitoring', 'User feedback', 'Refinement', 'Scaling']
  },
];

// Retainer Services
const retainerServices = [
  {
    name: 'Fractional CTO',
    description: 'Strategic technology leadership without the full-time cost',
    features: ['Technology strategy', 'Team leadership', 'Vendor management', 'Board reporting'],
    hours: '20-40 hrs/month',
  },
  {
    name: 'IT Advisory',
    description: 'Ongoing technical guidance and support',
    features: ['Monthly strategy sessions', 'Project oversight', 'Technology planning', 'Priority support'],
    hours: '10-20 hrs/month',
  },
  {
    name: 'Technical Partner',
    description: 'Embedded technical expertise for your team',
    features: ['Architecture reviews', 'Code reviews', 'Best practices', 'Team mentoring'],
    hours: '20+ hrs/month',
  },
];

// AI Integration (Cross-sell)
const aiIntegration = [
  'AI readiness assessment',
  'Use case identification',
  'POC development',
  'AI strategy roadmap',
  'Vendor evaluation',
  'Implementation support',
];

// Case Study
const caseStudy = {
  client: 'Mid-Size Manufacturing Company',
  industry: 'Manufacturing',
  challenge: 'Legacy systems causing inefficiencies and preventing growth. Needed complete digital transformation.',
  solution: 'Developed comprehensive IT strategy, implemented cloud ERP, modernized infrastructure, and trained staff.',
  results: [
    { metric: '40%', label: 'Cost Reduction' },
    { metric: '3x', label: 'Faster Reporting' },
    { metric: '99.9%', label: 'System Uptime' },
    { metric: '6 months', label: 'ROI Achieved' },
  ],
};

// Stats
const stats = [
  { value: '200+', label: 'Consulting Engagements' },
  { value: '15+', label: 'Industries Served' },
  { value: '$10M+', label: 'Client Savings' },
  { value: '98%', label: 'Satisfaction Rate' },
];

export function ITConsulting() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue/10 rounded-full blur-3xl" />
          
          {/* Network Nodes Animation */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 600">
            {/* Nodes */}
            {[
              { x: 150, y: 100 }, { x: 300, y: 200 }, { x: 500, y: 150 },
              { x: 700, y: 250 }, { x: 850, y: 100 }, { x: 200, y: 400 },
              { x: 400, y: 350 }, { x: 600, y: 450 }, { x: 800, y: 400 },
              { x: 350, y: 500 }, { x: 650, y: 550 }, { x: 100, y: 250 },
            ].map((node, i) => (
              <g key={i}>
                {/* Connection lines */}
                {[
                  { x: 150, y: 100 }, { x: 300, y: 200 }, { x: 500, y: 150 },
                  { x: 700, y: 250 }, { x: 850, y: 100 }, { x: 200, y: 400 },
                ].slice(0, 3).map((target, j) => (
                  <motion.line
                    key={`line-${i}-${j}`}
                    x1={node.x}
                    y1={node.y}
                    x2={target.x}
                    y2={target.y}
                    stroke="#34d9b9"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 0.3, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: (i + j) * 0.3,
                    }}
                  />
                ))}
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="6"
                  fill="#34d9b9"
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              </g>
            ))}
          </svg>

          {/* Floating Strategy Icons */}
          {[Lightbulb, Target, Layers, Cog, TrendingUp, Users].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute hidden md:flex items-center justify-center w-14 h-14 rounded-xl bg-primary/5 border border-primary/20 backdrop-blur-sm"
              style={{
                left: `${5 + i * 15}%`,
                top: `${25 + (i % 2) * 35}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            >
              <Icon className="w-7 h-7 text-primary/40" />
            </motion.div>
          ))}

          {/* Circuit Board Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(52, 217, 185, 0.5) 1px, transparent 1px),
                linear-gradient(rgba(52, 217, 185, 0.5) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }} />
          </div>

          {/* Flowing Data Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full bg-primary/40 hidden md:block"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
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
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">IT Consulting</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-white mb-6">
              Strategic Technology <span className="text-primary">Leadership</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
              Expert IT consulting to align technology with your business goals. 
              From strategy to implementation, we guide your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/consultation"
                className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                Book Strategy Session
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-primary/50 text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all duration-300"
              >
                Contact Us
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
              <div key={stat.label} className="glass rounded-xl p-6 text-center">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue/10 border border-blue/30 rounded-full mb-6">
              <Cog className="w-4 h-4 text-blue" />
              <span className="text-blue text-sm font-medium">Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Consulting <span className="text-primary">Services</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive IT consulting services to transform your technology landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-6 bg-navy-light/50 border border-primary/10 rounded-2xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-blue/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-blue/30 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
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
              <span className="text-primary text-sm font-medium">Industry Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Industries We <span className="text-primary">Serve</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Deep domain expertise across key industries, with proven methodologies and best practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-6 bg-navy-light/50 border border-primary/10 rounded-xl hover:border-primary/30 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{industry.name}</h3>
                <p className="text-xs text-gray-500">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Framework */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue/10 border border-blue/30 rounded-full mb-6">
              <RefreshCw className="w-4 h-4 text-blue" />
              <span className="text-blue text-sm font-medium">Our Framework</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Digital Transformation <span className="text-primary">Framework</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our proven methodology ensures successful transformation from assessment to optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transformationFramework.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 bg-navy-light/50 border border-primary/10 rounded-2xl hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-navy">{phase.phase}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{phase.title}</h3>
                <p className="text-gray-400 mb-4">{phase.description}</p>
                <ul className="space-y-2">
                  {phase.activities.map((activity) => (
                    <li key={activity} className="flex items-center gap-2 text-sm text-gray-500">
                      <Check className="w-4 h-4 text-primary" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Retainer Services */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Ongoing Partnerships</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Retainer <span className="text-primary">Services</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Long-term partnerships for ongoing technology leadership and support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {retainerServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-gradient-to-br from-navy-light to-dark border border-primary/20 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <p className="text-primary font-semibold mb-6">{service.hours}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Integration */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <Cpu className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">AI Integration</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
                IT Consulting + <span className="text-primary">AI Advisory</span>
              </h2>
              <p className="text-gray-400 mb-8">
                IT Consulting is often the entry point to AI projects. We help you identify where AI can drive the most value and guide implementation.
              </p>
              <ul className="space-y-4 mb-8">
                {aiIntegration.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link
                to="/ai-solutioning"
                className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-medium"
              >
                Explore AI Solutions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-8 bg-gradient-to-br from-navy-light to-dark border border-primary/20 rounded-3xl">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-6">Why Combine IT Consulting + AI?</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Target, text: 'Identify high-impact AI use cases' },
                      { icon: Layers, text: 'Ensure AI fits your technology stack' },
                      { icon: Shield, text: 'Address security and compliance' },
                      { icon: TrendingUp, text: 'Maximize ROI on AI investments' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-navy/50 rounded-xl border border-primary/10">
                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-gray-300">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
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
              Transformation <span className="text-primary">Success</span>
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
      <section className="py-24 bg-gradient-to-br from-navy-light to-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Ready to Transform Your <span className="text-primary">IT</span>?
            </h2>
            <p className="text-gray-300 mb-10">
              Let's discuss your technology challenges and create a roadmap for success.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/consultation"
                className="group px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Book Strategy Session
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
