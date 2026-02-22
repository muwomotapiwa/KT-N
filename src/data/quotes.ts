export interface Package {
  id: string;
  name: string;
  minPages: number;
  maxPages: number;
  basePrice: number;
  features: string[];
}

export interface AddOn {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface CountryConfig {
  code: string;
  name: string;
  currency: string;
  currencySymbol: string;
  packages: Package[];
  addOns: AddOn[];
  whatsappNumber: string;
}

const baseConfigs: CountryConfig[] = [
  {
    code: 'INTL',
    name: 'International',
    currency: 'USD',
    currencySymbol: '$',
    whatsappNumber: '27715731602',
    packages: [
      { id: 'starter', name: 'Starter', minPages: 1, maxPages: 3, basePrice: 300, features: ['1-3 Pages', '6 Months Hosting', 'Contact Form', 'Mobile Responsive', 'Basic SEO'] },
      { id: 'standard', name: 'Standard', minPages: 4, maxPages: 6, basePrice: 600, features: ['4-6 Pages', '12 Months Hosting', 'Contact Form', 'Social Links', 'SEO Basics', 'Analytics'] },
      { id: 'pro', name: 'Pro Business', minPages: 7, maxPages: 10, basePrice: 950, features: ['7-10 Pages', '12 Months Hosting', 'Advanced Forms', 'SEO Integration', 'Analytics', 'WhatsApp Chat'] },
      { id: 'ecommerce', name: 'E-Commerce', minPages: 11, maxPages: 20, basePrice: 1400, features: ['11-20 Pages', 'Online Store', 'Payment Gateway', 'Inventory Management', 'SSL Certificate', 'Priority Support'] },
    ],
    addOns: [
      { id: 'extra-pages', name: 'Extra Pages', price: 40, description: 'Additional pages beyond package limit' },
      { id: 'seo-advanced', name: 'Advanced SEO', price: 180, description: 'Comprehensive SEO optimization' },
      { id: 'payment', name: 'Payment Gateway', price: 160, description: 'Stripe/PayPal integration' },
      { id: 'whatsapp-chat', name: 'WhatsApp Chat', price: 45, description: 'Live WhatsApp chat widget' },
      { id: 'google-maps', name: 'Google Maps', price: 40, description: 'Interactive location maps' },
      { id: 'android-app', name: 'Android WebView App', price: 280, description: 'Convert website to Android app' },
    ]
  },
  {
    code: 'ZW',
    name: 'Zimbabwe',
    currency: 'USD',
    currencySymbol: '$',
    whatsappNumber: '27715731602',
    packages: [
      { id: 'starter', name: 'Starter', minPages: 1, maxPages: 3, basePrice: 150, features: ['1-3 Pages', '6 Months Hosting', 'Contact Form', 'Mobile Responsive', 'Basic SEO'] },
      { id: 'standard', name: 'Standard', minPages: 4, maxPages: 6, basePrice: 300, features: ['4-6 Pages', '12 Months Hosting', 'Contact Form', 'Social Links', 'SEO Basics', 'Analytics'] },
      { id: 'pro', name: 'Pro Business', minPages: 7, maxPages: 10, basePrice: 500, features: ['7-10 Pages', '12 Months Hosting', 'Advanced Forms', 'SEO Integration', 'Analytics', 'WhatsApp Chat'] },
      { id: 'ecommerce', name: 'E-Commerce', minPages: 11, maxPages: 20, basePrice: 800, features: ['11-20 Pages', 'Online Store', 'Payment Gateway', 'Inventory Management', 'SSL Certificate', 'Priority Support'] },
    ],
    addOns: [
      { id: 'extra-pages', name: 'Extra Pages', price: 25, description: 'Additional pages beyond package limit' },
      { id: 'seo-advanced', name: 'Advanced SEO', price: 100, description: 'Comprehensive SEO optimization' },
      { id: 'paynow', name: 'Paynow Integration', price: 75, description: 'Accept payments via Paynow' },
      { id: 'whatsapp-chat', name: 'WhatsApp Chat', price: 30, description: 'Live WhatsApp chat widget' },
      { id: 'google-maps', name: 'Google Maps', price: 25, description: 'Interactive location maps' },
      { id: 'android-app', name: 'Android WebView App', price: 150, description: 'Convert website to Android app' },
    ]
  },
  {
    code: 'RSA',
    name: 'South Africa',
    currency: 'ZAR',
    currencySymbol: 'R',
    whatsappNumber: '27715731602',
    packages: [
      { id: 'starter', name: 'Starter', minPages: 1, maxPages: 3, basePrice: 2500, features: ['1-3 Pages', '6 Months Hosting', 'Contact Form', 'Mobile Responsive', 'Basic SEO'] },
      { id: 'standard', name: 'Standard', minPages: 4, maxPages: 6, basePrice: 5000, features: ['4-6 Pages', '12 Months Hosting', 'Contact Form', 'Social Links', 'SEO Basics', 'Analytics'] },
      { id: 'pro', name: 'Pro Business', minPages: 7, maxPages: 10, basePrice: 8500, features: ['7-10 Pages', '12 Months Hosting', 'Advanced Forms', 'SEO Integration', 'Analytics', 'WhatsApp Chat'] },
      { id: 'ecommerce', name: 'E-Commerce', minPages: 11, maxPages: 20, basePrice: 15000, features: ['11-20 Pages', 'Online Store', 'Payment Gateway', 'Inventory Management', 'SSL Certificate', 'Priority Support'] },
    ],
    addOns: [
      { id: 'extra-pages', name: 'Extra Pages', price: 400, description: 'Additional pages beyond package limit' },
      { id: 'seo-advanced', name: 'Advanced SEO', price: 1500, description: 'Comprehensive SEO optimization' },
      { id: 'payfast', name: 'PayFast Integration', price: 1200, description: 'Accept payments via PayFast' },
      { id: 'whatsapp-chat', name: 'WhatsApp Chat', price: 500, description: 'Live WhatsApp chat widget' },
      { id: 'google-maps', name: 'Google Maps', price: 400, description: 'Interactive location maps' },
      { id: 'android-app', name: 'Android WebView App', price: 2500, description: 'Convert website to Android app' },
    ]
  },
  {
    code: 'ZM',
    name: 'Zambia',
    currency: 'ZMW',
    currencySymbol: 'K',
    whatsappNumber: '27715731602',
    packages: [
      { id: 'starter', name: 'Starter', minPages: 1, maxPages: 3, basePrice: 3500, features: ['1-3 Pages', '6 Months Hosting', 'Contact Form', 'Mobile Responsive', 'Basic SEO'] },
      { id: 'standard', name: 'Standard', minPages: 4, maxPages: 6, basePrice: 7000, features: ['4-6 Pages', '12 Months Hosting', 'Contact Form', 'Social Links', 'SEO Basics', 'Analytics'] },
      { id: 'pro', name: 'Pro Business', minPages: 7, maxPages: 10, basePrice: 12000, features: ['7-10 Pages', '12 Months Hosting', 'Advanced Forms', 'SEO Integration', 'Analytics', 'WhatsApp Chat'] },
      { id: 'ecommerce', name: 'E-Commerce', minPages: 11, maxPages: 20, basePrice: 20000, features: ['11-20 Pages', 'Online Store', 'Payment Gateway', 'Inventory Management', 'SSL Certificate', 'Priority Support'] },
    ],
    addOns: [
      { id: 'extra-pages', name: 'Extra Pages', price: 550, description: 'Additional pages beyond package limit' },
      { id: 'seo-advanced', name: 'Advanced SEO', price: 2000, description: 'Comprehensive SEO optimization' },
      { id: 'mobile-money', name: 'Mobile Money', price: 1500, description: 'Accept MTN/Airtel Money payments' },
      { id: 'whatsapp-chat', name: 'WhatsApp Chat', price: 700, description: 'Live WhatsApp chat widget' },
      { id: 'google-maps', name: 'Google Maps', price: 550, description: 'Interactive location maps' },
      { id: 'android-app', name: 'Android WebView App', price: 3500, description: 'Convert website to Android app' },
    ]
  },
  {
    code: 'BW',
    name: 'Botswana',
    currency: 'BWP',
    currencySymbol: 'P',
    whatsappNumber: '27715731602',
    packages: [
      { id: 'starter', name: 'Starter', minPages: 1, maxPages: 3, basePrice: 2000, features: ['1-3 Pages', '6 Months Hosting', 'Contact Form', 'Mobile Responsive', 'Basic SEO'] },
      { id: 'standard', name: 'Standard', minPages: 4, maxPages: 6, basePrice: 4000, features: ['4-6 Pages', '12 Months Hosting', 'Contact Form', 'Social Links', 'SEO Basics', 'Analytics'] },
      { id: 'pro', name: 'Pro Business', minPages: 7, maxPages: 10, basePrice: 7000, features: ['7-10 Pages', '12 Months Hosting', 'Advanced Forms', 'SEO Integration', 'Analytics', 'WhatsApp Chat'] },
      { id: 'ecommerce', name: 'E-Commerce', minPages: 11, maxPages: 20, basePrice: 12000, features: ['11-20 Pages', 'Online Store', 'Payment Gateway', 'Inventory Management', 'SSL Certificate', 'Priority Support'] },
    ],
    addOns: [
      { id: 'extra-pages', name: 'Extra Pages', price: 350, description: 'Additional pages beyond package limit' },
      { id: 'seo-advanced', name: 'Advanced SEO', price: 1300, description: 'Comprehensive SEO optimization' },
      { id: 'orange-money', name: 'Orange Money', price: 1000, description: 'Accept Orange Money payments' },
      { id: 'whatsapp-chat', name: 'WhatsApp Chat', price: 450, description: 'Live WhatsApp chat widget' },
      { id: 'google-maps', name: 'Google Maps', price: 350, description: 'Interactive location maps' },
      { id: 'android-app', name: 'Android WebView App', price: 2000, description: 'Convert website to Android app' },
    ]
  },
];

function applyMultiplier(configs: CountryConfig[], multiplier: number): CountryConfig[] {
  return configs.map((c) => ({
    ...c,
    packages: c.packages.map((p) => ({
      ...p,
      basePrice: Math.round(p.basePrice * multiplier),
    })),
    addOns: c.addOns.map((a) => ({
      ...a,
      price: Math.round(a.price * multiplier),
    })),
  }));
}

// Global uplift: increase all prices by 50%
export const countryConfigs: CountryConfig[] = applyMultiplier(baseConfigs, 1.5);
