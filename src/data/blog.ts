export interface BlogSection {
  id: string;
  title: string;
  body: string[];
  bullets?: string[];
  callout?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  sourceNote: string;
  heroPoints: string[];
  sections: BlogSection[];
  checklistTitle: string;
  checklist: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'marketing-cloud-next-implementation-guide',
    title: 'Marketing Cloud Next: What Teams Should Prepare Before Implementation',
    category: 'Salesforce',
    date: 'May 3, 2026',
    readTime: '8 min read',
    author: 'Kypex-Tech Salesforce Team',
    excerpt:
      'Marketing Cloud Next is not just a campaign tool. It is a Salesforce-platform marketing stack built around Data Cloud, consent, channels, reporting, and AI-assisted execution.',
    sourceNote: 'Based on the Salesforce Spring 26 Marketing Cloud Next implementation guide, last updated February 25, 2026.',
    heroPoints: [
      'Treat setup as a joint Salesforce, Data Cloud, and marketing operations project.',
      'Build the data foundation before campaign orchestration.',
      'Plan consent, reporting, and AI enablement as core workstreams, not extras.',
    ],
    sections: [
      {
        id: 'what-is-changing',
        title: 'Marketing Cloud Next Changes the Implementation Conversation',
        body: [
          'Marketing Cloud Next brings marketing closer to the Salesforce platform. That is powerful, but it also changes how teams should plan the implementation. The project is no longer only about email templates, sends, and journeys. It depends on Salesforce setup, Data Cloud readiness, user access, channel configuration, consent, analytics, and AI governance.',
          'The most important planning shift is ownership. A successful rollout needs Salesforce administration, Data Cloud administration, and marketing administration to work together from the beginning. Some organizations may have one person wearing several hats, but the responsibilities still need to be explicit.',
        ],
        callout:
          'The fastest implementations start with a shared setup plan, not with campaign buildout.',
      },
      {
        id: 'setup-foundation',
        title: 'Start With the Setup Assistant and Platform Prerequisites',
        body: [
          'The implementation guide frames setup around Basic Settings, Required Setup, and Additional Settings. That structure is useful beyond Salesforce setup screens because it gives project teams a natural roadmap: first enable the platform, then connect the required data and channels, then activate the capabilities that improve performance.',
          'Before marketers can use the platform fully, the organization needs core prerequisites in place. Data Cloud must be enabled, a Salesforce CRM connector needs to exist, an active data space must be selected, data protection details should be available on records, and the default email channel needs to be ready for marketing content.',
        ],
        bullets: [
          'Confirm Salesforce Enterprise or Unlimited Edition with Marketing Cloud Next Growth or Advanced.',
          'Assign the Marketing Cloud Admin permission set to the right setup owners.',
          'Enable Data Cloud and connect Salesforce CRM data early.',
          'Select the data space that marketing will use for segmentation and activation.',
        ],
      },
      {
        id: 'data-cloud',
        title: 'Data Cloud Is the Foundation, Not a Side Task',
        body: [
          'Marketing Cloud Next relies on Data Cloud to organize people, engagement, consent, and campaign data. The guide calls out data kits and data streams for marketing setup objects, consent, flows, email engagement, SMS, WhatsApp, and sales data. Those packages create the objects and connections that let marketing activity become usable data.',
          'Identity resolution is just as important. Rulesets determine how Data Cloud organizes related records into usable customer profiles. This affects segmentation, scoring, personalization, reporting, and the quality of AI-assisted experiences later in the roadmap.',
        ],
        bullets: [
          'Install and deploy the required marketing data kits.',
          'Map sales, consent, messaging, and flow data to the right model objects.',
          'Configure identity resolution with billing and data quality in mind.',
          'Document which data sources are authoritative before creating segments.',
        ],
        callout:
          'Data streams and identity resolution can affect Data Cloud credit usage, so technical setup and commercial planning should happen together.',
      },
      {
        id: 'access',
        title: 'User Access Needs More Than a Single Permission Set',
        body: [
          'Marketing Cloud Next introduces a practical split between users who administer the platform and users who run marketing work. Marketing Cloud Admin users can configure setup and platform behavior. Marketing Cloud Manager users can manage campaigns, segments, flows, and AI-assisted campaign tools.',
          'There are also adjacent access needs. Workspace contributors support content collaboration, site contributors help with landing page previews, and identity-licensed users can access Marketing Cloud Next through Salesforce single sign-on when that model fits the organization.',
        ],
        bullets: [
          'Define admin, manager, contributor, and viewer personas.',
          'Assign workspace and site contributors before content teams begin testing.',
          'Confirm who can publish, activate, preview, and approve campaign assets.',
          'Review Flow permissions for marketers who will build or debug campaign flows.',
        ],
      },
      {
        id: 'channels-consent',
        title: 'Channels and Consent Should Be Planned Together',
        body: [
          'Marketing Cloud Next supports email, landing pages, SMS, WhatsApp, and mobile app messaging, but each channel has its own setup path. Email requires sending configuration, sender authentication, and reply handling. SMS and WhatsApp depend on add-ons, numbers, codes, business accounts, and consent structures. Mobile app messaging is tied to Advanced edition and regional availability.',
          'Consent is not something to bolt on after channels are live. The guide emphasizes communication subscriptions, preference pages, and consent imports. If consent already lives in another platform, teams need a clean migration plan so opt-in and opt-out status can be trusted before campaign activation.',
        ],
        bullets: [
          'Authenticate sending domains and confirm sender addresses.',
          'Set up reply mail management where applicable.',
          'Create communication subscriptions for email, SMS, and WhatsApp.',
          'Import existing consent as clean CSV files before campaign launch.',
          'Review default preference pages and align them to brand and compliance needs.',
        ],
      },
      {
        id: 'tracking-reporting',
        title: 'Tracking and Reporting Turn Campaigns Into an Operating System',
        body: [
          'Once channels are configured, teams need visibility. Marketing Cloud Next can track activity on landing pages and external sites using Data Cloud integrations and consent banner configuration. That gives marketers a better view of engagement behavior, but it also requires careful setup of website connectors, campaign association, and privacy choices.',
          'For analytics, the guide points to Marketing Performance, analytics objects, preconfigured reports, dashboards, and Tableau Next-powered insights. In practice, this means reporting should be designed as part of the first release, not postponed until after campaigns are running.',
        ],
        bullets: [
          'Enable tracking only after consent and privacy behavior are clear.',
          'Connect landing pages and external sites to the right Data Cloud setup.',
          'Install analytics objects and Marketing Performance packages.',
          'Customize dashboards around campaign KPIs leadership actually uses.',
        ],
      },
      {
        id: 'ai-agentforce',
        title: 'AI and Agentforce Are Readiness Workstreams',
        body: [
          'Marketing Cloud Next includes generative and predictive AI capabilities that can help marketers create campaign briefs, draft campaigns and content, improve send-time decisions, filter non-human engagement, and score engagement. These features depend on trusted data, permissions, model readiness, and governance.',
          'Agentforce can support marketing-specific actions for campaign briefs, campaigns, campaign content, and journey selections. Predictive capabilities such as Einstein Send Time Optimization, Metrics Guard, Engagement Scoring, and Engagement Frequency each need the right setup and data conditions before marketers should rely on them in production.',
        ],
        bullets: [
          'Enable Einstein generative AI and Agentforce deliberately, with the right permissions.',
          'Validate standard Agentforce actions before creating custom agents.',
          'Plan when to use Growth capabilities versus Advanced predictive features.',
          'Give predictive models time and data before judging campaign impact.',
        ],
      },
      {
        id: 'sandbox-rollout',
        title: 'Use Sandbox Testing to De-risk the Launch',
        body: [
          'The guide makes sandbox testing a serious part of the implementation path. Marketing Cloud Next features can be customized and tested before production rollout, but teams need to understand what replicates, what must be configured again, and how Data Cloud objects move between environments.',
          'A practical rollout should include sandbox setup, email blackhole testing, channel validation, deployment sequencing, and a clear production cutover plan. When flows reference Data Cloud objects, deploy Data Cloud objects first, then Marketing Cloud Next objects.',
        ],
        bullets: [
          'Confirm Data Cloud and Marketing Cloud Next are enabled before sandbox planning.',
          'Use sandbox testing for flows, content, scoring visibility, and reporting changes.',
          'Configure channel-specific items separately where needed.',
          'Create a deployment order for Data Cloud, flows, assets, and dashboards.',
        ],
      },
    ],
    checklistTitle: 'Marketing Cloud Next Readiness Checklist',
    checklist: [
      'Admin roles and permission sets are assigned.',
      'Data Cloud, CRM connector, and active data space are ready.',
      'Required data kits and data streams are installed and deployed.',
      'Identity resolution rulesets are documented and tested.',
      'Email, SMS, WhatsApp, landing pages, and mobile messaging scope is confirmed.',
      'Consent subscriptions, preference pages, and imports are planned.',
      'Web tracking and analytics packages are configured.',
      'AI and Agentforce features have clear governance and rollout criteria.',
      'Sandbox test plan, deployment sequence, and launch support plan are approved.',
    ],
  },
];

export function getBlogPost(slug?: string) {
  return blogPosts.find((post) => post.slug === slug);
}
