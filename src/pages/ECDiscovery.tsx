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
  kind: 'input' | 'textarea' | 'select' | 'checkbox' | 'file';
  inputType?: string;
  placeholder?: string;
  required?: boolean;
  helper?: string;
  min?: number;
  accept?: string;
  options?: FieldOption[];
  compact?: boolean;
};

type DiscoverySection = {
  title: string;
  description: string;
  fields: DiscoveryField[];
};

const WEB3FORMS_ACCESS_KEY = 'af31cdca-fdb5-4fd7-81bd-762838f8e47f';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const discoverySections: DiscoverySection[] = [
  {
    title: '1. Contact & Project Basics',
    description: "Who we're working with and what we're building.",
    fields: [
      {
        badge: '1.1',
        label: 'Your full name',
        name: 'client_name',
        kind: 'input',
        required: true,
        compact: true,
      },
      {
        badge: '1.2',
        label: 'Company / brand name',
        name: 'company_name',
        kind: 'input',
        required: true,
        compact: true,
      },
      {
        badge: '1.3',
        label: 'Email address',
        name: 'email',
        kind: 'input',
        inputType: 'email',
        required: true,
        compact: true,
      },
      {
        badge: '1.4',
        label: 'Phone number',
        name: 'phone',
        kind: 'input',
        inputType: 'tel',
        required: true,
        compact: true,
      },
      {
        badge: '1.5',
        label: 'Who is the final decision-maker on this project?',
        name: 'final_decision_maker',
        kind: 'input',
        required: true,
        compact: true,
      },
      {
        badge: '1.6',
        label: 'Who will be our main point of contact day-to-day?',
        name: 'day_to_day_contact',
        kind: 'input',
        required: true,
        compact: true,
      },
      {
        badge: '1.7',
        label: 'Who will provide content (product info, images, copy)?',
        name: 'content_provider',
        kind: 'input',
        required: true,
        compact: true,
      },
      {
        badge: '1.8',
        label: 'Who will manage the store after launch?',
        name: 'store_manager',
        kind: 'input',
        required: true,
        compact: true,
      },
    ],
  },
  {
    title: '2. Project Overview',
    description: 'Understand the scope and starting point before anything else.',
    fields: [
      {
        badge: '2.1',
        label: 'In one sentence, what does this store sell?',
        name: 'store_one_sentence',
        kind: 'input',
        required: true,
        placeholder: 'e.g., Premium skincare products for sensitive skin',
      },
      {
        badge: '2.2',
        label: 'Is this a brand new store, or are we replacing an existing one?',
        name: 'store_status',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'brand_new', label: 'Brand new' },
          { value: 'replacing_existing', label: 'Replacing existing' },
          { value: 'expanding_existing', label: 'Expanding existing' },
        ],
      },
      {
        badge: '2.3',
        label: 'If replacing, what platform are you currently on?',
        name: 'current_platform',
        kind: 'input',
        helper: 'Required if 2.2 = Replacing existing.',
        placeholder: 'Shopify, WooCommerce, Wix, custom build, etc.',
      },
      {
        badge: '2.4',
        label: 'If replacing, what is the single biggest problem with your current store?',
        name: 'current_store_problem',
        kind: 'textarea',
        helper: 'Required if 2.2 = Replacing existing.',
      },
      {
        badge: '2.5',
        label: 'What is the ONE thing that absolutely must work perfectly at launch?',
        name: 'launch_must_work',
        kind: 'textarea',
        required: true,
      },
      {
        badge: '2.6',
        label: 'Is there a hard launch deadline? If yes, what is the date?',
        name: 'launch_deadline',
        kind: 'input',
        required: true,
        placeholder: 'No hard date yet, or YYYY-MM-DD',
      },
      {
        badge: '2.7',
        label: 'Are there seasonal factors that affect the deadline? (e.g. Black Friday, a product launch event)',
        name: 'seasonal_factors',
        kind: 'textarea',
        required: true,
      },
      {
        badge: '2.8',
        label: 'What is your total budget range for this project?',
        name: 'budget_range',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select a range' },
          { value: 'r10k-r25k', label: 'R10k-R25k' },
          { value: 'r25k-r50k', label: 'R25k-R50k' },
          { value: 'r50k-r100k', label: 'R50k-R100k' },
          { value: 'r100k_plus', label: 'R100k+' },
          { value: 'prefer_to_discuss', label: 'Prefer to discuss' },
        ],
      },
      {
        badge: '2.9',
        label: 'Do you have budget for ongoing maintenance and hosting after launch?',
        name: 'ongoing_budget',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
          { value: 'unsure', label: 'Unsure' },
        ],
      },
    ],
  },
  {
    title: '3. Target Audience',
    description: 'Who is buying. Shapes UX, language, device priority, and checkout flow.',
    fields: [
      {
        badge: '3.1',
        label: 'Who is your primary customer? (Age range, lifestyle, profession)',
        name: 'primary_customer',
        kind: 'textarea',
        required: true,
      },
      {
        badge: '3.2',
        label: 'What devices do your customers primarily shop on?',
        name: 'shopping_devices',
        kind: 'checkbox',
        required: true,
        options: [
          { value: 'mobile', label: 'Mobile' },
          { value: 'desktop', label: 'Desktop' },
          { value: 'tablet', label: 'Tablet' },
        ],
      },
      {
        badge: '3.3',
        label: 'What language(s) must the store support?',
        name: 'store_languages',
        kind: 'input',
        required: true,
        placeholder: 'e.g., English, Afrikaans, isiZulu',
      },
      {
        badge: '3.4',
        label: 'Where are your customers located? (City, country, or region)',
        name: 'customer_locations',
        kind: 'input',
        required: true,
      },
    ],
  },
  {
    title: '4. Brand & Visual Identity',
    description: 'Cannot design a single screen without this.',
    fields: [
      {
        badge: '4.1',
        label: 'Do you have a logo?',
        name: 'has_logo',
        kind: 'select',
        required: true,
        compact: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no_design_needed', label: 'No - we need one designed' },
        ],
      },
      {
        badge: '4.2',
        label: 'Upload your logo',
        name: 'logo_upload',
        kind: 'file',
        compact: true,
        helper: 'Required if 4.1 = Yes.',
        accept: '.ai,.eps,.svg,.png,.jpg,.jpeg,.webp,.pdf',
      },
      {
        badge: '4.3',
        label: 'Do you have official brand colours?',
        name: 'has_brand_colours',
        kind: 'select',
        required: true,
        compact: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        badge: '4.4',
        label: 'If yes, provide your hex codes',
        name: 'brand_hex_codes',
        kind: 'input',
        compact: true,
        helper: 'Required if 4.3 = Yes.',
        placeholder: 'e.g., #34D9B9, #071F3F',
      },
      {
        badge: '4.5',
        label: 'Do you have brand fonts?',
        name: 'has_brand_fonts',
        kind: 'select',
        required: true,
        compact: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        badge: '4.6',
        label: 'If yes, list your fonts',
        name: 'brand_fonts',
        kind: 'input',
        compact: true,
        helper: 'Required if 4.5 = Yes.',
      },
      {
        badge: '4.7',
        label: 'Do you have a brand style guide?',
        name: 'has_style_guide',
        kind: 'select',
        required: true,
        compact: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        badge: '4.8',
        label: 'Upload brand style guide',
        name: 'style_guide_upload',
        kind: 'file',
        compact: true,
        helper: 'Required if 4.7 = Yes.',
        accept: '.pdf,.doc,.docx,.ppt,.pptx,.png,.jpg,.jpeg,.webp',
      },
      {
        badge: '4.9',
        label: 'Share 2-3 websites whose look and feel you admire (any industry)',
        name: 'admired_sites',
        kind: 'textarea',
        required: true,
        placeholder: 'Share links and what you like about each.',
      },
      {
        badge: '4.10',
        label: 'List any visual styles, colours, or design approaches you do NOT want',
        name: 'visual_do_not_want',
        kind: 'textarea',
        required: true,
      },
    ],
  },
  {
    title: '5. Products',
    description: 'Core of the build. Every answer here directly affects architecture.',
    fields: [
      {
        badge: '5.1',
        label: 'What product categories will you sell at launch?',
        name: 'product_categories',
        kind: 'textarea',
        required: true,
      },
      {
        badge: '5.2',
        label: 'How many products do you have right now?',
        name: 'product_count_now',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: '1-20', label: '1-20' },
          { value: '21-100', label: '21-100' },
          { value: '101-500', label: '101-500' },
          { value: '500+', label: '500+' },
        ],
      },
      {
        badge: '5.3',
        label: 'How many products do you expect within 12 months?',
        name: 'product_count_12_months',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'same', label: 'Same' },
          { value: '2x_current', label: '2x current' },
          { value: '5x_current', label: '5x current' },
          { value: '10x_plus', label: '10x+' },
        ],
      },
      {
        badge: '5.4',
        label: 'Do products have variations? (e.g. size, colour, material)',
        name: 'product_variations',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        badge: '5.5',
        label: 'If yes, describe the variation types',
        name: 'variation_types',
        kind: 'textarea',
        helper: 'Required if 5.4 = Yes.',
      },
      {
        badge: '5.6',
        label: 'How many images per product on average?',
        name: 'images_per_product',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: '1', label: '1' },
          { value: '2-4', label: '2-4' },
          { value: '5-10', label: '5-10' },
          { value: '10+', label: '10+' },
        ],
      },
      {
        badge: '5.7',
        label: 'Is all product information (names, descriptions, prices, images) ready?',
        name: 'product_info_ready',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'fully_ready', label: 'Yes, fully ready' },
          { value: 'partially_ready', label: 'Partially ready' },
          { value: 'not_yet', label: 'Not yet' },
        ],
      },
      {
        badge: '5.8',
        label: 'Do you need to track stock levels?',
        name: 'stock_tracking',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'per_product', label: 'Yes - per product' },
          { value: 'per_variation', label: 'Yes - per variation' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        badge: '5.9',
        label: 'Should customers be able to order out-of-stock items?',
        name: 'out_of_stock_orders',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'allow_backorders', label: 'Yes - allow backorders' },
          { value: 'block_out_of_stock', label: 'No - block when out of stock' },
          { value: 'show_oos_block', label: 'Show as OOS but block purchase' },
        ],
      },
      {
        badge: '5.10',
        label: 'Will you sell any made-to-order or custom products?',
        name: 'made_to_order',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
          { value: 'maybe_post_launch', label: 'Maybe post-launch' },
        ],
      },
      {
        badge: '5.11',
        label: 'Will you sell product bundles or kits?',
        name: 'bundles',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
          { value: 'post_launch', label: 'Post-launch' },
        ],
      },
      {
        badge: '5.12',
        label: 'Will you sell digital / downloadable products?',
        name: 'digital_products',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
          { value: 'post_launch', label: 'Post-launch' },
        ],
      },
      {
        badge: '5.13',
        label: 'Will you sell subscription or recurring-order products?',
        name: 'subscription_products',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
          { value: 'post_launch', label: 'Post-launch' },
        ],
      },
    ],
  },
  {
    title: '6. Pricing & Tax',
    description: 'Affects checkout display, invoicing, and accounting integrations.',
    fields: [
      {
        badge: '6.1',
        label: 'Are prices displayed including or excluding tax?',
        name: 'tax_display',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'including_tax', label: 'Including tax' },
          { value: 'excluding_tax', label: 'Excluding tax (tax shown at checkout)' },
        ],
      },
      {
        badge: '6.2',
        label: 'Do you need to collect and display VAT / sales tax?',
        name: 'collect_tax',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
          { value: 'unsure', label: 'Unsure - advise me' },
        ],
      },
      {
        badge: '6.3',
        label: 'Do you offer discounts or promotional pricing?',
        name: 'discounts',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'coupon_codes', label: 'Yes - coupon codes' },
          { value: 'automatic_rules', label: 'Yes - automatic rules' },
          { value: 'both', label: 'Both' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        badge: '6.4',
        label: 'Do you offer wholesale or tiered pricing for different customer groups?',
        name: 'tiered_pricing',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
          { value: 'post_launch', label: 'Post-launch' },
        ],
      },
    ],
  },
  {
    title: '7. Payments',
    description: 'Build-blocking. Payment gateway affects everything from checkout UX to settlement time.',
    fields: [
      {
        badge: '7.1',
        label: 'Which payment methods must be available at launch?',
        name: 'payment_methods',
        kind: 'checkbox',
        required: true,
        options: [
          { value: 'card', label: 'Credit/Debit card' },
          { value: 'eft', label: 'EFT' },
          { value: 'instant_eft', label: 'Instant EFT (Ozow/PayShap)' },
          { value: 'cash_on_delivery', label: 'Cash on delivery' },
          { value: 'buy_now_pay_later', label: 'Buy now pay later' },
          { value: 'crypto', label: 'Crypto' },
          { value: 'other', label: 'Other' },
        ],
      },
      {
        badge: '7.2',
        label: 'Do you already have a payment gateway account?',
        name: 'has_payment_gateway',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no_help', label: 'No - help me set one up' },
        ],
      },
      {
        badge: '7.3',
        label: 'If yes, which provider?',
        name: 'gateway_provider',
        kind: 'select',
        helper: 'Required if 7.2 = Yes.',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'stripe', label: 'Stripe' },
          { value: 'payfast', label: 'PayFast' },
          { value: 'peach_payments', label: 'Peach Payments' },
          { value: 'ozow', label: 'Ozow' },
          { value: 'paypal', label: 'PayPal' },
          { value: 'other', label: 'Other' },
        ],
      },
      {
        badge: '7.4',
        label: 'Do you need a manual / quote-based payment option for large or custom orders?',
        name: 'manual_payment_option',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
    ],
  },
  {
    title: '8. Shipping & Fulfilment',
    description: 'Shipping logic can add weeks to a build if not clarified upfront.',
    fields: [
      {
        badge: '8.1',
        label: 'Where are you shipping from? (City and country)',
        name: 'shipping_origin',
        kind: 'input',
        required: true,
      },
      {
        badge: '8.2',
        label: 'Which regions must you support at launch?',
        name: 'launch_shipping_regions',
        kind: 'checkbox',
        required: true,
        options: [
          { value: 'local_city_only', label: 'Local city only' },
          { value: 'nationwide', label: 'Nationwide' },
          { value: 'africa', label: 'Africa' },
          { value: 'international', label: 'International' },
        ],
      },
      {
        badge: '8.3',
        label: 'How should shipping fees be calculated?',
        name: 'shipping_fee_calculation',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'flat_rate', label: 'Fixed flat rate' },
          { value: 'weight_or_value', label: 'By weight or order value' },
          { value: 'courier_api', label: 'Real-time courier API' },
          { value: 'free_shipping', label: 'Free shipping' },
          { value: 'manual_confirmation', label: 'Confirmed manually per order' },
        ],
      },
      {
        badge: '8.4',
        label: 'Do you offer local pickup or in-store collection?',
        name: 'local_pickup',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        badge: '8.5',
        label: 'Do you fulfil orders yourself or use a fulfilment service?',
        name: 'fulfilment_owner',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'self', label: 'We pack and ship ourselves' },
          { value: 'third_party', label: 'Third-party fulfilment' },
          { value: 'both', label: 'Both' },
        ],
      },
      {
        badge: '8.6',
        label: 'Which courier(s) do you use or prefer?',
        name: 'preferred_couriers',
        kind: 'input',
        required: true,
      },
    ],
  },
  {
    title: '9. Checkout & Accounts',
    description: 'Directly affects conversion rate and post-purchase experience.',
    fields: [
      {
        badge: '9.1',
        label: 'Should customers be able to checkout as guests?',
        name: 'guest_checkout',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'guest_allowed', label: 'Yes - guest checkout allowed' },
          { value: 'account_required', label: 'No - account required' },
          { value: 'both', label: 'Both options' },
        ],
      },
      {
        badge: '9.2',
        label: 'Should customers be able to create accounts to track orders?',
        name: 'customer_accounts',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        badge: '9.3',
        label: 'Do you need a customer loyalty or rewards programme?',
        name: 'loyalty_programme',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
          { value: 'post_launch', label: 'Post-launch' },
        ],
      },
      {
        badge: '9.4',
        label: 'What is your return and refund policy?',
        name: 'return_refund_policy',
        kind: 'textarea',
        required: true,
      },
    ],
  },
  {
    title: '10. Notifications & Emails',
    description: 'Affects transactional email setup and third-party integrations.',
    fields: [
      {
        badge: '10.1',
        label: 'Should customers receive an order confirmation email?',
        name: 'order_confirmation_email',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        badge: '10.2',
        label: 'Should customers receive shipping / tracking update emails?',
        name: 'tracking_update_emails',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        badge: '10.3',
        label: 'Should the store admin receive an email when a new order is placed?',
        name: 'admin_order_email',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        badge: '10.4',
        label: 'Do you use an email marketing platform?',
        name: 'uses_email_marketing',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        badge: '10.5',
        label: 'If yes, which one?',
        name: 'email_marketing_provider',
        kind: 'select',
        helper: 'Required if 10.4 = Yes.',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'mailchimp', label: 'Mailchimp' },
          { value: 'klaviyo', label: 'Klaviyo' },
          { value: 'activecampaign', label: 'ActiveCampaign' },
          { value: 'hubspot', label: 'HubSpot' },
          { value: 'other', label: 'Other' },
        ],
      },
    ],
  },
  {
    title: '11. Admin & Integrations',
    description: 'Avoids surprises mid-build when a client mentions a required tool connection.',
    fields: [
      {
        badge: '11.1',
        label: 'Who will have admin access to manage products and orders? (Names and roles)',
        name: 'admin_access_people',
        kind: 'textarea',
        required: true,
      },
      {
        badge: '11.2',
        label: 'Do you use accounting software that must sync with the store?',
        name: 'accounting_sync',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        badge: '11.3',
        label: 'If yes, which one?',
        name: 'accounting_provider',
        kind: 'select',
        helper: 'Required if 11.2 = Yes.',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'xero', label: 'Xero' },
          { value: 'quickbooks', label: 'QuickBooks' },
          { value: 'sage', label: 'Sage' },
          { value: 'other', label: 'Other' },
        ],
      },
      {
        badge: '11.4',
        label: 'Do you use a CRM that must connect to the store?',
        name: 'crm_sync',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        badge: '11.5',
        label: 'Do you need the store to connect to any other tools or platforms?',
        name: 'other_integrations',
        kind: 'textarea',
        required: true,
      },
      {
        badge: '11.6',
        label: 'Do you need Google Analytics or any other analytics tracking?',
        name: 'analytics_tracking',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
          { value: 'unsure', label: 'Unsure' },
        ],
      },
      {
        badge: '11.7',
        label: 'Do you need Google Shopping, Meta Shop, or social selling integrations?',
        name: 'social_selling_integrations',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
          { value: 'post_launch', label: 'Post-launch' },
        ],
      },
    ],
  },
  {
    title: '12. Domain & Hosting',
    description: 'Without this, you cannot deploy.',
    fields: [
      {
        badge: '12.1',
        label: 'Do you own a domain name?',
        name: 'domain_owned',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no_help', label: 'No - help me get one' },
        ],
      },
      {
        badge: '12.2',
        label: 'If yes, where was it registered?',
        name: 'domain_registrar',
        kind: 'input',
        helper: 'Required if 12.1 = Yes.',
      },
      {
        badge: '12.3',
        label: 'Do you have login access to the domain registrar account?',
        name: 'domain_login_access',
        kind: 'select',
        helper: 'Required if 12.1 = Yes.',
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        badge: '12.4',
        label: 'Do you currently have web hosting?',
        name: 'current_hosting',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        badge: '12.5',
        label: 'Where is your business email hosted?',
        name: 'business_email_host',
        kind: 'input',
        required: true,
        placeholder: 'Google Workspace, Microsoft 365, hosting provider, etc.',
      },
    ],
  },
  {
    title: '13. Content Readiness',
    description: 'A content readiness check - not to gather the content itself, but to flag delays before they hit the build.',
    fields: [
      {
        badge: '13.1',
        label: 'Do you have professional product photography ready?',
        name: 'product_photography_ready',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'all_ready', label: 'Yes, all ready' },
          { value: 'partially_ready', label: 'Partially ready' },
          { value: 'not_yet', label: 'Not yet' },
        ],
      },
      {
        badge: '13.2',
        label: 'Do you have written copy ready (About Us, policy pages, homepage text)?',
        name: 'written_copy_ready',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'all_ready', label: 'Yes, all ready' },
          { value: 'partially_ready', label: 'Partially ready' },
          { value: 'not_yet', label: 'Not yet' },
        ],
      },
      {
        badge: '13.3',
        label: 'Who is responsible for loading all products into the store?',
        name: 'product_loading_owner',
        kind: 'select',
        required: true,
        options: [
          { value: '', label: 'Select an option' },
          { value: 'client', label: 'Client will do it' },
          { value: 'developer', label: 'Developer to load initial products' },
          { value: 'shared', label: 'Shared' },
        ],
      },
    ],
  },
];

function formatFileSize(size: number) {
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${Math.round(size / 1024)} KB`;
  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

function formatFormValue(value: FormDataEntryValue) {
  if (typeof value === 'string') return value.trim();
  if (typeof File !== 'undefined' && value instanceof File && value.name) {
    return `${value.name} (${formatFileSize(value.size)})`;
  }

  return '';
}

function getFileInput(form: HTMLFormElement, name: string) {
  const element = form.elements.namedItem(name);
  return element instanceof HTMLInputElement ? element : null;
}

function getMissingRequiredField(form: HTMLFormElement, formData: FormData) {
  for (const section of discoverySections) {
    for (const field of section.fields) {
      if (!field.required) continue;

      if (field.kind === 'file') {
        const input = getFileInput(form, field.name);
        if (!input?.files?.length) return field;
        continue;
      }

      const values = formData.getAll(field.name).map(formatFormValue).filter(Boolean);
      if (!values.length) return field;
    }
  }

  return null;
}

function focusField(form: HTMLFormElement, name: string) {
  const control = form.querySelector<HTMLElement>(`[name="${name}"]`);
  control?.focus();
}

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
      const totalQuestions = discoverySections.reduce((total, section) => total + section.fields.length, 0);

      if (!totalQuestions) {
        setProgress(0);
        return;
      }

      const formData = new FormData(form);
      const answeredQuestions = discoverySections.reduce((total, section) => {
        const sectionAnswered = section.fields.filter((field) => {
          if (field.kind === 'file') {
            const input = getFileInput(form, field.name);
            return Boolean(input?.files?.length);
          }

          return formData.getAll(field.name).map(formatFormValue).filter(Boolean).length > 0;
        }).length;

        return total + sectionAnswered;
      }, 0);

      setProgress((answeredQuestions / totalQuestions) * 100);
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
    const missingRequiredField = getMissingRequiredField(form, formData);

    if (missingRequiredField) {
      setSubmitError(`Please answer ${missingRequiredField.badge}: ${missingRequiredField.label}`);
      focusField(form, missingRequiredField.name);
      setIsSubmitting(false);
      return;
    }

    const answeredQuestions = discoverySections.flatMap((section) =>
      section.fields.flatMap((field) => {
        const values = formData
          .getAll(field.name)
          .map(formatFormValue)
          .filter(Boolean);

        if (!values.length) return [];

        return [`${section.title}\n${field.badge} - ${field.label}\n${values.join(', ')}`];
      }),
    );
    const payload = new FormData();

    payload.append('access_key', WEB3FORMS_ACCESS_KEY);
    payload.append('subject', 'New E-Commerce Discovery Form Submission');
    payload.append('from_name', 'Kypex-Tech Discovery Form');
    payload.append('form_name', 'E-Commerce Discovery Form');
    payload.append('message', answeredQuestions.join('\n\n'));

    ['client_name', 'company_name', 'email', 'phone'].forEach((fieldName) => {
      const fieldValue = formData.get(fieldName)?.toString().trim();
      if (fieldValue) {
        payload.append(fieldName, fieldValue);
      }
    });

    discoverySections.forEach((section) => {
      section.fields.forEach((field) => {
        if (field.kind !== 'file') return;
        const input = getFileInput(form, field.name);
        Array.from(input?.files ?? []).forEach((file) => {
          if (file.name) payload.append(field.name, file, file.name);
        });
      });
    });

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: payload,
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
            <FormSection title={section.title} description={section.description} key={section.title}>
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

function FormSection({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <section className="ec-discovery__section">
      <h2>{title}</h2>
      <p className="ec-discovery__section-intro">{description}</p>
      <div className="ec-discovery__fields">{children}</div>
    </section>
  );
}

function FieldRenderer({ field }: { field: DiscoveryField }) {
  const className = `ec-discovery__field ${field.compact ? 'ec-discovery__field--compact' : ''}`;

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
        />
      )}
      {field.kind === 'file' && (
        <input id={field.name} type="file" name={field.name} required={field.required} accept={field.accept} />
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
      {field.helper && <p className="ec-discovery__helper">{field.helper}</p>}
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
