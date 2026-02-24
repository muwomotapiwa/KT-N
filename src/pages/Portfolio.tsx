import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Briefcase,
  ExternalLink,
  TrendingUp,
  Code,
  Calendar,
  Filter,
  ShieldCheck,
  Cloud,
  Brain,
} from 'lucide-react';
import { PortfolioBackground } from '../components/PortfolioBackground';
import fintechImage from '../assets/images/fintech.jpeg';
import ecommerceImage from '../assets/images/ecommerce.jpeg';
import patientPortalImage from '../assets/images/patientportal.jpeg';
import b2bLeadImage from '../assets/images/B2B Lead.jpeg';
import officeImage from '../assets/images/office1.jpeg';

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  outcome: string;
  year: string;
  link: string;
};

const categories = ['All', 'AI & Automation', 'Data & Analytics', 'Cloud & DevOps', 'Cybersecurity', 'Digital Products'];

const projects: Project[] = [
  {
    id: 'risk-ops-automation',
    title: 'Risk Ops Automation',
    category: 'AI & Automation',
    description:
      'LLM-assisted decisioning, automated case routing, and auditable workflows for a fintech risk team handling thousands of reviews per day.',
    image: fintechImage,
    technologies: ['LangChain', 'React', 'Node', 'Supabase', 'PostgreSQL', 'OpenAI'],
    outcome: '-35% manual review time',
    year: '2025',
    link: '#',
  },
  {
    id: 'health-triage-copilot',
    title: 'Patient Triage Copilot',
    category: 'AI & Automation',
    description: 'Clinical inbox copilot that summarizes messages, drafts responses, and prioritizes tickets with PHI-aware guardrails.',
    image: patientPortalImage,
    technologies: ['Next.js', 'Supabase', 'AI Guardrails', 'Twilio', 'Vercel'],
    outcome: '48% faster patient response',
    year: '2025',
    link: '#',
  },
  {
    id: 'siem-modernization',
    title: 'Cloud SIEM Modernization',
    category: 'Cybersecurity',
    description:
      'Centralized logging, playbooks, and alert tuning on Azure Sentinel with zero-trust access, SSO, and responder runbooks.',
    image: officeImage,
    technologies: ['Azure Sentinel', 'KQL', 'Playbooks', 'Okta', 'Syslog'],
    outcome: '30% faster incident triage',
    year: '2024',
    link: '#',
  },
  {
    id: 'cloud-erp',
    title: 'Cloud ERP Modernization',
    category: 'Cloud & DevOps',
    description: 'Lift-and-evolve of a legacy ERP to Azure with IaC, blue/green deploys, and cost observability baked in.',
    image: b2bLeadImage,
    technologies: ['Azure', 'Terraform', 'GitHub Actions', 'PostgreSQL', 'Feature Flags'],
    outcome: '35% infrastructure cost optimized',
    year: '2024',
    link: '#',
  },
  {
    id: 'fintech-analytics',
    title: 'FinTech Analytics Dashboard',
    category: 'Data & Analytics',
    description:
      'Secure analytics portal for a financial services group. Real-time KPIs, investor reporting, and exec dashboards with role-based access.',
    image: fintechImage,
    technologies: ['React', 'TypeScript', 'Node API', 'Charts.js', 'RBAC'],
    outcome: 'Cut reporting time by 60%',
    year: '2025',
    link: '#',
  },
  {
    id: 'ecommerce-revamp',
    title: 'E-Commerce Experience Refresh',
    category: 'Digital Products',
    description:
      'Modernized a fashion retailer storefront with performance-first UI, improved discovery, and streamlined checkout to lift conversion.',
    image: ecommerceImage,
    technologies: ['React', 'Headless CMS', 'Tailwind', 'Stripe'],
    outcome: '+22% checkout conversion',
    year: '2024',
    link: '#',
  },
  {
    id: 'health-portal',
    title: 'Patient Engagement Portal',
    category: 'Digital Products',
    description: 'Responsive portal for a regional healthcare network: scheduling, secure messaging, and education content.',
    image: patientPortalImage,
    technologies: ['React', 'Supabase', 'Auth', 'Accessibility'],
    outcome: '+35% self-service usage',
    year: '2024',
    link: '#',
  },
  {
    id: 'b2b-leadgen',
    title: 'B2B Lead Gen Microsites',
    category: 'Digital Products',
    description: 'Series of high-converting microsites across tech and logistics, localized and A/B tested.',
    image: b2bLeadImage,
    technologies: ['Next.js', 'A/B Testing', 'SEO', 'Analytics'],
    outcome: '40% lift in qualified leads',
    year: '2023',
    link: '#',
  },
];

function categoryIcon(category: string) {
  if (category === 'AI & Automation') return Brain;
  if (category === 'Cloud & DevOps') return Cloud;
  if (category === 'Cybersecurity') return ShieldCheck;
  return Briefcase;
}

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProjects = useMemo(
    () => (activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory)),
    [activeCategory],
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
        <PortfolioBackground />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Our Work</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-white mb-6">
              Transformation Success <span className="text-primary">Stories</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proof that AI, cloud, security, and product craftsmanship ship measurable outcomes for growth-stage and enterprise teams.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {['AI delivery pods', 'Cloud & DevOps', 'Enterprise security', 'Outcome ownership'].map((pill) => (
                <span key={pill} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm">
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-dark/80 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm">
              <Filter className="w-4 h-4" />
              <span>Filter by focus area</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full border text-sm transition-colors ${
                    activeCategory === cat
                      ? 'bg-primary text-navy border-primary shadow-lg shadow-primary/20'
                      : 'bg-navy-light/40 text-gray-200 border-primary/30 hover:border-primary/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.map((project, index) => {
            const Icon = categoryIcon(project.category);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 last:mb-0"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <motion.div whileHover={{ scale: 1.02 }} className="relative rounded-2xl overflow-hidden border border-primary/20">
                      <img src={project.image} alt={project.title} className="w-full aspect-video object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-primary text-sm flex items-center gap-2">
                          <Icon className="w-4 h-4" />
                          {project.category}
                        </span>
                        <a
                          href={project.link}
                          className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-navy hover:scale-110 transition-transform"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </motion.div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <span className="inline-flex items-center gap-2 text-sm text-gray-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </span>
                    <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
                    <p className="text-gray-400 mb-6">{project.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                        <Code className="w-4 h-4 text-primary" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-navy-light border border-primary/20 rounded-lg text-sm text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-navy-light/50 border border-primary/20 rounded-xl mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <span className="text-sm text-gray-400">Key Outcome</span>
                          <p className="text-xl font-bold text-primary">{project.outcome}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-navy-light to-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Ready to Pair Strategy with Delivery?
            </h2>
            <p className="text-gray-300 mb-10">
              Book a strategy call to see how our AI, cloud, and security teams can de-risk your next transformation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/consultation"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                Book a Strategy Call
              </Link>
              <Link
                to="/assessment"
                className="px-8 py-4 border border-primary/50 text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all duration-300"
              >
                Request a Security/AI Assessment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
