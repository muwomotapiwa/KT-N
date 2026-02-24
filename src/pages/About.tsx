import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Building,
  Sparkles,
  Handshake,
  LineChart,
  Target,
  ShieldCheck,
  Cpu,
  Cloud,
  Layers,
  Lock,
  Users,
  Award,
  Rocket,
  Quote,
  Globe2,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useRef, useState } from 'react';
import { AboutBackground } from '../components/AboutBackground';
import cupNavy from '../assets/images/CupNavy.jpeg?url';
import glassMug from '../assets/images/glassmug.jpeg?url';
import notebookPen from '../assets/images/notebookandpen.jpeg?url';
import shirtNavy from '../assets/images/t-shirtnavy.jpeg?url';
import shirtLogo from '../assets/images/shirtblackwhitelogo.jpeg?url';
import blackHoodie from '../assets/images/blackhoody-allbalck.jpeg?url';
import headphonesGreen from '../assets/images/heaphonenavyandgreen.jpeg?url';
import office1 from '../assets/images/office1.jpeg?url';
import officeCubs from '../assets/images/officecubs.jpeg?url';

// Trimmed to keep load light while still showing variety
const corporateImageMeta = [
  { src: cupNavy, category: 'Drinkware' },
  { src: glassMug, category: 'Drinkware' },
  { src: notebookPen, category: 'Stationery' },
  { src: shirtNavy, category: 'Apparel' },
  { src: shirtLogo, category: 'Apparel' },
  { src: blackHoodie, category: 'Apparel' },
  { src: headphonesGreen, category: 'Tech' },
  { src: office1, category: 'Tech' },
  { src: officeCubs, category: 'Tech' },
];

const corporateImages = corporateImageMeta;

const stats = [
  { value: '100+', label: 'Projects Delivered' },
  { value: '50+', label: 'Clients Partnered' },
  { value: '5+', label: 'Years Shipping' },
  { value: '24/7', label: 'Support Window' },
];

const audience = [
  {
    title: 'Growth-stage and SaaS teams',
    detail: 'Ship faster without ballooning headcount. We embed senior builders who own outcomes.',
  },
  {
    title: 'Enterprise innovation and ops',
    detail: 'Modernize core workflows with cloud, data, and AI while respecting governance and risk.',
  },
  {
    title: 'SMEs with bold bets',
    detail: 'Stand up new products quickly, then harden for scale with observability, QA, and support.',
  },
];

const industries = ['FinTech', 'Healthcare', 'Retail & CPG', 'Manufacturing', 'Education', 'Public sector'];

const originStory = [
  {
    year: 'Started',
    text: 'Kypex-Tech was born when a small delivery pod kept being asked to "fix the bottleneck" for ops teams drowning in manual work.',
  },
  {
    year: 'Focus',
    text: 'We leaned into AI, data, and cloud to replace legacy queues with automated, auditable workflows that teams could trust.',
  },
  {
    year: 'Today',
    text: 'We exist to be the accountable partner enterprises and scaleups call when the project is complex, regulated, or on a deadline.',
  },
];

const caseStudies = [
  {
    title: 'Risk Ops Automation',
    industry: 'FinTech',
    result: '-35% manual review time',
    description: 'Rebuilt decisioning pipeline with workflow orchestration, ML assists, and audit-ready logging.',
    tech: ['React', 'Node', 'PostgreSQL', 'AWS', 'LangChain'],
  },
  {
    title: 'Patient Access Experience',
    industry: 'Healthcare',
    result: '+32% self-service bookings',
    description: 'Unified scheduling, messaging, and triage across clinics with privacy-first architecture.',
    tech: ['Next.js', 'Supabase', 'Twilio', 'Vercel', 'Accessibility'],
  },
  {
    title: 'Supply Chain Visibility',
    industry: 'Retail',
    result: '99.9% uptime during peak',
    description: 'Live inventory plus alerting across warehouses with SLOs, observability, and on-call runbooks.',
    tech: ['React', 'Python', 'Kafka', 'GCP', 'Looker'],
  },
];

type Step = { title: string; description: string; icon: LucideIcon };

const processSteps: Step[] = [
  { title: 'Discover', description: 'Goal alignment, current-state walkthroughs, success metrics, and risk map.', icon: Target },
  { title: 'Architecture', description: 'Solution blueprint, data flows, security controls, and delivery plan.', icon: Layers },
  { title: 'Build', description: 'Agile sprints with weekly demos, transparent backlog, and paired ownership.', icon: Cpu },
  { title: 'Test', description: 'Automated checks, performance runs, and security gates before release.', icon: ShieldCheck },
  { title: 'Launch', description: 'Cutover plan, playbooks, training, and support readiness.', icon: Rocket },
  { title: 'Optimize', description: 'Post-launch measurement, A/Bs, and iterative tuning against KPIs.', icon: LineChart },
];

const capabilityColumns = [
  {
    title: 'Tech Stack Depth',
    icon: Cpu,
    items: [
      'Frontend: React, Next.js, Vite, Tailwind',
      'Backend: Node/NestJS, Python/FastAPI, event-driven patterns',
      'Data and AI: LangChain, vector search (pgvector/Supabase), analytics (dbt, Postgres, BigQuery, ClickHouse)',
      'Integrations: Stripe, HubSpot, Salesforce, Twilio, Slack, Microsoft 365',
    ],
  },
  {
    title: 'Cloud and DevOps',
    icon: Cloud,
    items: [
      'Cloud: AWS, Azure, GCP; containerized delivery with Docker/Kubernetes',
      'Infrastructure as code: Terraform and CI/CD pipelines',
      'Observability: logging, metrics, tracing, SLOs, on-call playbooks',
      'Environments built for feature flags and safe releases',
    ],
  },
  {
    title: 'Security and Quality',
    icon: Lock,
    items: [
      'Identity and access: SSO/OIDC, RBAC, audit trails',
      'Compliance-friendly patterns: SOC 2-style controls, HIPAA-aware data handling, GDPR basics',
      'Automated testing: unit, integration, accessibility, performance',
      'Privacy-by-design reviews on every engagement',
    ],
  },
];

const team = [
  {
    title: 'Core Leadership',
    role: 'Delivery Lead plus Solution Architect on every project',
    detail: 'One accountable owner for outcomes, paired with a senior architect to de-risk decisions early.',
  },
  {
    title: 'Advisors and SMEs',
    role: 'Security, data, and product specialists',
    detail: 'Pulled in for architecture reviews, compliance questions, and scale checkpoints.',
  },
  {
    title: 'Dedicated Pod',
    role: 'Design / Engineering / QA',
    detail: 'On-shore and near-shore teammates who work in your tools and timezone.',
  },
];

const testimonials = [
  {
    quote: 'They behaved like an extension of our product team - weekly demos, honest trade-offs, and shipped the hard stuff first.',
    name: 'Ops Director, Logistics Platform',
  },
  {
    quote: 'Security and compliance were never afterthoughts; they documented every decision so our audit passed smoothly.',
    name: 'VP Technology, Healthcare Network',
  },
  {
    quote: 'We finally have a roadmap tied to outcomes, not hours. They owned the metric and hit it.',
    name: 'Founder, B2B SaaS',
  },
];

// Corporate Image Card Component
function CorporateImageCard({ image, index, isExpanded }: { image: typeof corporateImages[0]; index: number; isExpanded: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98, rotateX: 2 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.98 }}
      transition={{
        duration: 0.5,
        delay: isExpanded ? index * 0.03 : index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative aspect-square overflow-hidden rounded-2xl bg-navy-light border border-primary/10 cursor-pointer shadow-md shadow-black/20"
      whileHover={{ scale: 1.08, zIndex: 10 }}
    >
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <img
          src={image.src}
          alt={image.category}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-125 group-hover:-translate-y-1"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/35 via-navy/20 to-dark/45" />
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-blue/15 rounded-full blur-2xl" />
        </div>
      </div>

      <div className="absolute top-3 left-3 px-2 py-1 bg-primary/20 border border-primary/30 rounded-full backdrop-blur-sm">
        <span className="text-[10px] text-primary font-medium uppercase tracking-wider">{image.category}</span>
      </div>

      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
}

export function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
        <AboutBackground />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Building className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">About Kypex-Tech</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-white mb-6">
              Proven Partners for <span className="text-primary">Growth-Stage</span> and <span className="text-primary">Enterprise</span> Teams
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We help operations, product, and technology leaders modernize with AI, cloud, and automation - owning delivery, de-risking complexity, and shipping measurable outcomes.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/consultation"
                className="group px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Book a Strategy Call
                <Sparkles className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 border border-primary/50 text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  className="glass rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-colors"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
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
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              <WorkflowIcon />
              <span className="text-primary text-sm font-medium">Predictable Delivery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4">How We Work</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">Transparent, outcome-driven, and designed to reduce buyer risk.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                className="p-6 rounded-2xl bg-navy-light/50 border border-primary/15 hover:border-primary/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary mb-4">
                  <step.icon className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 text-[11px] rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold">Step {idx + 1}</span>
                  {idx === processSteps.length - 1 && <span className="text-xs text-green-300">Continuous</span>}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Authority */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Technical Authority</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4">Depth that enterprise buyers expect</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We pair senior builders with the controls, observability, and delivery cadence required in regulated, mission-critical environments.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {capabilityColumns.map((col) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-7 rounded-2xl bg-navy-light/60 border border-primary/15 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                    <col.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{col.title}</h3>
                </div>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex gap-2 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Testimonials */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">Team</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4">People you will meet</h2>
              <p className="text-gray-300 mb-8">Even a small, visible team reduces perceived risk. Here are the roles you work with from day one.</p>
              <div className="space-y-4">
                {team.map((member) => (
                  <div key={member.title} className="p-5 rounded-2xl bg-navy-light/50 border border-primary/15">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 text-[11px] rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold">
                        {member.title}
                      </span>
                    </div>
                    <p className="text-white font-semibold">{member.role}</p>
                    <p className="text-gray-300 text-sm">{member.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
                <Quote className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">Testimonials</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Social proof, upfront</h2>
              <p className="text-gray-300 mb-6">A few words from leaders who trusted us with high-stakes work.</p>
              <div className="space-y-4">
                {testimonials.map((item, idx) => (
                  <motion.div
                    key={item.quote}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-5 rounded-2xl bg-navy-light/50 border border-primary/15"
                  >
                    <p className="text-gray-100 leading-relaxed">"{item.quote}"</p>
                    <p className="text-primary text-sm font-semibold mt-3">{item.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Identity Collection */}
      <CorporateIdentitySection />

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-navy-light to-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">Ready to Reduce Risk and Ship Faster?</h2>
            <p className="text-gray-300 mb-10">
              Let's map the quickest path to value for your team - strategy first, then delivery with accountability.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/consultation"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                Book a Strategy Call
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 border border-primary/50 text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Simple workflow icon helper
function WorkflowIcon() {
  return (
    <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 7h4v4H7V7ZM13 13h4v4h-4v-4ZM7 13h2v-2h2m6 0h-2v2h-2M5 9H3m4 6H3m14-6h2m-2 6h2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Corporate Identity Collection Section Component
function CorporateIdentitySection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const visibleImages = isExpanded ? corporateImages : corporateImages.slice(0, 6);

  const handleToggle = () => {
    if (isExpanded) {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <section ref={sectionRef} className="relative py-24 bg-navy overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #34d9b9 0%, transparent 70%)', top: '10%', left: '-10%' }}
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #0578ac 0%, transparent 70%)', bottom: '20%', right: '-5%' }}
          animate={{ x: [0, -40, 0], y: [0, -50, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #04a9b0 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          animate={{ x: [0, 30, -30, 0], y: [0, -20, 20, 0], scale: [1, 1.2, 0.9, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Brand Identity</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white mb-6"
          >
            Corporate Identity <span className="text-primary">Collection</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-gray-400 max-w-3xl mx-auto text-lg"
          >
            A curated showcase of our branded corporate apparel, executive gifts, and tech lifestyle merchandise that represent the Kypex-Tech identity.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visibleImages.map((image, index) => (
              <CorporateImageCard key={`${image.src}-${index}`} image={image} index={index} isExpanded={isExpanded} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={handleToggle}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-navy-light to-dark border border-primary/30 text-white font-semibold rounded-xl hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{isExpanded ? 'Collapse Collection' : 'View Full Collection'}</span>
            <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
              {isExpanded ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-primary" />}
            </motion.span>
            <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full">
              {isExpanded ? `${corporateImages.length} items` : `+${corporateImages.length - 6} more`}
            </span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          {['Apparel', 'Drinkware', 'Stationery', 'Tech'].map((category) => (
            <div key={category} className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-2 h-2 rounded-full bg-primary/50" />
              <span>{category}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

      {/* Story & Fit */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-navy-light/50 border border-primary/10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4">
                <Handshake className="w-4 h-4 text-primary" />
                <span className="text-primary text-xs font-semibold uppercase tracking-wide">Our Story</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Built by people who felt the pain first</h2>
              <p className="text-gray-300 mb-6">
                We started as operators fixing real bottlenecks - then became the team other leaders call when they need accountable builders who
                understand scale, risk, and time-to-value.
              </p>
              <div className="space-y-4">
                {originStory.map((item) => (
                  <div key={item.year} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center text-primary font-semibold">
                      {item.year}
                    </div>
                    <p className="text-gray-300 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-navy-light/50 border border-primary/10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-primary text-xs font-semibold uppercase tracking-wide">Who We Serve</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">We specialize so you convert</h2>
              <p className="text-gray-300 mb-6">
                B2B buyers need confidence you know their world. We focus on teams where reliability, compliance, and measurable outcomes matter most.
              </p>
              <div className="space-y-4">
                {audience.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-white font-semibold">{item.title}</p>
                      <p className="text-gray-400 text-sm">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <span className="text-gray-400 text-sm">Industries delivered in:</span>
                <div className="flex flex-wrap gap-2 mt-3">
                  {industries.map((industry) => (
                    <span
                      key={industry}
                      className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm flex items-center gap-2"
                    >
                      <Globe2 className="w-4 h-4" />
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Proof, not promises</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4">Recent Wins</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">Real engagements, clear outcomes. Two snippets beat a hundred claims.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-navy-light/60 border border-primary/15 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 text-xs rounded-full bg-primary/15 border border-primary/30 text-primary">{item.industry}</span>
                  <span className="text-sm font-semibold text-primary">{item.result}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 rounded-lg bg-dark/60 border border-primary/15 text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
