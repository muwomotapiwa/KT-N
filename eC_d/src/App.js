import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <ECDiscovery />
    </div>
  );
};

const ECDiscovery = () => {
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <>
      {!showForm && !formSubmitted && (
        <LandingOverlay onProceed={() => setShowForm(true)} />
      )}
      {showForm && !formSubmitted && (
        <DiscoveryForm onSubmit={() => setFormSubmitted(true)} />
      )}
      {formSubmitted && (
        <SuccessScreen />
      )}
    </>
  );
};

const LandingOverlay = ({ onProceed }) => {
  const [canProceed, setCanProceed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCanProceed(true);
    }, 5000);
  }, []);

  return (
    <div className="landing-overlay">
      <div className="logo-card">
        <Logo09 />
        <button
          className="proceed-btn"
          onClick={onProceed}
          style={{ opacity: canProceed ? 1 : 0.5, pointerEvents: canProceed ? 'auto' : 'none' }}
        >
          Proceed to Form
        </button>
      </div>
    </div>
  );
};

const Logo09 = () => {
  return (
    <div className="logo-09">
      <div className="cols">
        <span className="col-letter h">K</span>
        <span className="col-letter">Y</span>
        <span className="col-letter">P</span>
        <span className="col-letter h">E</span>
        <span className="col-letter">X</span>
        <span className="col-letter dash">—</span>
        <span className="col-letter">T</span>
        <span className="col-letter h">E</span>
        <span className="col-letter">C</span>
        <span className="col-letter">H</span>
      </div>
      <div className="tagline">Solutions</div>
    </div>
  );
};

const DiscoveryForm = ({ onSubmit }) => {
  const [progress, setProgress] = useState(0);
  const formRef = useRef(null);

  useEffect(() => {
    const handleInput = () => {
      const inputs = formRef.current?.querySelectorAll('input:not([type="submit"]):not([type="hidden"]), textarea, select');
      if (inputs) {
        let filled = 0;
        inputs.forEach(input => {
          if (input.value.trim() !== '') filled++;
        });
        setProgress((filled / inputs.length) * 100);
      }
    };

    const form = formRef.current;
    if (form) {
      form.addEventListener('input', handleInput);
      return () => form.removeEventListener('input', handleInput);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="form-container">
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <div className="container">
        <header>
          <h1>E-Commerce Discovery Form</h1>
          <p className="subtitle">Help us build the perfect online store for you</p>
        </header>

        <form ref={formRef} onSubmit={handleSubmit} action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
          <input type="hidden" name="_subject" value="New E-Commerce Discovery Form Submission" />

          <FormSection title="1. Project Vision & Objectives">
            <QuestionBadge num="Q1" />
            <Label text="In one sentence, what does this platform do?" />
            <Textarea name="vision" placeholder="Describe your e-commerce store in one sentence..." />

            <QuestionBadge num="Q2" />
            <Label text="What is the #1 problem this solves for your business?" />
            <Textarea name="business_problem" placeholder="What business challenge are you solving?" />

            <QuestionBadge num="Q3" />
            <Label text="What is the #1 problem this solves for your customers?" />
            <Textarea name="customer_problem" placeholder="What problem do your customers have that you're solving?" />

            <QuestionBadge num="Q4" />
            <Label text="If we launch successfully, what specific metric will change?" />
            <Input type="text" name="success_metric" placeholder="e.g., 20 sales per day instead of 5" />

            <QuestionBadge num="Q5" />
            <Label text="6 months after launch, how will you know this was worth the investment?" />
            <Textarea name="success_indicator" placeholder="What results do you expect?" />

            <QuestionBadge num="Q6" />
            <Label text="Is this replacing an existing system/website, or is it brand new?" />
            <Select name="new_or_replace" options={[
              { value: '', label: 'Select an option' },
              { value: 'brand_new', label: 'Brand New' },
              { value: 'replacing', label: 'Replacing Existing' }
            ]} />

            <QuestionBadge num="Q7" />
            <Label text="If replacing: What works well in the current system that we must keep?" />
            <Textarea name="keep_features" placeholder="What features are working well?" />

            <QuestionBadge num="Q8" />
            <Label text="If replacing: What frustrates you most about the current system?" />
            <Textarea name="current_frustrations" placeholder="What issues need to be fixed?" />

            <QuestionBadge num="Q9" />
            <Label text="What is the absolute CORE feature - the one thing that MUST work perfectly?" />
            <Textarea name="core_feature" placeholder="What's the most critical feature?" />

            <QuestionBadge num="Q10" />
            <Label text="What would be 'nice to have' but isn't critical for launch?" />
            <Textarea name="nice_to_have" placeholder="Features that can wait until after launch" />
          </FormSection>

          <FormSection title="2. Target Audience & Users">
            <QuestionBadge num="Q11" />
            <Label text="Who is your primary user? (Age range, profession, tech skill level)" />
            <Textarea name="primary_user" placeholder="Describe your ideal customer..." />

            <QuestionBadge num="Q12" />
            <Label text="What devices do they primarily use?" />
            <CheckboxGroup name="devices" options={[
              { value: 'desktop', label: 'Desktop' },
              { value: 'mobile', label: 'Mobile Phone' },
              { value: 'tablet', label: 'Tablet' },
              { value: 'mix', label: 'Mix of all' }
            ]} />

            <QuestionBadge num="Q13" />
            <Label text="What is their typical internet speed/quality?" />
            <Select name="internet_speed" options={[
              { value: '', label: 'Select an option' },
              { value: 'fast', label: 'Urban fiber internet' },
              { value: 'average', label: 'Average broadband' },
              { value: 'slow', label: 'Rural/slower connections' },
              { value: 'varied', label: 'Varied - need to support all' }
            ]} />

            <QuestionBadge num="Q14" />
            <Label text="How tech-savvy are your users?" />
            <Select name="tech_savvy" options={[
              { value: '', label: 'Select an option' },
              { value: 'very', label: 'Very tech-savvy' },
              { value: 'moderate', label: 'Moderate' },
              { value: 'low', label: 'Less tech-savvy' }
            ]} />

            <QuestionBadge num="Q15" />
            <Label text="What language(s) do they speak?" />
            <Input type="text" name="languages" placeholder="e.g., English, Spanish" />

            <QuestionBadge num="Q16" />
            <Label text="What time zones are they in?" />
            <Input type="text" name="timezones" placeholder="e.g., EST, PST" />

            <QuestionBadge num="Q17" />
            <Label text="Are there any accessibility needs we must accommodate?" />
            <Textarea name="accessibility" placeholder="Vision impairment, hearing impairment, motor difficulties, etc." />

            <QuestionBadge num="Q18" />
            <Label text="What is their biggest fear/concern when using platforms like this?" />
            <Select name="user_fears" options={[
              { value: '', label: 'Select an option' },
              { value: 'security', label: 'Security/privacy' },
              { value: 'complexity', label: 'Too complicated' },
              { value: 'cost', label: 'Hidden costs' },
              { value: 'time', label: 'Wasting time' },
              { value: 'trust', label: 'Trust issues' }
            ]} />
          </FormSection>

          <FormSection title="3. Competitive Landscape">
            <QuestionBadge num="Q21" />
            <Label text="Who are your top 3 competitors? (Provide website URLs)" />
            <Textarea name="competitors" placeholder="List competitor names and URLs..." />

            <QuestionBadge num="Q22" />
            <Label text="For each competitor: What do they do BETTER than you currently?" />
            <Textarea name="competitors_better" placeholder="What are competitors doing well?" />

            <QuestionBadge num="Q23" />
            <Label text="For each competitor: Where do they FAIL that you want to do better?" />
            <Textarea name="competitors_fail" placeholder="Where can you beat them?" />

            <QuestionBadge num="Q24" />
            <Label text="Show us 3 websites/apps you LOVE (any industry)" />
            <Textarea name="love_sites" placeholder="List URLs and what you love about each..." />

            <QuestionBadge num="Q25" />
            <Label text="Show us 3 websites/apps you HATE" />
            <Textarea name="hate_sites" placeholder="List URLs and what bothers you..." />

            <QuestionBadge num="Q26" />
            <Label text="Is there a website/app that has the 'exact vibe' you want?" />
            <Input type="url" name="vibe_site" placeholder="URL of a site that matches the look and feel you want" />
          </FormSection>

          <FormSection title="4. Brand & Visual Identity">
            <div className="two-col">
              <div>
                <QuestionBadge num="Q27" />
                <Label text="Do you have a logo?" />
                <Select name="has_logo" options={[
                  { value: '', label: 'Select an option' },
                  { value: 'yes_vector', label: 'Yes, in vector format (AI, EPS, SVG)' },
                  { value: 'yes_image', label: 'Yes, but only image files' },
                  { value: 'no', label: 'No, need one created' }
                ]} />
              </div>
              <div>
                <QuestionBadge num="Q28" />
                <Label text="Do you have official brand colors? (Provide hex codes)" />
                <Input type="text" name="brand_colors" placeholder="e.g., #FF5733, #333333" />
              </div>
            </div>

            <div className="two-col">
              <div>
                <QuestionBadge num="Q29" />
                <Label text="Do you have official brand fonts?" />
                <Input type="text" name="brand_fonts" placeholder="Font names if known" />
              </div>
              <div>
                <QuestionBadge num="Q30" />
                <Label text="Do you have a brand style guide?" />
                <Select name="has_style_guide" options={[
                  { value: '', label: 'Select an option' },
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' }
                ]} />
              </div>
            </div>

            <QuestionBadge num="Q32" />
            <Label text="What 3 words describe how your brand should FEEL?" />
            <Input type="text" name="brand_feel" placeholder="e.g., trustworthy, playful, luxurious" />

            <QuestionBadge num="Q33" />
            <Label text="What emotions should users feel when they see your site?" />
            <Select name="user_emotions" options={[
              { value: '', label: 'Select an option' },
              { value: 'excited', label: 'Excited' },
              { value: 'calm', label: 'Calm' },
              { value: 'confident', label: 'Confident' },
              { value: 'curious', label: 'Curious' },
              { value: 'trust', label: 'Trust/Reliable' },
              { value: 'energetic', label: 'Energetic' }
            ]} />

            <QuestionBadge num="Q34" />
            <Label text="Are there colors you absolutely DON'T want used?" />
            <Input type="text" name="dislike_colors" placeholder="Colors to avoid" />

            <QuestionBadge num="Q35" />
            <Label text="Are there any visual styles you hate?" />
            <Textarea name="dislike_styles" placeholder="e.g., No cartoony illustrations, no stock photos of people in suits" />
          </FormSection>

          <FormSection title="5. Content & Assets">
            <div className="two-col">
              <div>
                <QuestionBadge num="Q36" />
                <Label text="Do you have all written content ready?" />
                <Select name="content_ready" options={[
                  { value: '', label: 'Select an option' },
                  { value: 'yes', label: 'Yes, all ready' },
                  { value: 'partial', label: 'Partially ready' },
                  { value: 'no', label: 'No, need copywriting help' }
                ]} />
              </div>
              <div>
                <QuestionBadge num="Q38" />
                <Label text="Do you have professional photography?" />
                <Select name="has_photos" options={[
                  { value: '', label: 'Select an option' },
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No, will use stock photos' },
                  { value: 'budget', label: 'Need budget for a photographer' }
                ]} />
              </div>
            </div>

            <QuestionBadge num="Q40" />
            <Label text="Do you have video content? If yes, where is it hosted?" />
            <Input type="text" name="video_content" placeholder="YouTube, Vimeo, raw files, etc." />

            <QuestionBadge num="Q41" />
            <Label text="Do you have testimonials/reviews collected?" />
            <Select name="has_testimonials" options={[
              { value: '', label: 'Select an option' },
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No, will need to collect' }
            ]} />

            <QuestionBadge num="Q42" />
            <Label text="Do you have company mission statement, about us story, and team bios?" />
            <Select name="has_company_content" options={[
              { value: '', label: 'Select an option' },
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No, need help writing' }
            ]} />
          </FormSection>

          <FormSection title="6. Domain & Hosting">
            <div className="two-col">
              <div>
                <QuestionBadge num="Q45" />
                <Label text="Do you own a domain name?" />
                <Input type="text" name="domain" placeholder="Your website address" />
              </div>
              <div>
                <QuestionBadge num="Q46" />
                <Label text="Where did you buy the domain?" />
                <Select name="domain_registrar" options={[
                  { value: '', label: 'Select an option' },
                  { value: 'godaddy', label: 'GoDaddy' },
                  { value: 'namecheap', label: 'Namecheap' },
                  { value: 'cloudflare', label: 'Cloudflare' },
                  { value: 'google', label: 'Google Domains' },
                  { value: 'other', label: 'Other' },
                  { value: 'dont_have', label: "Don't have one yet" }
                ]} />
              </div>
            </div>

            <QuestionBadge num="Q47" />
            <Label text="Do you have login access to that account?" />
            <Select name="domain_login" options={[
              { value: '', label: 'Select an option' },
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' }
            ]} />

            <QuestionBadge num="Q49" />
            <Label text="Do you currently have web hosting?" />
            <Input type="text" name="current_hosting" placeholder="If yes, who is your hosting provider?" />

            <QuestionBadge num="Q51" />
            <Label text="Where is your business email hosted?" />
            <Select name="email_host" options={[
              { value: '', label: 'Select an option' },
              { value: 'gmail', label: 'Gmail/Google Workspace' },
              { value: 'outlook', label: 'Outlook/Microsoft 365' },
              { value: 'other', label: 'Other' }
            ]} />
          </FormSection>

          <FormSection title="7. Timeline & Budget">
            <div className="two-col">
              <div>
                <QuestionBadge num="Q52" />
                <Label text="Is there a hard, immovable deadline?" />
                <Input type="date" name="hard_deadline" />
              </div>
              <div>
                <QuestionBadge num="Q54" />
                <Label text="Are there any seasonal factors?" />
                <Input type="text" name="seasonal" placeholder="e.g., Must launch before holiday season" />
              </div>
            </div>

            <QuestionBadge num="Q55" />
            <Label text="What is your total budget range for this project?" />
            <Select name="budget" options={[
              { value: '', label: 'Select a range' },
              { value: 'under5k', label: 'Under $5,000' },
              { value: '5k-10k', label: '$5,000 - $10,000' },
              { value: '10k-25k', label: '$10,000 - $25,000' },
              { value: '25k-50k', label: '$25,000 - $50,000' },
              { value: '50k+', label: '$50,000+' },
              { value: 'not_sure', label: 'Not sure yet' }
            ]} />

            <QuestionBadge num="Q57" />
            <Label text="Do you have budget for ongoing maintenance after launch?" />
            <Select name="maintenance_budget" options={[
              { value: '', label: 'Select an option' },
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' },
              { value: 'not_sure', label: 'Not sure' }
            ]} />

            <QuestionBadge num="Q58" />
            <Label text="Are you able to make decisions quickly?" />
            <Select name="decision_speed" options={[
              { value: '', label: 'Select an option' },
              { value: 'very_fast', label: 'Very fast - can decide same day' },
              { value: 'moderate', label: 'Moderate - usually within a few days' },
              { value: 'slow', label: 'Slow - requires multiple approvals' }
            ]} />
          </FormSection>

          <FormSection title="8. Decision Making & Team">
            <div className="two-col">
              <div>
                <QuestionBadge num="Q59" />
                <Label text="Who is the final decision-maker?" />
                <Input type="text" name="decision_maker" placeholder="Name and title" />
              </div>
              <div>
                <QuestionBadge num="Q60" />
                <Label text="How many people need to approve decisions?" />
                <Input type="number" name="approval_count" min="1" />
              </div>
            </div>

            <div className="two-col">
              <div>
                <QuestionBadge num="Q61" />
                <Label text="Who will be our main point of contact?" />
                <Input type="text" name="main_contact" placeholder="Name, email, phone" />
              </div>
              <div>
                <QuestionBadge num="Q63" />
                <Label text="Who will be responsible for providing content?" />
                <Input type="text" name="content_provider" placeholder="Name and role" />
              </div>
            </div>

            <QuestionBadge num="Q64" />
            <Label text="Who will manage the platform after launch?" />
            <Input type="text" name="platform_manager" placeholder="Name and role" />
          </FormSection>

          <FormSection title="9. E-Commerce Specific">
            <QuestionBadge num="Q101" />
            <Label text="What are you selling?" />
            <CheckboxGroup name="product_types" options={[
              { value: 'physical', label: 'Physical Products' },
              { value: 'digital', label: 'Digital Downloads' },
              { value: 'services', label: 'Services' },
              { value: 'subscriptions', label: 'Subscriptions' }
            ]} />

            <div className="two-col">
              <div>
                <QuestionBadge num="Q102" />
                <Label text="How many products do you have NOW?" />
                <Input type="number" name="product_count_now" min="0" />
              </div>
              <div>
                <QuestionBadge num="Q103" />
                <Label text="How many products do you expect in 1 year?" />
                <Input type="number" name="product_count_year" min="0" />
              </div>
            </div>

            <QuestionBadge num="Q105" />
            <Label text="Do you have all product information ready?" />
            <Select name="product_info_ready" options={[
              { value: '', label: 'Select an option' },
              { value: 'yes', label: 'Yes - all ready' },
              { value: 'partial', label: 'Partial - some ready' },
              { value: 'no', label: 'No - need help' }
            ]} />

            <QuestionBadge num="Q106" />
            <Label text="Do products have variations?" />
            <CheckboxGroup name="variations" options={[
              { value: 'size', label: 'Size' },
              { value: 'color', label: 'Color' },
              { value: 'material', label: 'Material' },
              { value: 'pattern', label: 'Pattern' }
            ]} />

            <QuestionBadge num="Q108" />
            <Label text="Do you need 'product bundles'?" />
            <Select name="bundles" options={[
              { value: '', label: 'Select an option' },
              { value: 'yes', label: 'Yes - product bundles' },
              { value: 'no', label: 'No' }
            ]} />

            <QuestionBadge num="Q111" />
            <Label text="How many images per product on average?" />
            <Select name="images_per_product" options={[
              { value: '', label: 'Select an option' },
              { value: '1-2', label: '1-2 images' },
              { value: '3-5', label: '3-5 images' },
              { value: '6-10', label: '6-10 images' },
              { value: '10+', label: '10+ images' }
            ]} />

            <QuestionBadge num="Q116" />
            <Label text="Do you need customer reviews/ratings on product pages?" />
            <Select name="reviews" options={[
              { value: '', label: 'Select an option' },
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' }
            ]} />

            <QuestionBadge num="Q121" />
            <Label text="Do you track inventory levels?" />
            <Select name="inventory_tracking" options={[
              { value: '', label: 'Select an option' },
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' }
            ]} />

            <QuestionBadge num="Q130" />
            <Label text="Are all prices shown including or excluding tax?" />
            <Select name="tax_display" options={[
              { value: '', label: 'Select an option' },
              { value: 'inclusive', label: 'Including tax' },
              { value: 'exclusive', label: 'Excluding tax (added at checkout)' }
            ]} />

            <QuestionBadge num="Q137" />
            <Label text="Should users be able to checkout as guests, or must they create an account?" />
            <Select name="checkout_option" options={[
              { value: '', label: 'Select an option' },
              { value: 'guest', label: 'Guest checkout allowed' },
              { value: 'account', label: 'Must create account' },
              { value: 'both', label: 'Both options available' }
            ]} />

            <QuestionBadge num="Q146" />
            <Label text="Which payment methods MUST you accept?" />
            <CheckboxGroup name="payments" options={[
              { value: 'cards', label: 'Credit/Debit Cards' },
              { value: 'paypal', label: 'PayPal' },
              { value: 'apple_pay', label: 'Apple Pay' },
              { value: 'google_pay', label: 'Google Pay' },
              { value: 'klarna', label: 'Buy Now Pay Later' },
              { value: 'bank', label: 'Bank Transfer/ACH' }
            ]} />

            <QuestionBadge num="Q147" />
            <Label text="Do you already have a merchant account or payment gateway?" />
            <Input type="text" name="payment_gateway" placeholder="e.g., Stripe, PayPal, Square" />

            <QuestionBadge num="Q154" />
            <Label text="Do you ship products yourself, or use a fulfillment service?" />
            <Select name="shipping_method" options={[
              { value: '', label: 'Select an option' },
              { value: 'self', label: 'Ship ourselves' },
              { value: 'fulfillment', label: 'Fulfillment service' },
              { value: 'dropshipping', label: 'Dropshipping' }
            ]} />

            <QuestionBadge num="Q156" />
            <Label text="How should shipping costs be calculated?" />
            <CheckboxGroup name="shipping_calc" options={[
              { value: 'flat', label: 'Flat rate' },
              { value: 'free', label: 'Free shipping' },
              { value: 'threshold', label: 'Free over certain amount' },
              { value: 'weight', label: 'Calculated by weight' },
              { value: 'destination', label: 'Calculated by destination' },
              { value: 'carrier', label: 'Real-time carrier rates' }
            ]} />

            <QuestionBadge num="Q159" />
            <Label text="Do you ship internationally?" />
            <Select name="international_shipping" options={[
              { value: '', label: 'Select an option' },
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No - US only' }
            ]} />

            <QuestionBadge num="Q165" />
            <Label text="Do you offer local pickup/in-store pickup?" />
            <Select name="local_pickup" options={[
              { value: '', label: 'Select an option' },
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' }
            ]} />

            <QuestionBadge num="Q169" />
            <Label text="Do you collect sales tax?" />
            <Select name="collect_tax" options={[
              { value: '', label: 'Select an option' },
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' }
            ]} />

            <QuestionBadge num="Q177" />
            <Label text="Can customers create accounts?" />
            <Select name="customer_accounts" options={[
              { value: '', label: 'Select an option' },
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' }
            ]} />

            <QuestionBadge num="Q192" />
            <Label text="What is your return/refund policy?" />
            <Textarea name="return_policy" placeholder="Number of days, conditions, etc." />

            <QuestionBadge num="Q200" />
            <Label text="Are you selling subscription products?" />
            <Select name="subscriptions" options={[
              { value: '', label: 'Select an option' },
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' },
              { value: 'considering', label: 'Considering but not sure' }
            ]} />
          </FormSection>

          <FormSection title="10. Technical & Integrations">
            <QuestionBadge num="Q345" />
            <Label text="List ALL software/tools you currently use that need to connect with your store" />
            <Textarea name="existing_tools" placeholder="CRM, email marketing, accounting, analytics, etc." />

            <QuestionBadge num="Q347" />
            <Label text="Do you use a CRM?" />
            <Input type="text" name="crm" placeholder="Salesforce, HubSpot, Zoho, Pipedrive, etc." />

            <QuestionBadge num="Q348" />
            <Label text="Do you use email marketing software?" />
            <Input type="text" name="email_marketing" placeholder="Mailchimp, Klaviyo, ActiveCampaign, etc." />

            <QuestionBadge num="Q349" />
            <Label text="Do you use accounting software?" />
            <Input type="text" name="accounting" placeholder="QuickBooks, Xero, FreshBooks" />

            <QuestionBadge num="Q362" />
            <Label text="Are you migrating from an existing website/platform?" />
            <Select name="migrating" options={[
              { value: '', label: 'Select an option' },
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No - brand new' }
            ]} />

            <QuestionBadge num="Q363" />
            <Label text="If yes, what platform are you currently on?" />
            <Select name="current_platform" options={[
              { value: '', label: 'Select an option' },
              { value: 'wordpress', label: 'WordPress/WooCommerce' },
              { value: 'shopify', label: 'Shopify' },
              { value: 'wix', label: 'Wix' },
              { value: 'squarespace', label: 'Squarespace' },
              { value: 'magento', label: 'Magento' },
              { value: 'custom', label: 'Custom build' },
              { value: 'other', label: 'Other' }
            ]} />
          </FormSection>

          <FormSection title="11. Your Contact Information">
            <div className="two-col">
              <div>
                <QuestionBadge num="Required" />
                <Label text="Your Name *" />
                <Input type="text" name="client_name" required />
              </div>
              <div>
                <QuestionBadge num="Required" />
                <Label text="Company Name *" />
                <Input type="text" name="company_name" required />
              </div>
            </div>

            <div className="two-col">
              <div>
                <QuestionBadge num="Required" />
                <Label text="Email Address *" />
                <Input type="email" name="client_email" required />
              </div>
              <div>
                <QuestionBadge num="Optional" />
                <Label text="Phone Number" />
                <Input type="tel" name="client_phone" />
              </div>
            </div>

            <QuestionBadge num="Optional" />
            <Label text="How did you hear about us?" />
            <Input type="text" name="referral_source" placeholder="Friend, Google, social media, etc." />

            <input type="hidden" name="_replyto" id="replytoField" />
            <input type="hidden" name="_autoresponse" value="Thank you for completing our E-Commerce Discovery Questionnaire. We have received your responses and will review them shortly. Our team will be in touch with you within 24-48 hours to discuss your project. Best regards, Kypex Tech Team" />

            <button type="submit" className="btn-submit">Submit Questionnaire</button>
          </FormSection>
        </form>
      </div>
    </div>
  );
};

const SuccessScreen = () => {
  const [typedText, setTypedText] = useState('');
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const textToType = 'thank you, form has been submitted successfully :)';
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex < textToType.length) {
        setTypedText(prev => prev + textToType.charAt(charIndex));
        charIndex++;
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
        <div className="line"><span className="prompt">$ </span><span className="cmd">init --brand</span></div>
        <div className="line"><span className="out">▶ KYPEX-TECH SOLUTIONS</span></div>
        <div className="line">
          <span className="prompt">$ </span>
          <span className="typed-text">{typedText}</span>
        </div>
        {showButton && (
          <div className="btn-container">
            <a href="https://kypextech.co.za/" className="go-site-btn">Go to Site</a>
          </div>
        )}
      </div>
    </div>
  );
};

// Reusable Components
const FormSection = ({ title, children }) => (
  <div className="form-section">
    <h2 className="section-title">{title}</h2>
    {children}
  </div>
);

const QuestionBadge = ({ num }) => (
  <div className="question-badge">{num}</div>
);

const Label = ({ text }) => (
  <label>{text}</label>
);

const Input = ({ type, name, placeholder, required, min }) => (
  <input type={type} name={name} placeholder={placeholder} required={required} min={min} />
);

const Textarea = ({ name, placeholder }) => (
  <textarea name={name} placeholder={placeholder}></textarea>
);

const Select = ({ name, options }) => (
  <select name={name}>
    {options.map((opt, idx) => (
      <option key={idx} value={opt.value}>{opt.label}</option>
    ))}
  </select>
);

const CheckboxGroup = ({ name, options }) => (
  <div className="checkbox-group">
    {options.map((opt, idx) => (
      <label key={idx} className="checkbox-item">
        <input type="checkbox" name={name} value={opt.value} />
        <span>{opt.label}</span>
      </label>
    ))}
  </div>
);

export default App;