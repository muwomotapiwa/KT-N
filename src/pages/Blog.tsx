import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  Check,
  Clock,
  FileText,
  Layers,
  PenLine,
  Sparkles,
} from 'lucide-react';
import cloudDeskImage from '../assets/images/office1.jpeg';
import { blogPosts, getBlogPost } from '../data/blog';

type TocItem = {
  id: string;
  title: string;
  level: number;
};

type MarkdownBlock =
  | { type: 'heading'; level: number; text: string; id: string }
  | { type: 'paragraph'; text: string }
  | { type: 'blockquote'; lines: string[] }
  | { type: 'hr' }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] };

export function BlogIndex() {
  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24 bg-gradient-to-br from-navy via-navy-light to-dark overflow-hidden">
        <img
          src={cloudDeskImage}
          alt="Modern office workspace"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/90 to-dark/95" />
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Insights</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-white mb-6">
              Kypex-Tech <span className="text-primary">Blog</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl">
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
            className="grid lg:grid-cols-[1.08fr_0.92fr] gap-8 items-stretch"
          >
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="group block overflow-hidden rounded-2xl bg-navy-light/50 border border-primary/15 hover:border-primary/50 transition-all"
            >
              <div className="aspect-[16/8] overflow-hidden bg-navy">
                <img
                  src={cloudDeskImage}
                  alt="Salesforce Marketing Cloud planning workspace"
                  className="h-full w-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-7 md:p-9">
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
                  Read the full guide
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <div className="p-7 md:p-9 rounded-2xl bg-gradient-to-br from-navy-light to-navy border border-blue-500/20">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-navy" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Complete Series Guide</h3>
              <p className="text-gray-300 mb-6">{featuredPost.sourceNote}</p>
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

          <div className="mt-14">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold font-display text-white">What the guide covers</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPost.chapters.map((chapter, index) => (
                <motion.div
                  key={chapter}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={`/blog/${featuredPost.slug}#${createHeadingId(`${index + 1}. ${chapter}`)}`}
                    className="group block h-full p-6 rounded-2xl bg-navy-light/40 border border-primary/10 hover:border-primary/50 transition-all"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-sm text-blue-light">Chapter {index + 1}</span>
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">{chapter}</h3>
                  </Link>
                </motion.div>
              ))}
            </div>
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

  const toc = getTableOfContents(post.content).filter((item) => item.title !== 'Table of Contents');

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 lg:py-24 bg-navy overflow-hidden">
        <img
          src={cloudDeskImage}
          alt="Marketing Cloud implementation planning"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-dark/95" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-white mb-5 max-w-5xl">
              {post.title}
            </h1>
            <p className="text-xl text-primary mb-5 max-w-4xl">{post.subtitle}</p>
            <p className="text-lg text-gray-300 max-w-4xl mb-8">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400">
              <span className="inline-flex items-center gap-2">
                <PenLine className="w-4 h-4 text-primary" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-primary" />
                Complete six-part guide
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12 items-start">
            <aside className="lg:sticky lg:top-28 space-y-6">
              <div className="p-6 rounded-2xl bg-navy-light/50 border border-primary/15">
                <h2 className="text-lg font-semibold text-white mb-4">In This Guide</h2>
                <nav className="space-y-2">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-400 hover:text-primary transition-colors"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="p-6 rounded-2xl bg-navy-light/50 border border-primary/15">
                <h2 className="text-lg font-semibold text-white mb-3">Quick Takeaways</h2>
                <div className="space-y-3">
                  {post.heroPoints.map((point) => (
                    <div key={point} className="flex gap-3 text-sm text-gray-400">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            <div className="space-y-10">
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-navy-light to-navy border border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-3">Series Context</h2>
                    <p className="text-gray-300 leading-7">{post.sourceNote}</p>
                  </div>
                </div>
              </div>

              <MarkdownArticle content={post.content} />

              <section className="text-center p-8 rounded-2xl bg-navy-light/50 border border-primary/15">
                <h2 className="text-3xl font-bold font-display text-white mb-4">Planning a Marketing Cloud Growth Rollout?</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  We can help turn this guide into a practical implementation roadmap for your content, consent, segmentation, CRM, and migration workstreams.
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MarkdownArticle({ content }: { content: string }) {
  let skippedHeroHeading = false;
  let skippedHeroSubtitle = false;

  const blocks = parseMarkdown(content).filter((block) => {
    if (!skippedHeroHeading && block.type === 'heading' && block.level === 1) {
      skippedHeroHeading = true;
      return false;
    }

    if (skippedHeroHeading && !skippedHeroSubtitle && block.type === 'heading' && block.level === 3) {
      skippedHeroSubtitle = true;
      return false;
    }

    return true;
  });

  return (
    <article className="rounded-2xl bg-navy-light/35 border border-primary/10 px-5 py-8 sm:px-8 lg:px-10">
      <div className="space-y-6">{blocks.map((block, index) => renderMarkdownBlock(block, index))}</div>
    </article>
  );
}

function renderMarkdownBlock(block: MarkdownBlock, index: number) {
  switch (block.type) {
    case 'heading':
      if (block.level === 2) {
        return (
          <h2 key={index} id={block.id} className="scroll-mt-28 pt-8 text-3xl font-bold font-display text-white">
            {renderInline(block.text)}
          </h2>
        );
      }

      if (block.level === 3) {
        return (
          <h3 key={index} id={block.id} className="scroll-mt-28 pt-4 text-2xl font-semibold text-primary">
            {renderInline(block.text)}
          </h3>
        );
      }

      return (
        <h4 key={index} id={block.id} className="scroll-mt-28 pt-3 text-xl font-semibold text-white">
          {renderInline(block.text)}
        </h4>
      );

    case 'paragraph':
      return (
        <p key={index} className="text-gray-300 leading-8">
          {renderInline(block.text)}
        </p>
      );

    case 'blockquote':
      return (
        <blockquote key={index} className="border-l-4 border-primary bg-primary/10 px-5 py-4 text-primary rounded-r-xl">
          {block.lines.map((line) => (
            <p key={line} className="leading-7">
              {renderInline(line)}
            </p>
          ))}
        </blockquote>
      );

    case 'hr':
      return <hr key={index} className="border-primary/15 my-8" />;

    case 'ul':
      return (
        <ul key={index} className="grid gap-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-gray-300 leading-7">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );

    case 'ol':
      return (
        <ol key={index} className="space-y-3 counter-reset-list">
          {block.items.map((item, itemIndex) => (
            <li key={item} className="flex gap-3 text-gray-300 leading-7">
              <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                {itemIndex + 1}
              </span>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ol>
      );

    case 'table':
      return (
        <div key={index} className="overflow-x-auto rounded-2xl border border-primary/15">
          <table className="min-w-full divide-y divide-primary/15">
            <thead className="bg-primary/10">
              <tr>
                {block.headers.map((header) => (
                  <th key={header} className="px-5 py-4 text-left text-sm font-semibold uppercase tracking-wide text-primary">
                    {renderInline(header)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/10 bg-navy/40">
              {block.rows.map((row, rowIndex) => (
                <tr key={`${row.join('-')}-${rowIndex}`}>
                  {row.map((cell, cellIndex) => (
                    <td key={`${cell}-${cellIndex}`} className="px-5 py-4 align-top text-sm leading-7 text-gray-300">
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    default:
      return null;
  }
}

function parseMarkdown(content: string): MarkdownBlock[] {
  const lines = content.replace(/\r\n/g, '\n').split('\n');
  const blocks: MarkdownBlock[] = [];
  const paragraphLines: string[] = [];

  const flushParagraph = () => {
    if (paragraphLines.length === 0) {
      return;
    }

    blocks.push({ type: 'paragraph', text: paragraphLines.join(' ').trim() });
    paragraphLines.length = 0;
  };

  let index = 0;

  while (index < lines.length) {
    const rawLine = lines[index];
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      index += 1;
      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      flushParagraph();
      const text = headingMatch[2].trim();
      blocks.push({
        type: 'heading',
        level: headingMatch[1].length,
        text,
        id: createHeadingId(text),
      });
      index += 1;
      continue;
    }

    if (line === '---') {
      flushParagraph();
      blocks.push({ type: 'hr' });
      index += 1;
      continue;
    }

    if (line.startsWith('>')) {
      flushParagraph();
      const quoteLines: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith('>')) {
        quoteLines.push(lines[index].trim().replace(/^>\s?/, ''));
        index += 1;
      }
      blocks.push({ type: 'blockquote', lines: quoteLines });
      continue;
    }

    if (isTableLine(line) && index + 1 < lines.length && isTableDivider(lines[index + 1].trim())) {
      flushParagraph();
      const headers = parseTableRow(line);
      index += 2;
      const rows: string[][] = [];

      while (index < lines.length && isTableLine(lines[index].trim())) {
        rows.push(parseTableRow(lines[index].trim()));
        index += 1;
      }

      blocks.push({ type: 'table', headers, rows });
      continue;
    }

    if (line.match(/^-\s+/)) {
      flushParagraph();
      const items: string[] = [];
      while (index < lines.length && lines[index].trim().match(/^-\s+/)) {
        items.push(lines[index].trim().replace(/^-\s+/, ''));
        index += 1;
      }
      blocks.push({ type: 'ul', items });
      continue;
    }

    if (line.match(/^\d+\.\s+/)) {
      flushParagraph();
      const items: string[] = [];
      while (index < lines.length && lines[index].trim().match(/^\d+\.\s+/)) {
        items.push(lines[index].trim().replace(/^\d+\.\s+/, ''));
        index += 1;
      }
      blocks.push({ type: 'ol', items });
      continue;
    }

    paragraphLines.push(line);
    index += 1;
  }

  flushParagraph();
  return blocks;
}

function getTableOfContents(content: string): TocItem[] {
  return content
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((line) => line.trim().match(/^(##)\s+(.*)$/))
    .filter((match): match is RegExpMatchArray => Boolean(match))
    .map((match) => {
      const title = stripMarkdown(match[2]);
      return {
        id: createHeadingId(title),
        title,
        level: match[1].length,
      };
    });
}

function renderInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const pattern = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const token = match[0];
    const key = `${token}-${match.index}`;

    if (token.startsWith('[')) {
      const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        nodes.push(
          <a key={key} href={linkMatch[2]} className="text-primary underline decoration-primary/40 underline-offset-4 hover:text-primary/80">
            {linkMatch[1]}
          </a>,
        );
      }
    } else if (token.startsWith('**')) {
      nodes.push(
        <strong key={key} className="font-semibold text-white">
          {token.slice(2, -2)}
        </strong>,
      );
    } else {
      nodes.push(
        <em key={key} className="text-gray-200">
          {token.slice(1, -1)}
        </em>,
      );
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

function stripMarkdown(text: string) {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .trim();
}

function createHeadingId(text: string) {
  return stripMarkdown(text)
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s/g, '-');
}

function isTableLine(line: string) {
  return line.startsWith('|') && line.endsWith('|');
}

function isTableDivider(line: string) {
  return isTableLine(line) && parseTableRow(line).every((cell) => /^:?-{3,}:?$/.test(cell));
}

function parseTableRow(line: string) {
  return line
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());
}

function Meta({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-gray-400">
      {icon}
      {label}
    </span>
  );
}
