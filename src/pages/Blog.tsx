import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, BookOpen, Calendar, Check, Clock, FileText, PenLine, Sparkles } from 'lucide-react';
import { blogPosts, getBlogPost } from '../data/blog';

export function BlogIndex() {
  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(52, 217, 185, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(52, 217, 185, 0.3) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
              }}
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Insights</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-white mb-6">
              Kypex-Tech <span className="text-primary">Blog</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Practical notes on cloud, Salesforce, AI, security, and the implementation details that make transformation work.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-stretch"
          >
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="group block p-8 md:p-10 rounded-2xl bg-navy-light/50 border border-primary/15 hover:border-primary/50 transition-all"
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20">
                  {featuredPost.category}
                </span>
                <Meta icon={<Calendar className="w-4 h-4" />} label={featuredPost.date} />
                <Meta icon={<Clock className="w-4 h-4" />} label={featuredPost.readTime} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-5 group-hover:text-primary transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-gray-300 text-lg mb-8">{featuredPost.excerpt}</p>
              <div className="inline-flex items-center gap-2 text-primary font-semibold">
                Read the first blog
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-navy-light to-navy border border-blue-500/20">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-navy" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Latest Focus</h3>
              <p className="text-gray-300 mb-6">
                Our first post unpacks Marketing Cloud Next from an implementation angle: what to set up, who should own it, and how to launch without treating Data Cloud, consent, or AI as afterthoughts.
              </p>
              <div className="space-y-3">
                {featuredPost.heroPoints.map((point) => (
                  <div key={point} className="flex gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block h-full p-6 rounded-2xl bg-navy-light/40 border border-primary/10 hover:border-primary/50 transition-all"
                >
                  <FileText className="w-8 h-8 text-primary mb-5" />
                  <div className="text-sm text-blue-light mb-3">{post.category}</div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-gray-400 mb-6">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function BlogPostPage() {
  const { slug } = useParams();
  const post = getBlogPost(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:text-primary/80 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20">
                {post.category}
              </span>
              <Meta icon={<Calendar className="w-4 h-4" />} label={post.date} />
              <Meta icon={<Clock className="w-4 h-4" />} label={post.readTime} />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-white mb-6">{post.title}</h1>
            <p className="text-lg text-gray-300 max-w-4xl mb-8">{post.excerpt}</p>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <PenLine className="w-4 h-4 text-primary" />
              <span>{post.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-12 items-start">
            <aside className="lg:sticky lg:top-28 space-y-6">
              <div className="p-6 rounded-2xl bg-navy-light/50 border border-primary/15">
                <h2 className="text-lg font-semibold text-white mb-4">In This Article</h2>
                <nav className="space-y-2">
                  {post.sections.map((section) => (
                    <a key={section.id} href={`#${section.id}`} className="block text-sm text-gray-400 hover:text-primary transition-colors">
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="p-6 rounded-2xl bg-navy-light/50 border border-primary/15">
                <h2 className="text-lg font-semibold text-white mb-3">Document Note</h2>
                <p className="text-sm text-gray-400">{post.sourceNote}</p>
              </div>
            </aside>

            <article className="space-y-14">
              <div className="p-6 sm:p-8 rounded-2xl bg-navy-light/40 border border-primary/10">
                <h2 className="text-2xl font-bold text-white mb-5">Executive Takeaways</h2>
                <div className="space-y-4">
                  {post.heroPoints.map((point) => (
                    <div key={point} className="flex gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {post.sections.map((section, index) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="scroll-mt-28"
                >
                  <h2 className="text-3xl font-bold font-display text-white mb-5">{section.title}</h2>
                  <div className="space-y-5 text-gray-300 leading-8">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets && (
                    <ul className="mt-6 grid gap-3">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-gray-300">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.callout && (
                    <div className="mt-6 p-5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                      {section.callout}
                    </div>
                  )}
                </motion.section>
              ))}

              <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-navy-light to-navy border border-primary/20">
                <h2 className="text-3xl font-bold font-display text-white mb-6">{post.checklistTitle}</h2>
                <div className="grid gap-3">
                  {post.checklist.map((item) => (
                    <div key={item} className="flex gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="text-center p-8 rounded-2xl bg-navy-light/50 border border-primary/15">
                <h2 className="text-3xl font-bold font-display text-white mb-4">Planning a Salesforce Marketing Cloud Rollout?</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  We can help scope the Data Cloud, consent, channel, analytics, and Agentforce workstreams before your team starts building campaigns.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/services/cloud-services/crm/marketing-cloud"
                    className="px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all"
                  >
                    Explore Marketing Cloud
                  </Link>
                  <Link
                    to="/consultation?service=cloud"
                    className="px-6 py-3 border border-primary/50 text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all"
                  >
                    Book Consultation
                  </Link>
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

function Meta({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-gray-400">
      {icon}
      {label}
    </span>
  );
}
