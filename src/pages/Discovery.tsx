import { useEffect, useMemo, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import './Discovery.css';

type FieldOption = {
  value: string;
  label: string;
};

type DiscoveryField = {
  badge: string;
  label: string;
  name: string;
  kind: 'input' | 'textarea' | 'select' | 'checkbox' | 'project-type';
  inputType?: string;
  placeholder?: string;
  required?: boolean;
  min?: number;
  options?: FieldOption[];
  compact?: boolean;
};

type NumberedDiscoveryField = DiscoveryField & {
  displayBadge: string;
};

type NumberedDiscoverySection = Omit<DiscoverySection, 'fields'> & {
  fields: NumberedDiscoveryField[];
};

type SectionAudience = 'selector' | 'common' | 'website' | 'mobile' | 'ecommerce';

type DiscoverySection = {
  title: string;
  audience?: SectionAudience;
  fields: DiscoveryField[];
};

type ProjectType = '' | 'mobile_app' | 'website' | 'both';

const WEB3FORMS_ACCESS_KEY = 'af31cdca-fdb5-4fd7-81bd-762838f8e47f';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const yesNoOptions: FieldOption[] = [
  { value: '', label: 'Select an option' },
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
];

const yesNoUnsureOptions: FieldOption[] = [
  { value: '', label: 'Select an option' },
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
  { value: 'not_sure', label: 'Not sure yet' },
];

const discoverySections: DiscoverySection[] = [
  {
    title: '1. Project Type',
    audience: 'selector',
    fields: [
      {
        badge: 'Q6',
        label: 'What are you building?',
        name: 'project_type',
        kind: 'project-type',
        required: true,
        options: [
          { value: '', label: 'Select project type' },
          { value: 'mobile_app', label: 'Mobile App' },
          { value: 'website', label: 'Website' },
          { value: 'both', label: 'Both - Mobile App + Website' },
        ],
      },
    ],
  },
  {
    title: '2. Project Overview & Budget',
    audience: 'common',
    fields: [
      {
        badge: 'Q1',
        label: 'What is the project name?',
        name: 'project_name',
        kind: 'input',
        required: true,
        compact: true,
      },
      {
        badge: 'Q2',
        label: 'What is your company/organization name?',
        name: 'company_name',
        kind: 'input',
        required: true,
        compact: true,
      },
      {
        badge: 'Q3a',
        label: 'Who is the primary contact person?',
        name: 'primary_contact_name',
        kind: 'input',
        required: true,
        compact: true,
        placeholder: 'Name and title',
      },
      {
        badge: 'Q3b',
        label: 'Primary contact email',
        name: 'email',
        kind: 'input',
        inputType: 'email',
        required: true,
        compact: true,
      },
      {
        badge: 'Q3c',
        label: 'Primary contact phone',
        name: 'phone',
        kind: 'input',
        inputType: 'tel',
        compact: true,
      },
      {
        badge: 'Q4',
        label: 'What is your role in this project?',
        name: 'project_role',
        kind: 'select',
        compact: true,
        options: [
          { value: '', label: 'Select a role' },
          { value: 'decision_maker', label: 'Decision maker' },
          { value: 'project_manager', label: 'Project manager' },
          { value: 'owner_founder', label: 'Owner/founder' },
          { value: 'marketing', label: 'Marketing lead' },
          { value: 'technical', label: 'Technical lead' },
          { value: 'other', label: 'Other' },
        ],
      },
      {
        badge: 'Q5',
        label: 'How did you hear about us?',
        name: 'referral_source',
        kind: 'input',
        placeholder: 'Google, referral, social media, event, etc.',
      },
      {
        badge: 'Q7',
        label: 'Is this replacing an existing system/website/app?',
        name: 'replacing_existing',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q8',
        label: 'If replacing: What works well in the current system that we must keep?',
        name: 'keep_current_system',
        kind: 'textarea',
        placeholder: 'Features, workflows, content, integrations, or design elements to keep',
      },
      {
        badge: 'Q9',
        label: 'If replacing: What frustrates you most about the current system?',
        name: 'current_system_frustrations',
        kind: 'textarea',
        placeholder: 'Pain points, bugs, bottlenecks, confusing areas, or missing features',
      },
      {
        badge: 'Q10',
        label: 'What is the expected launch date?',
        name: 'expected_launch_date',
        kind: 'input',
        inputType: 'date',
        compact: true,
      },
      {
        badge: 'Q11',
        label: 'Is there a hard, immovable deadline?',
        name: 'hard_deadline',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q12',
        label: 'Are there any seasonal factors?',
        name: 'seasonal_factors',
        kind: 'textarea',
        placeholder: 'e.g., must launch before holiday season, an event, funding deadline, or school term',
      },
      {
        badge: 'Q13',
        label: 'What is your total budget range for this project?',
        name: 'budget_range',
        kind: 'select',
        options: [
          { value: '', label: 'Select a range' },
          { value: 'under_5000', label: 'Under $5,000' },
          { value: '5000_10000', label: '$5,000 - $10,000' },
          { value: '10000_25000', label: '$10,000 - $25,000' },
          { value: '25000_50000', label: '$25,000 - $50,000' },
          { value: '50000_100000', label: '$50,000 - $100,000' },
          { value: '100000_plus', label: '$100,000+' },
          { value: 'not_sure', label: 'Not sure yet' },
        ],
      },
      {
        badge: 'Q14',
        label: 'Do you have budget for ongoing maintenance after launch?',
        name: 'maintenance_budget',
        kind: 'select',
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q15',
        label: 'Do you have budget for these supporting services?',
        name: 'supporting_service_budget',
        kind: 'checkbox',
        options: [
          { value: 'photography_videography', label: 'Professional photography/videography' },
          { value: 'content_copywriting', label: 'Content/copywriting' },
          { value: 'logo_branding', label: 'Logo/branding' },
          { value: 'marketing_ads', label: 'Ongoing marketing/ads' },
        ],
      },
    ],
  },
  {
    title: '3. Vision & Goals',
    audience: 'common',
    fields: [
      {
        badge: 'Q16',
        label: 'In one sentence, what does this platform/app do?',
        name: 'platform_summary',
        kind: 'textarea',
        placeholder: 'Describe the product in plain language',
      },
      {
        badge: 'Q17',
        label: 'What is the #1 problem this solves for your business?',
        name: 'business_problem',
        kind: 'textarea',
      },
      {
        badge: 'Q18',
        label: 'What is the #1 problem this solves for your customers/users?',
        name: 'user_problem',
        kind: 'textarea',
      },
      {
        badge: 'Q19',
        label: 'If we launch successfully, what specific metric will change?',
        name: 'success_metric',
        kind: 'input',
        placeholder: 'e.g., 20 sales/day instead of 5',
      },
      {
        badge: 'Q20',
        label: '6 months after launch, how will you know this was worth the investment?',
        name: 'six_month_success',
        kind: 'textarea',
      },
      {
        badge: 'Q21',
        label: 'What is the absolute CORE feature - the one thing that MUST work perfectly?',
        name: 'core_feature',
        kind: 'textarea',
      },
      {
        badge: 'Q22',
        label: "What would be nice to have but isn't critical for launch?",
        name: 'nice_to_have',
        kind: 'textarea',
      },
      {
        badge: 'Q23',
        label: 'What are the top 3 things this project MUST achieve?',
        name: 'top_three_outcomes',
        kind: 'textarea',
        placeholder: '1. ...\n2. ...\n3. ...',
      },
    ],
  },
  {
    title: '4. Target Audience',
    audience: 'common',
    fields: [
      {
        badge: 'Q24',
        label: 'Who is your primary user? (Age range, profession, tech skill level)',
        name: 'primary_user',
        kind: 'textarea',
      },
      {
        badge: 'Q25',
        label: 'What devices do they primarily use?',
        name: 'primary_devices',
        kind: 'checkbox',
        options: [
          { value: 'desktop', label: 'Desktop' },
          { value: 'mobile', label: 'Mobile' },
          { value: 'tablet', label: 'Tablet' },
          { value: 'mix', label: 'Mix' },
        ],
      },
      {
        badge: 'Q26',
        label: 'What is their typical internet speed/quality?',
        name: 'internet_quality',
        kind: 'select',
        compact: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'fast', label: 'Fast and reliable' },
          { value: 'average', label: 'Average' },
          { value: 'slow', label: 'Slow/limited' },
          { value: 'varied', label: 'Varies widely' },
        ],
      },
      {
        badge: 'Q27',
        label: 'How tech-savvy are your users?',
        name: 'tech_savvy',
        kind: 'select',
        compact: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'very', label: 'Very tech-savvy' },
          { value: 'moderate', label: 'Moderate' },
          { value: 'less', label: 'Less tech-savvy' },
        ],
      },
      {
        badge: 'Q28',
        label: 'What language(s) do they speak?',
        name: 'user_languages',
        kind: 'input',
        compact: true,
        placeholder: 'e.g., English, Zulu, Afrikaans',
      },
      {
        badge: 'Q29',
        label: 'What time zones are they in?',
        name: 'user_timezones',
        kind: 'input',
        compact: true,
        placeholder: 'e.g., SAST, EST, GMT',
      },
      {
        badge: 'Q30',
        label: 'Are there any accessibility needs we must accommodate?',
        name: 'accessibility_needs',
        kind: 'textarea',
        placeholder: 'Vision, hearing, motor difficulties, cognitive needs, etc.',
      },
      {
        badge: 'Q31',
        label: 'What is their biggest fear/concern when using platforms like this?',
        name: 'user_concerns',
        kind: 'textarea',
      },
    ],
  },
  {
    title: '5. Competitive Landscape',
    audience: 'common',
    fields: [
      {
        badge: 'Q32',
        label: 'Who are your top 3 competitors? (Names and URLs)',
        name: 'competitors',
        kind: 'textarea',
        placeholder: 'List competitor names and URLs',
      },
      {
        badge: 'Q33',
        label: 'For each competitor: What do they do BETTER than you currently?',
        name: 'competitors_better',
        kind: 'textarea',
      },
      {
        badge: 'Q34',
        label: 'For each competitor: Where do they FAIL that you want to do better?',
        name: 'competitors_fail',
        kind: 'textarea',
      },
      {
        badge: 'Q35',
        label: 'Show us 3 websites/apps you LOVE (any industry) - URLs and what you love',
        name: 'loved_examples',
        kind: 'textarea',
      },
      {
        badge: 'Q36',
        label: 'Show us 3 websites/apps you HATE - URLs and what bothers you',
        name: 'hated_examples',
        kind: 'textarea',
      },
      {
        badge: 'Q37',
        label: 'Is there a website/app that has the exact vibe you want?',
        name: 'vibe_reference',
        kind: 'input',
        placeholder: 'Paste a URL or describe the vibe',
      },
    ],
  },
  {
    title: '6. Brand & Visual Identity',
    audience: 'common',
    fields: [
      {
        badge: 'Q38',
        label: 'Do you have a logo?',
        name: 'logo_status',
        kind: 'select',
        compact: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes_vector', label: 'Yes, vector format' },
          { value: 'yes_image', label: 'Yes, image only' },
          { value: 'no_need_created', label: 'No, need one created' },
        ],
      },
      {
        badge: 'Q39',
        label: 'Do you have official brand colors? (Provide hex codes)',
        name: 'brand_colors',
        kind: 'input',
        compact: true,
        placeholder: 'e.g., #34d9b9, #011f44',
      },
      {
        badge: 'Q40',
        label: 'Do you have official brand fonts?',
        name: 'brand_fonts',
        kind: 'input',
        compact: true,
      },
      {
        badge: 'Q41',
        label: 'Do you have a brand style guide?',
        name: 'style_guide',
        kind: 'select',
        compact: true,
        options: yesNoOptions,
      },
      {
        badge: 'Q42',
        label: 'What 3 words describe how your brand should FEEL?',
        name: 'brand_feel',
        kind: 'input',
        placeholder: 'e.g., modern, trustworthy, premium',
      },
      {
        badge: 'Q43',
        label: 'What emotions should users feel when they see your site/app?',
        name: 'user_emotions',
        kind: 'textarea',
      },
      {
        badge: 'Q44',
        label: "Are there colors you absolutely DON'T want used?",
        name: 'colors_to_avoid',
        kind: 'input',
      },
      {
        badge: 'Q45',
        label: 'Are there any visual styles you hate?',
        name: 'visual_styles_to_avoid',
        kind: 'textarea',
        placeholder: 'e.g., no cartoony illustrations, no stock photos of people in suits',
      },
      {
        badge: 'Q46',
        label: 'Do you have existing brand guidelines document?',
        name: 'brand_guidelines_document',
        kind: 'select',
        options: yesNoOptions,
      },
    ],
  },
  {
    title: '7. Website Specific',
    audience: 'website',
    fields: [
      {
        badge: 'Q47',
        label: 'What type of website is this?',
        name: 'website_type',
        kind: 'select',
        options: [
          { value: '', label: 'Select website type' },
          { value: 'corporate', label: 'Corporate/Business website' },
          { value: 'ecommerce', label: 'E-commerce/Online store' },
          { value: 'portfolio', label: 'Portfolio/Showcase' },
          { value: 'blog', label: 'Blog/Content site' },
          { value: 'web_app_dashboard', label: 'Web application/Dashboard' },
          { value: 'landing_page', label: 'Landing page' },
          { value: 'membership', label: 'Membership/Subscription site' },
          { value: 'non_profit', label: 'Non-profit' },
          { value: 'other', label: 'Other' },
        ],
      },
      {
        badge: 'Q48',
        label: 'How many pages do you expect?',
        name: 'estimated_pages',
        kind: 'input',
        inputType: 'number',
        min: 1,
        compact: true,
      },
      {
        badge: 'Q49',
        label: 'Will this site need a Content Management System (CMS)?',
        name: 'needs_cms',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q50',
        label: 'Who will be responsible for updating content after launch?',
        name: 'content_updater',
        kind: 'input',
      },
      {
        badge: 'Q51',
        label: 'List all the pages you need (Home, About, Services, Contact, etc.)',
        name: 'required_pages',
        kind: 'textarea',
      },
      {
        badge: 'Q52',
        label: 'Do you need a blog/news section?',
        name: 'needs_blog',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q53',
        label: 'Do you need user login/membership functionality?',
        name: 'website_user_login',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q54',
        label: 'Do you need a contact form? How many fields?',
        name: 'contact_form_details',
        kind: 'input',
        placeholder: 'e.g., Yes - name, email, phone, message, service type',
      },
      {
        badge: 'Q55',
        label: 'Do you need any calculators or interactive tools?',
        name: 'interactive_tools',
        kind: 'textarea',
      },
      {
        badge: 'Q56',
        label: 'Do you need multi-language support?',
        name: 'website_multilanguage',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q57',
        label: 'Do you need a searchable database or directory?',
        name: 'searchable_database',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q58',
        label: 'Do you need a booking/appointment system?',
        name: 'booking_system',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q59',
        label: 'Do you need a chat or chatbot functionality?',
        name: 'chatbot',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q60',
        label: 'Do you need a newsletter/email signup?',
        name: 'newsletter_signup',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q61',
        label: 'Do you need a gallery or portfolio section?',
        name: 'gallery_portfolio',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q62',
        label: 'Do you need any downloads (PDFs, documents)?',
        name: 'website_downloads',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q63',
        label: 'Do you need a FAQ section?',
        name: 'faq_section',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q64',
        label: 'Do you need a privacy policy, terms of service pages?',
        name: 'legal_pages',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q65',
        label: 'Do you have existing Google Analytics or tracking set up?',
        name: 'existing_tracking',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q66',
        label: 'Do you need SEO optimization services?',
        name: 'seo_services',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q67',
        label: 'Do you have existing content that needs to be migrated?',
        name: 'content_migration',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q68',
        label: 'What keywords do you want to rank for?',
        name: 'seo_keywords',
        kind: 'textarea',
      },
      {
        badge: 'Q69',
        label: 'Do you need integration with email marketing? (Mailchimp, etc.)',
        name: 'email_marketing_integration',
        kind: 'input',
      },
      {
        badge: 'Q70',
        label: 'Do you need social media integration?',
        name: 'social_media_integration',
        kind: 'textarea',
      },
      {
        badge: 'Q71',
        label: 'Do you need any landing pages for marketing campaigns?',
        name: 'campaign_landing_pages',
        kind: 'textarea',
      },
    ],
  },
  {
    title: '8. E-Commerce Specific',
    audience: 'ecommerce',
    fields: [
      {
        badge: 'Q72',
        label: 'What are you selling?',
        name: 'selling_type',
        kind: 'checkbox',
        options: [
          { value: 'physical_products', label: 'Physical products' },
          { value: 'digital_downloads', label: 'Digital downloads' },
          { value: 'services', label: 'Services' },
          { value: 'subscriptions', label: 'Subscriptions' },
        ],
      },
      {
        badge: 'Q73',
        label: 'How many products do you have NOW?',
        name: 'products_now',
        kind: 'input',
        inputType: 'number',
        min: 0,
        compact: true,
      },
      {
        badge: 'Q74',
        label: 'How many products do you expect in 1 year?',
        name: 'products_one_year',
        kind: 'input',
        inputType: 'number',
        min: 0,
        compact: true,
      },
      {
        badge: 'Q75',
        label: 'Do products have variations? (Size, Color, Material, etc.)',
        name: 'product_variations',
        kind: 'textarea',
      },
      {
        badge: 'Q76',
        label: 'Do you need product bundles?',
        name: 'product_bundles',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q77',
        label: 'How many images per product on average?',
        name: 'images_per_product',
        kind: 'select',
        compact: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: '1_2', label: '1-2 images' },
          { value: '3_5', label: '3-5 images' },
          { value: '6_10', label: '6-10 images' },
          { value: '10_plus', label: '10+ images' },
        ],
      },
      {
        badge: 'Q78',
        label: 'Do you need customer reviews/ratings?',
        name: 'customer_reviews',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q79',
        label: 'Do you track inventory levels?',
        name: 'inventory_tracking',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q80',
        label: 'Are prices shown including or excluding tax?',
        name: 'tax_display',
        kind: 'select',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'including_tax', label: 'Including tax' },
          { value: 'excluding_tax', label: 'Excluding tax' },
          { value: 'not_sure', label: 'Not sure yet' },
        ],
      },
      {
        badge: 'Q81',
        label: 'Should users checkout as guests or must create an account?',
        name: 'checkout_account_requirement',
        kind: 'select',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'guest_allowed', label: 'Guest checkout allowed' },
          { value: 'account_required', label: 'Account required' },
          { value: 'both', label: 'Both options' },
        ],
      },
      {
        badge: 'Q82',
        label: 'Which payment methods MUST you accept?',
        name: 'required_payment_methods',
        kind: 'checkbox',
        options: [
          { value: 'cards', label: 'Cards' },
          { value: 'paypal', label: 'PayPal' },
          { value: 'apple_pay', label: 'Apple Pay' },
          { value: 'google_pay', label: 'Google Pay' },
          { value: 'klarna', label: 'Klarna' },
          { value: 'bank_transfer', label: 'Bank transfer' },
        ],
      },
      {
        badge: 'Q83',
        label: 'Do you already have a merchant account or payment gateway?',
        name: 'merchant_account',
        kind: 'input',
        placeholder: 'Stripe, PayPal, PayFast, Ozow, etc.',
      },
      {
        badge: 'Q84',
        label: 'Do you ship products yourself or use fulfillment?',
        name: 'fulfillment_method',
        kind: 'select',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'ship_self', label: 'Ship products ourselves' },
          { value: 'fulfillment_service', label: 'Use fulfillment service' },
          { value: 'dropshipping', label: 'Dropshipping' },
          { value: 'not_applicable', label: 'Not applicable' },
        ],
      },
      {
        badge: 'Q85',
        label: 'How should shipping costs be calculated?',
        name: 'shipping_cost_calculation',
        kind: 'checkbox',
        options: [
          { value: 'flat_rate', label: 'Flat rate' },
          { value: 'free', label: 'Free' },
          { value: 'by_weight', label: 'By weight' },
          { value: 'real_time_rates', label: 'Real-time carrier rates' },
          { value: 'other', label: 'Other' },
        ],
      },
      {
        badge: 'Q86',
        label: 'Do you ship internationally?',
        name: 'international_shipping',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q87',
        label: 'Do you offer local pickup/in-store pickup?',
        name: 'local_pickup',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q88',
        label: 'Do you collect sales tax?',
        name: 'sales_tax',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q89',
        label: 'Can customers create accounts?',
        name: 'customer_accounts',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q90',
        label: 'What is your return/refund policy?',
        name: 'return_refund_policy',
        kind: 'textarea',
      },
    ],
  },
  {
    title: '9. Mobile App - Platform & App Type',
    audience: 'mobile',
    fields: [
      {
        badge: 'Q91',
        label: 'Which platforms do you need?',
        name: 'mobile_platforms',
        kind: 'checkbox',
        options: [
          { value: 'ios', label: 'iOS (iPhone)' },
          { value: 'android', label: 'Android' },
          { value: 'ios_android', label: 'Both iOS and Android' },
          { value: 'cross_platform', label: 'Cross-platform (React Native, Flutter)' },
          { value: 'tablet_only', label: 'Tablet only' },
          { value: 'desktop_electron', label: 'Desktop app (Electron)' },
        ],
      },
      {
        badge: 'Q92',
        label: 'Do you need to publish to App Store and Google Play?',
        name: 'app_store_publish',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q93',
        label: 'Do you have developer accounts ready? (Apple Developer / Google Play Console)',
        name: 'developer_accounts',
        kind: 'textarea',
      },
      {
        badge: 'Q94',
        label: 'Do you need enterprise distribution (MDM) or internal app distribution?',
        name: 'enterprise_distribution',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q95',
        label: 'What type of mobile app is this?',
        name: 'mobile_app_type',
        kind: 'select',
        options: [
          { value: '', label: 'Select app type' },
          { value: 'ecommerce', label: 'E-commerce/Shopping app' },
          { value: 'social_media', label: 'Social media app' },
          { value: 'business', label: 'Business/Corporate app' },
          { value: 'utility', label: 'Utility/Productivity app' },
          { value: 'health_fitness', label: 'Health & Fitness app' },
          { value: 'education', label: 'Education/Learning app' },
          { value: 'entertainment', label: 'Entertainment/Streaming app' },
          { value: 'finance', label: 'Finance/Banking app' },
          { value: 'food_delivery', label: 'Food/Delivery app' },
          { value: 'travel_booking', label: 'Travel/Booking app' },
          { value: 'other', label: 'Other' },
        ],
      },
      {
        badge: 'Q96',
        label: 'Is this app standalone or should it integrate with an existing website?',
        name: 'app_standalone_or_integrated',
        kind: 'textarea',
      },
      {
        badge: 'Q97',
        label: 'Does this app need to sync data with a web portal or backend system?',
        name: 'app_backend_sync',
        kind: 'select',
        options: yesNoUnsureOptions,
      },
    ],
  },
  {
    title: '10. Mobile App - Accounts & Core Features',
    audience: 'mobile',
    fields: [
      {
        badge: 'Q98',
        label: 'Do users need to create accounts?',
        name: 'app_user_accounts',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q99',
        label: 'What authentication methods?',
        name: 'auth_methods',
        kind: 'checkbox',
        options: [
          { value: 'email', label: 'Email' },
          { value: 'phone', label: 'Phone' },
          { value: 'social_login', label: 'Social login' },
          { value: 'biometric', label: 'Biometric' },
        ],
      },
      {
        badge: 'Q100',
        label: 'Do you need user profiles with custom fields?',
        name: 'custom_user_profiles',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q101',
        label: 'Do users need roles/permissions? (Admin, Manager, User, Guest)',
        name: 'app_roles_permissions',
        kind: 'textarea',
      },
      {
        badge: 'Q102',
        label: 'Do you need push notifications?',
        name: 'push_notifications',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q103',
        label: 'Do you need email/SMS notifications?',
        name: 'email_sms_notifications',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q104',
        label: 'Do you need in-app messaging or chat?',
        name: 'in_app_messaging',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q105',
        label: 'List the main features users will perform in the app',
        name: 'main_app_features',
        kind: 'textarea',
      },
      {
        badge: 'Q106-Q119',
        label: 'Which device features do you need?',
        name: 'device_features',
        kind: 'checkbox',
        options: [
          { value: 'barcode_qr_scanning', label: 'Barcode/QR code scanning' },
          { value: 'camera', label: 'Camera integration' },
          { value: 'location_gps', label: 'Location services/GPS' },
          { value: 'offline', label: 'Offline functionality' },
          { value: 'bluetooth', label: 'Bluetooth integration' },
          { value: 'nfc_payments', label: 'NFC/contactless payments' },
          { value: 'background_location', label: 'Background location tracking' },
          { value: 'biometric_authentication', label: 'Biometric authentication' },
          { value: 'device_calendar', label: 'Device calendar integration' },
          { value: 'device_contacts', label: 'Device contacts integration' },
          { value: 'file_storage', label: 'Device file storage access' },
          { value: 'voice_assistant', label: 'Voice assistant integration' },
          { value: 'ar_vr', label: 'AR/VR features' },
          { value: 'widgets', label: 'App widgets' },
        ],
      },
    ],
  },
  {
    title: '11. Mobile App - Payments, Data & Store Requirements',
    audience: 'mobile',
    fields: [
      {
        badge: 'Q120',
        label: 'Do you need in-app purchases?',
        name: 'in_app_purchases',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q121',
        label: 'Do you need subscriptions?',
        name: 'app_subscriptions',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q122',
        label: 'Do you need payment processing?',
        name: 'app_payment_processing',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q123',
        label: 'Do you need wallet integration? (Apple Pay, Google Pay)',
        name: 'wallet_integration',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q124',
        label: 'Do you need to process refunds?',
        name: 'app_refunds',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q125',
        label: 'Do you have an existing backend/API?',
        name: 'existing_backend',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q126',
        label: 'Do you need a custom backend built?',
        name: 'custom_backend',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q127',
        label: 'Do you need a database? What type? (SQL, NoSQL)',
        name: 'database_needs',
        kind: 'textarea',
      },
      {
        badge: 'Q128',
        label: 'Do you need real-time features? (WebSockets, live updates)',
        name: 'real_time_features',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q129',
        label: 'Do you need offline data sync?',
        name: 'offline_data_sync',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q130',
        label: 'What is your expected data storage needs? (GB/TB)',
        name: 'data_storage_needs',
        kind: 'input',
        compact: true,
      },
      {
        badge: 'Q131',
        label: 'Do you need analytics in the app?',
        name: 'app_analytics',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q132',
        label: 'Do you need crash reporting?',
        name: 'crash_reporting',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q133',
        label: 'Do you need A/B testing capability?',
        name: 'ab_testing',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q134',
        label: 'Do you have app screenshots and descriptions ready?',
        name: 'store_assets_ready',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q135',
        label: 'Do you have a privacy policy URL?',
        name: 'privacy_policy_url',
        kind: 'input',
        placeholder: 'e.g., www.kypextech.co.za/privacy or https://kypextech.co.za/privacy',
        compact: true,
      },
      {
        badge: 'Q136',
        label: 'Do you need age rating documentation?',
        name: 'age_rating_docs',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q137',
        label: 'Do you need to comply with any industry regulations? (HIPAA, GDPR, PCI-DSS)',
        name: 'industry_regulations',
        kind: 'textarea',
      },
      {
        badge: 'Q138',
        label: 'Do you need app icon and splash screen design?',
        name: 'app_icon_splash',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q139',
        label: 'Do you have app preview videos?',
        name: 'app_preview_videos',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
    ],
  },
  {
    title: '12. Content & Assets',
    audience: 'common',
    fields: [
      {
        badge: 'Q140',
        label: 'Do you have all written content ready?',
        name: 'written_content_ready',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q141',
        label: 'Do you have professional photography?',
        name: 'professional_photography',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q142',
        label: 'Do you have video content?',
        name: 'video_content',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q143',
        label: 'Do you have testimonials/reviews collected?',
        name: 'testimonials_reviews',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q144',
        label: 'Do you have company mission statement, about us story, and team bios?',
        name: 'company_story_assets',
        kind: 'textarea',
      },
      {
        badge: 'Q145',
        label: 'Do you have any existing brand assets? (Logos, images, documents)',
        name: 'existing_brand_assets',
        kind: 'textarea',
      },
      {
        badge: 'Q146',
        label: 'Do you need copywriting services?',
        name: 'copywriting_services',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q147',
        label: 'Do you need stock photos/videos?',
        name: 'stock_media',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
    ],
  },
  {
    title: '13. Domain & Technical',
    audience: 'common',
    fields: [
      {
        badge: 'Q148',
        label: 'Do you own a domain name?',
        name: 'domain_owned',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q149',
        label: 'Where did you buy the domain?',
        name: 'domain_registrar',
        kind: 'input',
        compact: true,
      },
      {
        badge: 'Q150',
        label: 'Do you have login access to that account?',
        name: 'domain_login_access',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q151',
        label: 'Do you currently have web hosting?',
        name: 'current_web_hosting',
        kind: 'input',
        compact: true,
        placeholder: 'If yes, who hosts it?',
      },
      {
        badge: 'Q152',
        label: 'Where is your business email hosted?',
        name: 'business_email_host',
        kind: 'input',
        compact: true,
        placeholder: 'Google Workspace, Microsoft 365, hosting provider, etc.',
      },
      {
        badge: 'Q153',
        label: 'Do you have an SSL certificate?',
        name: 'ssl_certificate',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q154',
        label: 'Who will maintain the site/app after launch?',
        name: 'maintenance_owner',
        kind: 'input',
      },
    ],
  },
  {
    title: '14. Integrations',
    audience: 'common',
    fields: [
      {
        badge: 'Q155',
        label: 'List ALL software/tools you currently use that need to connect',
        name: 'tools_to_connect',
        kind: 'textarea',
        placeholder: 'CRM, email marketing, accounting, analytics, payments, shipping, inventory, social media, etc.',
      },
      {
        badge: 'Q156',
        label: 'Do you use a specific CRM?',
        name: 'specific_crm',
        kind: 'input',
        compact: true,
      },
      {
        badge: 'Q157',
        label: 'Do you use email marketing software?',
        name: 'email_marketing_software',
        kind: 'input',
        compact: true,
      },
      {
        badge: 'Q158',
        label: 'Do you use accounting software?',
        name: 'accounting_software',
        kind: 'input',
        compact: true,
      },
      {
        badge: 'Q159',
        label: 'Do you use any marketing automation?',
        name: 'marketing_automation',
        kind: 'input',
        compact: true,
      },
      {
        badge: 'Q160',
        label: 'Do you need third-party API integrations?',
        name: 'third_party_apis',
        kind: 'textarea',
      },
      {
        badge: 'Q161',
        label: 'Do you need custom API development?',
        name: 'custom_api_development',
        kind: 'select',
        options: yesNoUnsureOptions,
      },
    ],
  },
  {
    title: '15. Team & Decisions',
    audience: 'common',
    fields: [
      {
        badge: 'Q162',
        label: 'Who is the final decision-maker?',
        name: 'final_decision_maker',
        kind: 'input',
        compact: true,
      },
      {
        badge: 'Q163',
        label: 'How many people need to approve decisions?',
        name: 'approval_count',
        kind: 'input',
        inputType: 'number',
        min: 1,
        compact: true,
      },
      {
        badge: 'Q164',
        label: 'Who will be your main point of contact?',
        name: 'main_point_of_contact',
        kind: 'input',
        compact: true,
      },
      {
        badge: 'Q165',
        label: 'Who will be responsible for providing content?',
        name: 'content_responsible',
        kind: 'input',
        compact: true,
      },
      {
        badge: 'Q166',
        label: 'Who will manage the platform after launch?',
        name: 'platform_manager',
        kind: 'input',
      },
      {
        badge: 'Q167',
        label: 'Are you able to make decisions quickly?',
        name: 'decision_speed',
        kind: 'select',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'very_fast', label: 'Very fast' },
          { value: 'moderate', label: 'Moderate' },
          { value: 'slow', label: 'Slow' },
        ],
      },
    ],
  },
  {
    title: '16. Post-Launch',
    audience: 'common',
    fields: [
      {
        badge: 'Q168',
        label: 'Do you need training on how to use/update the site/app?',
        name: 'training_needed',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q169',
        label: 'Do you need documentation or user manual?',
        name: 'documentation_needed',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
      {
        badge: 'Q170',
        label: 'What ongoing support do you expect? (Bug fixes, updates, new features)',
        name: 'ongoing_support_expectations',
        kind: 'textarea',
      },
      {
        badge: 'Q171',
        label: 'How often do you expect to make updates/changes?',
        name: 'update_frequency',
        kind: 'input',
        compact: true,
        placeholder: 'Weekly, monthly, quarterly, as needed',
      },
      {
        badge: 'Q172',
        label: 'Do you need marketing/SEO services after launch?',
        name: 'post_launch_marketing_seo',
        kind: 'select',
        compact: true,
        options: yesNoUnsureOptions,
      },
    ],
  },
];

export function Discovery() {
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(() => {
    if (typeof window === 'undefined') return false;
    return new URLSearchParams(window.location.search).get('submitted') === '1';
  });

  useEffect(() => {
    document.title = 'Mobile & Website Discovery | Kypex-Tech';
  }, []);

  return (
    <div className="ec-discovery">
      {!showForm && !formSubmitted && <LandingOverlay onProceed={() => setShowForm(true)} />}
      {showForm && !formSubmitted && <DiscoveryForm onSubmitted={() => setFormSubmitted(true)} />}
      {formSubmitted && (
        <SuccessScreen
          onStartOver={() => {
            setFormSubmitted(false);
            setShowForm(true);
          }}
        />
      )}
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
    <div className="ec-discovery__landing" aria-label="Mobile and website discovery intro">
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
  const [projectType, setProjectType] = useState<ProjectType>('');
  const [websiteType, setWebsiteType] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const visibleSections = useMemo(
    () =>
      discoverySections.filter((section) => {
        const isWebsiteProject = projectType === 'website' || projectType === 'both';
        const isMobileProject = projectType === 'mobile_app' || projectType === 'both';

        if (section.audience === 'selector') return true;
        if (!projectType) return false;
        if (!section.audience || section.audience === 'common') return true;
        if (section.audience === 'website') return isWebsiteProject;
        if (section.audience === 'mobile') return isMobileProject;
        return isWebsiteProject && websiteType === 'ecommerce';
      }),
    [projectType, websiteType],
  );

  const numberedSections = useMemo<NumberedDiscoverySection[]>(() => {
    let questionNumber = 0;

    return visibleSections.map((section) => ({
      ...section,
      fields: section.fields.map((field) => {
        questionNumber += 1;

        return {
          ...field,
          displayBadge: String(questionNumber).padStart(2, '0'),
        };
      }),
    }));
  }, [visibleSections]);

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
  }, [visibleSections]);

  const handleProjectTypeChange = (value: ProjectType) => {
    setProjectType(value);
    if (value !== 'website' && value !== 'both') {
      setWebsiteType('');
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get('botcheck')) return;

    if (!projectType) {
      setSubmitError('Please choose what you are building first.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    const answeredQuestions = numberedSections.flatMap((section) =>
      section.fields.flatMap((field) => {
        const values = formData
          .getAll(field.name)
          .map((value) => value.toString().trim())
          .filter(Boolean)
          .map((value) => field.options?.find((option) => option.value === value)?.label ?? value);

        if (!values.length) return [];

        return [`${section.title}\nQuestion ${field.displayBadge} - ${field.label}\n${values.join(', ')}`];
      }),
    );

    const contactName = formData.get('primary_contact_name')?.toString().trim();
    const payload: Record<string, string> = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: 'New Mobile/Website Discovery Form Submission',
      from_name: contactName || 'Kypex-Tech Discovery Form',
      form_name: 'Mobile & Website Discovery Form',
      message: answeredQuestions.join('\n\n'),
    };

    ['project_name', 'company_name', 'primary_contact_name', 'email', 'phone'].forEach((fieldName) => {
      const fieldValue = formData.get(fieldName)?.toString().trim();
      if (fieldValue) {
        payload[fieldName] = fieldValue;
      }
    });

    if (contactName) {
      payload.name = contactName;
    }

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
      setProjectType('');
      setWebsiteType('');
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
          <h1>Mobile & Website Discovery Form</h1>
          <p>Tell us what you are building so we can scope the right platform properly.</p>
        </header>

        <form ref={formRef} method="POST" onSubmit={handleSubmit} className="ec-discovery__form">
          <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
          <input type="hidden" name="subject" value="New Mobile/Website Discovery Form Submission" />
          <input type="hidden" name="from_name" value="Kypex-Tech Discovery Form" />
          <input type="hidden" name="form_name" value="Mobile & Website Discovery Form" />
          <input type="checkbox" name="botcheck" className="ec-discovery__botcheck" tabIndex={-1} autoComplete="off" />

          {numberedSections.map((section) => (
            <FormSection title={section.title} key={section.title}>
              {section.fields.map((field) => (
                <FieldRenderer
                  field={field}
                  key={`${section.title}-${field.badge}-${field.name}`}
                  onProjectTypeChange={handleProjectTypeChange}
                  onWebsiteTypeChange={setWebsiteType}
                  projectTypeValue={projectType}
                  websiteTypeValue={websiteType}
                />
              ))}
            </FormSection>
          ))}

          {projectType && (
            <button type="submit" className="ec-discovery__submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Questionnaire'}
            </button>
          )}
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

function FieldRenderer({
  field,
  onProjectTypeChange,
  onWebsiteTypeChange,
  projectTypeValue,
  websiteTypeValue,
}: {
  field: NumberedDiscoveryField;
  onProjectTypeChange: (value: ProjectType) => void;
  onWebsiteTypeChange: (value: string) => void;
  projectTypeValue: ProjectType;
  websiteTypeValue: string;
}) {
  const className = `ec-discovery__field ${field.compact ? 'ec-discovery__field--compact' : ''}`;
  const controlledValue =
    field.name === 'project_type' ? projectTypeValue : field.name === 'website_type' ? websiteTypeValue : undefined;

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (field.name === 'project_type') {
      onProjectTypeChange(event.currentTarget.value as ProjectType);
    }

    if (field.name === 'website_type') {
      onWebsiteTypeChange(event.currentTarget.value);
    }
  };

  return (
    <div className={className}>
      <div className="ec-discovery__question-heading">
        <div className="ec-discovery__badge" aria-hidden="true">
          {field.displayBadge}
        </div>
        <label id={`${field.name}-label`} htmlFor={field.name}>
          {field.label}
        </label>
      </div>
      {field.kind === 'project-type' && (
        <>
          <input type="hidden" name={field.name} value={projectTypeValue} />
          <div className="ec-discovery__choice-grid" role="group" aria-labelledby={`${field.name}-label`}>
            {(field.options ?? [])
              .filter((option) => option.value)
              .map((option) => (
                <button
                  className={`ec-discovery__choice ${projectTypeValue === option.value ? 'is-selected' : ''}`}
                  key={`${field.name}-${option.value}`}
                  type="button"
                  onClick={() => onProjectTypeChange(option.value as ProjectType)}
                  aria-pressed={projectTypeValue === option.value}
                >
                  {option.label}
                </button>
              ))}
          </div>
        </>
      )}
      {field.kind === 'textarea' && (
        <textarea id={field.name} name={field.name} placeholder={field.placeholder} required={field.required} />
      )}
      {field.kind === 'input' && (
        <input
          id={field.name}
          type={field.inputType ?? 'text'}
          name={field.name}
          placeholder={field.placeholder}
          required={field.required}
          min={field.min}
        />
      )}
      {field.kind === 'select' && (
        <select
          id={field.name}
          name={field.name}
          required={field.required}
          value={controlledValue}
          onChange={handleSelectChange}
        >
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
          <span>init --discovery</span>
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
