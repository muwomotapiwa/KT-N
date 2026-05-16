import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import './ECDiscovery.css';

type FieldOption = {
  value: string;
  label: string;
};

type DiscoveryField = {
  badge: string;
  label: string;
  name: string;
  kind: 'input' | 'textarea' | 'select' | 'checkbox';
  inputType?: string;
  placeholder?: string;
  required?: boolean;
  min?: number;
  options?: FieldOption[];
  compact?: boolean;
};

type DiscoverySection = {
  title: string;
  fields: DiscoveryField[];
};

const WEB3FORMS_ACCESS_KEY = 'af31cdca-fdb5-4fd7-81bd-762838f8e47f';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const discoverySections: DiscoverySection[] = [
  {
    title: '1. Project Vision & Objectives',
    fields: [
      {
        badge: 'Q1',
        label: 'In one sentence, what does this platform do?',
        name: 'vision',
        kind: 'textarea',
        placeholder: 'Describe your e-commerce store in one sentence...',
      },
      {
        badge: 'Q2',
        label: 'What is the #1 problem this solves for your business?',
        name: 'business_problem',
        kind: 'textarea',
        placeholder: 'What business challenge are you solving?',
      },
      {
        badge: 'Q3',
        label: 'What is the #1 problem this solves for your customers?',
        name: 'customer_problem',
        kind: 'textarea',
        placeholder: "What problem do your customers have that you're solving?",
      },
      {
        badge: 'Q4',
        label: 'If we launch successfully, what specific metric will change?',
        name: 'success_metric',
        kind: 'input',
        placeholder: 'e.g., 20 sales per day instead of 5',
      },
      {
        badge: 'Q5',
        label: '6 months after launch, how will you know this was worth the investment?',
        name: 'success_indicator',
        kind: 'textarea',
        placeholder: 'What results do you expect?',
      },
      {
        badge: 'Q6',
        label: 'Is this replacing an existing system/website, or is it brand new?',
        name: 'new_or_replace',
        kind: 'select',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'brand_new', label: 'Brand New' },
          { value: 'replacing', label: 'Replacing Existing' },
        ],
      },
      {
        badge: 'Q7',
        label: 'If replacing: What works well in the current system that we must keep?',
        name: 'keep_features',
        kind: 'textarea',
        placeholder: 'What features are working well?',
      },
      {
        badge: 'Q8',
        label: 'If replacing: What frustrates you most about the current system?',
        name: 'current_frustrations',
        kind: 'textarea',
        placeholder: 'What issues need to be fixed?',
      },
      {
        badge: 'Q9',
        label: 'What is the absolute CORE feature - the one thing that MUST work perfectly?',
        name: 'core_feature',
        kind: 'textarea',
        placeholder: "What's the most critical feature?",
      },
      {
        badge: 'Q10',
        label: "What would be 'nice to have' but isn't critical for launch?",
        name: 'nice_to_have',
        kind: 'textarea',
        placeholder: 'Features that can wait until after launch',
      },
    ],
  },
  {
    title: '2. Target Audience & Users',
    fields: [
      {
        badge: 'Q11',
        label: 'Who is your primary user? (Age range, profession, tech skill level)',
        name: 'primary_user',
        kind: 'textarea',
        placeholder: 'Describe your ideal customer...',
      },
      {
        badge: 'Q12',
        label: 'What devices do they primarily use?',
        name: 'devices',
        kind: 'checkbox',
        options: [
          { value: 'desktop', label: 'Desktop' },
          { value: 'mobile', label: 'Mobile Phone' },
          { value: 'tablet', label: 'Tablet' },
          { value: 'mix', label: 'Mix of all' },
        ],
      },
      {
        badge: 'Q13',
        label: 'What is their typical internet speed/quality?',
        name: 'internet_speed',
        kind: 'select',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'fast', label: 'Urban fiber internet' },
          { value: 'average', label: 'Average broadband' },
          { value: 'slow', label: 'Rural/slower connections' },
          { value: 'varied', label: 'Varied - need to support all' },
        ],
      },
      {
        badge: 'Q14',
        label: 'How tech-savvy are your users?',
        name: 'tech_savvy',
        kind: 'select',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'very', label: 'Very tech-savvy' },
          { value: 'moderate', label: 'Moderate' },
          { value: 'low', label: 'Less tech-savvy' },
        ],
      },
      {
        badge: 'Q15',
        label: 'What language(s) do they speak?',
        name: 'languages',
        kind: 'input',
        placeholder: 'e.g., English, Spanish',
      },
      {
        badge: 'Q16',
        label: 'What time zones are they in?',
        name: 'timezones',
        kind: 'input',
        placeholder: 'e.g., EST, PST',
      },
      {
        badge: 'Q17',
        label: 'Are there any accessibility needs we must accommodate?',
        name: 'accessibility',
        kind: 'textarea',
        placeholder: 'Vision impairment, hearing impairment, motor difficulties, etc.',
      },
      {
        badge: 'Q18',
        label: 'What is their biggest fear/concern when using platforms like this?',
        name: 'user_fears',
        kind: 'select',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'security', label: 'Security/privacy' },
          { value: 'complexity', label: 'Too complicated' },
          { value: 'cost', label: 'Hidden costs' },
          { value: 'time', label: 'Wasting time' },
          { value: 'trust', label: 'Trust issues' },
        ],
      },
    ],
  },
  {
    title: '3. Competitive Landscape',
    fields: [
      {
        badge: 'Q21',
        label: 'Who are your top 3 competitors? (Provide website URLs)',
        name: 'competitors',
        kind: 'textarea',
        placeholder: 'List competitor names and URLs...',
      },
      {
        badge: 'Q22',
        label: 'For each competitor: What do they do BETTER than you currently?',
        name: 'competitors_better',
        kind: 'textarea',
        placeholder: 'What are competitors doing well?',
      },
      {
        badge: 'Q23',
        label: 'For each competitor: Where do they FAIL that you want to do better?',
        name: 'competitors_fail',
        kind: 'textarea',
        placeholder: 'Where can you beat them?',
      },
      {
        badge: 'Q24',
        label: 'Show us 3 websites/apps you LOVE (any industry)',
        name: 'love_sites',
        kind: 'textarea',
        placeholder: 'List URLs and what you love about each...',
      },
      {
        badge: 'Q25',
        label: 'Show us 3 websites/apps you HATE',
        name: 'hate_sites',
        kind: 'textarea',
        placeholder: 'List URLs and what bothers you...',
      },
      {
        badge: 'Q26',
        label: "Is there a website/app that has the 'exact vibe' you want?",
        name: 'vibe_site',
        kind: 'input',
        inputType: 'text',
        placeholder: 'e.g., www.kypextech.co.za or https://kypextech.co.za',
      },
    ],
  },
  {
    title: '4. Brand & Visual Identity',
    fields: [
      {
        badge: 'Q27',
        label: 'Do you have a logo?',
        name: 'has_logo',
        kind: 'select',
        compact: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes_vector', label: 'Yes, in vector format (AI, EPS, SVG)' },
          { value: 'yes_image', label: 'Yes, but only image files' },
          { value: 'no', label: 'No, need one created' },
        ],
      },
      {
        badge: 'Q28',
        label: 'Do you have official brand colors? (Provide hex codes)',
        name: 'brand_colors',
        kind: 'input',
        compact: true,
        placeholder: 'e.g., #FF5733, #333333',
      },
      {
        badge: 'Q29',
        label: 'Do you have official brand fonts?',
        name: 'brand_fonts',
        kind: 'input',
        compact: true,
        placeholder: 'Font names if known',
      },
      {
        badge: 'Q30',
        label: 'Do you have a brand style guide?',
        name: 'has_style_guide',
        kind: 'select',
        compact: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        badge: 'Q32',
        label: 'What 3 words describe how your brand should FEEL?',
        name: 'brand_feel',
        kind: 'input',
        placeholder: 'e.g., trustworthy, playful, luxurious',
      },
      {
        badge: 'Q33',
        label: 'What emotions should users feel when they see your site?',
        name: 'user_emotions',
        kind: 'select',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'excited', label: 'Excited' },
          { value: 'calm', label: 'Calm' },
          { value: 'confident', label: 'Confident' },
          { value: 'curious', label: 'Curious' },
          { value: 'trust', label: 'Trust/Reliable' },
          { value: 'energetic', label: 'Energetic' },
        ],
      },
      {
        badge: 'Q34',
        label: "Are there colors you absolutely DON'T want used?",
        name: 'dislike_colors',
        kind: 'input',
        placeholder: 'Colors to avoid',
      },
      {
        badge: 'Q35',
        label: 'Are there any visual styles you hate?',
        name: 'dislike_styles',
        kind: 'textarea',
        placeholder: 'e.g., No cartoony illustrations, no stock photos of people in suits',
      },
    ],
  },
  {
    title: '5. Content & Assets',
    fields: [
      {
        badge: 'Q36',
        label: 'Do you have all written content ready?',
        name: 'content_ready',
        kind: 'select',
        compact: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes, all ready' },
          { value: 'partial', label: 'Partially ready' },
          { value: 'no', label: 'No, need copywriting help' },
        ],
      },
      {
        badge: 'Q38',
        label: 'Do you have professional photography?',
        name: 'has_photos',
        kind: 'select',
        compact: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No, will use stock photos' },
          { value: 'budget', label: 'Need budget for a photographer' },
        ],
      },
      {
        badge: 'Q40',
        label: 'Do you have video content? If yes, where is it hosted?',
        name: 'video_content',
        kind: 'input',
        placeholder: 'YouTube, Vimeo, raw files, etc.',
      },
      {
        badge: 'Q41',
        label: 'Do you have testimonials/reviews collected?',
        name: 'has_testimonials',
        kind: 'select',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No, will need to collect' },
        ],
      },
      {
        badge: 'Q42',
        label: 'Do you have company mission statement, about us story, and team bios?',
        name: 'has_company_content',
        kind: 'select',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No, need help writing' },
        ],
      },
    ],
  },
  {
    title: '6. Domain & Hosting',
    fields: [
      {
        badge: 'Q45',
        label: 'Do you own a domain name?',
        name: 'domain',
        kind: 'input',
        compact: true,
        placeholder: 'Your website address',
      },
      {
        badge: 'Q46',
        label: 'Where did you buy the domain?',
        name: 'domain_registrar',
        kind: 'select',
        compact: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'godaddy', label: 'GoDaddy' },
          { value: 'namecheap', label: 'Namecheap' },
          { value: 'cloudflare', label: 'Cloudflare' },
          { value: 'google', label: 'Google Domains' },
          { value: 'other', label: 'Other' },
          { value: 'dont_have', label: "Don't have one yet" },
        ],
      },
      {
        badge: 'Q47',
        label: 'Do you have login access to that account?',
        name: 'domain_login',
        kind: 'select',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        badge: 'Q49',
        label: 'Do you currently have web hosting?',
        name: 'current_hosting',
        kind: 'input',
        placeholder: 'If yes, who is your hosting provider?',
      },
      {
        badge: 'Q51',
        label: 'Where is your business email hosted?',
        name: 'email_host',
        kind: 'select',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'gmail', label: 'Gmail/Google Workspace' },
          { value: 'outlook', label: 'Outlook/Microsoft 365' },
          { value: 'other', label: 'Other' },
        ],
      },
    ],
  },
  {
    title: '7. Timeline & Budget',
    fields: [
      {
        badge: 'Q52',
        label: 'Is there a hard, immovable deadline?',
        name: 'hard_deadline',
        kind: 'input',
        inputType: 'date',
        compact: true,
      },
      {
        badge: 'Q54',
        label: 'Are there any seasonal factors?',
        name: 'seasonal',
        kind: 'input',
        compact: true,
        placeholder: 'e.g., Must launch before holiday season',
      },
      {
        badge: 'Q55',
        label: 'What is your total budget range for this project?',
        name: 'budget',
        kind: 'select',
        options: [
          { value: '', label: 'Select a range' },
          { value: 'under5k', label: 'Under $5,000' },
          { value: '5k-10k', label: '$5,000 - $10,000' },
          { value: '10k-25k', label: '$10,000 - $25,000' },
          { value: '25k-50k', label: '$25,000 - $50,000' },
          { value: '50k+', label: '$50,000+' },
          { value: 'not_sure', label: 'Not sure yet' },
        ],
      },
      {
        badge: 'Q57',
        label: 'Do you have budget for ongoing maintenance after launch?',
        name: 'maintenance_budget',
        kind: 'select',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
          { value: 'not_sure', label: 'Not sure' },
        ],
      },
      {
        badge: 'Q58',
        label: 'Are you able to make decisions quickly?',
        name: 'decision_speed',
        kind: 'select',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'very_fast', label: 'Very fast - can decide same day' },
          { value: 'moderate', label: 'Moderate - usually within a few days' },
          { value: 'slow', label: 'Slow - requires multiple approvals' },
        ],
      },
    ],
  },
  {
    title: '8. Decision Making & Team',
    fields: [
      {
        badge: 'Q59',
        label: 'Who is the final decision-maker?',
        name: 'decision_maker',
        kind: 'input',
        compact: true,
        placeholder: 'Name and title',
      },
      {
        badge: 'Q60',
        label: 'How many people need to approve decisions?',
        name: 'approval_count',
        kind: 'input',
        inputType: 'number',
        min: 1,
        compact: true,
      },
      {
        badge: 'Q61',
        label: 'Who will be our main point of contact?',
        name: 'main_contact',
        kind: 'input',
        compact: true,
        placeholder: 'Name, email, phone',
      },
      {
        badge: 'Q63',
        label: 'Who will be responsible for providing content?',
        name: 'content_provider',
        kind: 'input',
        compact: true,
        placeholder: 'Name and role',
      },
      {
        badge: 'Q64',
        label: 'Who will manage the platform after launch?',
        name: 'platform_manager',
        kind: 'input',
        placeholder: 'Name and role',
      },
    ],
  },
  {
    title: '9. E-Commerce Specific',
    fields: [
      {
        badge: 'Q101',
        label: 'What are you selling?',
        name: 'product_types',
        kind: 'checkbox',
        options: [
          { value: 'physical', label: 'Physical Products' },
          { value: 'digital', label: 'Digital Downloads' },
          { value: 'services', label: 'Services' },
          { value: 'subscriptions', label: 'Subscriptions' },
        ],
      },
      {
        badge: 'Q102',
        label: 'How many products do you have NOW?',
        name: 'product_count_now',
        kind: 'input',
        inputType: 'number',
        min: 0,
        compact: true,
      },
      {
        badge: 'Q103',
        label: 'How many products do you expect in 1 year?',
        name: 'product_count_year',
        kind: 'input',
        inputType: 'number',
        min: 0,
        compact: true,
      },
      {
        badge: 'Q105',
        label: 'Do you have all product information ready?',
        name: 'product_info_ready',
        kind: 'select',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes - all ready' },
          { value: 'partial', label: 'Partial - some ready' },
          { value: 'no', label: 'No - need help' },
        ],
      },
      {
        badge: 'Q106',
        label: 'Do products have variations?',
        name: 'variations',
        kind: 'checkbox',
        options: [
          { value: 'size', label: 'Size' },
          { value: 'color', label: 'Color' },
          { value: 'material', label: 'Material' },
          { value: 'pattern', label: 'Pattern' },
        ],
      },
      {
        badge: 'Q108',
        label: "Do you need 'product bundles'?",
        name: 'bundles',
        kind: 'select',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes - product bundles' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        badge: 'Q111',
        label: 'How many images per product on average?',
        name: 'images_per_product',
        kind: 'select',
        options: [
          { value: '', label: 'Select an option' },
          { value: '1-2', label: '1-2 images' },
          { value: '3-5', label: '3-5 images' },
          { value: '6-10', label: '6-10 images' },
          { value: '10+', label: '10+ images' },
        ],
      },
      {
        badge: 'Q116',
        label: 'Do you need customer reviews/ratings on product pages?',
        name: 'reviews',
        kind: 'select',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        badge: 'Q121',
        label: 'Do you track inventory levels?',
        name: 'inventory_tracking',
        kind: 'select',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        badge: 'Q130',
        label: 'Are all prices shown including or excluding tax?',
        name: 'tax_display',
        kind: 'select',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'inclusive', label: 'Including tax' },
          { value: 'exclusive', label: 'Excluding tax (added at checkout)' },
        ],
      },
      {
        badge: 'Q137',
        label: 'Should users be able to checkout as guests, or must they create an account?',
        name: 'checkout_option',
        kind: 'select',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'guest', label: 'Guest checkout allowed' },
          { value: 'account', label: 'Must create account' },
          { value: 'both', label: 'Both options available' },
        ],
      },
      {
        badge: 'Q146',
        label: 'Which payment methods MUST you accept?',
        name: 'payments',
        kind: 'checkbox',
        options: [
          { value: 'cards', label: 'Credit/Debit Cards' },
          { value: 'paypal', label: 'PayPal' },
          { value: 'apple_pay', label: 'Apple Pay' },
          { value: 'google_pay', label: 'Google Pay' },
          { value: 'klarna', label: 'Buy Now Pay Later' },
          { value: 'bank', label: 'Bank Transfer/ACH' },
        ],
      },
      {
        badge: 'Q147',
        label: 'Do you already have a merchant account or payment gateway?',
        name: 'payment_gateway',
        kind: 'input',
        placeholder: 'e.g., Stripe, PayPal, Square',
      },
      {
        badge: 'Q154',
        label: 'Do you ship products yourself, or use a fulfillment service?',
        name: 'shipping_method',
        kind: 'select',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'self', label: 'Ship ourselves' },
          { value: 'fulfillment', label: 'Fulfillment service' },
          { value: 'dropshipping', label: 'Dropshipping' },
        ],
      },
      {
        badge: 'Q156',
        label: 'How should shipping costs be calculated?',
        name: 'shipping_calc',
        kind: 'checkbox',
        options: [
          { value: 'flat', label: 'Flat rate' },
          { value: 'free', label: 'Free shipping' },
          { value: 'threshold', label: 'Free over certain amount' },
          { value: 'weight', label: 'Calculated by weight' },
          { value: 'destination', label: 'Calculated by destination' },
          { value: 'carrier', label: 'Real-time carrier rates' },
        ],
      },
      {
        badge: 'Q159',
        label: 'Do you ship internationally?',
        name: 'international_shipping',
        kind: 'select',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No - US only' },
        ],
      },
      {
        badge: 'Q165',
        label: 'Do you offer local pickup/in-store pickup?',
        name: 'local_pickup',
        kind: 'select',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        badge: 'Q169',
        label: 'Do you collect sales tax?',
        name: 'collect_tax',
        kind: 'select',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        badge: 'Q177',
        label: 'Can customers create accounts?',
        name: 'customer_accounts',
        kind: 'select',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        badge: 'Q192',
        label: 'What is your return/refund policy?',
        name: 'return_policy',
        kind: 'textarea',
        placeholder: 'Number of days, conditions, etc.',
      },
      {
        badge: 'Q200',
        label: 'Are you selling subscription products?',
        name: 'subscriptions',
        kind: 'select',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
          { value: 'considering', label: 'Considering but not sure' },
        ],
      },
    ],
  },
  {
    title: '10. Technical & Integrations',
    fields: [
      {
        badge: 'Q345',
        label: 'List ALL software/tools you currently use that need to connect with your store',
        name: 'existing_tools',
        kind: 'textarea',
        placeholder: 'CRM, email marketing, accounting, analytics, etc.',
      },
      {
        badge: 'Q347',
        label: 'Do you use a CRM?',
        name: 'crm',
        kind: 'input',
        placeholder: 'Salesforce, HubSpot, Zoho, Pipedrive, etc.',
      },
      {
        badge: 'Q348',
        label: 'Do you use email marketing software?',
        name: 'email_marketing',
        kind: 'input',
        placeholder: 'Mailchimp, Klaviyo, ActiveCampaign, etc.',
      },
      {
        badge: 'Q349',
        label: 'Do you use accounting software?',
        name: 'accounting',
        kind: 'input',
        placeholder: 'QuickBooks, Xero, FreshBooks',
      },
      {
        badge: 'Q362',
        label: 'Are you migrating from an existing website/platform?',
        name: 'migrating',
        kind: 'select',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No - brand new' },
        ],
      },
      {
        badge: 'Q363',
        label: 'If yes, what platform are you currently on?',
        name: 'current_platform',
        kind: 'select',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'wordpress', label: 'WordPress/WooCommerce' },
          { value: 'shopify', label: 'Shopify' },
          { value: 'wix', label: 'Wix' },
          { value: 'squarespace', label: 'Squarespace' },
          { value: 'magento', label: 'Magento' },
          { value: 'custom', label: 'Custom build' },
          { value: 'other', label: 'Other' },
        ],
      },
    ],
  },
  {
    title: '11. Your Contact Information',
    fields: [
      {
        badge: 'Required',
        label: 'Your Name *',
        name: 'client_name',
        kind: 'input',
        required: true,
        compact: true,
      },
      {
        badge: 'Required',
        label: 'Company Name *',
        name: 'company_name',
        kind: 'input',
        required: true,
        compact: true,
      },
      {
        badge: 'Required',
        label: 'Email Address *',
        name: 'email',
        kind: 'input',
        inputType: 'email',
        required: true,
        compact: true,
      },
      {
        badge: 'Optional',
        label: 'Phone Number',
        name: 'phone',
        kind: 'input',
        inputType: 'tel',
        compact: true,
      },
      {
        badge: 'Optional',
        label: 'How did you hear about us?',
        name: 'referral_source',
        kind: 'input',
        placeholder: 'Friend, Google, social media, etc.',
      },
    ],
  },
];

export function ECDiscovery() {
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(() => {
    if (typeof window === 'undefined') return false;
    return new URLSearchParams(window.location.search).get('submitted') === '1';
  });

  useEffect(() => {
    document.title = 'E-Commerce Discovery | Kypex-Tech';
  }, []);

  return (
    <div className="ec-discovery">
      {!showForm && !formSubmitted && <LandingOverlay onProceed={() => setShowForm(true)} />}
      {showForm && !formSubmitted && <DiscoveryForm onSubmitted={() => setFormSubmitted(true)} />}
      {formSubmitted && <SuccessScreen onStartOver={() => {
        setFormSubmitted(false);
        setShowForm(true);
      }} />}
    </div>
  );
}

function LandingOverlay({ onProceed }: { onProceed: () => void }) {
  const [canProceed, setCanProceed] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setCanProceed(true);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="ec-discovery__landing" aria-label="E-Commerce Discovery intro">
      <div className="ec-discovery__logo-card">
        <LogoMark />
        <button className="ec-discovery__proceed" type="button" onClick={onProceed} disabled={!canProceed}>
          Proceed to Form
        </button>
      </div>
    </div>
  );
}

function LogoMark() {
  return (
    <div className="ec-discovery__logo" aria-label="Kypex-Tech Solutions">
      <div className="ec-discovery__logo-cols" aria-hidden="true">
        {['K', 'Y', 'P', 'E', 'X', '-', 'T', 'E', 'C', 'H'].map((letter, index) => (
          <span
            className={`ec-discovery__logo-letter ${['K', 'E'].includes(letter) ? 'is-highlighted' : ''} ${
              letter === '-' ? 'is-dash' : ''
            }`}
            key={`${letter}-${index}`}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="ec-discovery__tagline">Solutions</div>
    </div>
  );
}

function DiscoveryForm({ onSubmitted }: { onSubmitted: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const updateProgress = () => {
      const inputs = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
        'input:not([type="submit"]):not([type="hidden"]):not([name="botcheck"]), textarea, select',
      );

      if (!inputs.length) {
        setProgress(0);
        return;
      }

      let filled = 0;
      inputs.forEach((input) => {
        if (input instanceof HTMLInputElement && input.type === 'checkbox') {
          if (input.checked) filled += 1;
          return;
        }

        if (input.value.trim() !== '') filled += 1;
      });

      setProgress((filled / inputs.length) * 100);
    };

    updateProgress();
    form.addEventListener('input', updateProgress);
    form.addEventListener('change', updateProgress);

    return () => {
      form.removeEventListener('input', updateProgress);
      form.removeEventListener('change', updateProgress);
    };
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setSubmitError('');

    const formData = new FormData(form);
    const answeredQuestions = discoverySections.flatMap((section) =>
      section.fields.flatMap((field) => {
        const values = formData
          .getAll(field.name)
          .map((value) => value.toString().trim())
          .filter(Boolean);

        if (!values.length) return [];

        return [`${section.title}\n${field.badge} - ${field.label}\n${values.join(', ')}`];
      }),
    );
    const payload: Record<string, string> = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: 'New E-Commerce Discovery Form Submission',
      from_name: 'Kypex-Tech Discovery Form',
      form_name: 'E-Commerce Discovery Form',
      message: answeredQuestions.join('\n\n'),
    };

    ['client_name', 'company_name', 'email', 'phone'].forEach((fieldName) => {
      const fieldValue = formData.get(fieldName)?.toString().trim();
      if (fieldValue) {
        payload[fieldName] = fieldValue;
      }
    });

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'The form could not be submitted. Please try again.');
      }

      form.reset();
      onSubmitted();
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'The form could not be submitted. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="ec-discovery__form-shell">
      <div className="ec-discovery__progress" style={{ width: `${progress}%` }} />
      <div className="ec-discovery__container">
        <header className="ec-discovery__header">
          <LogoMark />
          <h1>E-Commerce Discovery Form</h1>
          <p>Help us build the right online store for your business.</p>
        </header>

        <form
          ref={formRef}
          method="POST"
          onSubmit={handleSubmit}
          className="ec-discovery__form"
        >
          <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
          <input type="hidden" name="subject" value="New E-Commerce Discovery Form Submission" />
          <input type="hidden" name="from_name" value="Kypex-Tech Discovery Form" />
          <input type="hidden" name="form_name" value="E-Commerce Discovery Form" />
          <input type="checkbox" name="botcheck" className="ec-discovery__botcheck" tabIndex={-1} autoComplete="off" />

          {discoverySections.map((section) => (
            <FormSection title={section.title} key={section.title}>
              {section.fields.map((field) => (
                <FieldRenderer field={field} key={`${section.title}-${field.badge}-${field.name}`} />
              ))}
            </FormSection>
          ))}

          <button type="submit" className="ec-discovery__submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Questionnaire'}
          </button>
          {submitError && (
            <p className="ec-discovery__error" role="alert">
              {submitError}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

function FormSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="ec-discovery__section">
      <h2>{title}</h2>
      <div className="ec-discovery__fields">{children}</div>
    </section>
  );
}

function FieldRenderer({ field }: { field: DiscoveryField }) {
  const className = `ec-discovery__field ${field.compact ? 'ec-discovery__field--compact' : ''}`;
  const isWebsiteField = field.name === 'vibe_site';

  return (
    <div className={className}>
      <div className="ec-discovery__badge">{field.badge}</div>
      <label htmlFor={field.name}>{field.label}</label>
      {field.kind === 'textarea' && <textarea id={field.name} name={field.name} placeholder={field.placeholder} required={field.required} />}
      {field.kind === 'input' && (
        <input
          id={field.name}
          type={field.inputType ?? 'text'}
          name={field.name}
          placeholder={field.placeholder}
          required={field.required}
          min={field.min}
          inputMode={isWebsiteField ? 'url' : undefined}
          autoCapitalize={isWebsiteField ? 'none' : undefined}
          autoCorrect={isWebsiteField ? 'off' : undefined}
        />
      )}
      {field.kind === 'select' && (
        <select id={field.name} name={field.name} required={field.required}>
          {(field.options ?? []).map((option) => (
            <option value={option.value} key={`${field.name}-${option.value}`}>
              {option.label}
            </option>
          ))}
        </select>
      )}
      {field.kind === 'checkbox' && (
        <div className="ec-discovery__checkbox-grid">
          {(field.options ?? []).map((option) => (
            <label className="ec-discovery__checkbox" key={`${field.name}-${option.value}`}>
              <input type="checkbox" name={field.name} value={option.value} />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

function SuccessScreen({ onStartOver }: { onStartOver: () => void }) {
  const [typedText, setTypedText] = useState('');
  const [showActions, setShowActions] = useState(false);

  useEffect(() => {
    const textToType = 'thank you, form has been submitted successfully :)';
    let charIndex = 0;

    const typeInterval = window.setInterval(() => {
      if (charIndex < textToType.length) {
        const nextCharacter = textToType.charAt(charIndex);
        setTypedText((previous) => previous + nextCharacter);
        charIndex += 1;
      } else {
        window.clearInterval(typeInterval);
        window.setTimeout(() => setShowActions(true), 500);
      }
    }, 50);

    return () => window.clearInterval(typeInterval);
  }, []);

  return (
    <div className="ec-discovery__success">
      <div className="ec-discovery__terminal">
        <div className="ec-discovery__terminal-bar" aria-hidden="true">
          <span className="is-red" />
          <span className="is-yellow" />
          <span className="is-green" />
        </div>
        <p>
          <span>$ </span>
          <span>init --brand</span>
        </p>
        <p>&gt; KYPEX-TECH SOLUTIONS</p>
        <p>
          <span>$ </span>
          <span>{typedText}</span>
        </p>
        {showActions && (
          <div className="ec-discovery__success-actions">
            <a href="/">Go to Site</a>
            <button type="button" onClick={onStartOver}>
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
