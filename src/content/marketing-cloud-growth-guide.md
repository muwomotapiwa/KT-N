# The Complete Guide to Salesforce Marketing Cloud Next (Growth)
### A Practical Series for Marketers, Admins & Developers

---

> This guide is based on a six-part walkthrough series covering everything from content creation and email campaigns to administration, segmentation, and content migration in Salesforce Marketing Cloud Next (also referred to as Marketing Cloud Growth).

---

## Table of Contents

1. [Setting Up Your Content Workspace](#1-setting-up-your-content-workspace)
2. [Creating Emails: Promotional & Transactional](#2-creating-emails-promotional--transactional)
3. [Campaigns, Segments & Flows](#3-campaigns-segments--flows)
4. [Forms & Landing Pages](#4-forms--landing-pages)
5. [Setup & Administration](#5-setup--administration)
6. [Migrating Content from Account Engagement to Marketing Cloud Next](#6-migrating-content-from-account-engagement-to-marketing-cloud-next)

---

## 1. Setting Up Your Content Workspace

Before you can create any marketing content in Salesforce Marketing Cloud Next, you need to establish your workspace — the foundational environment where all your emails, SMS, images, forms, and landing pages will live.

### Navigating to the Content Tab

Start by heading to the **Content** tab in Marketing Cloud Next. Here you'll find a list of existing workspaces, each with a name and description outlining its purpose. Think of a workspace as your dedicated content environment — a place where your team creates assets, collaborates, and organises everything related to your marketing output.

### Choosing the Right Workspace Type

When creating a new workspace (click **Add Workspace** in the top-right corner), you'll be presented with two options:

- **Marketing** – Used for email and SMS marketing campaigns. This is the option most marketing teams will work with.
- **General** – Designed for use with Experience Cloud, where you manage digital experiences, web pages, news articles, images, and custom content types.

Since the focus here is marketing communication, select **Marketing** and click **Next**.

### Enhanced CMS vs. Standard CMS

You'll then be asked to choose between an **Enhanced CMS** or a standard CMS workspace:

- **Enhanced CMS** – Use this if you plan to publish content to LWR (Lightning Web Runtime) sites. It unlocks the ability to push your content to public-facing Salesforce-powered websites.
- **Standard CMS** – A simpler option for content that won't be published to Aura or LWR sites.

For general marketing use, the Enhanced CMS is the recommended choice. After selecting it, give your workspace a name (for example, *Workspace Genetics 1*), choose your language (English), and click **Finish**.

### Organising Content with Folders

Once your workspace is ready, you can immediately begin building content. Click the **Add** button to create either a folder or a new content asset. Creating folders within your workspace is a great way to keep things organised — for example, a folder named *Email Campaigns Q3* or *Forms and Landing Pages*.

### Understanding Content Types

Inside any folder, clicking **Create Content** reveals the full range of assets you can build:

| Content Type | Purpose |
|---|---|
| **Brand** | Define your brand's visual identity — colours, fonts, button styles, and backgrounds. |
| **Email** | Build promotional and transactional email content. |
| **Form** | Capture customer details and submit records to Salesforce. |
| **Image** | Upload and manage media files used across your content. |
| **Landing Page** | Create public-facing pages to capture leads or direct customers. |
| **SMS** | Build SMS text message content for mobile campaigns. |

### Building Your Brand

The Brand asset is where you establish the visual foundation for your emails and pages. When creating a new brand (for example, *Green Brand*), you can configure:

- **Background colour** — Set the canvas colour for your emails.
- **Text colour and font** — Choose font family, size, and styles for headings (H1, H2, etc.) and body text.
- **Button styling** — Customise button text, colour, margin, padding, and borders.
- **Live preview** — Every change you make is reflected in real time in the preview panel on the right.

Once you're satisfied, click **Save** and then **Publish** your brand. Publishing is essential — your brand won't be available to apply to email templates until it has been published.

---

## 2. Creating Emails: Promotional & Transactional

With your workspace and brand in place, it's time to build the emails your audience will actually receive. Marketing Cloud Next supports two distinct email types, each with its own configuration requirements.

### Accessing the Email Builder

Navigate to your workspace, open your chosen folder, click **Add Content**, select **Email**, and hit **Create**. The email canvas will load, and you're ready to begin.

On the **left panel**, you'll find all available components:

- Button, Divider, Heading, HTML block, List, Paragraph, Layout, Media, Subject Line, and Preheader.

On the **right panel**, you'll manage the email's properties — name, description, and email type.

### Promotional vs. Transactional Emails

This is one of the most important distinctions in email marketing:

**Promotional Emails** are used for marketing communications — newsletters, product announcements, special offers, and awareness campaigns. These emails require:
- An **unsubscribe link** in the body
- A link to your **email preference centre**
- Your organisation's **physical address**

These requirements exist to comply with anti-spam regulations (such as CAN-SPAM). Without them, you won't be able to publish or send the email.

> In Marketing Cloud Account Engagement (Pardot), promotional emails are referred to as **commercial emails**. The terminology differs, but the concept is identical.

**Transactional Emails** are triggered, functional messages — password resets, order confirmations, and account notifications. These do **not** require opt-in consent, unsubscribe links, or preference centre links. They are sent directly to the recipient by nature of their interaction with your platform.

### Configuring a Promotional Email

Here's a step-by-step breakdown of building a complete promotional email:

1. **Subject Line & Preheader** — Click the pencil icon at the bottom-right to edit these. A compelling subject line and preheader are vital for open rates.

2. **Adding Content Components** — Drag components from the left panel onto the canvas:
   - **Headings** – Style and centre your heading text, adjust font size and colour.
   - **Images** – Click *Add Image*, choose from your workspace folder, and optionally attach a hyperlink so clicking the image directs users to a URL.
   - **Paragraphs** – Add body copy. Customise font family, size, line height, alignment, and colour.
   - **Buttons** – Add a CTA button with custom text and a target URL.

3. **Adding Merge Fields for Personalisation** — To include dynamic content like a recipient's first name, use **merge fields**. Click *Add Merge Field*, navigate to *Organisation*, and select *Physical Address*. To add personalisation strings (e.g., "Hi [First Name]"), click the personalisation icon, select *Data Graph Attribute*, and map the relevant field from your Data Cloud data graph.

4. **Unsubscribe & Preference Links** — These are mandatory for promotional emails. Select the word *Unsubscribe*, click *Insert Link*, and use *Add Merge Field > Link > Unsubscribe*. Repeat the same process for the preferences link using *Preference Management*.

5. **Applying a Brand** — If you've created a brand asset, you can apply it to your email to automatically inherit the brand's colours, fonts, and styling.

6. **Previewing Your Email** — Use the preview mode to see how your email renders for a specific segment or sample recipient. If your images aren't displaying in preview, ensure they have been published as content assets first.

7. **Sending a Test Email** — Before sending to your full audience, use the *Send Test* option to dispatch to selected email addresses and verify formatting, personalisation, and link functionality.

### Configuring a Transactional Email

Building a transactional email follows the same steps, but with a few key differences:

- Select **Transactional** as the email type during setup.
- You do **not** need to include unsubscribe links, preference centre links, or a physical address.
- Merge fields for personalisation still apply — for example, greeting a recipient by their first name.
- No **communication subscription** selection is required at the sending stage.

### Applying Your Brand

Regardless of email type, you can apply your published brand by clicking the brand selector at the top of the email editor. The email content will instantly inherit the brand's visual styling — saving you time and ensuring consistency.

### Sending an Email via Campaigns

Once your email is published, it can be sent through a campaign flow. Here's a quick overview of the sending setup:

1. **Create a Campaign** — Go to the Campaigns tab and click *New*. Name your campaign (e.g., *Genetics Test Campaign*), select *Email* as the type, set a status, and add start/end dates.

2. **Select a Send Option** — Inside the campaign, choose from: Single Email, Message Series, Sign-Up Form, SMS, or Blank Email.

3. **Configure the Flow** — For a Single Email send:
   - Choose a **segment** or **campaign members** as your audience.
   - Select your **published email template**.
   - Set the **From Name** and **From Address** using an authenticated domain.
   - Choose the **communication subscription type** (marketing, newsletter, offers) — required for promotional emails.
   - Schedule the send or dispatch immediately.

4. **Managing Consent & Subscriptions** — In the **Consent** tab, you can view opt-in statuses and manage your subscription types (e.g., newsletter, marketing, offers). To add contacts to your mailing list, import them with the consent field set to *Opted In*.

---

## 3. Campaigns, Segments & Flows

Marketing Cloud Next takes a structured approach to audience targeting and campaign execution. Understanding the relationship between **segments**, **campaigns**, and **flows** is key to running effective multi-step marketing programmes.

### The Sequence: Segments → Campaigns → Flows

Before launching any campaign, follow this order:

1. Create your **Segment** (define your target audience)
2. Create your **Campaign** (the overarching marketing initiative)
3. Build your **Flow** (the automated execution logic)

### Creating a Segment

Navigate to the **Segments** tab and click **New**. You'll have two creation modes:

- **Visual Builder** — Build your segment manually using filters and attributes. Best for precise audience control.
- **Einstein Segment Creation** — Use AI to generate segments based on your data. Useful for exploratory segmentation.

For most structured use cases, the Visual Builder is recommended. Then choose your segment type:

- **Standard Segment** – Pulls from up to two years of data in your org. Best for established datasets.
- **Real-Time Segment** – Delivers near-instant results. Best for time-sensitive, event-driven communications.

> **Important:** Always set the segmentation object to **Unified Individual**. Without this, your segment will not appear as an option when configuring flows or campaigns.

**Setting Segment Properties:**

- **Data Space** – Select the Default Data Space.
- **Name & Description** – Give your segment a descriptive name (e.g., *Demo Campaign Segment*) and a brief description of its purpose.
- **Publish Type:**
  - *Standard Publish* – Uses data from the past ~2 years. Best for most use cases.
  - *Rapid Publish* – Uses data from the past 7 days. Ideal for freshly imported records.
- **Refresh Schedule** – You can set segments to auto-refresh every 12 or 24 hours, or choose *Don't Refresh* for a one-time run.

Once created, you can refine the segment population using **attribute filters**. For example, filter by *First Name contains "Test"* to isolate a set of test records for campaign trials.

### Creating a Campaign

Go to the **Campaigns** tab and click **New**. Select **Top Level Campaign** if this is your first campaign. Fill in the campaign name, type (email, advertisement, telemarketing, etc.), status, and dates, then save.

Inside the campaign, you can select from the following send options:

- **Single Email** – A one-off send to a defined audience.
- **Message Series** – A multi-step email sequence (the recommended option for most campaign flows).
- **Sign-Up Form** – Capture new leads through a form.
- **Single SMS** – A one-off text message send.
- **Blank Email / Blank Event** – For custom build-outs.

### Building a Flow

For a **Message Series** campaign, you'll be directed to the Flow Builder. You can also access this by clicking **Open Flow** from within the campaign.

**Configuring the Entry (Schedule) Step:**

- Choose whether the campaign runs **once** or on a **recurring** basis (daily or weekly).
- Set the **start date and time**, or choose *Start Immediately After Activation*.
- Select the **segment** you created earlier. If it doesn't appear, confirm the segment uses *Unified Individual*.
- Set when to **republish the segment** — recommended: *Immediately Before Running This Flow*.

**Selecting Your Email:**

- Click **Edit Elements** on the email step.
- Browse your workspace and select a **published** email asset.
- Assign a **sender profile** with a verified/authenticated domain.
- Enable **click tracking** and **open tracking** as needed.
- Select the appropriate **communication subscription type** for promotional emails.

**Adding Flow Elements:**

Once the email step is configured, enrich your flow with additional logic by clicking the **+** icon:

| Element | Purpose |
|---|---|
| **Wait for Amount of Time** | Introduce a delay (minutes, hours, days, or months) between steps. |
| **Decision Split** | Branch the flow based on a condition (e.g., *Is Lead Converted = True*). |
| **Loop** | Repeat a set of actions. |
| **Transform** | Modify data within the flow. |
| **Wait Until Date / Event** | Pause until a specific date or a triggered event occurs. |

**Using Decision Splits:**

Decision splits allow you to send different emails to different audiences based on CRM data. For example:

- **Converted leads** → Send a *Welcome* email
- **Non-converted leads** → Send a *Nurture* email

To configure: click **+**, select **Decision**, name your split (e.g., *Converted Leads Decision Split*), and set the condition using Data Graph objects (e.g., *Lead > Converted = True*). Each branch then has its own email send element and configuration.

> Transactional emails assigned to the default outcome path do not require a communication subscription type selection.

**Activating the Flow:**

Before activating, resolve any errors displayed in the flow builder — the most common being unpublished email content or an unconfigured sender address. Once all errors are cleared, click **Activate**. Your campaign will begin running according to the schedule you defined.

---

## 4. Forms & Landing Pages

Capturing customer information is a critical part of any marketing strategy. Marketing Cloud Next provides a fully integrated form and landing page builder that submits data directly into Salesforce CRM.

### Building a Form

Navigate to the **Content** tab, open your workspace, go to your chosen folder, click **Add Content**, select **Form**, and click **Create**.

Give your form a name (e.g., *Genetrics Demo Form*) and an API name. Your blank canvas is now ready.

**Adding Form Components:**

Drag components from the left panel onto the canvas:

- **Email, Phone Number, Plain Text, Text Area** — Standard input fields.
- **Heading, Paragraph, Divider, Button** — For layout and visual structure.

**Connecting a Data Source:**

This is where the power of the integration shines. Click **Add to Data Source** and select **Salesforce Record** as your data source type. Configure the following:

- **Data Source Name** – e.g., *Genetrics SF Source*
- **Object** – Select the Salesforce object where you want to create records (e.g., *Lead*)
- **Record Type** – e.g., *Lead*

Once saved, all available Salesforce fields for that object will appear on the right panel. Drag the fields you want to collect — such as *First Name*, *Last Name*, *Email*, *Lead Status*, and *Email Opt-Out* — onto your form canvas.

**Styling the Form:**

Under **Colour Scheme**, choose *Custom* to override the default appearance. You can set background colours, button styles, and text colours. Use the hex value selector for precise brand colour matching.

**Publishing the Form:**

Forms require an associated flow automation to function. Click **Create Flow** directly from the form editor. The flow builder opens with a pre-configured *Automation Event Triggered Flow* that creates a lead record upon form submission. Click **Activate**, then return to the form and click **Publish > Next > Publish Now**.

### Building a Landing Page

With your form published, return to your folder and create a new **Landing Page** asset.

**Adding Components:**

Unlike forms, landing pages offer **Sections** — flexible layout containers that can be split into multiple columns. This lets you create structured layouts, such as:

- A hero heading at the top
- A two-column section with a paragraph on the left and your form on the right
- An image-and-text section below
- A footer with additional calls to action

**Embedding Your Form:**

Inside a section, click **Add Form** and select your published form. The form will render within the landing page layout, ready to capture submissions.

**Styling Options:**

Each component supports:

- Font family, size, line height, and colour
- Margin, padding, and border settings
- Custom CSS for advanced styling
- Column layouts (balanced, weighted left/right, or three-column)

**Publishing the Landing Page:**

Before publishing, add an **SEO Page Title** (e.g., *Genetics Landing Page 1*). Save your work, then click **Publish > Next > Publish Now**. If prompted about an inactive flow, open the flow, activate it, then return and re-publish.

**Accessing Your Public URL:**

Once published, click on your landing page asset and navigate to the **URL** tab. Here you'll find the public link that you can share with your audience or embed in campaigns. Copy and paste it into a browser to verify the live page.

**Testing Form Submissions:**

Fill in the form on your published landing page and click Submit. You should see a *"Thank You for Your Submission"* confirmation. Navigate to **Leads** in Salesforce to confirm the new record has been created with the details you entered.

---

## 5. Setup & Administration

A well-configured Marketing Cloud Next environment is the backbone of reliable, compliant marketing. This section walks through the key setup areas every admin should know.

### Accessing the Marketing Setup

Click the **gear icon** in the top-right corner of your Salesforce org to open Setup. Search for *Marketing Cloud* or scroll down to find it in the Setup sidebar. Expand it to reveal two sections: **Assisted Setup** and **Marketing Features**.

### Assisted Setup

The Assisted Setup home is your quick-start dashboard. It provides direct shortcut buttons to every major configuration area — email setup, SMS setup, user access, analytics, brand settings, and more. If you're unsure where a particular setting lives, start here.

### Basic Settings (Required Prerequisites)

Before Marketing Cloud Next is fully functional, the following baseline configurations must be in place:

- **Enable Data Cloud** — Marketing Cloud Next runs on top of Data Cloud infrastructure.
- **Create a Salesforce CRM Connector** — Links your CRM data to the marketing engine.
- **Add a Default Email Channel** — Establishes the primary channel for outbound email.
- **Add Data Protection Details** — Ensures contact records meet compliance requirements.
- **Install Required Marketing Data Kits** — Packages needed for core functionality.

### Email Channel Setup

Under **Channels > Email**, configure the following:

**Authenticated Domains:**
To send emails from Marketing Cloud Next, you must use an authenticated domain. Add your domain (e.g., *genetrics.te*), update your DNS records in your domain registrar (e.g., Cloudflare), and submit for verification. Once active, you can create From Addresses (e.g., *team@genetrics.te*) tied to this domain.

**Physical Address:**
Anti-spam laws require a physical sender address to appear in the footer of all promotional emails. Go to **Company Information** in Setup and ensure your organisation's address is correctly entered. This information is dynamically pulled into email footers via a merge field.

**Consent Validation:**

The **Manage Consent Validation** setting determines whether consent is checked before sending:

- **Promotional Emails** – Consent validation is typically enabled. Before sending, you must select a communication subscription type (e.g., marketing, newsletter, offers).
- **Transactional Emails** – Consent validation is typically disabled. These emails (order confirmations, password resets) do not require opt-in and are sent directly.

**Subscription Management:**

Navigate to **Preference Pages & Subscriptions** to define the subscription categories your audience can manage. You can create subscription types such as:

- Newsletter
- Marketing Updates
- Offers & Promotions

Each subscription can be tied to email, SMS, or both. Recipients who click the preference centre link in your emails can opt in or out of each category independently.

**Importing Consent Records:**

To add new leads or contacts who should receive your emails, import them via **Consent Imports**. Upload a CSV file with the consent field set to *Opted In* for the appropriate communication subscription type. Until a contact is opted in, they will not receive your promotional emails.

**Optional Einstein Features:**

- **Send Time Optimisation** – AI determines the optimal send time per recipient.
- **Engagement Frequency** – Prevents over-sending to fatigued recipients.
- **Engagement Scoring** – Scores leads based on interaction behaviour.

These are enabled via the **Einstein Settings** page and are optional enhancements.

### SMS Channel Setup

Under **Channels > SMS**, configure the following:

**Register Your Brand & Campaign (10DLC):**
If you plan to send SMS using 10-digit long codes, mobile carriers in the US and Canada require brand and campaign registration. Navigate to **Regulatory Compliance** and complete the brand and campaign registration forms.

**Request an SMS Code:**
After brand registration, request a short or long code via **Go to SMS Codes**. Select your country, code type, and quantity, then save. Your SMS sender codes will be provisioned.

**SMS Subscriptions:**
Create SMS subscription types by going to **Subscriptions** and creating a new entry. Select *SMS* as the channel and assign the sender codes you've provisioned.

**URL Shortening:**
If your SMS messages include links, set up a **URL Shortening Domain** so long URLs are automatically shortened for cleaner, character-efficient messages.

### Sites & Forms

**Web Tracking:**
Enables you to monitor activity on your Marketing Cloud landing pages — button clicks, page visits, and hover events. Requires the Data Cloud integration to be installed first.

**CORS (Cross-Origin Resource Sharing):**
If you want external websites to use scripts or embed forms from Marketing Cloud Next, add those domains to your **CORS allowed list** in Setup. This ensures data can flow securely between your Salesforce instance and external sites.

**Bot Protection:**
To protect your landing page forms from automated bot submissions, add a **Data Cloud reCAPTCHA integration** through the Experience Cloud Digital Experiences settings.

### Reporting & Analytics

**Marketing Performance Dashboard:**

Navigate to **Analytics** within the setup or the Analytics tab. You can create **report collections** and add pre-built reports, including:

- Total email activity
- Sent emails overview
- Emails sent by status
- Recent email send history

Additional analytics packages are available for SMS performance, landing page tracking, and flow-level reporting. Install these packages directly from the Analytics setup.

**Custom Domains for Landing Pages:**

Under **Brand > Custom URLs**, you can configure a custom domain so your landing pages use your own branded URL (e.g., *pages.genetrics.com*) instead of a default Salesforce subdomain.

### User Management & Workspace Access

**Creating a New User:**

Go to **User Access > Users** and click **New User**. Fill in the required details:

- First Name, Last Name
- Email Address and Username
- License type (e.g., Salesforce)
- Profile (start with Minimum Access; permissions are granted separately)

After saving, the user will receive a verification email to set their password.

**Granting Marketing Cloud Permissions:**

To give a user access to Marketing Cloud Next, assign them the **Marketing Cloud Admin** permission set:

1. Open the user's record.
2. Click **Permission Set Assignments > Manage Assignments > Add Assignment**.
3. Select *Marketing Cloud Admin* and click **Assign**.

After this, the user will see the Marketing Cloud application and can access the CMS.

**Controlling Workspace Access:**

You can restrict which workspaces a user can access within the CMS. To do so:

1. Go to your workspace in the Content tab.
2. Click the workspace settings icon and select **Contributors**.
3. Search for and add the user.
4. Assign one of three roles:

| Role | Capabilities |
|---|---|
| **Content Author** | Create and edit content; cannot publish. |
| **Content Manager** | Create, edit, and publish; cannot manage contributors. |
| **Content Admin** | Full access including adding and managing contributors. |

This granular access control ensures the right people have the right level of authority within your marketing content environment.

---

## 6. Migrating Content from Account Engagement to Marketing Cloud Next

If your organisation is transitioning from Salesforce Account Engagement (formerly Pardot) to Marketing Cloud Next, you don't need to rebuild everything from scratch. The **Copy to CMS** feature allows you to migrate emails, forms, landing pages, and files directly into your Marketing Cloud Next CMS workspace.

### Enabling the Migration Feature

1. Go to **Setup** and search for **Copy to CMS**.
2. You will see a list of Account Engagement business units (orgs) associated with your Salesforce environment.
3. Select the business unit you want to migrate content from and click **Enable**.
4. You will receive a confirmation email once the connection is active.
5. Click **View** to open your CMS workspace and confirm the link is live.

You can verify the connection from both sides — Account Engagement and Marketing Cloud Next — to ensure content sharing is enabled.

### Migrating Emails

1. In Account Engagement, navigate to **Emails > Sent Emails** (or the relevant folder).
2. Select an email (or multiple emails using the multi-select checkboxes).
3. Click the **gear icon** and select **Copy to CMS**.
4. A notification will confirm that the transfer has been initiated. You will receive an email when the copy is complete.

> **Tip:** Only select emails that have actual content inside. Emails with blank or empty templates may copy over without usable content.

### Migrating Landing Pages

1. Navigate to **Landing Pages** in Account Engagement.
2. Select the landing page(s) you want to migrate.
3. Click the gear icon and choose **Copy to CMS**.
4. Confirm the copy action.

### Migrating Forms

1. Go to **Forms** in Account Engagement.
2. Select the forms you want to migrate (you can select multiple).
3. Click **Copy to CMS** and confirm.

### Migrating Files & Images

1. Navigate to **Files** in Account Engagement.
2. Click **View** and then **View CMS Compatible** to filter the file list to only those compatible with the Marketing Cloud CMS.
3. Select the files you want to migrate (e.g., logos, icons, images, PDFs).
4. Click **Copy to CMS > Go** to initiate the transfer.

You'll receive an email confirmation when all files have been copied. The number of files being migrated will be displayed before you confirm.

### Verifying the Migration in Marketing Cloud Next

After initiating transfers, go to **Marketing Cloud Next > Content > Your CMS Workspace** and refresh the page. Your migrated assets — landing pages, forms, emails, and files — should appear in the workspace.

If an asset doesn't appear immediately, wait a moment and refresh again. Larger file batches may take slightly longer.

### Post-Migration Steps

Once your content has arrived in Marketing Cloud Next:

- **Emails** – Open and click **Edit**, review the content, and **Publish** the email to make it usable in campaigns and flows.
- **Landing Pages** – Review and republish as needed.
- **Forms** – Check form field mappings and ensure the associated flow is activated before publishing.
- **Files** – Review imported files. Remove any that are no longer needed by clicking **Delete**.

> **PDF and Document Migration:** You can also migrate PDF files and documents from Account Engagement to Marketing Cloud Next using the same Copy to CMS process.

---

## Final Thoughts

Salesforce Marketing Cloud Next (Growth) is a powerful, modern marketing platform built directly within the Salesforce ecosystem. Whether you're managing content, running segmented email campaigns, capturing leads through forms, or migrating from Account Engagement — the platform provides an integrated, streamlined experience.

Key takeaways from this series:

- **Workspaces** are your creative environments. Set them up intentionally, with the right workspace type and contributor permissions.
- **Brands** ensure visual consistency across all your marketing content — build one before building emails.
- **Promotional and transactional emails** have different compliance requirements. Know the difference and configure accordingly.
- **Segments** must use *Unified Individual* to work inside flows. Don't skip this step.
- **Flows** are the engine of your campaigns. Use decision splits, wait timers, and email elements to build sophisticated journeys.
- **Forms and landing pages** are tightly integrated with Salesforce CRM — submissions go directly into your Salesforce records.
- **Administration** is straightforward with Assisted Setup — always start there when configuring something new.
- **Content migration** from Account Engagement is built-in — use Copy to CMS to bring your existing assets across with minimal effort.

---

*This guide was produced as part of the Marketing Cloud Growth video series. For deeper dives into Data Graphs, integrations, and advanced segmentation, watch out for upcoming content in the series.*
