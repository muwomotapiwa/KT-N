import React, { useEffect, useRef, useState } from 'react';
import './App.css';

const WEB3FORMS_ACCESS_KEY = 'af31cdca-fdb5-4fd7-81bd-762838f8e47f';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const makeValue = (label) =>
  label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '');

const options = (items) =>
  items.map((item) => (Array.isArray(item) ? { value: item[0], label: item[1] } : { value: makeValue(item), label: item }));

const field = (badge, label, name, kind = 'input', config = {}) => ({
  badge,
  label,
  name,
  kind,
  required: true,
  ...config,
});

const text = (badge, label, name, config) => field(badge, label, name, 'textarea', config);
const file = (badge, label, name, config) => field(badge, label, name, 'file', { required: false, ...config });
const checkbox = (badge, label, name, choices, config) =>
  field(badge, label, name, 'checkbox', { options: options(choices), ...config });
const select = (badge, label, name, choices, config = {}) =>
  field(badge, label, name, 'select', {
    options: [{ value: '', label: 'Select an option' }, ...options(choices)],
    ...config,
  });

const DISCOVERY_SECTIONS = [
  {
    title: '1. Contact & Project Basics',
    description: "Who we're working with and what we're building.",
    fields: [
      field('1.1', 'Your full name', 'client_name', 'input', { compact: true }),
      field('1.2', 'Company / brand name', 'company_name', 'input', { compact: true }),
      field('1.3', 'Email address', 'email', 'input', { inputType: 'email', compact: true }),
      field('1.4', 'Phone number', 'phone', 'input', { inputType: 'tel', compact: true }),
      field('1.5', 'Who is the final decision-maker on this project?', 'final_decision_maker', 'input', { compact: true }),
      field('1.6', 'Who will be our main point of contact day-to-day?', 'day_to_day_contact', 'input', { compact: true }),
      field('1.7', 'Who will provide content (product info, images, copy)?', 'content_provider', 'input', { compact: true }),
      field('1.8', 'Who will manage the store after launch?', 'store_manager', 'input', { compact: true }),
    ],
  },
  {
    title: '2. Project Overview',
    description: 'Understand the scope and starting point before anything else.',
    fields: [
      field('2.1', 'In one sentence, what does this store sell?', 'store_one_sentence', 'input', {
        placeholder: 'e.g., Premium skincare products for sensitive skin',
      }),
      select('2.2', 'Is this a brand new store, or are we replacing an existing one?', 'store_status', [
        ['brand_new', 'Brand new'],
        ['replacing_existing', 'Replacing existing'],
        ['expanding_existing', 'Expanding existing'],
      ]),
      field('2.3', 'If replacing, what platform are you currently on?', 'current_platform', 'input', {
        required: false,
        helper: 'Required if 2.2 = Replacing existing.',
        placeholder: 'Shopify, WooCommerce, Wix, custom build, etc.',
      }),
      text('2.4', 'If replacing, what is the single biggest problem with your current store?', 'current_store_problem', {
        required: false,
        helper: 'Required if 2.2 = Replacing existing.',
      }),
      text('2.5', 'What is the ONE thing that absolutely must work perfectly at launch?', 'launch_must_work'),
      field('2.6', 'Is there a hard launch deadline? If yes, what is the date?', 'launch_deadline', 'input', {
        placeholder: 'No hard date yet, or YYYY-MM-DD',
      }),
      text(
        '2.7',
        'Are there seasonal factors that affect the deadline? (e.g. Black Friday, a product launch event)',
        'seasonal_factors',
      ),
      select('2.8', 'What is your total budget range for this project?', 'budget_range', [
        'R10k-R25k',
        'R25k-R50k',
        'R50k-R100k',
        'R100k+',
        'Prefer to discuss',
      ]),
      select('2.9', 'Do you have budget for ongoing maintenance and hosting after launch?', 'ongoing_budget', [
        'Yes',
        'No',
        'Unsure',
      ]),
    ],
  },
  {
    title: '3. Target Audience',
    description: 'Who is buying. Shapes UX, language, device priority, and checkout flow.',
    fields: [
      text('3.1', 'Who is your primary customer? (Age range, lifestyle, profession)', 'primary_customer'),
      checkbox('3.2', 'What devices do your customers primarily shop on?', 'shopping_devices', ['Mobile', 'Desktop', 'Tablet']),
      field('3.3', 'What language(s) must the store support?', 'store_languages', 'input', {
        placeholder: 'e.g., English, Afrikaans, isiZulu',
      }),
      field('3.4', 'Where are your customers located? (City, country, or region)', 'customer_locations'),
    ],
  },
  {
    title: '4. Brand & Visual Identity',
    description: 'Cannot design a single screen without this.',
    fields: [
      select('4.1', 'Do you have a logo?', 'has_logo', [
        ['yes', 'Yes'],
        ['no_design_needed', 'No - we need one designed'],
      ], { compact: true }),
      file('4.2', 'Upload your logo', 'logo_upload', {
        compact: true,
        helper: 'Required if 4.1 = Yes.',
        accept: '.ai,.eps,.svg,.png,.jpg,.jpeg,.webp,.pdf',
      }),
      select('4.3', 'Do you have official brand colours?', 'has_brand_colours', ['Yes', 'No'], { compact: true }),
      field('4.4', 'If yes, provide your hex codes', 'brand_hex_codes', 'input', {
        compact: true,
        required: false,
        helper: 'Required if 4.3 = Yes.',
        placeholder: 'e.g., #34D9B9, #071F3F',
      }),
      select('4.5', 'Do you have brand fonts?', 'has_brand_fonts', ['Yes', 'No'], { compact: true }),
      field('4.6', 'If yes, list your fonts', 'brand_fonts', 'input', {
        compact: true,
        required: false,
        helper: 'Required if 4.5 = Yes.',
      }),
      select('4.7', 'Do you have a brand style guide?', 'has_style_guide', ['Yes', 'No'], { compact: true }),
      file('4.8', 'Upload brand style guide', 'style_guide_upload', {
        compact: true,
        helper: 'Required if 4.7 = Yes.',
        accept: '.pdf,.doc,.docx,.ppt,.pptx,.png,.jpg,.jpeg,.webp',
      }),
      text('4.9', 'Share 2-3 websites whose look and feel you admire (any industry)', 'admired_sites', {
        placeholder: 'Share links and what you like about each.',
      }),
      text('4.10', 'List any visual styles, colours, or design approaches you do NOT want', 'visual_do_not_want'),
    ],
  },
  {
    title: '5. Products',
    description: 'Core of the build. Every answer here directly affects architecture.',
    fields: [
      text('5.1', 'What product categories will you sell at launch?', 'product_categories'),
      select('5.2', 'How many products do you have right now?', 'product_count_now', ['1-20', '21-100', '101-500', '500+']),
      select('5.3', 'How many products do you expect within 12 months?', 'product_count_12_months', [
        'Same',
        '2x current',
        '5x current',
        '10x+',
      ]),
      select('5.4', 'Do products have variations? (e.g. size, colour, material)', 'product_variations', ['Yes', 'No']),
      text('5.5', 'If yes, describe the variation types', 'variation_types', {
        required: false,
        helper: 'Required if 5.4 = Yes.',
      }),
      select('5.6', 'How many images per product on average?', 'images_per_product', ['1', '2-4', '5-10', '10+']),
      select('5.7', 'Is all product information (names, descriptions, prices, images) ready?', 'product_info_ready', [
        'Yes, fully ready',
        'Partially ready',
        'Not yet',
      ]),
      select('5.8', 'Do you need to track stock levels?', 'stock_tracking', [
        ['per_product', 'Yes - per product'],
        ['per_variation', 'Yes - per variation'],
        ['no', 'No'],
      ]),
      select('5.9', 'Should customers be able to order out-of-stock items?', 'out_of_stock_orders', [
        ['allow_backorders', 'Yes - allow backorders'],
        ['block_out_of_stock', 'No - block when out of stock'],
        ['show_oos_block', 'Show as OOS but block purchase'],
      ]),
      select('5.10', 'Will you sell any made-to-order or custom products?', 'made_to_order', [
        'Yes',
        'No',
        'Maybe post-launch',
      ]),
      select('5.11', 'Will you sell product bundles or kits?', 'bundles', ['Yes', 'No', 'Post-launch']),
      select('5.12', 'Will you sell digital / downloadable products?', 'digital_products', ['Yes', 'No', 'Post-launch']),
      select('5.13', 'Will you sell subscription or recurring-order products?', 'subscription_products', [
        'Yes',
        'No',
        'Post-launch',
      ]),
    ],
  },
  {
    title: '6. Pricing & Tax',
    description: 'Affects checkout display, invoicing, and accounting integrations.',
    fields: [
      select('6.1', 'Are prices displayed including or excluding tax?', 'tax_display', [
        'Including tax',
        'Excluding tax (tax shown at checkout)',
      ]),
      select('6.2', 'Do you need to collect and display VAT / sales tax?', 'collect_tax', ['Yes', 'No', 'Unsure - advise me']),
      select('6.3', 'Do you offer discounts or promotional pricing?', 'discounts', [
        'Yes - coupon codes',
        'Yes - automatic rules',
        'Both',
        'No',
      ]),
      select('6.4', 'Do you offer wholesale or tiered pricing for different customer groups?', 'tiered_pricing', [
        'Yes',
        'No',
        'Post-launch',
      ]),
    ],
  },
  {
    title: '7. Payments',
    description: 'Build-blocking. Payment gateway affects everything from checkout UX to settlement time.',
    fields: [
      checkbox('7.1', 'Which payment methods must be available at launch?', 'payment_methods', [
        'Credit/Debit card',
        'EFT',
        'Instant EFT (Ozow/PayShap)',
        'Cash on delivery',
        'Buy now pay later',
        'Crypto',
        'Other',
      ]),
      select('7.2', 'Do you already have a payment gateway account?', 'has_payment_gateway', [
        'Yes',
        'No - help me set one up',
      ]),
      select('7.3', 'If yes, which provider?', 'gateway_provider', ['Stripe', 'PayFast', 'Peach Payments', 'Ozow', 'PayPal', 'Other'], {
        required: false,
        helper: 'Required if 7.2 = Yes.',
      }),
      select('7.4', 'Do you need a manual / quote-based payment option for large or custom orders?', 'manual_payment_option', [
        'Yes',
        'No',
      ]),
    ],
  },
  {
    title: '8. Shipping & Fulfilment',
    description: 'Shipping logic can add weeks to a build if not clarified upfront.',
    fields: [
      field('8.1', 'Where are you shipping from? (City and country)', 'shipping_origin'),
      checkbox('8.2', 'Which regions must you support at launch?', 'launch_shipping_regions', [
        'Local city only',
        'Nationwide',
        'Africa',
        'International',
      ]),
      select('8.3', 'How should shipping fees be calculated?', 'shipping_fee_calculation', [
        'Fixed flat rate',
        'By weight or order value',
        'Real-time courier API',
        'Free shipping',
        'Confirmed manually per order',
      ]),
      select('8.4', 'Do you offer local pickup or in-store collection?', 'local_pickup', ['Yes', 'No']),
      select('8.5', 'Do you fulfil orders yourself or use a fulfilment service?', 'fulfilment_owner', [
        'We pack and ship ourselves',
        'Third-party fulfilment',
        'Both',
      ]),
      field('8.6', 'Which courier(s) do you use or prefer?', 'preferred_couriers'),
    ],
  },
  {
    title: '9. Checkout & Accounts',
    description: 'Directly affects conversion rate and post-purchase experience.',
    fields: [
      select('9.1', 'Should customers be able to checkout as guests?', 'guest_checkout', [
        'Yes - guest checkout allowed',
        'No - account required',
        'Both options',
      ]),
      select('9.2', 'Should customers be able to create accounts to track orders?', 'customer_accounts', ['Yes', 'No']),
      select('9.3', 'Do you need a customer loyalty or rewards programme?', 'loyalty_programme', ['Yes', 'No', 'Post-launch']),
      text('9.4', 'What is your return and refund policy?', 'return_refund_policy'),
    ],
  },
  {
    title: '10. Notifications & Emails',
    description: 'Affects transactional email setup and third-party integrations.',
    fields: [
      select('10.1', 'Should customers receive an order confirmation email?', 'order_confirmation_email', ['Yes', 'No']),
      select('10.2', 'Should customers receive shipping / tracking update emails?', 'tracking_update_emails', ['Yes', 'No']),
      select('10.3', 'Should the store admin receive an email when a new order is placed?', 'admin_order_email', ['Yes', 'No']),
      select('10.4', 'Do you use an email marketing platform?', 'uses_email_marketing', ['Yes', 'No']),
      select('10.5', 'If yes, which one?', 'email_marketing_provider', ['Mailchimp', 'Klaviyo', 'ActiveCampaign', 'HubSpot', 'Other'], {
        required: false,
        helper: 'Required if 10.4 = Yes.',
      }),
    ],
  },
  {
    title: '11. Admin & Integrations',
    description: 'Avoids surprises mid-build when a client mentions a required tool connection.',
    fields: [
      text('11.1', 'Who will have admin access to manage products and orders? (Names and roles)', 'admin_access_people'),
      select('11.2', 'Do you use accounting software that must sync with the store?', 'accounting_sync', ['Yes', 'No']),
      select('11.3', 'If yes, which one?', 'accounting_provider', ['Xero', 'QuickBooks', 'Sage', 'Other'], {
        required: false,
        helper: 'Required if 11.2 = Yes.',
      }),
      select('11.4', 'Do you use a CRM that must connect to the store?', 'crm_sync', ['Yes', 'No']),
      text('11.5', 'Do you need the store to connect to any other tools or platforms?', 'other_integrations'),
      select('11.6', 'Do you need Google Analytics or any other analytics tracking?', 'analytics_tracking', ['Yes', 'No', 'Unsure']),
      select('11.7', 'Do you need Google Shopping, Meta Shop, or social selling integrations?', 'social_selling_integrations', [
        'Yes',
        'No',
        'Post-launch',
      ]),
    ],
  },
  {
    title: '12. Domain & Hosting',
    description: 'Without this, you cannot deploy.',
    fields: [
      select('12.1', 'Do you own a domain name?', 'domain_owned', ['Yes', 'No - help me get one']),
      field('12.2', 'If yes, where was it registered?', 'domain_registrar', 'input', {
        required: false,
        helper: 'Required if 12.1 = Yes.',
      }),
      select('12.3', 'Do you have login access to the domain registrar account?', 'domain_login_access', ['Yes', 'No'], {
        required: false,
        helper: 'Required if 12.1 = Yes.',
      }),
      select('12.4', 'Do you currently have web hosting?', 'current_hosting', ['Yes', 'No']),
      field('12.5', 'Where is your business email hosted?', 'business_email_host', 'input', {
        placeholder: 'Google Workspace, Microsoft 365, hosting provider, etc.',
      }),
    ],
  },
  {
    title: '13. Content Readiness',
    description: 'A content readiness check - not to gather the content itself, but to flag delays before they hit the build.',
    fields: [
      select('13.1', 'Do you have professional product photography ready?', 'product_photography_ready', [
        'Yes, all ready',
        'Partially ready',
        'Not yet',
      ]),
      select('13.2', 'Do you have written copy ready (About Us, policy pages, homepage text)?', 'written_copy_ready', [
        'Yes, all ready',
        'Partially ready',
        'Not yet',
      ]),
      select('13.3', 'Who is responsible for loading all products into the store?', 'product_loading_owner', [
        'Client will do it',
        'Developer to load initial products',
        'Shared',
      ]),
    ],
  },
];

const allFields = DISCOVERY_SECTIONS.flatMap((section) => section.fields);

const formatFileSize = (size) => {
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${Math.round(size / 1024)} KB`;
  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
};

const formatEntry = (entry) => {
  if (typeof entry === 'string') return entry.trim();
  if (entry instanceof File && entry.name) return `${entry.name} (${formatFileSize(entry.size)})`;
  return '';
};

const getFileInput = (form, name) => {
  const element = form.elements.namedItem(name);
  return element instanceof HTMLInputElement ? element : null;
};

const isFieldAnswered = (form, formData, item) => {
  if (item.kind === 'file') return Boolean(getFileInput(form, item.name)?.files?.length);
  return formData.getAll(item.name).map(formatEntry).filter(Boolean).length > 0;
};

const App = () => (
  <div className="app">
    <ECDiscovery />
  </div>
);

const ECDiscovery = () => {
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <>
      {!showForm && !formSubmitted && <LandingOverlay onProceed={() => setShowForm(true)} />}
      {showForm && !formSubmitted && <DiscoveryForm onSubmit={() => setFormSubmitted(true)} />}
      {formSubmitted && <SuccessScreen />}
    </>
  );
};

const LandingOverlay = ({ onProceed }) => {
  const [canProceed, setCanProceed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCanProceed(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing-overlay">
      <div className="logo-card">
        <Logo09 />
        <button
          className="proceed-btn"
          type="button"
          onClick={onProceed}
          style={{ opacity: canProceed ? 1 : 0.5, pointerEvents: canProceed ? 'auto' : 'none' }}
        >
          Proceed to Form
        </button>
      </div>
    </div>
  );
};

const Logo09 = () => (
  <div className="logo-09">
    <div className="cols">
      {['K', 'Y', 'P', 'E', 'X', '-', 'T', 'E', 'C', 'H'].map((letter, index) => (
        <span className={`col-letter ${['K', 'E'].includes(letter) ? 'h' : ''} ${letter === '-' ? 'dash' : ''}`} key={`${letter}-${index}`}>
          {letter}
        </span>
      ))}
    </div>
    <div className="tagline">Solutions</div>
  </div>
);

const DiscoveryForm = ({ onSubmit }) => {
  const [progress, setProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const formRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return undefined;

    const updateProgress = () => {
      const formData = new FormData(form);
      const answered = allFields.filter((item) => isFieldAnswered(form, formData, item)).length;
      setProgress((answered / allFields.length) * 100);
    };

    updateProgress();
    form.addEventListener('input', updateProgress);
    form.addEventListener('change', updateProgress);

    return () => {
      form.removeEventListener('input', updateProgress);
      form.removeEventListener('change', updateProgress);
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const missingField = allFields.find((item) => item.required && !isFieldAnswered(form, formData, item));

    setIsSubmitting(true);
    setSubmitError('');

    if (missingField) {
      setSubmitError(`Please answer ${missingField.badge}: ${missingField.label}`);
      form.querySelector(`[name="${missingField.name}"]`)?.focus();
      setIsSubmitting(false);
      return;
    }

    const message = DISCOVERY_SECTIONS.flatMap((section) =>
      section.fields.flatMap((item) => {
        const values = formData.getAll(item.name).map(formatEntry).filter(Boolean);
        return values.length ? [`${section.title}\n${item.badge} - ${item.label}\n${values.join(', ')}`] : [];
      }),
    ).join('\n\n');

    const payload = new FormData();
    payload.append('access_key', WEB3FORMS_ACCESS_KEY);
    payload.append('subject', 'New E-Commerce Discovery Form Submission');
    payload.append('from_name', 'Kypex-Tech Discovery Form');
    payload.append('form_name', 'E-Commerce Discovery Form');
    payload.append('message', message);

    ['client_name', 'company_name', 'email', 'phone'].forEach((name) => {
      const value = formData.get(name)?.toString().trim();
      if (value) payload.append(name, value);
    });

    allFields
      .filter((item) => item.kind === 'file')
      .forEach((item) => {
        Array.from(getFileInput(form, item.name)?.files ?? []).forEach((upload) => {
          if (upload.name) payload.append(item.name, upload, upload.name);
        });
      });

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: payload,
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'The form could not be submitted. Please try again.');
      }

      form.reset();
      onSubmit();
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'The form could not be submitted. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <div className="container">
        <header>
          <h1>E-Commerce Discovery Form</h1>
          <p className="subtitle">Help us build the right online store for your business.</p>
        </header>

        <form ref={formRef} onSubmit={handleSubmit} method="POST">
          <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
          <input type="hidden" name="subject" value="New E-Commerce Discovery Form Submission" />
          <input type="hidden" name="from_name" value="Kypex-Tech Discovery Form" />
          <input type="hidden" name="form_name" value="E-Commerce Discovery Form" />

          {DISCOVERY_SECTIONS.map((section) => (
            <FormSection title={section.title} description={section.description} key={section.title}>
              {section.fields.map((item) => (
                <FieldRenderer field={item} key={`${section.title}-${item.badge}-${item.name}`} />
              ))}
            </FormSection>
          ))}

          <button type="submit" className="btn-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Questionnaire'}
          </button>
          {submitError && (
            <p className="form-error" role="alert">
              {submitError}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

const FieldRenderer = ({ field: item }) => (
  <div className={`form-group ${item.compact ? 'form-group--compact' : ''}`}>
    <QuestionBadge num={item.badge} />
    <Label text={item.label} htmlFor={item.name} />
    {item.kind === 'textarea' && <Textarea name={item.name} placeholder={item.placeholder} required={item.required} />}
    {item.kind === 'input' && (
      <Input type={item.inputType ?? 'text'} name={item.name} placeholder={item.placeholder} required={item.required} min={item.min} />
    )}
    {item.kind === 'file' && <Input type="file" name={item.name} required={item.required} accept={item.accept} />}
    {item.kind === 'select' && <Select name={item.name} options={item.options} required={item.required} />}
    {item.kind === 'checkbox' && <CheckboxGroup name={item.name} options={item.options} />}
    {item.helper && <p className="field-helper">{item.helper}</p>}
  </div>
);

const SuccessScreen = () => {
  const [typedText, setTypedText] = useState('');
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const textToType = 'thank you, form has been submitted successfully :)';
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex < textToType.length) {
        setTypedText((prev) => prev + textToType.charAt(charIndex));
        charIndex += 1;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => setShowButton(true), 500);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <div className="success-screen">
      <div className="terminal-logo">
        <div className="term-bar">
          <div className="term-dot red"></div>
          <div className="term-dot yellow"></div>
          <div className="term-dot green"></div>
        </div>
        <div className="line">
          <span className="prompt">$ </span>
          <span className="cmd">init --brand</span>
        </div>
        <div className="line">
          <span className="out">KYPEX-TECH SOLUTIONS</span>
        </div>
        <div className="line">
          <span className="prompt">$ </span>
          <span className="typed-text">{typedText}</span>
        </div>
        {showButton && (
          <div className="btn-container">
            <a href="https://kypextech.co.za/" className="go-site-btn">
              Go to Site
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const FormSection = ({ title, description, children }) => (
  <div className="form-section">
    <h2 className="section-title">{title}</h2>
    <p className="section-description">{description}</p>
    {children}
  </div>
);

const QuestionBadge = ({ num }) => <div className="question-badge">{num}</div>;

const Label = ({ text, htmlFor }) => <label htmlFor={htmlFor}>{text}</label>;

const Input = ({ type, name, placeholder, required, min, accept }) => (
  <input id={name} type={type} name={name} placeholder={placeholder} required={required} min={min} accept={accept} />
);

const Textarea = ({ name, placeholder, required }) => <textarea id={name} name={name} placeholder={placeholder} required={required}></textarea>;

const Select = ({ name, options: choices, required }) => (
  <select id={name} name={name} required={required}>
    {choices.map((choice) => (
      <option key={`${name}-${choice.value}`} value={choice.value}>
        {choice.label}
      </option>
    ))}
  </select>
);

const CheckboxGroup = ({ name, options: choices }) => (
  <div className="checkbox-group">
    {choices.map((choice) => (
      <label key={`${name}-${choice.value}`} className="checkbox-item">
        <input type="checkbox" name={name} value={choice.value} />
        <span>{choice.label}</span>
      </label>
    ))}
  </div>
);

export default App;
