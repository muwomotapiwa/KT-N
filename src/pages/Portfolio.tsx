import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, ExternalLink, TrendingUp, Code, Calendar } from 'lucide-react';
import fintechImage from '../assets/images/fintech.jpeg';
import ecommerceImage from '../assets/images/E‑Commerce.jpeg';
import patientPortalImage from '../assets/images/patientportal.jpeg';
import b2bLeadImage from '../assets/images/B2B Lead.jpeg';

const projects = [
  {
    id: 'fintech-analytics',
    title: 'FinTech Analytics Dashboard',
    category: 'Web Application',
    description:
      'A secure analytics portal for a financial services group. Delivered real-time KPIs, investor reporting, and executive dashboards with role-based access.',
    image: fintechImage,
    technologies: ['React', 'TypeScript', 'Node API', 'Charts.js', 'RBAC'],
    outcome: 'Cut reporting time by 60%',
    year: '2025',
    link: '#',
  },
  {
    id: 'ecommerce-revamp',
    title: 'E‑Commerce Experience Refresh',
    category: 'E‑Commerce',
    description:
      'Modernized a fashion retailer’s storefront with performance-first UI, improved product discovery, and streamlined checkout to lift conversion.',
    image: ecommerceImage,
    technologies: ['React', 'Headless CMS', 'Tailwind', 'Stripe'],
    outcome: '+22% checkout conversion',
    year: '2024',
    link: '#',
  },
  {
    id: 'health-portal',
    title: 'Patient Engagement Portal',
    category: 'Healthcare',
    description:
      'Built a mobile-responsive portal for a regional healthcare network: appointment scheduling, secure messaging, and education content.',
    image: patientPortalImage,
    technologies: ['React', 'Supabase', 'Auth', 'Accessibility'],
    outcome: '+35% self-service usage',
    year: '2024',
    link: '#',
  },
  {
    id: 'b2b-leadgen',
    title: 'B2B Lead Gen Microsites',
    category: 'Landing Pages',
    description:
      'Series of high-converting microsites for multiple B2B clients across tech and logistics, each localized and A/B tested.',
    image: b2bLeadImage,
    technologies: ['Next.js', 'A/B Testing', 'SEO', 'Analytics'],
    outcome: '40% lift in qualified leads',
    year: '2023',
    link: '#',
  },
];

export function Portfolio() {
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
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Our Work</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-white mb-6">
              Featured <span className="text-primary">Projects</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore our portfolio of successful projects that have helped businesses achieve their digital goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 last:mb-0"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative rounded-2xl overflow-hidden border border-primary/20"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-primary text-sm">
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
                        <span
                          key={tech}
                          className="px-3 py-1 bg-navy-light border border-primary/20 rounded-lg text-sm text-gray-300"
                        >
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
          ))}
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
              Ready to Start Your <span className="text-primary">Project</span>?
            </h2>
            <p className="text-gray-300 mb-10">
              Let's create something amazing together. Schedule a consultation to discuss your ideas.
            </p>
            <Link
              to="/consultation"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
            >
              Schedule Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
