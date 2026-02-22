export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
  path: string;
  features: { title: string; description: string }[];
}

export const services: Service[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    shortDescription: 'Custom, responsive websites that drive results and elevate your brand presence.',
    icon: 'Globe',
    path: '/services/website-development',
    features: [
      { title: 'Responsive Design', description: 'Pixel-perfect layouts that adapt seamlessly across all devices and screen sizes.' },
      { title: 'Custom Solutions', description: 'Tailored web applications built to meet your specific business requirements.' },
      { title: 'SEO Optimization', description: 'Built-in search engine optimization to improve your online visibility.' },
    ]
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    shortDescription: 'Native and cross-platform mobile apps with exceptional user experiences.',
    icon: 'Smartphone',
    path: '/services/mobile-app-development',
    features: [
      { title: 'Custom Apps', description: 'Bespoke mobile applications designed for your unique business needs.' },
      { title: 'iOS & Android', description: 'Native development for both major mobile platforms.' },
      { title: 'UX Focus', description: 'User-centered design principles for maximum engagement.' },
      { title: 'Performance', description: 'Optimized code for fast, responsive applications.' },
      { title: 'ASO', description: 'App Store Optimization to maximize downloads.' },
      { title: 'Security', description: 'Enterprise-grade security built into every app.' },
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    shortDescription: 'Comprehensive security solutions to protect your digital assets and data.',
    icon: 'Shield',
    path: '/services/cybersecurity',
    features: [
      { title: 'Network Security', description: 'Protect your network infrastructure from threats.' },
      { title: 'Data Protection', description: 'Secure your sensitive data with encryption and access controls.' },
      { title: 'Endpoint Security', description: 'Comprehensive protection for all devices.' },
      { title: 'Cloud Security', description: 'Secure your cloud infrastructure and applications.' },
      { title: 'Threat Monitoring', description: '24/7 monitoring for suspicious activities.' },
      { title: 'Penetration Testing', description: 'Identify vulnerabilities before hackers do.' },
    ]
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    shortDescription: 'Scalable cloud solutions that power your digital transformation journey.',
    icon: 'Cloud',
    path: '/services/cloud-services',
    features: [
      { title: 'Cloud Migration', description: 'Seamless transition of your infrastructure to the cloud.' },
      { title: 'Cloud Security', description: 'Protect your cloud environment with best practices.' },
      { title: 'Cloud Optimization', description: 'Maximize efficiency and reduce cloud costs.' },
      { title: 'Hybrid Cloud', description: 'Bridge on-premises and cloud infrastructure.' },
      { title: 'Cloud Storage', description: 'Scalable, secure storage solutions.' },
      { title: 'Cloud CRM', description: 'Customer relationship management in the cloud.' },
    ]
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    shortDescription: 'Strategic technology guidance to align IT with your business goals.',
    icon: 'Users',
    path: '/services/it-consulting',
    features: [
      { title: 'Strategy Development', description: 'Comprehensive IT roadmaps aligned with business objectives.' },
      { title: 'Infrastructure Assessment', description: 'Evaluate and optimize your current IT setup.' },
      { title: 'Technology Selection', description: 'Expert guidance on technology investments.' },
      { title: 'Cloud Integration', description: 'Seamlessly integrate cloud services.' },
      { title: 'Cybersecurity Planning', description: 'Develop robust security strategies.' },
      { title: 'Digital Transformation', description: 'Guide your journey to digital excellence.' },
    ]
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    shortDescription: 'Transform raw data into actionable insights that drive business decisions.',
    icon: 'BarChart',
    path: '/services/data-analytics',
    features: [
      { title: 'BI Dashboards', description: 'Interactive dashboards for real-time insights.' },
      { title: 'Predictive Analytics', description: 'Forecast trends and outcomes with AI.' },
      { title: 'Big Data', description: 'Handle and analyze massive datasets.' },
      { title: 'Data Integration', description: 'Unify data from multiple sources.' },
      { title: 'Real-Time Analytics', description: 'Instant insights for rapid decisions.' },
      { title: 'Data Visualization', description: 'Clear, compelling visual representations.' },
    ]
  },
];

export const cloudSubpages = [
  { id: 'cloud-migration', title: 'Cloud Migration', description: 'Seamlessly migrate your infrastructure, applications, and data to the cloud with minimal disruption.', path: '/services/cloud-services/migration' },
  { id: 'cloud-security', title: 'Cloud Security', description: 'Protect your cloud environment with comprehensive security measures and best practices.', path: '/services/cloud-services/security' },
  { id: 'cloud-optimization', title: 'Cloud Optimization', description: 'Maximize efficiency and reduce costs with intelligent cloud resource management.', path: '/services/cloud-services/optimization' },
  { id: 'hybrid-cloud', title: 'Hybrid Cloud', description: 'Bridge your on-premises infrastructure with cloud services for ultimate flexibility.', path: '/services/cloud-services/hybrid' },
  { id: 'cloud-storage', title: 'Cloud Storage', description: 'Scalable, secure, and reliable storage solutions for all your data needs.', path: '/services/cloud-services/storage' },
  { id: 'cloud-crm', title: 'Cloud CRM', description: 'Implement Salesforce, Microsoft Dynamics, HubSpot, Zoho, and other leading CRM platforms to transform customer relationships.', path: '/services/cloud-services/crm' },
];

export const aiCapabilities = [
  { title: 'GenAI & RAG', description: 'Generative AI and Retrieval-Augmented Generation for intelligent content creation and knowledge synthesis.', icon: 'Sparkles' },
  { title: 'Natural Language', description: 'Advanced NLP solutions for chatbots, sentiment analysis, and text understanding.', icon: 'MessageSquare' },
  { title: 'Computer Vision', description: 'Image recognition, object detection, and visual analysis powered by deep learning.', icon: 'Eye' },
  { title: 'Predictive Modeling', description: 'Forecast trends, behaviors, and outcomes with machine learning models.', icon: 'TrendingUp' },
  { title: 'MLOps', description: 'End-to-end machine learning operations for deploying and managing AI at scale.', icon: 'Settings' },
  { title: 'Responsible AI', description: 'Ethical AI development with fairness, transparency, and accountability.', icon: 'Heart' },
];

export const aiProcess = [
  { step: 1, title: 'Discovery', description: 'Understand your business challenges and AI opportunities.' },
  { step: 2, title: 'Strategy', description: 'Define the AI roadmap and solution architecture.' },
  { step: 3, title: 'Development', description: 'Build and train AI models tailored to your needs.' },
  { step: 4, title: 'Deployment', description: 'Launch AI solutions with robust MLOps practices.' },
  { step: 5, title: 'Optimization', description: 'Continuously improve performance and ROI.' },
];
