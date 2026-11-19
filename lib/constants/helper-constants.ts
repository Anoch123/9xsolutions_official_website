import { VisualKey } from "@/components/services-components/ServiceVisuals";
import { FooterRow, NavLink, Project, Service, Testimonial } from "../types/helper.type";
import { EducationVisual, FinanceVisual, HealthcareVisual, LogisticsVisual, MobilityVisual, RetailVisual, SaasVisual, TravelVisual } from "@/components/ui/icons";

export const common_texts = {
  App_Name: "9x Solutions",
  App_title: "9X Solutions | Turning ideas into digital solutions.",
  App_description:
    "9X Solutions is a software development company dedicated to helping businesses grow through innovative technology. We build modern websites, custom software, business management systems, and digital solutions that simplify operations, strengthen brands, and drive business growth.",
  App_slogan: "Helping Businesses to Grow",
  App_tagline: "Your Vision. Our Technology. Unlimited Possibilities.",
  Company_name: "9X Solutions",
  Company_email: "info@9xsolutionsit.com",
  Company_phone: "+94 70 528 3447",
  Company_address: "52B, Station Road Maggona Kaluthara, Sri Lanka",
  Company_website: "https://9xsolutionsit.com",
  Social_links: {
    Facebook: "www.facebook.com/9xsolutions",
    WhatsApp: "+94 70 528 3447",
  },

  SEO: {
    title: "9X Solutions | Software Development & Digital Innovation",
    description:
      "Transform your ideas into reality with 9X Solutions. We specialize in website development, custom software solutions, business management systems, and digital transformation.",
    keywords: [
      "9X Solutions",
      "Software Development Company",
      "Web Development Sri Lanka",
      "Custom Software Development",
      "Website Design",
      "Business Management Systems",
      "POS Systems",
      "Digital Solutions",
      "IT Solutions Sri Lanka",
      "Software Solutions",
      "AI Automation",
      "Web Applications",
    ],
  },

  Footer: {
    Copyright: "© 2026 9X Solutions. All Rights Reserved.",
    Description:
      "Empowering businesses with innovative technology, creative digital solutions, and reliable software development services.",
  },
};

export const footerRows: FooterRow[] = [
  {
    title: "Capabilities",
    links: [
      { label: "AI Solutions", href: "/ai-business-solutions" },
      { label: "Services", href: "/our-services" },
      { label: "Technology", href: "/technologies-we-use" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/our-story" },
      { label: "Our Works", href: "/work-we-have-done" },
      // { label: "Careers", href: "/company/careers" },
    ],
  },
  {
    title: "Resources",
    links: [{ label: "Contact us", href: "/talk-to-us" }],
  },
  // {
  //   title: "Legal",
  //   links: [
  //     { label: "Privacy policy", href: "/legal/privacy-policy" },
  //     { label: "Terms and conditions", href: "/legal/terms-and-conditions" },
  //   ],
  // },
];

export const NAV_LINKS: NavLink[] = [
  {
    label: "AI Solutions",
    href: "ai-business-solutions",
  },

  {
    label: "Services",
    href: "our-services",
  },

  {
    label: "Technologies",
    href: "technologies-we-use",
  },

  {
    label: "Our Work",
    href: "work-we-have-done",
  },

  // {
  //   label: "Products",
  //   href: "our-Products",
  // },

  {
    label: "Our Story",
    href: "our-story",
  },
];

export const SERVICES: Service[] = [
  {
    label: "Custom Software Development",
    detail:
      "Tailored systems built around how your team actually works — from first commit to production, and every iteration after.",
    includes: [
      "Requirements & system design",
      "Full-stack build (frontend + backend)",
      "Database & API architecture",
    ],
  },
  {
    label: "Web Development",
    detail: "Fast, scalable sites and web apps.",
    includes: [
      "Marketing sites & web apps",
      "E-commerce & dashboards",
      "Performance & SEO tuning",
    ],
  },
  {
    label: "Mobile App Development",
    detail: "Native and cross-platform apps for iOS and Android.",
    includes: [
      "iOS & Android, native or cross-platform",
      "App Store & Play Store release",
      "Push notifications & offline support",
    ],
  },
  {
    label: "UI/UX Design",
    detail: "Interfaces people find easy to use.",
    includes: [
      "User research & wireframes",
      "Design systems & prototypes",
      "Usability testing",
    ],
  },
  {
    label: "Cloud Solutions",
    detail: "Infrastructure provisioned as code.",
    includes: [
      "AWS / GCP / Azure setup",
      "Infrastructure as code",
      "Auto-scaling & cost optimization",
    ],
  },
  {
    label: "DevOps",
    detail:
      "CI/CD pipelines and automation that shorten release cycles and keep deployments boring, in the best way.",
    includes: [
      "CI/CD pipelines",
      "Monitoring & alerting",
      "Zero-downtime deployments",
    ],
  },
  {
    label: "AI Solutions",
    detail: "Practical automation built into your product.",
    includes: [
      "AI integration & automation",
      "Custom ML models",
      "AI-powered analytics",
    ],
  },
  {
    label: "Software Maintenance",
    detail: "Ongoing support and updates after launch.",
    includes: [
      "Bug fixes & patches",
      "Performance monitoring",
      "Ongoing feature updates",
    ],
  },
];

export const SERVICES_HOMEPAGE: Service[] = [
  {
    label: "Custom Software Development",
    detail:
      "Tailored systems built around how your team actually works — from first commit to production, and every iteration after.",
    includes: [],
  },
  {
    label: "Web Development",
    detail: "Fast, scalable sites and web apps.",
    includes: [],
  },
  {
    label: "Mobile App Development",
    detail: "Native and cross-platform apps for iOS and Android.",
    includes: [],
  },
  {
    label: "UI/UX Design",
    detail: "Interfaces people find easy to use.",
    includes: [],
  },
  {
    label: "Cloud Solutions",
    detail: "Infrastructure provisioned as code.",
    includes: [],
  },
  {
    label: "DevOps",
    detail:
      "CI/CD pipelines and automation that shorten release cycles and keep deployments boring, in the best way.",
    includes: [],
  },
  {
    label: "AI Solutions",
    detail: "Practical automation built into your product.",
    includes: [],
  },
  {
    label: "Software Maintenance",
    detail: "Ongoing support and updates after launch.",
    includes: [],
  },
];

export const MAIN_PILLARS = [
  {
    n: "01",
    title: "Build",
    description: "Turning ideas into powerful digital experiences.",
    detail:
      "We transform ideas into powerful digital products through thoughtful design, modern engineering, and reliable development practices. From business websites and e-commerce platforms to custom software, web applications, and mobile solutions, we build scalable systems designed to solve real-world problems and support long-term business growth.",
    color: "#4F66FF",
  },
  {
    n: "02",
    title: "Automate",
    description: "Making businesses smarter, faster, and more efficient.",
    detail:
      "We help businesses eliminate repetitive tasks, simplify complex processes, and improve operational efficiency through intelligent automation. By integrating AI-powered capabilities, smart workflows, and system integrations, we create solutions that reduce manual effort, minimize errors, save valuable time, and allow businesses to focus on what matters most.",
    color: "#9333EA",
  },
  {
    n: "03",
    title: "Support",
    description: "Growing together beyond the launch.",
    detail:
      "Our partnership doesn't end when a project goes live. We provide ongoing maintenance, technical support, performance optimization, security improvements, and continuous enhancements to keep your digital solutions reliable and up to date. As your business evolves, we help your technology evolve with it.",
    color: "#0EA5A5",
  },
  {
    n: "04",
    title: "Software",
    description: "Digital products designed around your business.",
    text: "Custom web applications, mobile applications, business management platforms, e-commerce systems, and tailored software solutions built around your unique requirements.",
  },
  {
    n: "05",
    title: "Cloud",
    description: "Secure, scalable infrastructure for what's next.",
    text: "Reliable cloud infrastructure, secure deployment, hosting solutions, database management, and scalable architecture designed to support your business as it grows.",
  },
  {
    n: "06",
    title: "Automation",
    description: "Less manual work. More meaningful progress.",
    text: "Intelligent business process automation, workflow optimization, third-party integrations, and connected systems that reduce repetitive work and improve productivity.",
  },
  {
    n: "07",
    title: "AI",
    description: "Bringing intelligence into everyday business.",
    text: "Practical AI integrations, intelligent data processing, AI-powered business tools, smart assistants, and machine-learning-driven capabilities that bring greater intelligence to digital products.",
  },
];

export const STEPS = [
  {
    title: "Discover",
    detail:
      "We start with your actual problem, not a feature list — talking through what's slow, fragile, or missing today.",
  },
  {
    title: "Design & plan",
    detail:
      "We map out the system and decide up front where software ends and AI begins, so nothing gets forced in later.",
  },
  {
    title: "Build & ship",
    detail:
      "We build in working increments you can see and test, not one long build-up to a single release.",
  },
  {
    title: "Support & grow",
    detail:
      "We stay on after launch — maintaining, monitoring, and extending the system as your needs change.",
  },
];

export const PROBLEMS = [
  {
    problem: "Our product can't keep up with demand.",
    solution:
      "We re-architect the infrastructure with cloud solutions provisioned as code, so growth doesn't mean downtime.",
  },
  {
    problem: "We're stuck maintaining an outdated system.",
    solution:
      "We modernize or rebuild the parts holding you back, without disrupting the parts that already work.",
  },
  {
    problem: "We have data but no way to use it.",
    solution:
      "We build AI-powered analytics that turn what you're already collecting into decisions your team can act on.",
  },
  {
    problem: "Manual work is eating our team's time.",
    solution:
      "We automate the repetitive parts of the workflow, with AI handling the judgment calls in between.",
  },
  {
    problem: "We shipped it, but nobody's maintaining it.",
    solution:
      "We take over ongoing maintenance, monitoring, and updates, so nothing quietly goes stale.",
  },
];

export const PILLARS = [
  { n: "01", title: "Software", text: "Web & mobile products built to last" },
  { n: "02", title: "Cloud", text: "Infrastructure that scales with you" },
  { n: "03", title: "Automation", text: "Workflows that run themselves" },
  { n: "04", title: "AI", text: "Intelligence woven into your stack" },
];

export const BENEFIT: Record<VisualKey, string> = {
  code: "Get a product in front of customers sooner, on a codebase your team can keep extending.",
  design:
    "A consistent, polished experience builds trust and makes it easier for people to say yes.",
  chart:
    "See what's working, put budget behind it, and stop spending on what isn't.",
  cloud: "Pay for what you use and stay fast and available as demand grows.",
  flow: "Remove repetitive manual work so your team can focus on higher-value tasks.",
  ai: "Turn your data and documents into faster answers and smarter workflows.",
  mobile:
    "Meet customers where they already are: on the device in their pocket.",
  ops: "Fewer outages and safer releases, with problems caught before customers notice.",
};

export const OUTCOMES = [
  {
    title: "Launch faster",
    text: "Go from idea to a working product without months of false starts. Clear scope, steady releases.",
  },
  {
    title: "Spend smarter",
    text: "Automate repeat work and right-size your cloud so money goes into growth, not overhead.",
  },
  {
    title: "Scale without rewrites",
    text: "Architecture that handles more users, more data, and more features on the same foundation.",
  },
  {
    title: "Decide with confidence",
    text: "Dashboards, analytics, and AI that turn raw activity into decisions your team can act on.",
  },
];

export const AUDIENCES = [
  {
    name: "Startups",
    text: "Turn an idea into a launched product with a lean team, then grow it without starting over.",
    tags: ["MVP build", "Cloud setup", "Product design"],
  },
  {
    name: "Growing businesses",
    text: "Replace spreadsheets and manual hand-offs with systems that fit the way you actually work.",
    tags: ["Automation", "Integrations", "Dashboards"],
  },
  {
    name: "Enterprises",
    text: "Modernise legacy systems, add AI where it pays off, and keep security and reliability tight.",
    tags: ["Cloud migration", "AI adoption", "DevOps"],
  },
];

export const PROCESS = [
  {
    title: "Discover",
    text: "We learn your business, users, and constraints, then agree on goals and what success looks like.",
  },
  {
    title: "Design",
    text: "Flows, interfaces, and architecture are mapped out and reviewed with you before code is written.",
  },
  {
    title: "Build",
    text: "Short iterations with working software at every step, so you can see progress and steer early.",
  },
  {
    title: "Launch & grow",
    text: "We ship, monitor, and keep improving with support, reporting, and room to scale.",
  },
];

export const FAQS = [
  {
    q: "Can we hire you for just one service?",
    a: "Yes. Every service stands on its own, and many clients start with one and add others as their needs grow.",
  },
  {
    q: "How does a project usually start?",
    a: "With a short conversation about your goals. From there we scope the work, agree on a plan, and share a clear estimate before anything begins.",
  },
  {
    q: "Do you work with our existing systems and team?",
    a: "Yes. We can extend what you already have, integrate with your current tools, or work alongside your in-house developers.",
  },
  {
    q: "What happens after launch?",
    a: "We can stay on for monitoring, maintenance, and new features, or hand everything over with documentation so your team can run it.",
  },
  {
    q: "How do you keep us in the loop?",
    a: "Regular demos, a shared task board, and a single point of contact, so you always know what's done and what's next.",
  },
];

export const h2Class =
  "mt-6 max-w-3xl text-[clamp(1.9rem,3.6vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-900";
export const sectionClass =
  "w-full bg-white px-6 py-20 md:px-12 md:py-28 xl:px-20";

export const AI_benefits = [
  {
    title: "Get hours back every week",
    body: "AI takes over data entry, report writing, scheduling, and email triage, so your people spend time on work that needs them.",
  },
  {
    title: "Cut errors and rework",
    body: "Automated checks catch mismatches, missing fields, and duplicates before they reach a customer or a ledger.",
  },
  {
    title: "Decide with better information",
    body: "Forecasts, summaries, and alerts built on your own data show what is likely to happen, not only what already did.",
  },
  {
    title: "Serve customers faster",
    body: "Assistants answer common questions at any hour and hand complex cases to your team with full context.",
  },
  {
    title: "Grow without growing headcount",
    body: "Handle more orders, tickets, and documents with the team you have, and add capacity only where it matters.",
  },
  {
    title: "Find revenue you are missing",
    body: "Spot churn risk, upsell opportunities, and pricing gaps hidden in customer and sales data.",
  },
];

export const AI_problems = [
  {
    problem: "Staff re-type invoices, orders, and forms from emails and PDFs.",
    solution:
      "Documents are read automatically and the data lands in your systems, with exceptions flagged for review.",
  },
  {
    problem: "Customers wait hours for answers to routine questions.",
    solution:
      "An assistant trained on your policies and products replies instantly and escalates the hard cases.",
  },
  {
    problem: "Reports take days to compile and are out of date on arrival.",
    solution:
      "Dashboards and written summaries refresh themselves from live data.",
  },
  {
    problem: "Knowledge is scattered across drives, chats, and people's heads.",
    solution:
      "One search-and-answer assistant finds and cites the right document in seconds.",
  },
  {
    problem: "Stock, staffing, and budgets are planned on gut feel.",
    solution:
      "Forecasting models predict demand and flag risks early, so plans rest on evidence.",
  },
];

export const AI_capabilities = [
  {
    title: "AI agents and copilots",
    body: "Assistants that answer questions, draft work, and take actions inside the tools your team already uses.",
    points: [
      "Internal knowledge assistants",
      "Customer-facing chat and voice",
      "Tool and API actions",
    ],
    icon: "M12 3v3m0 12v3M3 12h3m12 0h3M7 7l2 2m6 6l2 2M17 7l-2 2M9 15l-2 2M12 9a3 3 0 100 6 3 3 0 000-6z",
  },
  {
    title: "Process automation",
    body: "Replace manual hand-offs, data entry, and approvals with workflows that run on their own and flag exceptions.",
    points: [
      "Intelligent document handling",
      "Approval and routing flows",
      "ERP and CRM integration",
    ],
    icon: "M4 6h10M4 12h16M4 18h10m4-12l2 2-2 2m-4 10l2 2-2 2",
  },
  {
    title: "Generative AI apps",
    body: "Search, summarize, and generate with large language models grounded in your own documents and data.",
    points: [
      "Retrieval-augmented generation",
      "Content and report generation",
      "Secure private deployments",
    ],
    icon: "M5 4h14v10H9l-4 4V4zm4 4h6m-6 3h4",
  },
  {
    title: "Predictive analytics",
    body: "Forecast demand, churn, risk, and revenue with models trained on your history and kept current.",
    points: [
      "Demand and sales forecasting",
      "Churn and risk scoring",
      "Anomaly and fraud detection",
    ],
    icon: "M4 19V5m0 14h16M8 15l3-4 3 2 4-6",
  },
  {
    title: "Vision and document intelligence",
    body: "Read invoices, contracts, forms, and images, and turn them into structured data your systems can use.",
    points: [
      "OCR and data extraction",
      "Quality inspection",
      "Identity and compliance checks",
    ],
    icon: "M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2M7 12s2-4 5-4 5 4 5 4-2 4-5 4-5-4-5-4z",
  },
  {
    title: "LLM integration and MLOps",
    body: "Production pipelines, evaluation, monitoring, and cost control so AI keeps working after launch.",
    points: [
      "Model evaluation and guardrails",
      "Monitoring and retraining",
      "Cloud and on-prem hosting",
    ],
    icon: "M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2zm0 9l8-4.5M12 11v9m0-9L4 6.5",
  },
];

export const AI_industries = [
  {
    name: "Retail and e-commerce",
    example: "Demand forecasting, product search, and support assistants.",
  },
  {
    name: "Healthcare",
    example:
      "Appointment automation, clinical document summaries, and records search.",
  },
  {
    name: "Financial services",
    example: "Document verification, fraud alerts, and compliance checks.",
  },
  {
    name: "Manufacturing",
    example: "Visual quality inspection and predictive maintenance.",
  },
  {
    name: "Logistics",
    example:
      "Route and load planning, shipment tracking, and paperwork automation.",
  },
  {
    name: "Education",
    example:
      "Learning assistants, content generation, and admissions workflows.",
  },
];

export const AI_useCases = [
  {
    team: "Customer support",
    outcome:
      "Resolve common requests instantly and give agents drafted replies with the right context.",
  },
  {
    team: "Operations",
    outcome:
      "Automate intake, routing, and reconciliation so staff only handle the exceptions.",
  },
  {
    team: "Finance",
    outcome:
      "Extract invoice and contract data, match records, and surface anomalies before close.",
  },
  {
    team: "Sales and marketing",
    outcome:
      "Score leads, personalize outreach, and summarize accounts ahead of every conversation.",
  },
  {
    team: "HR and people",
    outcome:
      "Screen applications, answer policy questions, and speed up onboarding paperwork.",
  },
];

export const AI_steps = [
  {
    title: "Find the right problem",
    body: "We map your workflows and data, then rank opportunities by value and effort so you start where it pays off.",
  },
  {
    title: "Prove it quickly",
    body: "A working prototype on your real data, tested against a baseline, before you commit to a full build.",
  },
  {
    title: "Build and integrate",
    body: "Production-grade engineering, connected to your systems, with security, access control, and audit trails.",
  },
  {
    title: "Run and improve",
    body: "We monitor accuracy, cost, and usage, retrain when data shifts, and extend what works to new teams.",
  },
];

export const AI_engagements = [
  {
    name: "AI discovery workshop",
    body: "A short, focused engagement to find your best opportunities and leave you with a prioritized roadmap.",
    for: "Best if you are unsure where to start.",
  },
  {
    name: "Pilot project",
    body: "One use case, built and tested on your data to show measurable results before wider rollout.",
    for: "Best if you have a clear problem to prove out.",
  },
  {
    name: "Full solution build",
    body: "A production system, integrated with your software, secured, documented, and handed over.",
    for: "Best if you are ready to deploy.",
  },
  {
    name: "Managed AI services",
    body: "Ongoing monitoring, tuning, and support so your solutions stay accurate and cost-effective.",
    for: "Best if you want a long-term partner.",
  },
];

export const AI_principles = [
  {
    title: "Your data stays yours",
    body: "Private deployments, no training on your data, and role-based access from day one.",
  },
  {
    title: "People stay in control",
    body: "Review steps and confidence thresholds keep a person in the loop where it matters.",
  },
  {
    title: "Measured, not assumed",
    body: "Every solution is tested against your current process so the gain is visible and defensible.",
  },
  {
    title: "No lock-in",
    body: "Model-agnostic architecture and full code handover. Swap providers as the field moves.",
  },
];

export const AI_Solutions_faqs = [
  {
    q: "Do we need clean data before we start?",
    a: "No. Part of discovery is assessing what you have. We often start with a narrow slice of data and improve quality as the solution proves its value.",
  },
  {
    q: "Which AI models do you work with?",
    a: "We choose per use case from leading commercial and open-source models, based on accuracy, latency, cost, and where your data is allowed to go.",
  },
  {
    q: "How long until we see something working?",
    a: "Most engagements reach a working prototype on your data within a few weeks. Production timelines depend on integrations and compliance needs.",
  },
  {
    q: "Can this connect to our existing software?",
    a: "Yes. We integrate with your CRM, ERP, databases, and internal tools through APIs, so people keep working in the systems they know.",
  },
  {
    q: "Will AI replace our staff?",
    a: "Our solutions are designed to take over repetitive tasks and support decisions, so your team can focus on work that needs judgment and relationships.",
  },
];

export const technology_stack = [
  {
    category: "Frontend",
    body: "Fast, accessible interfaces that feel the same on every screen.",
    tools: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vue",
      "Angular",
      "Redux",
      "Storybook",
    ],
  },
  {
    category: "Backend and APIs",
    body: "Reliable services and clean APIs that your other systems can build on.",
    tools: [
      "Node.js",
      "NestJS",
      "Python",
      "Django",
      "FastAPI",
      "Java",
      "Spring Boot",
      ".NET",
      "GraphQL",
      "REST",
    ],
  },
  {
    category: "Mobile",
    body: "Native and cross-platform apps with one consistent experience.",
    tools: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
  },
  {
    category: "Databases and storage",
    body: "The right data store for the job, tuned for speed and integrity.",
    tools: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "Supabase",
      "Firebase",
    ],
  },
  {
    category: "Cloud and DevOps",
    body: "Infrastructure that is automated, observable, and cost-aware.",
    tools: [
      "AWS",
      "Google Cloud",
      "Azure",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Vercel",
    ],
  },
  {
    category: "AI and data",
    body: "Agents, models, and vector search that turn your data into decisions.",
    tools: ["LangGraph", "Claude", "Pinecone Vector DB", "PyTorch"],
  },
  {
    category: "Quality and security",
    body: "Testing and protection built into every release, not added at the end.",
    tools: [
      "Jest",
      "Playwright",
      "Cypress",
      "Sentry",
      "OWASP practices",
      "Snyk",
      "SonarQube",
    ],
  },
];

export type TechIconEntry = { devicon?: string; simple?: string };

export const techIcons: Record<string, TechIconEntry> = {
  // Frontend
  React: { devicon: "react", simple: "react" },
  "Next.js": { devicon: "nextjs", simple: "nextdotjs" },
  TypeScript: { devicon: "typescript", simple: "typescript" },
  "Tailwind CSS": { devicon: "tailwindcss", simple: "tailwindcss" },
  Vue: { devicon: "vuejs", simple: "vuedotjs" },
  Angular: { devicon: "angularjs", simple: "angular" },
  Redux: { devicon: "redux", simple: "redux" },
  Storybook: { devicon: "storybook", simple: "storybook" },

  // Backend and APIs
  "Node.js": { devicon: "nodejs", simple: "nodedotjs" },
  NestJS: { devicon: "nestjs", simple: "nestjs" },
  Python: { devicon: "python", simple: "python" },
  Django: { devicon: "django", simple: "django" },
  FastAPI: { devicon: "fastapi", simple: "fastapi" },
  Java: { devicon: "java" },
  "Spring Boot": { devicon: "spring", simple: "springboot" },
  ".NET": { devicon: "dotnetcore", simple: "dotnet" },
  GraphQL: { devicon: "graphql", simple: "graphql" },
  REST: { simple: "openapiinitiative" },

  // Mobile
  "React Native": { devicon: "react", simple: "react" },
  Flutter: { devicon: "flutter", simple: "flutter" },
  Swift: { devicon: "swift", simple: "swift" },
  Kotlin: { devicon: "kotlin", simple: "kotlin" },
  Expo: { devicon: "expo", simple: "expo" },

  // Databases and storage
  PostgreSQL: { devicon: "postgresql", simple: "postgresql" },
  MySQL: { devicon: "mysql", simple: "mysql" },
  MongoDB: { devicon: "mongodb", simple: "mongodb" },
  Redis: { devicon: "redis", simple: "redis" },
  Elasticsearch: { devicon: "elasticsearch", simple: "elasticsearch" },
  Supabase: { devicon: "supabase", simple: "supabase" },
  Firebase: { devicon: "firebase", simple: "firebase" },

  // Cloud and DevOps
  AWS: { devicon: "amazonwebservices" },
  "Google Cloud": { devicon: "googlecloud", simple: "googlecloud" },
  Azure: { devicon: "azure" },
  Docker: { devicon: "docker", simple: "docker" },
  Kubernetes: { devicon: "kubernetes", simple: "kubernetes" },
  Terraform: { devicon: "terraform", simple: "terraform" },
  "GitHub Actions": { devicon: "githubactions", simple: "githubactions" },
  Vercel: { devicon: "vercel", simple: "vercel" },

  // AI and data
  LangGraph: { simple: "langgraph" },
  Claude: { simple: "claude" },
  "Pinecone Vector DB": { simple: "pinecone" },
  PyTorch: { devicon: "pytorch", simple: "pytorch" },

  // Quality and security
  Jest: { devicon: "jest", simple: "jest" },
  Playwright: { devicon: "playwright", simple: "playwright" },
  Cypress: { devicon: "cypressio", simple: "cypress" },
  Sentry: { devicon: "sentry", simple: "sentry" },
  "OWASP practices": { simple: "owasp" },
  Snyk: { devicon: "snyk", simple: "snyk" },
  SonarQube: { devicon: "sonarqube", simple: "sonarqube" },
};

export const technology_principles = [
  {
    title: "Fit over fashion",
    body: "We pick tools because they suit your product, team, and budget, not because they are trending.",
  },
  {
    title: "Proven in production",
    body: "We favor mature, well-supported technology with active communities and a clear future.",
  },
  {
    title: "Easy to hand over",
    body: "Standard stacks and clean documentation mean your team can own and extend the code.",
  },
  {
    title: "Built to scale",
    body: "Architecture choices leave room to grow users, data, and features without a rewrite.",
  },
];

export const technology_stacks = [
  {
    name: "SaaS platform",
    layers: [
      ["Frontend", "Next.js, TypeScript, Tailwind"],
      ["Backend", "Node.js, PostgreSQL, Redis"],
      ["Cloud", "AWS, Docker, Terraform"],
    ],
  },
  {
    name: "Mobile app",
    layers: [
      ["App", "React Native or Flutter"],
      ["Backend", "NestJS or FastAPI, PostgreSQL"],
      ["Services", "Firebase, push, analytics"],
    ],
  },
  {
    name: "AI solution",
    layers: [
      ["Models", "OpenAI, Claude, open-source LLMs"],
      ["Data", "Python, pgvector or Pinecone, Airflow"],
      ["Delivery", "FastAPI, Kubernetes, monitoring"],
    ],
  },
];

export const technology_faqs = [
  {
    q: "Can you work with our existing technology?",
    a: "Yes. We regularly extend, modernize, and integrate with existing codebases and platforms, and only recommend a change when it clearly helps.",
  },
  {
    q: "Do we have to use your preferred stack?",
    a: "No. We recommend a stack after understanding your goals and team, and we are happy to adopt the tools you already use.",
  },
  {
    q: "Who owns the code and infrastructure?",
    a: "You do. We hand over source code, documentation, and infrastructure access, so you are never locked in.",
  },
];

export const talk_to_us_contacts = [
  { label: "Email", value: common_texts.Company_email, href: "mailto:hello@yourcompany.com" },
  { label: "Phone", value: common_texts.Company_phone, href: "tel:+940000000000" },
  { label: "Office", value: common_texts.Company_address, href: undefined },
];

export const talk_to_us_nextSteps = [
  {
    title: "We read your message",
    body: "A real person reviews what you send and looks at where we can help.",
  },
  {
    title: "We book a short call",
    body: "A 30-minute conversation to understand your goals, export constraints, and timeline.",
  },
  {
    title: "You get a clear plan",
    body: "Honest recommendations, a suggested approach, and next steps, with no obligation.",
  },
];

export const talk_to_us_reasons = [
  {
    title: "Straight answers",
    body: "If we are not the right fit, or you need less than you think, we will tell you.",
  },
  {
    title: "Senior people on the call",
    body: "You talk to engineers and consultants who have built similar solutions before.",
  },
  {
    title: "No pressure",
    body: "Come with an idea, a problem, or just a question. There is no obligation to proceed.",
  },
];

export const talk_to_us_faqs = [
  {
    q: "How soon will we hear back?",
    a: "We aim to reply within one business day. If your request is urgent, call us directly.",
  },
  {
    q: "What should I include in my message?",
    a: "Whatever you have: the problem, your goals, rough timelines, or existing systems. We will ask for anything else we need.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. Tell us in your message and we will send one before you share sensitive details.",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Agape Gear",
    category: "E-commerce · Brand",
    url: "https://www.shopagapegear.com/",
    summary:
      "An online store for a Colombo clothing brand built around the line “Stronger than yesterday.”",
    about:
      "Agape Gear is a Sri Lankan apparel brand making t-shirts, hoodies, jackets, pants and accessories for men and women.",
    built:
      "The brand's online storefront, so customers can browse and shop the full range from any device.",
    highlights: [
      "Full apparel range for men and women",
      "Brand voice carried through the whole site",
      "Made-in-Sri-Lanka story front and centre",
    ],
    tags: ["E-commerce", "Storefront", "Brand site", "Responsive"],
    visual: "design",
    // Sample preview. Replace with a real screenshot, e.g. "/images/work/agape-gear.jpg"
    image: "/images/agape_gear_project.png",
  },
  {
    title: "Praise Prayer Lanka Church",
    category: "Web · Community",
    url: "https://pplc.vercel.app/",
    summary:
      "A church website that helps people find a service, catch up on sermons, and plan a first visit.",
    about:
      "A church in Rathmalana, Sri Lanka, that gathers for worship and prayer in person and online.",
    built:
      "A clear, modern site covering service times, a searchable sermon archive, ministries, events, and visitor information.",
    highlights: [
      "Searchable archive of recorded sermons",
      "Countdown to the next gathering",
      "Kids and youth ministry pages, events calendar, and Plan a Visit",
    ],
    tags: ["Website", "Sermon archive", "Events", "Video"],
    visual: "code",
  },
  {
    title: "HelaPoz",
    category: "Web app · Point of sale",
    url: "https://helapoz.vercel.app/",
    summary:
      "A point-of-sale system that puts a shop's billing, staff, and business insights in one place.",
    about:
      "A POS platform for shops that need fast billing and a single place to manage the business.",
    built:
      "A secure control panel with shop-code sign-in for invoicing, employee management, and analytics.",
    highlights: [
      "Fast billing and invoicing",
      "Staff management in the same panel",
      "Sales, inventory, and customer insights",
    ],
    tags: ["POS", "Dashboard", "Analytics", "Secure sign-in"],
    visual: "chart",
  },
  {
    title: "Lanka Lagoon Tours",
    category: "Web · Travel",
    url: "https://lankalagoontours.vercel.app/",
    summary:
      "A tour platform for travellers looking to explore and book adventure and cultural experiences in Sri Lanka.",
    about:
      "A platform for discovering and booking tours across Sri Lanka, aimed at travellers after adventure and culture.",
    built:
      "A responsive tour website that works across phones, tablets, and desktops.",
    highlights: [
      "Tours for adventure and cultural experiences",
      "Built for booking, not just browsing",
      "Responsive on every device",
    ],
    tags: ["Tour booking", "Travel", "Responsive"],
    visual: "mobile",
  },
];

export const PRINCIPLES = [
  {
    title: "Start from the business problem",
    text: "Every project begins with what needs to change for the business, not with a technology choice.",
  },
  {
    title: "Show progress early and often",
    text: "Working software in every iteration, so feedback shapes the product while changes are still cheap.",
  },
  {
    title: "Build it to last",
    text: "Clean architecture, documentation, and handover so the product keeps working long after launch.",
  },
];

export const allowedInterests = [
  "Software development",
  "Cloud and DevOps",
  "Automation",
  "AI solutions",
  "Not sure yet",
];

// const interests = [
//   "Software development",
//   "Cloud and DevOps",
//   "Automation",
//   "AI solutions",
//   "Not sure yet",
// ];

export const fieldClass =
  "mt-2 w-full rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-[16px] text-slate-900 placeholder:text-slate-400 transition-colors focus:border-[#4F66FF] focus:outline-none focus:ring-4 focus:ring-[#4F66FF]/15";
export const labelClass = "block text-[14px] font-medium text-slate-700";

export const careers_roles = [
  {
    title: "Full-Stack Engineer",
    team: "Engineering",
    type: "Full-time",
    location: "Sri Lanka",
    body: "Build web products end to end with Next.js, TypeScript, and Node.js, from database design to polished interfaces.",
  },
  {
    title: "UI/UX Designer",
    team: "Design",
    type: "Full-time",
    location: "Sri Lanka",
    body: "Turn client ideas into clear, beautiful interfaces, and work closely with engineers to see them shipped.",
  },
  {
    title: "AI / ML Engineer",
    team: "AI",
    type: "Full-time",
    location: "Sri Lanka",
    body: "Design and deploy practical AI solutions, from LLM-powered assistants to data pipelines, that clients rely on.",
  },
  {
    title: "Software Engineering Intern",
    team: "Engineering",
    type: "Internship",
    location: "Sri Lanka",
    body: "Learn on real client projects alongside senior engineers, with mentoring and a path to a full-time role.",
  },
];

export const careers_perks = [
  {
    title: "Real work from day one",
    body: "You will ship to real clients early, not sit on the sidelines. Small teams mean big ownership.",
  },
  {
    title: "Grow fast",
    body: "Mentoring, code reviews, and time to learn new tools, so your skills keep compounding.",
  },
  {
    title: "Honest, direct culture",
    body: "Clear communication, early warnings, and no politics. We say what we think and listen to your ideas.",
  },
  {
    title: "Modern tools and stack",
    body: "Next.js, TypeScript, cloud, and AI. We pick the right tools for the job, not the oldest ones.",
  },
  {
    title: "Work that matters",
    body: "We build software that helps businesses run better, and you will see the impact of what you make.",
  },
  {
    title: "Flexible and fair",
    body: "We care about outcomes, not hours at a desk. Ask us about working arrangements for each role.",
  },
];

export const careers_steps = [
  {
    title: "Apply",
    body: "Send your CV and a short note, or a link to your work. No cover letter essays needed.",
  },
  {
    title: "Intro chat",
    body: "A relaxed conversation about you, what you want to do next, and what we are building.",
  },
  {
    title: "Skills conversation",
    body: "A practical session on real problems. We care about how you think, not trick questions.",
  },
  {
    title: "Offer",
    body: "If it is a fit on both sides, we move quickly and keep you informed at every step.",
  },
];

export const careers_faqs = [
  {
    q: "I don't see a role that fits. Can I still apply?",
    a: "Yes. Send us your CV and tell us what you would like to work on. We keep an eye out for strong people even when we are not hiring for a specific role.",
  },
  {
    q: "Do I need a degree?",
    a: "Not necessarily. We look at what you can do and how you work. Projects, experience, and curiosity count for a lot.",
  },
  {
    q: "How long does the process take?",
    a: "We aim to keep it short and will tell you what to expect at each stage. You will always hear back from us.",
  },
  {
    q: "Do you hire interns or fresh graduates?",
    a: "Yes. When we have internship or junior openings they appear above. You can also send us an open application.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The team understood our requirements and transformed our ideas into a practical digital solution. The overall experience was smooth, and the final product gave us a much better way to manage our business.",
    name: "Business Representative",
    role: "Business Owner",
    company: "AGAPE GEAR",
  },
  {
    quote:
      "We appreciated the team's approach to understanding our workflow and building a solution around our actual business needs. Their attention to detail and willingness to improve made the development process valuable.",
    name: "Project Representative",
    role: "Project Coordinator",
    company: "PPLC",
  },
  {
    quote:
      "Having a dedicated digital platform makes it easier to present our services and connect with potential customers. The development process focused on creating a professional and user-friendly experience.",
    name: "Business Representative",
    role: "Business Representative",
    company: "Lanka Lagoon Tours",
  },
  {
    quote:
      "The platform provides a more organised approach to handling our internal processes. We value the effort put into building a solution that can support our operational requirements.",
    name: "Project Representative",
    role: "HR Representative",
    company: "SLM HR Portal",
  },
];

export const panel =
  "w-[88%] max-w-sm rounded-xl border border-slate-200 bg-white p-4 text-slate-900 shadow-sm";
export const track = "bg-slate-100";

export const INDUSTRIES: {
  name: string;
  text: string;
  tags: string[];
  Visual: () => React.ReactElement;
}[] = [
  {
    name: "Education",
    text: "Learning platforms, portals, and student tools that keep learners engaged.",
    tags: ["Learning platforms", "Student portals", "Progress tracking"],
    Visual: EducationVisual,
  },
  {
    name: "Mobility & energy",
    text: "Fleet, charging, and live monitoring dashboards.",
    tags: ["Live dashboards", "IoT feeds", "Fleet tools"],
    Visual: MobilityVisual,
  },
  {
    name: "Travel & hospitality",
    text: "Booking sites, itineraries, and payments.",
    tags: ["Booking engines", "Itineraries", "Payments"],
    Visual: TravelVisual,
  },
  {
    name: "Retail & e-commerce",
    text: "Storefronts, catalogs, and order automation.",
    tags: ["Storefronts", "Catalogs", "Order flows"],
    Visual: RetailVisual,
  },
  {
    name: "Logistics",
    text: "Tracking, routing, and operations tooling.",
    tags: ["Tracking", "Routing", "Ops tools"],
    Visual: LogisticsVisual,
  },
  {
    name: "Finance",
    text: "Secure internal tools, reporting, and workflows.",
    tags: ["Reporting", "Workflows", "Secure access"],
    Visual: FinanceVisual,
  },
  {
    name: "Healthcare",
    text: "Scheduling, records access, and patient portals.",
    tags: ["Scheduling", "Patient portals", "Records"],
    Visual: HealthcareVisual,
  },
  {
    name: "SaaS & startups",
    text: "From MVP to a product that holds up at scale.",
    tags: ["MVP build", "Subscriptions", "Scaling"],
    Visual: SaasVisual,
  },
];

export const How_We_Work_STEPS = [
  {
    title: "Discover",
    text: "We learn your business, users, and goals, then agree on what success looks like.",
  },
  {
    title: "Design",
    text: "Flows, interfaces, and architecture are mapped out and reviewed before code is written.",
  },
  {
    title: "Build",
    text: "Short iterations with working software every step, so you can steer early.",
  },
  {
    title: "Launch & grow",
    text: "We ship, monitor, and keep improving, with room to scale as you do.",
  },
];