export const BRAND_NAME = "ADROVIX";
export const MENTOR_NAME = "Varun Biswas";
export const MENTOR_ROLE = "Lead Mentor & Founder, ADROVIX";
export const MENTOR_EMAIL = "varundigital143@gmail.com";
export const WHATSAPP_PHONE = "+91 82879 58162";
export const WHATSAPP_RAW_PHONE = "918287958162";
export const COURSE_PRICE = "₹2,999";
export const COURSE_TITLE = "ADROVIX Meta Ads & Performance Marketing Program";

export const WHATSAPP_PREFILLED_TEXT =
  "Hi Varun, I'm interested in enrolling in the ADROVIX Meta Ads & Performance Marketing Program for ₹2,999. Please share the enrollment details.";

export const WHATSAPP_ENROLL_URL = `https://wa.me/${WHATSAPP_RAW_PHONE}?text=${encodeURIComponent(
  WHATSAPP_PREFILLED_TEXT
)}`;

export const TRUST_POINTS = [
  { label: "12 Structured Modules", detail: "Step-by-step sequential progression" },
  { label: "Practical Learning", detail: "Real campaign setups and frameworks" },
  { label: "Live Doubt Support", detail: "Direct guidance for every query" },
  { label: "Mentor-Led Program", detail: "Taught by Varun Biswas" },
];

export const CORE_LEARNING_AREAS = [
  {
    number: "01",
    title: "Meta Ads Architecture",
    description: "Understand auction mechanics, delivery algorithms, and essential account hierarchy.",
  },
  {
    number: "02",
    title: "Targeting & Audience Modeling",
    description: "Build resilient broad, custom, and lookalike audiences tailored to buyer stages.",
  },
  {
    number: "03",
    title: "Creative Strategy & Copy",
    description: "Develop high-performing ad hooks, visual angles, and conversion-focused copy formats.",
  },
  {
    number: "04",
    title: "Lead Generation & Sales Campaigns",
    description: "Deploy instant form workflows and purchase-oriented conversion campaigns end-to-end.",
  },
  {
    number: "05",
    title: "Performance Diagnostics",
    description: "Interpret key metrics (CTR, CPC, CPM, CPA) to diagnose and fix campaign bottlenecks.",
  },
  {
    number: "06",
    title: "Systematic Optimization & Scaling",
    description: "Execute controlled vertical and horizontal scaling while preserving account stability.",
  },
];

export interface ModuleItem {
  number: string;
  title: string;
  oneLiner: string;
  topics: string[];
}

export const MODULES_CURRICULUM: ModuleItem[] = [
  {
    number: "Module 01",
    title: "Meta Ads Ecosystem & Advertising Fundamentals",
    oneLiner: "How the Meta ad auction works, algorithmic bidding logic, and performance principles.",
    topics: [
      "The Meta ad delivery system and auction algorithm",
      "User value score, estimated action rate, and bid calculation",
      "Compliance policies and account health standards",
      "Key performance marketing vocabulary demystified",
    ],
  },
  {
    number: "Module 02",
    title: "Business Manager Setup & Account Architecture",
    oneLiner: "Establishing clean business assets, ad accounts, payment setups, and partner roles.",
    topics: [
      "Creating and configuring Meta Business Portfolio correctly",
      "Page, ad account, and asset permission management",
      "Two-factor security and avoiding ad account restrictions",
      "Structuring multi-brand or client ad accounts cleanly",
    ],
  },
  {
    number: "Module 03",
    title: "Pixel, Conversions API & Event Tracking",
    oneLiner: "Setting up solid event tracking to feed Meta's machine learning engine accurate data.",
    topics: [
      "Meta Pixel installation and event setup tool",
      "Conversions API (CAPI) basics and browser-loss recovery",
      "Configuring Standard Events: Lead, CompleteRegistration, Purchase",
      "Domain verification and Aggregated Event Measurement",
    ],
  },
  {
    number: "Module 04",
    title: "Campaign Objectives & Funnel Alignment",
    oneLiner: "Selecting the precise campaign objective that matches real commercial business goals.",
    topics: [
      "Awareness, Traffic, Engagement, Leads, App Promotion, and Sales",
      "Why optimizing for the wrong objective burns marketing budget",
      "Aligning marketing funnels (Top of Funnel to Bottom of Funnel)",
      "Advantage+ Campaign Budget (CBO) vs Ad Set Budget (ABO)",
    ],
  },
  {
    number: "Module 05",
    title: "Audience Architecture & Modern Targeting",
    oneLiner: "Navigating Broad targeting, interest stacking, custom audiences, and lookalikes.",
    topics: [
      "Broad targeting vs detailed demographic and interest targeting",
      "Custom Audiences from website traffic, customer lists, and engagement",
      "Lookalike Audiences: percentage tiers and source selection",
      "Eliminating audience overlap and internal auction competition",
    ],
  },
  {
    number: "Module 06",
    title: "Creative Strategy, Angles & Hook Frameworks",
    oneLiner: "Designing ad creatives that stop the feed and persuade prospective customers.",
    topics: [
      "The role of creatives as the primary targeting lever",
      "Hook, Hold, Offer (HHO) framework for static and video ads",
      "Direct-response copywriting for primary text, headlines, and CTAs",
      "Static images, carousels, reels, and video ad formatting",
    ],
  },
  {
    number: "Module 07",
    title: "Lead Generation Campaigns: End-to-End Setup",
    oneLiner: "Step-by-step creation of high-converting lead campaigns with Instant Forms & Web Funnels.",
    topics: [
      "Configuring native Meta Instant Forms for high qualification",
      "Higher intent vs More Volume form structures",
      "Automating lead delivery to CRM, email, and Google Sheets",
      "Landing page lead funnels vs on-platform instant forms",
    ],
  },
  {
    number: "Module 08",
    title: "Sales & Conversion Campaigns",
    oneLiner: "Building and testing purchase-focused conversion campaigns for stores and products.",
    topics: [
      "Setting up catalog ads and dynamic product ads (DPA)",
      "Purchase optimization benchmarks and landing page alignment",
      "Retargeting warm prospects without ad fatigue",
      "Analyzing ROAS and cost per acquisition (CPA)",
    ],
  },
  {
    number: "Module 09",
    title: "Budgeting, Bidding & Placement Strategy",
    oneLiner: "Setting daily budgets, choosing bidding strategies, and controlling ad placements.",
    topics: [
      "Lowest cost (Highest Volume) vs Cost Cap vs Bid Cap strategies",
      "Advantage+ Placements vs manual placement selection",
      "Daily spend thresholds needed to exit the learning phase",
      "Managing cash flow and media spend pacing",
    ],
  },
  {
    number: "Module 10",
    title: "Performance Diagnostics & Metric Analysis",
    oneLiner: "Reading Ads Manager columns to pinpoint where conversion drops occur.",
    topics: [
      "Customizing Ads Manager reporting columns for deep clarity",
      "The Diagnostic Trio: Hook Rate, Hold Rate, and Outbound CTR",
      "Interpreting CPM fluctuations, Cost Per Click, and CPA",
      "Diagnosing creative fatigue vs audience saturation",
    ],
  },
  {
    number: "Module 11",
    title: "Systematic Optimization & Troubleshooting",
    oneLiner: "When to pause ads, when to adjust budgets, and how to revive lagging campaigns.",
    topics: [
      "Rules for pausing underperforming ad creatives and ad sets",
      "Navigating Learning Phase and Learning Limited states",
      "Resolving common ad disapprovals and policy flags",
      "Conducting weekly and monthly campaign maintenance audits",
    ],
  },
  {
    number: "Module 12",
    title: "Scaling Frameworks & Decision Making",
    oneLiner: "How to safely scale winning campaigns without crashing account performance.",
    topics: [
      "Vertical scaling: 15-20% budget increment protocols",
      "Horizontal scaling: new creative angles, broad expansion, and test beds",
      "Creative diversification to prevent ad fatigue at higher spends",
      "Long-term account longevity and sustainable media buying habits",
    ],
  },
];

export const PRACTICAL_COMPETENCIES = [
  "Architect campaigns with clean structure and correct objectives",
  "Build resilient targeting systems using broad and custom audiences",
  "Develop high-converting creative angles and direct-response copy",
  "Diagnose ad fatigue and pinpoint exact campaign bottlenecks",
  "Execute data-driven budget adjustments and sustainable scaling",
];

export const TARGET_AUDIENCE = [
  {
    group: "Beginners & Students",
    detail: "Starting from scratch who want a solid, step-by-step foundation without confusion.",
  },
  {
    group: "Freelancers & Marketers",
    detail: "Looking to offer reliable, systematic Meta Ads services with professional rigor.",
  },
  {
    group: "Business Owners",
    detail: "Who want to run their own ads profitably or supervise agencies with confidence.",
  },
];

export const WHY_ADROVIX = [
  {
    number: "01",
    title: "Structured Learning",
    description:
      "A linear path from foundation to live campaign launch, cutting through scattered tips and fragmented tutorials.",
  },
  {
    number: "02",
    title: "Practical Campaign Thinking",
    description:
      "Understand why things work under the hood—algorithmic auction logic, creative testing, and metric diagnostics.",
  },
  {
    number: "03",
    title: "Mentor Guidance",
    description:
      "Direct access to Varun Biswas for live doubt resolution, practical feedback, and campaign troubleshooting.",
  },
  {
    number: "04",
    title: "Performance-Focused Approach",
    description:
      "Zero fluff. Every lesson trains you to make data-backed optimization and media buying decisions.",
  },
];

export const COURSE_INCLUSIONS = [
  "Complete 12-module practical curriculum",
  "Meta Ads fundamentals to advanced campaign execution",
  "Practical campaign frameworks and diagnostics",
  "Live doubt solving and direct mentor support",
  "Official ADROVIX Certificate of Completion",
];


export const FAQ_ITEMS = [
  {
    question: "What is ADROVIX?",
    answer:
      "ADROVIX is a practical performance marketing education program founded by Varun Biswas. It is specifically designed to teach learners how Meta Ads function under the hood—from core fundamentals to structured, hands-on campaign execution and optimization.",
  },
  {
    question: "Who is this course for?",
    answer:
      "This program is designed for beginners, students, freelancers, aspiring digital marketers, and business owners who want a structured, practical understanding of Meta Ads. It is NOT for anyone looking for overnight income, automated wealth, or guaranteed results.",
  },
  {
    question: "Do I need prior Meta Ads experience?",
    answer:
      "No prior advertising experience is required. The curriculum begins with fundamental concepts—such as the Meta ad ecosystem, auction dynamics, and Business Manager setup—before progressing sequentially into campaign creation, testing, and optimization.",
  },
  {
    question: "What will I learn?",
    answer:
      "You will learn the complete campaign lifecycle: Business Manager setup, Pixel and Conversions API tracking, audience research, creative strategy, lead generation workflows, sales campaigns, budget pacing, metric diagnostics, and systematic scaling decisions.",
  },
  {
    question: "How many modules are included?",
    answer:
      "The program consists of 12 detailed modules covering everything from basic ecosystem setup to advanced diagnostic troubleshooting and scaling frameworks.",
  },
  {
    question: "How does enrollment work?",
    answer:
      "Enrollment is handled directly and transparently through WhatsApp. When you click 'Enroll Now', a pre-filled WhatsApp message opens with Varun Biswas (+91 82879 58162). Varun will share enrollment details, answer any questions, provide payment instructions, and onboard you into the program.",
  },
  {
    question: "Is payment made through the website?",
    answer:
      "No. There is no automated online payment gateway on this website. When you click Enroll Now, you connect directly with mentor Varun Biswas on WhatsApp (+91 82879 58162) to receive verified payment details (such as UPI / Bank Transfer) and personal onboarding confirmation.",
  },
];
