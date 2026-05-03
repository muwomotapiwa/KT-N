import marketingCloudGrowthGuide from '../content/marketing-cloud-growth-guide.md?raw';

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  sourceNote: string;
  heroPoints: string[];
  chapters: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'complete-guide-salesforce-marketing-cloud-next-growth',
    title: 'The Complete Guide to Salesforce Marketing Cloud Next (Growth)',
    subtitle: 'A practical series for marketers, admins, and developers',
    category: 'Salesforce Marketing Cloud',
    date: 'May 3, 2026',
    readTime: '22 min read',
    author: 'Kypex-Tech Salesforce Team',
    excerpt:
      'A complete walkthrough of Marketing Cloud Next content workspaces, emails, campaigns, segments, flows, forms, landing pages, setup, administration, and Account Engagement migration.',
    sourceNote:
      'Based on a six-part walkthrough series covering content creation, email campaigns, administration, segmentation, and migration in Salesforce Marketing Cloud Next, also referred to as Marketing Cloud Growth.',
    heroPoints: [
      'Build the content workspace, folders, brands, emails, forms, landing pages, and SMS assets in the right order.',
      'Understand promotional versus transactional email requirements before campaign activation.',
      'Connect segments, campaigns, flows, consent, reporting, administration, and Account Engagement migration into one operating model.',
    ],
    chapters: [
      'Setting Up Your Content Workspace',
      'Creating Emails: Promotional & Transactional',
      'Campaigns, Segments & Flows',
      'Forms & Landing Pages',
      'Setup & Administration',
      'Migrating Content from Account Engagement to Marketing Cloud Next',
    ],
    content: marketingCloudGrowthGuide,
  },
];

export function getBlogPost(slug?: string) {
  return blogPosts.find((post) => post.slug === slug);
}
