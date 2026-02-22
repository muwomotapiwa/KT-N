import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BarChart, Database, TrendingUp, Zap, ArrowRight, Check,
  LineChart, PieChart, Activity, Layers, Cloud, Shield, Server, Cpu,
  Target, DollarSign, Clock, Building2, CheckCircle2, Star, Briefcase
} from 'lucide-react';

// Core Services
const services = [
  { icon: BarChart, title: 'BI Dashboards', description: 'Interactive dashboards for real-time business insights and decision-making.' },
  { icon: TrendingUp, title: 'Predictive Analytics', description: 'Forecast trends, behaviors, and outcomes with machine learning models.' },
  { icon: Database, title: 'Big Data Processing', description: 'Handle and analyze massive datasets with scalable infrastructure.' },
  { icon: Layers, title: 'Data Integration', description: 'Unify data from multiple sources into a single source of truth.' },
  { icon: Activity, title: 'Real-Time Analytics', description: 'Instant insights from streaming data for rapid decision-making.' },
  { icon: PieChart, title: 'Data Visualization', description: 'Clear, compelling visual representations of complex data.' },
];

// Data Stack
const dataStack = [
  { 
    category: 'BI & Visualization', 
    items: ['Power BI', 'Tableau', 'Looker', 'Metabase'],
    icon: BarChart
  },
  { 
    category: 'Data Engineering', 
    items: ['SQL', 'Python', 'Spark', 'Airflow'],
    icon: Server
  },
  { 
    category: 'Cloud Platforms', 
    items: ['Azure Synapse', 'AWS Redshift', 'Google BigQuery', 'Snowflake'],
    icon: Cloud
  },
  { 
    category: 'ML & AI', 
    items: ['Python', 'TensorFlow', 'scikit-learn', 'Azure ML'],
    icon: Cpu
  },
];

// Data Engineering Services
const dataEngineering = [
  { title: 'Data Pipeline Development', description: 'Automated ETL/ELT pipelines for continuous data flow' },
  { title: 'Data Warehouse Design', description: 'Scalable architectures for analytical workloads' },
  { title: 'Data Lake Implementation', description: 'Store structured and unstructured data at scale' },
  { title: 'Stream Processing', description: 'Real-time data ingestion and processing' },
];

// Business Outcomes
const businessOutcomes = [
  { 
    metric: '35%', 
    label: 'Revenue Increase',
    description: 'Average improvement in revenue forecasting accuracy',
    icon: DollarSign
  },
  { 
    metric: '50%', 
    label: 'Cost Reduction',
    description: 'Reduced operational costs through data-driven optimization',
    icon: TrendingUp
  },
  { 
    metric: '10x', 
    label: 'Faster Insights',
    description: 'Accelerated time from data to actionable insights',
    icon: Clock
  },
  { 
    metric: '90%', 
    label: 'Decision Confidence',
    description: 'Increased confidence in business decisions',
    icon: Target
  },
];

// Data Governance
const dataGovernance = [
  { icon: Shield, title: 'Data Quality', description: 'Ensure accuracy, completeness, and consistency' },
  { icon: Building2, title: 'Data Compliance', description: 'POPIA, GDPR, and industry regulations' },
  { icon: Database, title: 'Access Control', description: 'Role-based permissions and audit trails' },
  { icon: Layers, title: 'Data Lineage', description: 'Track data origin and transformations' },
];

// Process
const process = [
  { step: 1, title: 'Discover', description: 'Understand your data landscape and business questions' },
  { step: 2, title: 'Design', description: 'Architect the data solution and choose tools' },
  { step: 3, title: 'Build', description: 'Develop pipelines, models, and dashboards' },
  { step: 4, title: 'Deploy', description: 'Launch and integrate with your workflows' },
  { step: 5, title: 'Optimize', description: 'Continuously improve and expand capabilities' },
];

// Case Study
const caseStudy = {
  client: 'Retail Chain',
  industry: 'Retail & E-Commerce',
  challenge: 'Struggled with inventory management and demand forecasting, leading to stockouts and overstock situations.',
  solution: 'Built a comprehensive analytics platform with predictive models for demand forecasting, real-time inventory tracking, and executive dashboards.',
  results: [
    { metric: '25%', label: 'Reduced Stockouts' },
    { metric: '30%', label: 'Less Overstock' },
    { metric: '$2M', label: 'Annual Savings' },
    { metric: '4.5x', label: 'Forecast Accuracy' },
  ],
};

// Packages
const packages = [
  {
    name: 'Analytics Starter',
    description: 'Get started with business intelligence',
    features: ['Up to 5 dashboards', 'Single data source', 'Basic reports', 'Monthly updates', 'Email support'],
    highlight: false,
  },
  {
    name: 'Analytics Pro',
    description: 'Comprehensive analytics for growing businesses',
    features: ['Unlimited dashboards', 'Multiple data sources', 'Predictive models', 'Real-time updates', 'Dedicated analyst', 'Priority support'],
    highlight: true,
  },
  {
    name: 'Enterprise Analytics',
    description: 'Full-scale data platform for enterprises',
    features: ['Custom data warehouse', 'ML/AI integration', 'Data governance', 'Self-service BI', 'Embedded analytics', '24/7 support'],
    highlight: false,
  },
];

export function DataAnalytics() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue/10 rounded-full blur-3xl" />
          
          {/* Animated Charts */}
          <div className="absolute right-[10%] top-[20%] hidden lg:block">
            {/* Bar Chart */}
            <div className="flex items-end gap-2 h-32">
              {[60, 80, 45, 90, 70, 55, 85].map((height, i) => (
                <motion.div
                  key={i}
                  className="w-4 bg-gradient-to-t from-primary/40 to-primary/10 rounded-t"
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{
                    duration: 1,
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    repeatDelay: 2,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Floating Pie Chart */}
          <motion.div
            className="absolute left-[10%] top-[30%] hidden lg:block"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#34d9b9" strokeWidth="20" strokeDasharray="60 191" opacity="0.3" />
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#0578ac" strokeWidth="20" strokeDasharray="80 171" strokeDashoffset="-60" opacity="0.3" />
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#04a9b0" strokeWidth="20" strokeDasharray="50 201" strokeDashoffset="-140" opacity="0.3" />
            </svg>
          </motion.div>

          {/* Line Chart Animation */}
          <svg className="absolute bottom-0 left-0 right-0 h-48 opacity-20" viewBox="0 0 1200 200" preserveAspectRatio="none">
            <motion.path
              d="M0 150 Q 100 120, 200 140 T 400 100 T 600 130 T 800 80 T 1000 110 T 1200 60"
              stroke="#34d9b9"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'loop', repeatDelay: 1 }}
            />
            <motion.path
              d="M0 180 Q 100 150, 200 170 T 400 140 T 600 160 T 800 120 T 1000 140 T 1200 100"
              stroke="#0578ac"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 0.5, repeat: Infinity, repeatType: 'loop', repeatDelay: 1 }}
            />
          </svg>

          {/* Floating Numbers */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`num-${i}`}
              className="absolute text-primary/20 font-mono text-lg font-bold hidden md:block"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            >
              {Math.floor(Math.random() * 100)}%
            </motion.div>
          ))}

          {/* Data Points Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle, rgba(52, 217, 185, 0.5) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }} />
          </div>

          {/* Floating Chart Icons */}
          {[BarChart, LineChart, PieChart, Activity].map((Icon, i) => (
            <motion.div
              key={`icon-${i}`}
              className="absolute hidden md:flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20"
              style={{
                left: `${20 + i * 20}%`,
                top: `${50 + (i % 2) * 20}%`,
              }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              <Icon className="w-6 h-6 text-primary/50" />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <BarChart className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Data Analytics</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-white mb-6">
              Turn Data Into <span className="text-primary">Decisions</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
              Transform raw data into actionable insights that drive business growth. 
              From BI dashboards to predictive analytics, we help you make data-driven decisions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/consultation"
                className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                Start Your Data Journey
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
            {[
              { value: '50+', label: 'Analytics Projects' },
              { value: '1B+', label: 'Records Processed' },
              { value: '99.9%', label: 'Data Accuracy' },
              { value: '5x', label: 'Avg. ROI' },
            ].map((stat) => (
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
              <LineChart className="w-4 h-4 text-blue" />
              <span className="text-blue text-sm font-medium">Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Analytics <span className="text-primary">Solutions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              End-to-end data analytics services from data engineering to insights delivery.
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
                className="group p-8 bg-navy-light/50 border border-primary/10 rounded-2xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-navy" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Stack */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Server className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Technology Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Modern Data <span className="text-primary">Stack</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We work with industry-leading tools and platforms to build robust data solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dataStack.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-navy-light/50 border border-primary/10 rounded-2xl hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">{category.category}</h3>
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

      {/* Data Engineering */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue/10 border border-blue/30 rounded-full mb-6">
                <Database className="w-4 h-4 text-blue" />
                <span className="text-blue text-sm font-medium">Data Engineering</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
                Build Your Data <span className="text-primary">Foundation</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Analytics is only as good as the data infrastructure behind it. We build robust data pipelines and architectures.
              </p>
              <div className="space-y-4">
                {dataEngineering.map((service, index) => (
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
                <h3 className="text-xl font-bold text-white mb-6">Data Governance</h3>
                <p className="text-gray-400 mb-6">
                  Enterprise analytics requires strong governance. We help you manage data quality, security, and compliance.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {dataGovernance.map((item) => (
                    <div key={item.title} className="p-4 bg-navy/50 border border-primary/10 rounded-xl">
                      <item.icon className="w-8 h-8 text-primary mb-3" />
                      <div className="font-semibold text-white text-sm mb-1">{item.title}</div>
                      <div className="text-xs text-gray-400">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Outcomes */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Business Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Measurable <span className="text-primary">Outcomes</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our analytics solutions deliver tangible business results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessOutcomes.map((outcome, index) => (
              <motion.div
                key={outcome.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-navy-light/50 border border-primary/10 rounded-2xl"
              >
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-blue/20 flex items-center justify-center mb-4">
                  <outcome.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{outcome.metric}</div>
                <div className="text-lg font-semibold text-white mb-2">{outcome.label}</div>
                <p className="text-sm text-gray-400">{outcome.description}</p>
              </motion.div>
            ))}
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
              How We <span className="text-primary">Work</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    className="relative z-10 w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-xl font-bold text-navy">{item.step}</span>
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
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
              Analytics <span className="text-primary">Success Story</span>
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
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Packages</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Analytics <span className="text-primary">Packages</span>
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
              Ready to Unlock Your <span className="text-primary">Data</span>?
            </h2>
            <p className="text-gray-300 mb-10">
              Let's discuss how data analytics can transform your business decisions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/consultation"
                className="group px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Start Your Data Journey
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
