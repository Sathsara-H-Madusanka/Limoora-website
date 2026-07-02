export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  deliverables: string[];
  category: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  level: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
}

// ─── Services ────────────────────────────────────────────────────────────────

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Website Development',
    tagline: 'Performance-first web experiences built to convert',
    description:
      'We architect and build high-performance websites combining stunning visual design with technical excellence. From marketing sites to complex web applications, every line of code is written for speed, scalability, and measurable results.',
    icon: 'Globe',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=700&fit=crop&auto=format',
    category: 'Web',
    features: [
      'Custom CMS Development',
      'Core Web Vitals Optimization',
      'SEO Architecture',
      'E-commerce Platforms',
      'Progressive Web Apps',
      'API & Third-party Integration',
    ],
    deliverables: ['Responsive Codebase', 'Design System', 'CMS Training', '90-day Support'],
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Applications',
    tagline: 'Native and cross-platform apps users return to daily',
    description:
      'From concept to App Store, we build mobile experiences that users love. Our mobile team specializes in performance-optimized, delightfully designed iOS and Android applications that drive engagement and retention.',
    icon: 'Smartphone',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=700&fit=crop&auto=format',
    category: 'Mobile',
    features: [
      'iOS & Android Development',
      'React Native & Flutter',
      'Offline-first Architecture',
      'Push Notifications',
      'App Store Optimization',
      'Analytics Integration',
    ],
    deliverables: ['iOS & Android App', 'Admin Dashboard', 'App Store Assets', 'Technical Documentation'],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    tagline: 'Design that drives decisions, not just delight',
    description:
      'Our design team transforms complex problems into intuitive, beautiful interfaces. We take a research-led approach to every project, ensuring every design decision is rooted in user insight and aligned with business strategy.',
    icon: 'Layers',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=700&fit=crop&auto=format',
    category: 'Web',
    features: [
      'User Research & Testing',
      'Information Architecture',
      'Wireframing & Prototyping',
      'Design Systems',
      'Interaction Design',
      'Accessibility Audits',
    ],
    deliverables: ['Research Report', 'Design System', 'Figma Prototype', 'Handoff Documentation'],
  },
  {
    id: 'branding',
    title: 'Brand Identity',
    tagline: 'Visual identities that command authority',
    description:
      'We craft comprehensive brand identities that communicate your values at a glance. From logo design to full visual language systems, we give your brand the visual authority it deserves in a crowded market.',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=700&fit=crop&auto=format',
    category: 'Branding',
    features: [
      'Logo & Mark Design',
      'Typography System',
      'Color Architecture',
      'Brand Voice & Tone',
      'Brand Guidelines',
      'Marketing Collateral',
    ],
    deliverables: ['Logo Suite', 'Brand Guidelines PDF', 'Asset Library', 'Usage Documentation'],
  },
  {
    id: 'software-development',
    title: 'Software Development',
    tagline: 'Scalable systems engineered for the long term',
    description:
      'Our engineering team builds robust, scalable software from the ground up. We specialize in cloud-native architectures, microservices, and enterprise platforms that grow with your organization and stand up to real-world demands.',
    icon: 'Code2',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1200&h=700&fit=crop&auto=format',
    category: 'Web',
    features: [
      'Cloud-Native Architecture',
      'Microservices & APIs',
      'Database Design',
      'DevOps & CI/CD',
      'Security & Compliance',
      'Performance Engineering',
    ],
    deliverables: ['Source Code', 'Technical Documentation', 'Deployment Pipeline', 'Monitoring Dashboard'],
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    tagline: 'Intelligent systems that learn, adapt, and scale',
    description:
      'We integrate cutting-edge AI and machine learning into your products and workflows. From intelligent automation to predictive analytics, we help you harness AI for genuine competitive advantage — not just buzzwords.',
    icon: 'Cpu',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&h=700&fit=crop&auto=format',
    category: 'AI',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'AI Workflow Automation',
      'LLM Integration',
    ],
    deliverables: ['AI Model', 'Integration API', 'Training Pipeline', 'Performance Dashboard'],
  },
  {
    id: 'cloud-consulting',
    title: 'Cloud & IT Consulting',
    tagline: 'Infrastructure that scales as fast as your ambition',
    description:
      'From cloud migration to full infrastructure architecture, our cloud team helps you build resilient, cost-efficient systems on AWS, GCP, or Azure. We design for uptime, security, and scale — from day one.',
    icon: 'Cloud',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=700&fit=crop&auto=format',
    category: 'Cloud',
    features: [
      'Cloud Migration Strategy',
      'Infrastructure as Code',
      'Security Architecture',
      'Cost Optimization',
      'Disaster Recovery',
      'Managed Services',
    ],
    deliverables: ['Architecture Document', 'Migration Plan', 'IaC Templates', 'Runbook & SLA'],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: 'nexus-finance',
    title: 'Nexus Finance Platform',
    category: 'Website Development',
    client: 'Nexus Financial Group',
    year: '2025',
    description:
      'A comprehensive financial services platform featuring real-time data visualization, a secure client portal, and automated reporting dashboards for a leading investment firm.',
    challenge:
      'Nexus needed to replace a decade-old monolithic system while keeping operations running. Performance, security, and compliance were non-negotiable.',
    solution:
      'We built a modular React frontend paired with a Go microservices backend, migrating data progressively with zero downtime using a strangler-fig pattern.',
    result:
      'Page load time dropped 74%. Client portal adoption reached 92% in the first quarter. Compliance reporting that once took 3 days now runs overnight automatically.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop&auto=format',
    tags: ['React', 'TypeScript', 'Go', 'PostgreSQL', 'AWS'],
    featured: true,
  },
  {
    id: 'momentum-fitness',
    title: 'Momentum Fitness App',
    category: 'Mobile Apps',
    client: 'Momentum Health Technologies',
    year: '2025',
    description:
      'A personalized fitness and wellness application with AI-powered workout recommendations, nutrition tracking, and a social community layer.',
    challenge:
      'The market is saturated. Momentum needed a product that felt personal, not generic — one that could compete with well-funded incumbents on UX alone.',
    solution:
      'We shipped a React Native app with an on-device ML model for real-time form analysis, combined with a recommendation engine that adapts to weekly goals and recovery data.',
    result:
      'Launched with a 4.9-star rating across iOS and Android. 50,000 downloads in the first month. 68% 30-day retention — well above the 25% industry average.',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=900&h=600&fit=crop&auto=format',
    tags: ['React Native', 'Python', 'TensorFlow', 'Firebase'],
    featured: true,
  },
  {
    id: 'aria-voice-ui',
    title: 'Aria Voice Assistant UI',
    category: 'UI/UX Design',
    client: 'Aria Health Systems',
    year: '2025',
    description:
      'An intuitive voice-first interface for a medical AI assistant deployed in 40+ hospital systems, improving clinical workflow efficiency by 34%.',
    challenge:
      'Clinical environments demand zero cognitive friction. The UI had to work equally well for a 25-year-old ER nurse and a 60-year-old surgeon with no time to learn new tools.',
    solution:
      'Six weeks of contextual research across four hospital sites informed an interface built on progressive disclosure — simple by default, powerful on demand.',
    result:
      'Staff onboarding time dropped from 4 hours to 45 minutes. Documentation errors fell 22%. The system is now standard across the entire hospital network.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&h=600&fit=crop&auto=format',
    tags: ['Figma', 'Prototyping', 'User Research', 'Accessibility'],
    featured: true,
  },
  {
    id: 'lumina-brand',
    title: 'Lumina Energy Rebrand',
    category: 'Branding',
    client: 'Lumina Energy',
    year: '2025',
    description:
      'A complete visual identity rebrand for a clean energy startup entering the European market, including logo system, brand guidelines, and full launch campaign assets.',
    challenge:
      'Lumina was entering a market dominated by legacy utilities with century-old brand equity. They needed to look credible and innovative simultaneously.',
    solution:
      'We developed a visual language rooted in light metaphysics — dynamic, directional, and optimistic — applied across digital and physical touchpoints.',
    result:
      "Launch press coverage in 14 publications. Brand recognition survey results doubled within 6 months of launch. Series B deck cited brand positioning as a key investor signal.",
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&h=600&fit=crop&auto=format',
    tags: ['Brand Strategy', 'Logo Design', 'Typography', 'Brand Guidelines'],
    featured: true,
  },
  {
    id: 'cloudsync-api',
    title: 'CloudSync API Platform',
    category: 'Software Development',
    client: 'CloudSync Technologies',
    year: '2024',
    description:
      'A high-throughput API integration platform processing 50M+ daily transactions, enabling seamless data sync across enterprise cloud environments.',
    challenge: 'Existing integration middleware was costing $2M/year and still dropping 0.3% of messages at peak load — unacceptable for financial-grade data.',
    solution: 'We rebuilt the integration layer in Go with Apache Kafka for event streaming, deployed on Kubernetes with auto-scaling and guaranteed-delivery semantics.',
    result: 'Message loss dropped to 0.0001%. Infrastructure cost fell 61%. The platform now handles 3x peak load without incident.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=600&fit=crop&auto=format',
    tags: ['Go', 'Kubernetes', 'Apache Kafka', 'AWS'],
    featured: false,
  },
  {
    id: 'cortex-ai',
    title: 'Cortex AI Analytics',
    category: 'AI Solutions',
    client: 'Cortex Insights Inc.',
    year: '2024',
    description:
      'An AI-powered business intelligence platform with natural language querying, predictive forecasting, and automated insight generation for enterprise data teams.',
    challenge: 'Data analysts spent 70% of their time writing SQL and building charts — only 30% on actual analysis. Leadership wanted that ratio flipped.',
    solution: 'We built a natural language query engine on top of a fine-tuned LLM, with a Python backend that translates intent to optimized SQL and renders results automatically.',
    result: 'Analyst productivity increased 2.4x. Time-to-insight dropped from 3 days to 4 hours average. Adopted by 800+ analysts across 12 enterprise customers.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&h=600&fit=crop&auto=format',
    tags: ['Python', 'LLMs', 'Apache Spark', 'React'],
    featured: false,
  },
  {
    id: 'solaris-ecommerce',
    title: 'Solaris Luxury Commerce',
    category: 'Website Development',
    client: 'Solaris Luxury Goods',
    year: '2024',
    description:
      'A premium e-commerce experience for a luxury lifestyle brand, featuring immersive product storytelling, 3D product previews, and a seamless checkout journey.',
    challenge: 'Solaris was converting at 0.8% — half the luxury e-commerce average. The brand looked premium in-store but generic online.',
    solution: 'We rebuilt on Next.js with Three.js for 3D product visualization, Shopify for commerce, and a fully bespoke checkout flow designed around reducing friction.',
    result: 'Conversion rate rose to 2.1%. Average order value increased 34%. The 3D configurator feature was covered by Dezeen and Wallpaper magazine.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&h=600&fit=crop&auto=format',
    tags: ['Next.js', 'Shopify', 'Three.js', 'Stripe'],
    featured: false,
  },
  {
    id: 'pulsehealth-app',
    title: 'PulseHealth Patient App',
    category: 'Mobile Apps',
    client: 'PulseHealth Systems',
    year: '2024',
    description:
      'A HIPAA-compliant patient engagement app with telemedicine, prescription management, and health record access for a network of 200+ clinics.',
    challenge: 'Patient no-show rates were at 31%, costing the clinic network $4M annually. The existing patient portal had a 12% adoption rate.',
    solution: 'We designed and built a mobile-first patient experience with intelligent appointment reminders, one-tap rescheduling, and video consultation built in.',
    result: 'No-show rate fell to 14%. App adoption hit 78% within 60 days of launch. Patient satisfaction scores increased by 22 points.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&h=600&fit=crop&auto=format',
    tags: ['Swift', 'Kotlin', 'FHIR', 'AWS Healthcare'],
    featured: false,
  },
  {
    id: 'orbit-dashboard',
    title: 'Orbit Dashboard System',
    category: 'UI/UX Design',
    client: 'Orbit Analytics',
    year: '2024',
    description:
      'A comprehensive design system and dashboard framework for a SaaS analytics platform, scaling consistently across 12 product areas and 3 customer segments.',
    challenge:
      'Orbit had 4 product teams working in silos. Every feature looked different. Customer NPS cited UI inconsistency as the top complaint.',
    solution:
      'We embedded with each team for 2 weeks, then built a unified design system with 120+ components, full Figma and Storybook parity, and a contribution governance model.',
    result: 'Design inconsistency complaints dropped 89%. New feature design time fell by 40%. NPS increased 18 points in the following quarter.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop&auto=format',
    tags: ['Design System', 'Figma', 'Storybook', 'React'],
    featured: false,
  },
  {
    id: 'meridian-brand',
    title: 'Meridian Hotels Identity',
    category: 'Branding',
    client: 'Meridian Hotels & Resorts',
    year: '2023',
    description:
      'A heritage brand evolution for a boutique hotel collection entering the ultra-luxury segment, blending timeless elegance with modern minimalism.',
    challenge: 'Meridian needed to move upmarket without alienating its existing loyal customer base — a notoriously difficult brand repositioning.',
    solution: 'We developed a visual language that honored heritage details (custom monogram, archival textures) while stripping everything extraneous — less, but more meaningful.',
    result: 'ADR (average daily rate) increased 28% post-rebrand. Featured in Condé Nast Traveler. Positioned successfully in the ultra-luxury tier within 8 months.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&h=600&fit=crop&auto=format',
    tags: ['Brand Identity', 'Photography Direction', 'Signage System', 'Digital'],
    featured: false,
  },
  {
    id: 'quantum-data',
    title: 'Quantum Data Pipeline',
    category: 'Software Development',
    client: 'Quantum Labs',
    year: '2023',
    description:
      'A real-time genomic data processing pipeline handling petabyte-scale datasets, reducing analysis time from weeks to hours for biotech research.',
    challenge: 'Genome sequencing was producing data faster than the old pipeline could process it. Research timelines were measured in weeks when hours were needed.',
    solution: 'We built a distributed processing system in Rust and Python using Apache Arrow for zero-copy data transfer, deployed on GCP with elastic autoscaling.',
    result: 'Analysis time dropped from 18 days to 6 hours. Processing cost per genome fell 82%. The pipeline is now licensed to 3 additional research institutions.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=600&fit=crop&auto=format',
    tags: ['Python', 'Rust', 'Apache Arrow', 'GCP'],
    featured: false,
  },
  {
    id: 'neural-retail',
    title: 'Neural Retail Intelligence',
    category: 'AI Solutions',
    client: 'Neural Commerce Inc.',
    year: '2023',
    description:
      'A retail intelligence platform using computer vision and ML to analyze in-store customer behavior, boosting conversion rates by 28% across 500+ retail locations.',
    challenge:
      'Retail operators had mountains of POS data but no visibility into what happened before the sale — foot traffic, dwell time, shelf engagement — all invisible.',
    solution:
      'We deployed edge-compute CV units that track anonymized shopper movement, feeding a cloud analytics platform with real-time planogram and staffing recommendations.',
    result: 'Average store conversion up 28%. Shrinkage fell 14%. The platform processes 2M+ vision events daily across 500+ locations with 99.97% uptime.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&h=600&fit=crop&auto=format',
    tags: ['Computer Vision', 'PyTorch', 'Edge Computing', 'React'],
    featured: false,
  },
];

// ─── Blog Posts ───────────────────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  {
    id: 'future-of-ai-product-design',
    title: 'The Future of AI in Product Design: Beyond the Hype',
    excerpt:
      "As AI tools become embedded in every design workflow, the question isn't whether to adopt them — it's how to use them to amplify human creativity rather than replace it.",
    author: 'Jordan Reeves',
    authorRole: 'Head of Design',
    date: 'June 18, 2025',
    readTime: '8 min read',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&h=550&fit=crop&auto=format',
    content:
      'The design industry is at an inflection point. Tools like Figma AI, Adobe Firefly, and a dozen upstarts have put generative capabilities directly in the hands of every designer. But the conversations in design leadership tend to oscillate between two extremes: euphoria ("AI will make us 10x faster") and anxiety ("AI will replace us"). Neither is calibrated correctly.\n\nThe reality is more interesting and more nuanced. AI is not a replacement for design thinking — it is an accelerant for the execution layer. The hard parts of design — understanding user intent, resolving conflicting stakeholder priorities, making principled aesthetic judgments — remain stubbornly human. What AI can do is compress the time between idea and artifact, which changes the economics of iteration fundamentally.\n\nWhen we can generate 40 visual directions instead of 4, the bottleneck shifts from production to curation and judgment. This is actually a more interesting problem. It demands that designers develop stronger critical faculties, not weaker ones. The designer who thrives in an AI-augmented workflow is not the one who knows the most keyboard shortcuts — it is the one who can evaluate quality, articulate principles, and make decisive calls at high volume.\n\nThere are real risks, of course. AI-generated outputs regress to the mean by default — they reflect what has worked statistically, not what should work for this specific context. The designers and teams that fail to recognize this will produce homogeneous work at unprecedented speed. The ones who succeed will treat AI output as a starting point, not a destination.',
  },
  {
    id: 'building-design-systems-that-scale',
    title: 'Building Design Systems That Actually Scale with Your Team',
    excerpt:
      "Most design systems fail not because of bad design decisions — they fail because of governance. Here's what we've learned from building systems used by thousands of engineers.",
    author: 'Aria Chen',
    authorRole: 'CTO & Co-founder',
    date: 'June 5, 2025',
    readTime: '12 min read',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=550&fit=crop&auto=format',
    content:
      "We have built design systems for companies ranging from 10-person startups to organizations with 4,000 engineers. The failures we have witnessed — and participated in — follow remarkably consistent patterns. The component library gets built. The documentation is written. The Storybook is deployed. And then, six months later, teams are back to building one-off components because the system \"doesn't have what we need\" or \"takes too long to contribute to.\"\n\nThe technical decisions matter less than everyone assumes. Whether you choose Tailwind or CSS Modules, whether your tokens live in JSON or Figma variables, whether you use Storybook or Chromatic — these are largely implementation details. What kills design systems is governance: who owns them, how changes get made, what the contribution model looks like, and how the system communicates its own evolution to consumers.\n\nThe most durable systems we have seen share a few structural properties. First, they have a dedicated platform team — even if that team is just one engineer and one designer. Systems maintained purely as a side project by feature teams drift toward entropy. Second, they treat their internal consumers like external customers — with proper versioning, changelogs, migration guides, and office hours. Third, they make contribution easy but review rigorous. The bar for adding to the system should be higher than the bar for adding to a product feature, because the blast radius of a system change is so much larger.",
  },
  {
    id: 'enterprise-web-performance',
    title: 'Why Enterprise Websites Are Still Failing at Core Web Vitals',
    excerpt:
      'Despite years of emphasis on page experience, most large enterprise sites still struggle with basic performance benchmarks. Here is why — and how to fix it.',
    author: 'Priya Sharma',
    authorRole: 'Head of Engineering',
    date: 'May 22, 2025',
    readTime: '10 min read',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=550&fit=crop&auto=format',
    content:
      "Google has been communicating the importance of page experience signals since 2020. Core Web Vitals — Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift — have been ranking factors since 2021. And yet, when we audit enterprise websites as part of new client engagements, we consistently find the same cluster of performance failures.\n\nThe root cause is rarely technical ignorance. Enterprise engineering teams know what Core Web Vitals are. The failure is organizational. Performance optimization competes with feature development for engineering time, and it almost always loses. Features ship on quarterly roadmaps. Performance debt accumulates silently until it becomes undeniable — often when a competitor's site measurably outperforms yours in search rankings.\n\nThe technical issues are actually the easy part. Unoptimized images remain the single highest-impact problem we encounter — large JPEGs served at screen resolution, no lazy loading, no modern format (WebP/AVIF). Third-party scripts are the second most common culprit: analytics platforms, chat widgets, A/B testing tools, and ad pixels loaded synchronously in the document head, blocking render for 2–4 seconds. Font loading without size-adjust causes layout shift that tanks CLS scores. These are all fixable in an afternoon each. The hard part is maintaining the discipline not to re-introduce them.",
  },
  {
    id: 'mobile-first-strategy',
    title: 'Mobile-First vs. Mobile-Only: The Strategy Question No One Asks',
    excerpt:
      'In 2025, over 65% of web traffic is mobile. But treating mobile as an afterthought — or designing only for mobile — both carry hidden costs most product teams overlook.',
    author: 'Marcus Webb',
    authorRole: 'CEO & Co-founder',
    date: 'May 10, 2025',
    readTime: '7 min read',
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&h=550&fit=crop&auto=format',
    content:
      "Mobile-first is now orthodox doctrine in product design. It has been for a decade. But the industry has quietly developed a second, less-examined failure mode: mobile-only thinking — the implicit assumption that because most traffic is mobile, desktop experiences do not matter enough to deserve serious design attention.\n\nThis is wrong, and the data supports it. While mobile accounts for the majority of traffic across most consumer properties, desktop users consistently convert at higher rates, generate more revenue per session, and complete more complex tasks. In B2B software, desktop is frequently dominant by every meaningful metric. The customer completing a $50,000 procurement decision is almost certainly on a laptop.\n\nThe nuanced position — which more product teams are slowly arriving at — is that mobile-first should govern the design process (start constrained, expand) but should not govern the investment allocation (mobile and desktop both deserve thoughtful, specific attention).",
  },
  {
    id: 'llm-production-lessons',
    title: "LLM Integration in Production: What They Don't Tell You",
    excerpt:
      'Integrating large language models into production systems is an order of magnitude harder than building a proof of concept. Here are the lessons we learned the hard way.',
    author: 'Alex Torres',
    authorRole: 'Head of Strategy',
    date: 'April 28, 2025',
    readTime: '15 min read',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&h=550&fit=crop&auto=format',
    content:
      "Every team building with LLMs discovers the same truth at roughly the same point in their journey: the proof of concept took two weeks and impressed everyone in the demo, and the production system took six months and humbled everyone involved.\n\nThe gap is not a technology problem — it is a systems problem. LLMs are probabilistic, context-sensitive, and opaque in ways that conventional software is not. The engineering practices that work for deterministic systems — unit tests, CI/CD, feature flags — need significant adaptation to be useful for AI systems.\n\nHere is what we have learned from shipping AI features in production for enterprise clients. First: evaluation before optimization. Before you can improve an LLM-powered feature, you need a way to measure its quality systematically. This means building eval datasets, defining quality metrics, and creating a baseline — before you write any prompts or fine-tune any models. Teams that skip this step spend months optimizing in the dark.\n\nSecond: latency is a product problem, not just an engineering problem. LLM inference is slow by conventional API standards. A 3-second response time that would be acceptable for a complex database query is devastating in a conversational interface. Architecture decisions — streaming, caching, precomputation, model selection — need to be made with UX requirements driving the constraints, not the other way around.",
  },
  {
    id: 'brand-identity-dark-mode',
    title: 'Brand Identity in the Age of Dark Mode and Variable Fonts',
    excerpt:
      'A modern brand identity has to survive on every surface — from OLED screens at 1% brightness to projected presentations in a sunlit boardroom.',
    author: 'Nina Blackwell',
    authorRole: 'Head of Client Success',
    date: 'April 14, 2025',
    readTime: '9 min read',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&h=550&fit=crop&auto=format',
    content:
      "Dark mode adoption has crossed a threshold where it can no longer be an afterthought for brand designers. In 2025, the majority of iOS users have dark mode enabled permanently. On desktop, the split is approaching 50/50. When a brand's logo or color system was designed before this era — which describes most brand identities currently in use — dark mode reveals every assumption the original designers made about the viewing context.\n\nYellow logos on dark backgrounds glow. High-contrast wordmarks reverse in unexpected ways. Color systems built for WCAG AA on white fail badly on dark. Photography that works beautifully on a light-mode hero looks murky and low-contrast in dark mode.\n\nThe solution is not simply to design two versions of everything — that path leads to exponential maintenance complexity and visual incoherence. The better approach is to design brand systems with adaptive properties from the start: color tokens that reference semantic roles rather than specific hex values, logo marks that work as silhouettes at any contrast level, type systems that maintain legibility across the full range of background conditions.",
  },
];

// ─── Team ─────────────────────────────────────────────────────────────────────

export const teamMembers: TeamMember[] = [
  {
    name: 'Marcus Webb',
    role: 'CEO & Co-founder',
    bio: 'Former VP of Product at Stripe. 15 years leading digital transformation at Fortune 500 companies across fintech, healthcare, and enterprise SaaS.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format',
  },
  {
    name: 'Aria Chen',
    role: 'CTO & Co-founder',
    bio: 'MIT Computer Science alum. Led engineering teams at Google and Palantir before co-founding LUMOORA. Specializes in large-scale distributed systems.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&auto=format',
  },
  {
    name: 'Jordan Reeves',
    role: 'Head of Design',
    bio: 'Previously Design Director at Figma and IDEO. Passionate about systems thinking and inclusive design. Led design for products used by 50M+ people.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Engineering',
    bio: '10+ years building large-scale distributed systems. Open-source contributor with 12K+ GitHub stars. Speaks at QCon and Strange Loop annually.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&auto=format',
  },
  {
    name: 'Alex Torres',
    role: 'Head of Strategy',
    bio: 'Former McKinsey digital consultant. Specializes in product-market fit, go-to-market for tech companies, and organizational design for digital-first teams.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&auto=format',
  },
  {
    name: 'Nina Blackwell',
    role: 'Head of Client Success',
    bio: 'Built and scaled customer success teams at Salesforce and HubSpot. Brings a client-first ethos and 12 years of enterprise relationship management.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&auto=format',
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    quote:
      "LUMOORA didn't just build our platform — they transformed how we think about our digital product. The attention to performance and design detail is unlike anything we've experienced with a digital agency.",
    name: 'David Harrington',
    role: 'CFO',
    company: 'Nexus Financial Group',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&auto=format',
  },
  {
    quote:
      "We came with a concept and a tight deadline. LUMOORA delivered a product that exceeded both. The Momentum app launched with a 4.9-star rating and 50,000 downloads in the first month. Remarkable.",
    name: 'Sarah Kim',
    role: 'CEO',
    company: 'Momentum Health Technologies',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=120&h=120&fit=crop&auto=format',
  },
  {
    quote:
      "The brand identity LUMOORA created gave us the visual authority to compete in the European luxury market. It wasn't just beautiful — it was strategically precise. We exceeded our Series B targets partly on brand strength.",
    name: 'Jean-Pierre Moreau',
    role: 'Chief Brand Officer',
    company: 'Lumina Energy',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&auto=format',
  },
];

// ─── Jobs ─────────────────────────────────────────────────────────────────────

export const jobs: Job[] = [
  {
    id: 'senior-frontend-engineer',
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'Remote / New York',
    type: 'Full-time',
    level: 'Senior',
    description:
      "We're looking for a Senior Frontend Engineer to lead the development of world-class interfaces for our enterprise clients. You'll work closely with our design and strategy teams to translate ambitious visions into polished, production-ready code.",
    requirements: [
      '5+ years of professional React experience',
      'Deep understanding of TypeScript and modern JavaScript',
      'Experience with performance optimization and Core Web Vitals',
      'Strong design sensibility and attention to detail',
      'Experience building and consuming design systems',
      'Excellent communication skills with non-technical stakeholders',
    ],
    responsibilities: [
      'Architect and build complex frontend applications for enterprise clients',
      'Collaborate with designers on design system evolution and implementation fidelity',
      'Mentor junior and mid-level engineers on the team',
      'Contribute to technical strategy and proposal scoping',
      'Establish frontend best practices and review code across the team',
    ],
    benefits: ['Fully remote with optional office access', 'Competitive salary + equity', 'Annual learning budget $3,000', 'Health, dental, vision coverage', '4 weeks PTO + local holidays'],
  },
  {
    id: 'senior-product-designer',
    title: 'Senior Product Designer',
    department: 'Design',
    location: 'Remote / London',
    type: 'Full-time',
    level: 'Senior',
    description:
      "We're seeking a Senior Product Designer who thrives at the intersection of user research, visual design, and systems thinking. You'll own design for key client projects from discovery through handoff — and have real influence on how we work.",
    requirements: [
      '5+ years of product design experience',
      'Expert-level Figma proficiency',
      'User research and usability testing experience',
      'Portfolio demonstrating design systems work at scale',
      'Experience in B2B or enterprise product contexts',
      'Strong written and verbal communication skills',
    ],
    responsibilities: [
      'Lead design for complex, multi-workstream client projects',
      'Run user research, synthesis, and usability testing sessions',
      'Maintain and evolve client design systems over time',
      'Present design decisions to senior stakeholders with clarity',
      'Collaborate with engineers on implementation fidelity and feasibility',
    ],
    benefits: ['Fully remote with optional office access', 'Competitive salary + equity', 'Annual learning budget $3,000', 'Health, dental, vision coverage', '4 weeks PTO + local holidays'],
  },
  {
    id: 'backend-engineer',
    title: 'Backend Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    level: 'Mid-Senior',
    description:
      "Join our engineering team to build scalable backend systems that power our clients' most critical digital infrastructure. You'll work with modern cloud-native technologies at meaningful scale.",
    requirements: [
      '4+ years backend engineering experience',
      'Proficiency in Go, Python, or Node.js',
      'Experience with cloud platforms (AWS or GCP)',
      'Database design and query optimization skills',
      'Understanding of distributed systems and eventual consistency',
      'Security-minded approach to system design',
    ],
    responsibilities: [
      'Design and implement scalable, secure API services',
      'Build and maintain cloud infrastructure using IaC principles',
      'Optimize database performance under production load',
      'Ensure system reliability through monitoring and incident response',
      'Write comprehensive technical documentation for client handoffs',
    ],
    benefits: ['Fully remote', 'Competitive salary + equity', 'Learning budget $2,500', 'Health coverage', 'Flexible hours'],
  },
  {
    id: 'ai-ml-engineer',
    title: 'AI/ML Engineer',
    department: 'AI & Data',
    location: 'Remote / San Francisco',
    type: 'Full-time',
    level: 'Senior',
    description:
      "Shape the future of intelligent digital products by building AI capabilities that make a real difference for enterprise clients. You'll lead ML projects from ideation through production deployment — and help us define what LUMOORA's AI practice looks like.",
    requirements: [
      '4+ years ML engineering experience',
      'Strong Python and ML framework expertise (PyTorch / TensorFlow)',
      'Experience with LLMs, prompt engineering, and RAG architectures',
      'Production ML systems deployment and monitoring experience',
      'PhD or equivalent practical research experience preferred',
      'Strong communication skills for technical-to-business translation',
    ],
    responsibilities: [
      'Develop and deploy machine learning models for client products',
      'Integrate AI capabilities into web and mobile applications',
      'Build reliable data pipelines and ML infrastructure',
      'Evaluate emerging AI technologies for client applicability',
      'Advise clients on AI strategy and realistic capability timelines',
    ],
    benefits: ['Remote-first with SF office access', 'Top-of-band compensation', 'GPU compute budget for experiments', 'Conference and research budget', 'Equity with meaningful upside'],
  },
  {
    id: 'senior-project-manager',
    title: 'Senior Project Manager',
    department: 'Operations',
    location: 'Remote / New York',
    type: 'Full-time',
    level: 'Senior',
    description:
      "We're looking for an exceptional Senior Project Manager to orchestrate complex, multi-disciplinary digital projects from kickoff to launch. You'll be the linchpin between our internal teams and our clients — keeping quality high and timelines honest.",
    requirements: [
      '5+ years project management in digital agencies or tech',
      'PMP or equivalent certification preferred',
      'Experience managing projects above $500K in value',
      'Strong financial management and forecasting skills',
      'Exceptional written and verbal communication',
      'Comfort with ambiguity and fast-changing requirements',
    ],
    responsibilities: [
      'Lead cross-functional project teams from kickoff to launch',
      'Manage project scope, timeline, budget, and risk registers',
      'Drive weekly client communication and executive reporting',
      'Identify and escalate project risks before they become problems',
      'Ensure quality standards are met across all deliverables',
    ],
    benefits: ['Remote with quarterly team offsites', 'Competitive salary', 'Performance bonus', 'Full health coverage', '4 weeks PTO'],
  },
  {
    id: 'business-development-director',
    title: 'Business Development Director',
    department: 'Growth',
    location: 'New York / London',
    type: 'Full-time',
    level: 'Director',
    description:
      "Drive LUMOORA's growth by identifying, developing, and closing new enterprise partnerships. You'll play a critical role in shaping our market position and expanding our client portfolio at the most ambitious companies.",
    requirements: [
      '8+ years in BD or sales at a digital agency or technology consultancy',
      'Proven track record closing enterprise deals ($250K+)',
      'Deep network in target verticals (fintech, health, enterprise SaaS)',
      'Strategic thinking and executive-level proposal writing',
      'Experience navigating RFP and procurement processes',
      'Comfortable operating as both strategist and individual contributor',
    ],
    responsibilities: [
      'Develop and execute new business strategy across target verticals',
      'Build and manage a qualified pipeline of enterprise opportunities',
      'Lead proposal development, pitch decks, and executive presentations',
      'Represent LUMOORA at industry events and in thought leadership',
      'Collaborate with leadership on pricing, contracts, and team resourcing',
    ],
    benefits: ['Hybrid with flexible travel', 'Base + uncapped commission', 'Senior leadership track', 'Full health coverage', 'Equity participation'],
  },
];

// ─── Pricing ──────────────────────────────────────────────────────────────────

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$4,999',
    period: 'per project',
    description: 'For startups and small businesses launching their digital presence with professional, high-quality results.',
    features: [
      'Up to 10-page website',
      'Custom responsive design',
      'CMS integration',
      'On-page SEO setup',
      'Mobile optimization',
      'Google Analytics 4',
      '30-day post-launch support',
    ],
    highlighted: false,
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: '$14,999',
    period: 'per project',
    description: 'For growing companies that need sophisticated digital products with advanced functionality and polished design systems.',
    features: [
      'Everything in Starter',
      'Custom design system',
      'Advanced animations',
      'API & third-party integrations',
      'E-commerce capabilities',
      'Performance optimization',
      'User testing & research',
      '90-day post-launch support',
    ],
    highlighted: true,
    cta: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored to scope',
    description: 'For organizations with complex requirements, large-scale digital transformation, and ongoing partnership needs.',
    features: [
      'Everything in Professional',
      'Dedicated project team',
      'Multi-platform development',
      'AI/ML integration',
      'Custom cloud infrastructure',
      'SLA guarantees',
      '12-month support retainer',
      'Quarterly strategy sessions',
    ],
    highlighted: false,
    cta: 'Contact Sales',
  },
];

export const categories = ['All', 'Website Development', 'Mobile Apps', 'UI/UX Design', 'Branding', 'Software Development', 'AI Solutions'];
export const serviceCategories = ['All', 'Web', 'Mobile', 'AI', 'Branding', 'Cloud'];
