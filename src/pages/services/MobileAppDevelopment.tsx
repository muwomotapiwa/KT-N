import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Smartphone, Palette, Zap, Shield, TrendingUp, ArrowRight, Check,
  ShoppingCart, Calendar, Building2, Briefcase, Headphones, Settings,
  Download, Star, RefreshCw, BarChart, CheckCircle2, Layers, Cpu, Award,
  Wifi, Globe, Cloud
} from 'lucide-react';

// App Types
const appTypes = [
  { icon: ShoppingCart, title: 'E-Commerce Apps', description: 'Mobile shopping experiences that drive sales and customer loyalty' },
  { icon: Calendar, title: 'Booking & Scheduling', description: 'Appointment booking, reservations, and scheduling solutions' },
  { icon: Building2, title: 'Enterprise Apps', description: 'Internal tools and workflows for large organizations' },
  { icon: Briefcase, title: 'SaaS Mobile Apps', description: 'Mobile interfaces for software-as-a-service products' },
  { icon: Headphones, title: 'On-Demand Services', description: 'Uber-style apps for delivery, services, and logistics' },
  { icon: BarChart, title: 'Business Analytics', description: 'Mobile dashboards and reporting tools' },
];

// Tech Stack
const techStack = [
  { 
    category: 'Cross-Platform', 
    items: ['React Native', 'Flutter', 'Expo'],
    description: 'Build once, deploy everywhere with native performance'
  },
  { 
    category: 'Native iOS', 
    items: ['Swift', 'SwiftUI', 'Objective-C'],
    description: 'Full-power iOS development for Apple devices'
  },
  { 
    category: 'Native Android', 
    items: ['Kotlin', 'Jetpack Compose', 'Java'],
    description: 'Optimized Android apps for all devices'
  },
  { 
    category: 'Backend & APIs', 
    items: ['Firebase', 'Node.js', 'GraphQL', 'REST'],
    description: 'Scalable backend infrastructure'
  },
];

// Features
const features = [
  { icon: Smartphone, title: 'Custom App Development', description: 'Bespoke mobile applications designed for your unique business needs and user requirements.' },
  { icon: Layers, title: 'iOS & Android', description: 'Native and cross-platform development for both major mobile platforms with optimal performance.' },
  { icon: Palette, title: 'UX-First Design', description: 'User-centered design principles that ensure intuitive, engaging mobile experiences.' },
  { icon: Zap, title: 'Performance Optimization', description: 'Fast, responsive apps optimized for speed, battery efficiency, and smooth animations.' },
  { icon: TrendingUp, title: 'App Store Optimization', description: 'ASO strategies to maximize visibility and downloads on App Store and Play Store.' },
  { icon: Shield, title: 'Enterprise Security', description: 'Bank-grade security including encryption, secure auth, and compliance with industry standards.' },
];

// App Store Services
const appStoreServices = [
  { title: 'Play Store Submission', description: 'Complete Google Play Store setup, compliance review, and submission management' },
  { title: 'App Store Submission', description: 'Apple App Store review preparation, guidelines compliance, and release management' },
  { title: 'Store Listing Optimization', description: 'Screenshots, descriptions, keywords, and A/B testing for maximum conversions' },
  { title: 'Approval Management', description: 'Handling rejections, appeals, and ensuring smooth approval process' },
];

// Maintenance Services
const maintenanceServices = [
  { icon: RefreshCw, title: 'Regular Updates', description: 'OS compatibility updates and feature enhancements' },
  { icon: Shield, title: 'Security Patches', description: 'Ongoing security monitoring and vulnerability fixes' },
  { icon: BarChart, title: 'Analytics & Monitoring', description: 'Performance tracking and crash analytics' },
  { icon: Settings, title: 'Version Management', description: 'Staged rollouts and version control' },
];

// Process Steps
const processSteps = [
  { step: 1, title: 'Discovery & Strategy', description: 'Understanding your vision, target users, and defining the app strategy', deliverables: ['User personas', 'Feature roadmap', 'Technical architecture'] },
  { step: 2, title: 'UX/UI Design', description: 'Creating wireframes, prototypes, and pixel-perfect designs', deliverables: ['Wireframes', 'Interactive prototypes', 'Design system'] },
  { step: 3, title: 'Development', description: 'Building the app with clean, scalable code and regular demos', deliverables: ['Sprint demos', 'Beta builds', 'Documentation'] },
  { step: 4, title: 'Testing & QA', description: 'Comprehensive testing across devices and use cases', deliverables: ['Test reports', 'Bug fixes', 'Performance optimization'] },
  { step: 5, title: 'Store Submission', description: 'Preparing and submitting to App Store and Play Store', deliverables: ['Store assets', 'Compliance review', 'Launch coordination'] },
  { step: 6, title: 'Post-Launch Support', description: 'Ongoing maintenance, updates, and user feedback integration', deliverables: ['Monthly updates', 'Analytics reports', 'Support SLA'] },
];

// Case Study
const caseStudy = {
  title: 'Enterprise Mobile Solution',
  industry: 'Field Services',
  challenge: 'A field services company needed a mobile app for technicians to manage work orders, capture signatures, and work offline.',
  solution: 'Built a cross-platform app with offline-first architecture, real-time sync, and integration with their existing CRM.',
  results: [
    { metric: '35%', label: 'Faster Job Completion' },
    { metric: '50%', label: 'Reduction in Paperwork' },
    { metric: '4.8★', label: 'App Store Rating' },
    { metric: '98%', label: 'User Adoption' },
  ],
};

// Service Packages
const packages = [
  {
    name: 'MVP Launch',
    description: 'Get to market fast with core features',
    timeline: '8-12 weeks',
    features: ['Core features', 'Single platform', 'Basic analytics', 'Store submission', '3 months support'],
  },
  {
    name: 'Full Product',
    description: 'Complete mobile solution for growth',
    timeline: '16-24 weeks',
    features: ['Full feature set', 'iOS & Android', 'Advanced analytics', 'Push notifications', 'Admin dashboard', '6 months support'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    description: 'Scalable solution for large organizations',
    timeline: 'Custom',
    features: ['Custom integrations', 'Enterprise security', 'Offline support', 'Multi-tenant', 'Dedicated support', 'SLA guarantee'],
  },
];

export function MobileAppDevelopment() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
        {/* Animated Background - Network & Connectivity Theme */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Network Grid Background */}
          <div className="absolute inset-0 opacity-[0.06]">
            <svg className="w-full h-full">
              <defs>
                <pattern id="mobileGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#34d9b9" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#mobileGrid)" />
            </svg>
          </div>

          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#04a9b0]/5 rounded-full blur-3xl" />

          {/* Central Phone with Connection Hub */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block opacity-40"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Connection rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
                style={{
                  width: `${180 + i * 100}px`,
                  height: `${180 + i * 100}px`,
                  borderColor: i === 0 ? '#34d9b9' : i === 1 ? '#04a9b0' : '#0578ac',
                  opacity: 0.2 - i * 0.05,
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2 - i * 0.05, 0.3 - i * 0.05, 0.2 - i * 0.05],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}

            {/* Central Phone */}
            <div className="relative w-24 h-44 bg-gradient-to-b from-[#184470] to-[#011f44] rounded-[28px] border border-[#34d9b9]/30 shadow-xl shadow-[#34d9b9]/15">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-[#34d9b9]/20 rounded-full" />
              <div className="w-full h-full p-2 pt-6">
                <div className="w-full h-full bg-gradient-to-br from-[#34d9b9]/10 to-[#04a9b0]/10 rounded-2xl flex items-center justify-center overflow-hidden">
                  {/* App content animation */}
                  <motion.div className="space-y-2 w-full px-3">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="h-2.5 rounded-full bg-[#34d9b9]/30"
                        style={{ width: `${50 + Math.random() * 40}%` }}
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#34d9b9]/20 rounded-full" />
            </div>
          </motion.div>

          {/* Floating Connected Phones */}
          {[
            { left: '12%', top: '22%', delay: 0 },
            { left: '78%', top: '18%', delay: 0.5 },
            { left: '82%', top: '58%', delay: 1 },
            { left: '8%', top: '62%', delay: 1.5 },
          ].map((pos, i) => (
            <motion.div
              key={i}
              className="absolute hidden lg:block opacity-30"
              style={{ left: pos.left, top: pos.top }}
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: pos.delay,
              }}
            >
              <div className="w-14 h-24 bg-gradient-to-b from-[#184470] to-[#011f44] rounded-xl border border-[#34d9b9]/25 shadow-lg shadow-[#34d9b9]/10">
                <div className="w-full h-full p-1.5 pt-3">
                  <div className="w-full h-full bg-gradient-to-br from-[#04a9b0]/15 to-[#0578ac]/15 rounded-lg">
                    <motion.div
                      className="w-full h-1.5 bg-[#34d9b9]/40 rounded m-1"
                      animate={{ scaleX: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Network Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block opacity-25">
            {/* Connection lines from center to corners */}
            {[
              { x1: '50%', y1: '50%', x2: '15%', y2: '27%' },
              { x1: '50%', y1: '50%', x2: '81%', y2: '23%' },
              { x1: '50%', y1: '50%', x2: '85%', y2: '63%' },
              { x1: '50%', y1: '50%', x2: '11%', y2: '67%' },
            ].map((line, i) => (
              <motion.line
                key={i}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="#34d9b9"
                strokeWidth="1"
                strokeDasharray="8,8"
                initial={{ pathLength: 0, opacity: 0.3 }}
                animate={{ 
                  pathLength: [0, 1, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
              />
            ))}
          </svg>

          {/* Data Packets traveling on connections */}
          {[
            { startX: '50%', startY: '50%', endX: '15%', endY: '27%', delay: 0 },
            { startX: '50%', startY: '50%', endX: '81%', endY: '23%', delay: 0.8 },
            { startX: '50%', startY: '50%', endX: '85%', endY: '63%', delay: 1.6 },
            { startX: '50%', startY: '50%', endX: '11%', endY: '67%', delay: 2.4 },
          ].map((packet, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#34d9b9]/60 rounded-full shadow-md shadow-[#34d9b9]/30 hidden lg:block"
              style={{ left: packet.startX, top: packet.startY }}
              animate={{
                left: [packet.startX, packet.endX, packet.startX],
                top: [packet.startY, packet.endY, packet.startY],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: packet.delay,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* WiFi Signal Icons */}
          {[
            { left: '22%', top: '12%' },
            { left: '72%', top: '75%' },
            { left: '88%', top: '32%' },
          ].map((pos, i) => (
            <motion.div
              key={i}
              className="absolute hidden md:block"
              style={{ left: pos.left, top: pos.top }}
              animate={{ opacity: [0.15, 0.35, 0.15], scale: [0.9, 1.05, 0.9] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6 }}
            >
              <Wifi className="w-7 h-7 text-[#34d9b9]" />
            </motion.div>
          ))}

          {/* Floating Network Nodes */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full hidden md:block"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                background: ['#34d9b9', '#04a9b0', '#0578ac', '#89a8c0'][i % 4],
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.25,
              }}
            />
          ))}

          {/* Signal Waves from center */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#34d9b9] hidden lg:block"
              style={{
                width: '120px',
                height: '120px',
              }}
              animate={{
                scale: [1, 4, 4],
                opacity: [0.25, 0, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1.3,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Cloud Connection Icon */}
          <motion.div
            className="absolute right-[12%] top-[12%] hidden md:block opacity-25"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="relative">
              <Cloud className="w-12 h-12 text-[#04a9b0]" />
              <motion.div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-[#04a9b0]/40 to-transparent"
                animate={{ scaleY: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Globe/Internet Icon */}
          <motion.div
            className="absolute left-[10%] top-[42%] hidden md:block opacity-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <Globe className="w-10 h-10 text-[#0578ac]" />
          </motion.div>

          {/* Floating App Icons with theme colors */}
          {[Smartphone, Download, Star, Settings].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute hidden md:flex items-center justify-center w-10 h-10 rounded-xl border"
              style={{
                left: `${5 + i * 25}%`,
                top: `${82 + (i % 2) * 6}%`,
                backgroundColor: `rgba(${[52, 217, 185][i % 3] || 52}, ${[217, 185, 120][i % 3] || 217}, ${[185, 120, 172][i % 3] || 185}, 0.05)`,
                borderColor: ['#34d9b9', '#04a9b0', '#0578ac', '#89a8c0'][i],
                borderWidth: '1px',
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            >
              <Icon size={20} style={{ color: ['#34d9b9', '#04a9b0', '#0578ac', '#89a8c0'][i], opacity: 0.7 }} />
            </motion.div>
          ))}

          {/* Touch Ripple Effects with theme colors */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`ripple-${i}`}
              className="absolute rounded-full border hidden lg:block"
              style={{
                left: `${25 + i * 25}%`,
                top: `${40 + (i % 2) * 25}%`,
                borderColor: ['#34d9b9', '#04a9b0', '#0578ac'][i],
              }}
              animate={{
                width: ['0px', '60px', '80px'],
                height: ['0px', '60px', '80px'],
                opacity: [0.3, 0.1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.8,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Smartphone className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Mobile App Development</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-white mb-6">
              Apps That Users <span className="text-primary">Love</span>
            </h1>
            <p className="text-lg text-gray-300 mb-10">
              Native and cross-platform mobile apps with exceptional user experiences. 
              From concept to App Store launch and beyond, we build mobile solutions that drive engagement and growth.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                to="/consultation"
                className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                Discuss Your App Idea
              </Link>
              <Link
                to="/project-start"
                className="px-8 py-4 border border-primary/50 text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all duration-300"
              >
                Start Your Project
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
            {[
              { value: '50+', label: 'Apps Launched' },
              { value: '4.7★', label: 'Avg. Rating' },
              { value: '1M+', label: 'Total Downloads' },
              { value: '99.5%', label: 'Crash-Free Rate' },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* App Types */}
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
              <span className="text-blue text-sm font-medium">App Types</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Apps for Every <span className="text-primary">Use Case</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Whether you need an e-commerce app, enterprise solution, or on-demand service platform, we've got you covered.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appTypes.map((type, index) => (
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
              <Cpu className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Technology Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Built With <span className="text-primary">Modern Tech</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We use the latest frameworks and technologies to build fast, reliable, and maintainable mobile apps.
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
                className="p-6 bg-navy-light/50 border border-primary/10 rounded-2xl hover:border-primary/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-primary mb-2">{category.category}</h3>
                <p className="text-sm text-gray-500 mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span key={item} className="px-3 py-1 bg-navy border border-primary/20 rounded-lg text-sm text-gray-300">
                      {item}
                    </span>
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
              Why Choose <span className="text-primary">Kypex-Tech</span>?
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

      {/* App Store Services */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <Download className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">App Store Success</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
                From Development to <span className="text-primary">Store Launch</span>
              </h2>
              <p className="text-gray-400 mb-8">
                We handle the entire app store submission process, ensuring your app meets all guidelines and gets approved quickly.
              </p>
              <div className="space-y-4">
                {appStoreServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-navy-light/50 border border-primary/10 rounded-xl"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{service.title}</div>
                      <div className="text-sm text-gray-400">{service.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-8 bg-gradient-to-br from-navy-light to-dark border border-primary/20 rounded-3xl">
                <h3 className="text-xl font-bold text-white mb-6">Post-Launch Support</h3>
                <div className="grid grid-cols-2 gap-4">
                  {maintenanceServices.map((service) => (
                    <div key={service.title} className="p-4 bg-navy/50 border border-primary/10 rounded-xl">
                      <service.icon className="w-8 h-8 text-primary mb-3" />
                      <div className="font-semibold text-white text-sm mb-1">{service.title}</div>
                      <div className="text-xs text-gray-400">{service.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
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
              From Idea to <span className="text-primary">App Store</span>
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
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex items-center gap-2 text-sm text-gray-500">
                      <Check className="w-4 h-4 text-primary" />
                      {deliverable}
                    </li>
                  ))}
                </ul>
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
              Success <span className="text-primary">Story</span>
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
                <h3 className="text-2xl font-bold text-white mb-4">{caseStudy.title}</h3>
                
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
              <Award className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Packages</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Engagement <span className="text-primary">Options</span>
            </h2>
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
                    Recommended
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-400 mb-2">{pkg.description}</p>
                <p className="text-primary font-semibold mb-6">Timeline: {pkg.timeline}</p>
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
                      ? 'bg-primary text-navy hover:shadow-lg hover:shadow-primary/30'
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

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-navy-light to-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Ready to Build Your <span className="text-primary">App</span>?
            </h2>
            <p className="text-gray-300 mb-10">
              Let's discuss your app idea and create something users will love.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/consultation"
                className="group px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Discuss Your App
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/project-start"
                className="px-8 py-4 border border-primary/50 text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all duration-300"
              >
                Start Project Brief
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
