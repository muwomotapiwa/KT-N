import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sparkles, MessageSquare, Eye, TrendingUp, Settings, Heart, Brain, Cpu, Workflow, ArrowRight, Check,
  Lightbulb, Target, DollarSign, Shield, Cog, Users,
  ShoppingCart, Megaphone, HeadphonesIcon, Zap, Code, Layers, RefreshCw,
  Activity, Building2, Briefcase, Factory, Truck, Stethoscope, GraduationCap,
  LineChart, Rocket, Award, Clock, CheckCircle2, ChevronRight
} from 'lucide-react';

// AI Services Data
const aiServices = [
  {
    id: 'strategy',
    title: 'AI Strategy & Consulting',
    description: 'Strategic advisory services to help you navigate the AI landscape and identify high-impact opportunities.',
    icon: Lightbulb,
    color: 'from-primary to-primary-dark',
    offerings: [
      { name: 'AI Readiness Assessment', desc: 'Evaluate your organization\'s preparedness for AI adoption' },
      { name: 'AI Roadmap Development', desc: 'Create a phased implementation plan aligned with business goals' },
      { name: 'Use Case Discovery Workshops', desc: 'Identify and prioritize AI opportunities across your organization' },
      { name: 'ROI & Feasibility Analysis', desc: 'Quantify potential returns and technical viability' },
      { name: 'AI Governance Framework Design', desc: 'Establish policies, ethics guidelines, and oversight structures' },
    ]
  },
  {
    id: 'automation',
    title: 'Business Process Automation',
    description: 'Intelligent automation solutions that streamline operations, reduce costs, and free your team for strategic work.',
    icon: Cog,
    color: 'from-blue to-primary',
    offerings: [
      { name: 'Intelligent Process Automation', desc: 'End-to-end automation of complex business workflows' },
      { name: 'AI Workflow Integration', desc: 'Embed AI into CRM, ERP, and support systems' },
      { name: 'AI Email & Response Automation', desc: 'Smart email routing, drafting, and response generation' },
      { name: 'Internal AI Knowledge Assistants', desc: 'Custom chatbots for employee productivity' },
      { name: 'Document Processing Automation', desc: 'Extract and process invoices, contracts, and forms' },
    ]
  },
  {
    id: 'sales-marketing',
    title: 'AI-Powered Sales & Marketing',
    description: 'Drive revenue growth with AI solutions that optimize every stage of the customer journey.',
    icon: TrendingUp,
    color: 'from-primary-dark to-blue',
    offerings: [
      { name: 'AI Lead Scoring', desc: 'Prioritize prospects based on conversion probability' },
      { name: 'Revenue Forecasting', desc: 'Predict sales outcomes with machine learning' },
      { name: 'AI Content Generation', desc: 'Create marketing copy, emails, and social content' },
      { name: 'Customer Segmentation', desc: 'Identify high-value segments and personalization opportunities' },
      { name: 'Campaign Optimization', desc: 'Continuously improve marketing performance with AI' },
    ]
  },
  {
    id: 'custom-development',
    title: 'Custom AI Application Development',
    description: 'Full-stack AI application development from prototype to production-ready solutions.',
    icon: Code,
    color: 'from-blue to-primary-dark',
    offerings: [
      { name: 'Custom AI SaaS Platforms', desc: 'Build AI-powered software products' },
      { name: 'Internal AI Tools', desc: 'Proprietary tools tailored to your workflows' },
      { name: 'AI Dashboards', desc: 'Intelligent analytics and visualization platforms' },
      { name: 'AI-Powered Web Applications', desc: 'Smart web apps with embedded AI capabilities' },
      { name: 'AI MVP Development', desc: 'Rapid prototyping for startups and innovation teams' },
    ]
  },
  {
    id: 'integration',
    title: 'AI Integration & Data Engineering',
    description: 'Connect AI capabilities to your existing systems with robust data pipelines and integrations.',
    icon: Layers,
    color: 'from-primary to-blue',
    offerings: [
      { name: 'AI + Salesforce Integration', desc: 'Enhance CRM with predictive and generative AI' },
      { name: 'AI + Microsoft Dynamics 365', desc: 'Embed AI into your business applications' },
      { name: 'AI + Data Warehouse Integration', desc: 'Connect models to your data infrastructure' },
      { name: 'API-Based AI Architectures', desc: 'Build scalable, service-oriented AI systems' },
      { name: 'Real-Time AI Data Pipelines', desc: 'Stream processing for instant AI insights' },
    ]
  },
  {
    id: 'mlops',
    title: 'MLOps & Model Operations',
    description: 'Production-grade infrastructure for deploying, monitoring, and maintaining AI models at scale.',
    icon: Settings,
    color: 'from-primary-dark to-primary',
    offerings: [
      { name: 'ML Pipeline Development', desc: 'Automated training and deployment workflows' },
      { name: 'Model Monitoring', desc: '24/7 performance tracking and drift detection' },
      { name: 'Continuous Retraining', desc: 'Keep models accurate with fresh data' },
      { name: 'Version Control & Rollback', desc: 'Manage model versions safely' },
      { name: 'Scalable Inference Infrastructure', desc: 'Handle any load with auto-scaling' },
    ]
  },
  {
    id: 'security',
    title: 'AI Security & Governance',
    description: 'Enterprise-grade security, compliance, and governance for responsible AI deployment.',
    icon: Shield,
    color: 'from-blue to-primary',
    offerings: [
      { name: 'AI Risk Assessment', desc: 'Identify and mitigate AI-related risks' },
      { name: 'Data Privacy Alignment', desc: 'POPIA, GDPR, and regulatory compliance' },
      { name: 'Secure Model Deployment', desc: 'Hardened infrastructure and access controls' },
      { name: 'Audit Logging & Explainability', desc: 'Transparent AI decision tracking' },
      { name: 'AI Governance Controls', desc: 'Policies, procedures, and oversight mechanisms' },
    ]
  },
];

// Packaged Solutions
const packagedSolutions = [
  {
    title: 'AI for Sales',
    icon: ShoppingCart,
    color: 'primary',
    solutions: ['AI Lead Scoring', 'Proposal & Quote Generation', 'Revenue Forecasting', 'Sales Assistant Bots', 'Pipeline Intelligence']
  },
  {
    title: 'AI for Marketing',
    icon: Megaphone,
    color: 'blue',
    solutions: ['Content Generation', 'Customer Segmentation', 'Campaign Optimization', 'Personalization Engines', 'Predictive Analytics']
  },
  {
    title: 'AI for Customer Support',
    icon: HeadphonesIcon,
    color: 'primary-dark',
    solutions: ['AI Chatbots & Virtual Agents', 'Sentiment Analysis', 'Auto Ticket Classification', 'Knowledge Base Systems', 'Response Automation']
  },
];

// Industry Verticals
const industries = [
  { name: 'Financial Services', icon: DollarSign, examples: 'Fraud detection, risk scoring, algorithmic trading' },
  { name: 'Retail & E-Commerce', icon: ShoppingCart, examples: 'Demand forecasting, personalization, inventory optimization' },
  { name: 'Healthcare', icon: Stethoscope, examples: 'Diagnostic support, patient journey optimization, drug discovery' },
  { name: 'Manufacturing', icon: Factory, examples: 'Predictive maintenance, quality control, supply chain optimization' },
  { name: 'Logistics', icon: Truck, examples: 'Route optimization, demand prediction, warehouse automation' },
  { name: 'Education', icon: GraduationCap, examples: 'Adaptive learning, student analytics, content personalization' },
];

// Technical Expertise
const technicalExpertise = [
  { title: 'GenAI & RAG', description: 'Large language models, retrieval-augmented generation, and custom AI agents', icon: Sparkles },
  { title: 'Natural Language Processing', description: 'Text analysis, sentiment detection, chatbots, and language understanding', icon: MessageSquare },
  { title: 'Computer Vision', description: 'Image recognition, object detection, OCR, and visual inspection', icon: Eye },
  { title: 'Predictive Modeling', description: 'Forecasting, classification, regression, and anomaly detection', icon: LineChart },
  { title: 'MLOps & Infrastructure', description: 'Model deployment, monitoring, scaling, and lifecycle management', icon: Cpu },
  { title: 'Responsible AI', description: 'Fairness, transparency, explainability, and ethical AI practices', icon: Heart },
];

// Outcomes & Statistics
const outcomes = [
  { metric: '40%', label: 'Average Cost Reduction', icon: DollarSign },
  { metric: '3x', label: 'Faster Decision Making', icon: Zap },
  { metric: '60%', label: 'Process Efficiency Gain', icon: Activity },
  { metric: '90%', label: 'Accuracy Improvement', icon: Target },
];

// Premium Programs
const premiumPrograms = [
  { title: 'Enterprise AI Architecture Design', desc: 'Comprehensive AI infrastructure planning for large organizations' },
  { title: 'AI Transformation Programs', desc: 'Organization-wide AI adoption and change management' },
  { title: 'AI Center of Excellence Setup', desc: 'Build internal AI capabilities and governance structures' },
  { title: 'AI Productization Consulting', desc: 'Turn AI capabilities into market-ready products' },
  { title: 'AI for Startups: MVP in 60 Days', desc: 'Rapid AI prototype development for early-stage companies' },
];

export function AISolutioning() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Futuristic Design */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-navy via-[#0a1628] to-navy">
        {/* Animated neural network background */}
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.circle
                key={i}
                cx={100 + (i % 5) * 200}
                cy={100 + Math.floor(i / 5) * 200}
                r="4"
                fill="#34d9b9"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
              />
            ))}
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.line
                key={`line-${i}`}
                x1={100 + (i % 5) * 200}
                y1={100 + Math.floor(i / 5) * 200}
                x2={100 + ((i + 1) % 5) * 200}
                y2={100 + Math.floor((i + 1) / 5) * 200}
                stroke="#34d9b9"
                strokeWidth="1"
                className="neural-line"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.05 }}
              />
            ))}
          </svg>
          
          {/* Glowing orbs */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(circle, rgba(52,217,185,0.15) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          {/* Floating particles */}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-primary/50 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 2,
                repeat: Infinity,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <Brain className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-primary text-sm font-medium">Enterprise AI Solutions</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6">
                <span className="text-white">We Solve</span>
                <br />
                <span className="text-white">Business Problems</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-blue to-primary-dark bg-clip-text text-transparent">
                  Using AI.
                </span>
              </h1>
              
              <p className="text-lg text-gray-300 mb-8 max-w-xl">
                From strategy to deployment, we partner with you to implement AI solutions that drive measurable business outcomes – reducing costs, accelerating decisions, and unlocking new revenue streams.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/consultation"
                  className="group px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  Book AI Strategy Session
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#services"
                  className="px-8 py-4 border border-primary/50 text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all duration-300"
                >
                  Explore Our Services
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              {/* 3D-like AI brain visualization */}
              <div className="relative w-full aspect-square">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="w-64 h-64 border border-primary/30 rounded-full" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="w-48 h-48 border border-blue/30 rounded-full" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="w-32 h-32 border border-primary-dark/30 rounded-full" />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-24 h-24 bg-gradient-to-br from-primary to-blue rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/30"
                    animate={{
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        '0 0 30px rgba(52,217,185,0.3)',
                        '0 0 60px rgba(52,217,185,0.5)',
                        '0 0 30px rgba(52,217,185,0.3)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Cpu className="w-12 h-12 text-navy" />
                  </motion.div>
                </div>
                
                {/* Orbiting icons */}
                {[Lightbulb, Cog, Shield, Code].map((Icon, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      top: '50%',
                      left: '50%',
                    }}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 15 + i * 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-navy-light border border-primary/30 rounded-xl flex items-center justify-center"
                      style={{
                        transform: `translateX(${120 + i * 30}px) translateY(-50%)`,
                      }}
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 15 + i * 2,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outcomes / Stats Section */}
      <section className="py-12 bg-dark border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={outcome.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                  <outcome.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{outcome.metric}</div>
                <div className="text-sm text-gray-400">{outcome.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section - Main */}
      <section id="services" className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Our AI Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-6">
              Comprehensive AI <span className="text-primary">Solutions</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              From strategic advisory to production deployment, we offer end-to-end AI services designed to solve real business problems and deliver measurable ROI.
            </p>
          </motion.div>

          <div className="space-y-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-navy-light/50 to-navy/50 border border-primary/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    {/* Service Header */}
                    <div className="lg:w-1/3">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} mb-4`}>
                        <service.icon className="w-8 h-8 text-navy" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400">{service.description}</p>
                    </div>
                    
                    {/* Service Offerings */}
                    <div className="lg:w-2/3">
                      <div className="grid sm:grid-cols-2 gap-4">
                        {service.offerings.map((offering, i) => (
                          <div key={i} className="flex items-start gap-3 p-4 bg-navy/50 rounded-xl border border-primary/5 hover:border-primary/20 transition-colors">
                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <div className="text-white font-medium">{offering.name}</div>
                              <div className="text-sm text-gray-400">{offering.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaged Solutions Section */}
      <section className="py-24 bg-gradient-to-b from-dark to-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue/10 border border-blue/30 rounded-full mb-6">
              <Zap className="w-4 h-4 text-blue" />
              <span className="text-blue text-sm font-medium">Business Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-6">
              AI Solutions by <span className="text-primary">Department</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Pre-packaged AI solutions designed for specific business functions – ready to deploy with rapid time-to-value.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packagedSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative p-8 bg-gradient-to-br from-navy-light to-navy border border-primary/10 rounded-2xl hover:border-primary/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-${solution.color}/20 mb-6`}>
                    <solution.icon className={`w-7 h-7 text-${solution.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <ul className="space-y-3">
                    {solution.solutions.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-400">
                        <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Verticals Section */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-dark/10 border border-primary-dark/30 rounded-full mb-6">
              <Building2 className="w-4 h-4 text-primary-dark" />
              <span className="text-primary-dark text-sm font-medium">Industry Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-6">
              AI Across <span className="text-primary">Industries</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Deep domain expertise across key industries, with proven use cases and implementation experience.
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
                className="group p-6 bg-gradient-to-br from-navy-light/50 to-navy/50 border border-primary/10 rounded-xl hover:border-primary/30 hover:bg-navy-light/70 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{industry.examples}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Expertise Section */}
      <section className="py-24 bg-gradient-to-b from-navy to-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue/10 border border-blue/30 rounded-full mb-6">
              <Cpu className="w-4 h-4 text-blue" />
              <span className="text-blue text-sm font-medium">Technical Foundation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-6">
              Our Technical <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Built on deep technical foundations across the full AI stack – from research to production.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalExpertise.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 bg-gradient-to-br from-navy-light/30 to-navy/30 border border-primary/10 rounded-xl hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-blue/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-blue/30 transition-colors">
                  <tech.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                  {tech.title}
                </h3>
                <p className="text-sm text-gray-400">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Programs Section */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">Premium Tier</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
                Enterprise AI <span className="text-primary">Programs</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Strategic AI initiatives for organizations ready to transform at scale. Our premium programs provide comprehensive support from strategy through execution.
              </p>
              
              <div className="space-y-4">
                {premiumPrograms.map((program, index) => (
                  <motion.div
                    key={program.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-navy/50 rounded-xl border border-primary/10 hover:border-primary/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Rocket className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">{program.title}</div>
                      <div className="text-sm text-gray-400">{program.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative p-8 bg-gradient-to-br from-navy-light to-dark border border-primary/20 rounded-3xl overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue/20 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">AI Readiness Assessment</h3>
                    <p className="text-gray-400">Start with a complimentary assessment</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      'Evaluate current AI maturity',
                      'Identify quick-win opportunities',
                      'Assess data readiness',
                      'Define implementation roadmap',
                      'Calculate potential ROI',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
                    <Clock className="w-4 h-4" />
                    <span>45-minute consultation</span>
                  </div>
                  
                  <Link
                    to="/consultation"
                    className="block w-full py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl text-center hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                  >
                    Book Free Assessment
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-dark to-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue/10 border border-blue/30 rounded-full mb-6">
              <Workflow className="w-4 h-4 text-blue" />
              <span className="text-blue text-sm font-medium">Our Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-6">
              From Idea to <span className="text-primary">Impact</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our proven methodology ensures successful AI implementation from discovery to optimization.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { step: 1, title: 'Discovery', description: 'Understand your business challenges, data landscape, and AI opportunities.' },
                { step: 2, title: 'Strategy', description: 'Define the AI roadmap, prioritize use cases, and plan architecture.' },
                { step: 3, title: 'Development', description: 'Build, train, and validate AI models tailored to your needs.' },
                { step: 4, title: 'Deployment', description: 'Launch AI solutions with robust MLOps and integration.' },
                { step: 5, title: 'Optimization', description: 'Continuously monitor, improve, and scale for maximum ROI.' },
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative text-center"
                >
                  <motion.div
                    className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-navy-light to-dark border-2 border-primary flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-2xl font-bold text-primary">{step.step}</span>
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
                Why Choose <span className="text-primary">Kypex-Tech</span> for AI?
              </h2>
              <p className="text-gray-400 mb-8">
                We combine deep technical expertise with practical business acumen to deliver AI solutions that create real, measurable value.
              </p>
              <ul className="space-y-4">
                {[
                  'Business-first approach – we solve problems, not just build models',
                  'End-to-end delivery from strategy to production support',
                  'Industry-specific expertise across multiple verticals',
                  'Proven ROI with transparent success metrics',
                  'Enterprise-grade security and compliance',
                  'Ongoing partnership with maintenance and optimization SLAs',
                ].map((feature, index) => (
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
                    <span className="text-gray-300">{feature}</span>
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
              <div className="relative p-8 bg-gradient-to-br from-navy-light to-dark border border-primary/20 rounded-3xl overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue/20 rounded-full blur-3xl" />
                
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-navy/50 rounded-xl border border-primary/10">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Outcome-Focused</div>
                      <div className="text-sm text-gray-400">Measurable business results, not just technology</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-navy/50 rounded-xl border border-primary/10">
                    <div className="w-12 h-12 rounded-lg bg-blue/20 flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Dedicated Teams</div>
                      <div className="text-sm text-gray-400">Senior AI engineers and data scientists</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-navy/50 rounded-xl border border-primary/10">
                    <div className="w-12 h-12 rounded-lg bg-primary-dark/20 flex items-center justify-center">
                      <RefreshCw className="w-6 h-6 text-primary-dark" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Continuous Support</div>
                      <div className="text-sm text-gray-400">Ongoing optimization and maintenance</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-navy-light to-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-6">
              Ready to Transform Your Business with <span className="text-primary">AI</span>?
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Let's explore how artificial intelligence can solve your business challenges. Start with a free AI strategy session today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/consultation"
                className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                Book AI Strategy Session
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-primary/50 text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all duration-300"
              >
                Contact Our AI Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
