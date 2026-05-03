export interface SalesforcePlatformSection {
  title: string;
  description: string;
  bullets: string[];
}

export interface SalesforcePlatform {
  slug: string;
  name: string;
  shortDescription: string;
  heroDescription: string;
  highlights: string[];
  sections: SalesforcePlatformSection[];
  requestOptions: string[];
}

export const salesforcePlatformBasePath = '/services/cloud-services/crm';

export const salesforcePlatforms: SalesforcePlatform[] = [
  {
    slug: 'sales-cloud',
    name: 'Sales Cloud',
    shortDescription: 'Accelerate sales with AI-powered insights and automation',
    heroDescription:
      'Design a Salesforce sales operating model that gives teams clearer pipelines, cleaner data, smarter automation, and better visibility from lead to close.',
    highlights: ['Lead and opportunity management', 'Forecasting and dashboards', 'Sales process automation'],
    sections: [
      {
        title: 'Pipeline Design',
        description:
          'We configure Sales Cloud around your real selling motion so reps, managers, and executives can work from a shared revenue view.',
        bullets: ['Lead, account, contact, and opportunity setup', 'Sales stages and qualification rules', 'Forecast categories and sales dashboards'],
      },
      {
        title: 'Sales Automation',
        description:
          'Reduce manual admin with flows, reminders, approvals, and guided selling steps that keep deals moving.',
        bullets: ['Task and activity automation', 'Approval processes', 'Quote and proposal handoffs'],
      },
    ],
    requestOptions: [
      'Sales Cloud implementation',
      'Pipeline cleanup and configuration',
      'Sales dashboards and forecasting',
      'Lead routing and assignment',
      'Sales automation flows',
      'CRM data migration',
    ],
  },
  {
    slug: 'service-cloud',
    name: 'Service Cloud',
    shortDescription: 'Deliver exceptional customer service at scale',
    heroDescription:
      'Build service operations that help teams resolve cases faster, support customers across channels, and turn service data into measurable improvement.',
    highlights: ['Case management', 'Omnichannel support', 'Knowledge and automation'],
    sections: [
      {
        title: 'Service Operations',
        description:
          'We shape Service Cloud around your support model, from intake and prioritization through escalation and resolution.',
        bullets: ['Case queues and routing', 'SLAs and escalation rules', 'Agent workspaces and productivity tools'],
      },
      {
        title: 'Customer Experience',
        description:
          'Give customers consistent answers and faster service through self-service, knowledge, and connected communications.',
        bullets: ['Knowledge base setup', 'Customer portal integration', 'Email, chat, and messaging workflows'],
      },
    ],
    requestOptions: [
      'Service Cloud implementation',
      'Case routing and SLAs',
      'Knowledge base setup',
      'Omnichannel support design',
      'Customer self-service portal',
      'Support reporting and dashboards',
    ],
  },
  {
    slug: 'marketing-cloud',
    name: 'Marketing Cloud',
    shortDescription: 'Personalized marketing journeys across all channels',
    heroDescription:
      'Plan, implement, and optimize Marketing Cloud so teams can run richer campaigns, build unified audiences, and choose the right Engagement, Growth, or Advanced path.',
    highlights: ['Marketing Cloud Engagement', 'Marketing Cloud Growth', 'Marketing Cloud Advanced'],
    sections: [
      {
        title: 'Marketing Cloud Engagement',
        description:
          'For teams running sophisticated cross-channel campaigns, journeys, segmentation, content, and lifecycle communications.',
        bullets: ['Journey Builder strategy and setup', 'Email, SMS, and WhatsApp campaign operations', 'Audience segmentation and personalization'],
      },
      {
        title: 'Marketing Cloud Growth / Advanced',
        description:
          'For teams moving onto next-generation Marketing Cloud capabilities on the Salesforce platform, with unified data, workflows, and AI-assisted campaign creation.',
        bullets: ['Growth edition setup for faster campaign execution', 'Advanced edition planning for predictive and optimization needs', 'Data Cloud audience activation and Salesforce workflow alignment'],
      },
      {
        title: 'Campaign Operations',
        description:
          'We help marketing teams turn platform capability into repeatable operating rhythms with governance, templates, reporting, and testing.',
        bullets: ['Reusable campaign templates', 'Preference and consent management', 'Performance dashboards and optimization cycles'],
      },
    ],
    requestOptions: [
      'Marketing Cloud Engagement',
      'Marketing Cloud Growth',
      'Marketing Cloud Advanced',
      'Account Engagement',
      'Journey Builder setup',
      'Data Cloud audience activation',
      'Campaign reporting and optimization',
    ],
  },
  {
    slug: 'experience-cloud',
    name: 'Experience Cloud',
    shortDescription: 'Build connected digital experiences',
    heroDescription:
      'Create secure customer, partner, and employee portals that extend Salesforce data into useful digital experiences.',
    highlights: ['Customer portals', 'Partner communities', 'Authenticated digital experiences'],
    sections: [
      {
        title: 'Portal Strategy',
        description:
          'We define the portal structure, audience model, permissions, and user journeys before the build begins.',
        bullets: ['Customer and partner experience design', 'Role and permission planning', 'Content and navigation architecture'],
      },
      {
        title: 'Experience Build',
        description:
          'Turn Salesforce data and processes into clean, usable portal experiences for external and internal users.',
        bullets: ['Experience site configuration', 'Case, account, and knowledge access', 'Branding and responsive UI setup'],
      },
    ],
    requestOptions: [
      'Customer portal',
      'Partner portal',
      'Employee portal',
      'Experience Cloud setup',
      'Portal permissions and security',
      'Knowledge and case portal integration',
    ],
  },
  {
    slug: 'commerce-cloud',
    name: 'Commerce Cloud',
    shortDescription: 'Unified commerce for B2B and B2C',
    heroDescription:
      'Connect storefronts, customer data, orders, and service journeys so your commerce experience feels consistent from discovery to fulfillment.',
    highlights: ['B2B and B2C storefronts', 'Order and customer data', 'Personalized commerce'],
    sections: [
      {
        title: 'Commerce Architecture',
        description:
          'We map the storefront, catalog, pricing, checkout, and integration needs that shape a scalable Salesforce commerce implementation.',
        bullets: ['B2B and B2C commerce planning', 'Catalog and pricing models', 'Checkout and payment integrations'],
      },
      {
        title: 'Connected Experiences',
        description:
          'Bring sales, service, marketing, and commerce data together to improve personalization and operational visibility.',
        bullets: ['Customer profile integration', 'Order management workflows', 'Personalized merchandising and recommendations'],
      },
    ],
    requestOptions: [
      'Commerce Cloud implementation',
      'B2B commerce',
      'B2C commerce',
      'Catalog and pricing setup',
      'Checkout and payment integrations',
      'Order management integration',
    ],
  },
  {
    slug: 'data-cloud',
    name: 'Data Cloud',
    shortDescription: 'Unify customer data for segmentation, insights, and AI',
    heroDescription:
      'Build a trusted customer data foundation that brings Salesforce and external data together for activation, analytics, personalization, and Agentforce readiness.',
    highlights: ['Unified customer profiles', 'Data streams and identity resolution', 'Audience activation'],
    sections: [
      {
        title: 'Data Foundation',
        description:
          'We help teams identify source systems, model customer data, and create a reliable foundation for downstream Salesforce experiences.',
        bullets: ['Data stream planning', 'Identity resolution approach', 'Unified profile design'],
      },
      {
        title: 'Activation',
        description:
          'Turn unified data into action across marketing, sales, service, commerce, analytics, and AI use cases.',
        bullets: ['Segmentation and calculated insights', 'Activation into Salesforce clouds', 'Governance and consent alignment'],
      },
    ],
    requestOptions: [
      'Data Cloud implementation',
      'Customer profile unification',
      'Data streams and integrations',
      'Identity resolution',
      'Audience segmentation',
      'Agentforce data readiness',
    ],
  },
  {
    slug: 'agentforce',
    name: 'Agentforce',
    shortDescription: 'Deploy trusted AI agents across Salesforce workflows',
    heroDescription:
      'Design and launch Salesforce AI agents that work with your CRM data, automate repeatable tasks, and support teams across sales, service, marketing, and commerce.',
    highlights: ['AI agent strategy', 'Workflow automation', 'Trusted CRM data grounding'],
    sections: [
      {
        title: 'Agent Strategy',
        description:
          'We identify high-value agent use cases and define the guardrails, data, prompts, and workflows needed for production use.',
        bullets: ['Use-case discovery and prioritization', 'Agent roles and permissions', 'Human handoff and escalation design'],
      },
      {
        title: 'Agent Build',
        description:
          'Move from idea to working Salesforce agents connected to the right data, actions, and business processes.',
        bullets: ['Agent topics and actions', 'Data Cloud and CRM grounding', 'Testing, monitoring, and optimization'],
      },
    ],
    requestOptions: [
      'Agentforce strategy',
      'Sales agent',
      'Service agent',
      'Marketing agent',
      'Commerce agent',
      'Data Cloud grounding',
      'Agent testing and governance',
    ],
  },
];

export function getSalesforcePlatform(slug?: string) {
  return salesforcePlatforms.find((platform) => platform.slug === slug);
}

export function getSalesforcePlatformPath(slug: string) {
  return `${salesforcePlatformBasePath}/${slug}`;
}
