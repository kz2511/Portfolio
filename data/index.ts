import {
  FaGitAlt,
  FaPython,
  FaDocker,
  FaAws,
} from 'react-icons/fa';
import {
  SiTensorflow,
  SiPytorch,
  SiDjango,
  SiFastapi,
  SiFlask,
  SiApachespark,
  SiApachekafka,
  SiApachehadoop,
  SiElasticsearch,
  SiPostgresql,
  SiMongodb,
  SiScrapy,
  SiOpenai,
  SiHuggingface,
  SiKubernetes,
  SiLinux,
  SiLangchain,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiJupyter,
  SiRedis,
  SiCelery,
  SiAmazonwebservices,
} from 'react-icons/si';


export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I'm Kunal — I turn messy, real-world data into AI systems that actually work in production",
    description: "Over 5+ years, I've gone from writing my first Python script to leading teams that ship LLM-powered applications, RAG pipelines, and data platforms used by thousands. I don't just build models — I own the full stack, from data ingestion to deployment.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[550px] min-h-80",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Based in India, building for the world",
    description: "I've shipped AI solutions for startups and enterprises across the US, Europe, and Asia — fully async, zero timezone friction.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My AI Stack",
    description: "Always leveling up",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "I don't just write code — I architect systems designed to scale from day one",
    description: "Whether it's a Medallion-architecture data lake or a vector-search-powered chatbot, I think in systems, not scripts.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "From fine-tuning LLMs & building RAG pipelines to deploying on AWS with Docker — I handle the entire AI lifecycle",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Got a challenge that needs AI? Let's build it together.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-70 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "AI-Powered Document Intelligence & Recommendation System",
    des: "Intelligent document processing platform with semantic search and personalized recommendations using LLMs, RAG pipelines, and vector databases across legal, healthcare, and financial documents.",
    detail: "Built ETL workflows with Apache Spark & Medallion Architecture. Integrated OpenAI, Llama, Claude via LangChain. Implemented vector search with Pinecone & Elasticsearch. Deployed on AWS EC2 with OAuth 2.0 & HIPAA compliance.",
    img: "/b5.svg",
    iconLists: ["/python.svg", "/re.svg"],
    techStack: "Python · FastAPI · PostgreSQL · Apache Spark · Pinecone · LangChain · OpenAI · Docker · AWS",
  },
  {
    id: 2,
    title: "AI-Driven Data Pipeline & Analytics Platform",
    des: "Scalable ETL pipeline using Apache Spark and Medallion Architecture (Bronze, Silver, Gold layers) for large-scale data transformation and real-time decision-making.",
    detail: "Designed high-performance Data Warehouse on PostgreSQL & AWS Redshift. Integrated LLMs with vector embeddings for NLP-based analytics. Automated ingestion using AWS Glue & Lambda with Elasticsearch indexing.",
    img: "/b5.svg",
    iconLists: ["/python.svg"],
    techStack: "Python · Apache Spark · PostgreSQL · AWS Redshift · LangChain · OpenAI · Docker · Lambda",
  },
  {
    id: 3,
    title: "Bridging Imagination & Reality — AI Fashion Designer",
    des: "AI system that transforms hand-drawn designer sketches into realistic fashion images using TensorFlow and OpenAI GPT with a continuous learning feedback mechanism.",
    detail: "Led AI model design using TensorFlow & OpenAI GPT. Integrated with React frontend for real-time image generation. Built continuous learning pipeline to refine accuracy from user feedback. Secured with OAuth 2.0 & Cloud IAM.",
    img: "/b5.svg",
    iconLists: ["/python.svg", "/re.svg"],
    techStack: "Python · TensorFlow · OpenAI GPT · Django · PostgreSQL · React · AWS · Docker",
  },
  {
    id: 4,
    title: "Liferay AI-Powered Enterprise Chatbot",
    des: "Enterprise AI chatbot integrated with Liferay portal to automate website creation and user management via NLP and a microservices architecture.",
    detail: "Developed NLP-based intent recognition using OpenAI. Built microservices with Kafka event streaming & Zipkin tracing. Managed Liferay API integration for automated task execution. Implemented role-based access control & session management.",
    img: "/b5.svg",
    iconLists: ["/python.svg"],
    techStack: "OpenAI · NLP · Django · REST APIs · PostgreSQL · Docker · Kubernetes · Kafka · AWS",
  },
  {
    id: 5,
    title: "Tourist Guide using AI",
    des: "Intelligent travel assistant providing personalized tourism recommendations using RAG, Google Places API, Wikipedia, and voice command functionality.",
    detail: "Built RAG model for AI-generated travel facts. Integrated Google Places & Wikipedia APIs in a microservices backend. Implemented voice commands with real-time caching. Led DevOps — CI/CD pipelines, monitoring, and infrastructure automation.",
    img: "/b5.svg",
    iconLists: ["/python.svg"],
    techStack: "Python · Django · PostgreSQL · TensorFlow · REST APIs · OAuth 2.0 · Docker · Kubernetes · Celery",
  },
  {
    id: 6,
    title: "E-Commerce Web Scraping Platform",
    des: "Universal scraper for 100+ e-commerce sites using Scrapy and Selenium, with application/ld+json parsing and a Shopify-specific scraper.",
    detail: "Started with Selenium for 100+ sites, migrated to Scrapy for server-efficiency. Built Universal Scraper using meta tags. Developed specialized Shopify scraper. Created Flask API for real-time scraping responses.",
    img: "/b5.svg",
    iconLists: ["/python.svg"],
    techStack: "Scrapy · Selenium · Flask · Python · BeautifulSoup",
  },
  {
    id: 7,
    title: "🏢 Enterprise Multi-Tenant AI SaaS Platform",
    des: "Production-grade, multi-tenant SaaS platform serving 50+ enterprise clients — enabling each tenant to fine-tune, deploy, and monitor their own private LLM-powered assistants with strict data isolation and governance.",
    detail: "Built multi-tenant architecture with Row-Level Security in PostgreSQL and per-tenant vector namespaces in Pinecone. Implemented fine-tuning pipelines for OpenAI & Llama 2 using LoRA adapters. Designed async task queuing via Celery + Redis. Enforced RBAC, SOC 2-compliant audit logs, rate limiting, and per-tenant billing via Stripe API. Deployed with Kubernetes (EKS) using Helm charts, ArgoCD for GitOps, and Datadog for observability.",
    img: "/b5.svg",
    iconLists: ["/python.svg", "/re.svg"],
    techStack: "Python · FastAPI · LangChain · OpenAI · Llama 2 · Pinecone · PostgreSQL · Celery · Redis · Kubernetes · AWS EKS · ArgoCD · Stripe · Datadog",
  },
  {
    id: 8,
    title: "🏢 Real-Time Fraud Detection & Risk Intelligence Engine",
    des: "Distributed, real-time fraud detection system processing 500K+ transactions/day using ML models, Apache Kafka event streaming, and a dynamic rule engine — deployed for a fintech enterprise handling $2B+ in annual transactions.",
    detail: "Architected Kafka-based event streaming pipeline with sub-50ms latency. Built XGBoost & PyTorch neural network ensemble models achieving 99.3% precision on fraud detection. Designed a dynamic rule engine with Redis-based feature store for real-time feature serving. Integrated Apache Flink for stateful stream processing. Built Grafana + Prometheus dashboards for real-time fraud signal monitoring. Ensured PCI-DSS compliance with end-to-end encryption and secure secret management via AWS Secrets Manager.",
    img: "/b5.svg",
    iconLists: ["/python.svg"],
    techStack: "Python · Apache Kafka · Apache Flink · XGBoost · PyTorch · Redis · PostgreSQL · FastAPI · AWS · Grafana · Kubernetes",
  },
  {
    id: 9,
    title: "Autonomous Research & Summarization Agent",
    des: "LangGraph-powered autonomous AI agent that independently researches topics using web search, synthesizes findings from multiple sources, and generates structured research reports with citations — in under 60 seconds.",
    detail: "Built multi-step agent graph using LangGraph with autonomous tool-use (Tavily Search, Wikipedia, ArXiv APIs). Implemented memory persistence with LangChain + Chroma vector store for context-aware follow-up. Added streaming responses via Server-Sent Events (SSE). Deployed as a FastAPI microservice with a Next.js frontend for real-time report generation.",
    img: "/b5.svg",
    iconLists: ["/python.svg", "/re.svg"],
    techStack: "Python · LangGraph · LangChain · OpenAI GPT-4o · Chroma · FastAPI · Tavily · Next.js · Docker",
  },
];

export const testimonials = [
  {
    quote:
      "Kunal consistently delivers robust AI solutions that exceed expectations. His deep expertise in LLMs and data pipelines has been invaluable to our team.",
    name: "Engineering Lead",
    img: '/profile.svg',
    title: "Director of Engineering",
  },
];

export const companies = [
  {
    id: 1,
    name: "AWS",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "docker",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 3,
    name: "openai",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Sr. AI Developer",
    desc: "Led end-to-end development of AI-powered applications integrating LLMs, RAG pipelines, and vector databases. Built scalable generative AI solutions using OpenAI, Llama, and Claude.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Data Engineer — ETL & Big Data",
    desc: "Designed and implemented Apache Spark-based ETL pipelines using Medallion Architecture. Optimized Data Warehousing on AWS (EC2, S3, Redshift) with real-time and batch processing.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Python Backend Developer",
    desc: "Built high-performance REST APIs using FastAPI, Django, and Flask with PostgreSQL and MongoDB. Integrated OAuth 2.0, AWS IAM, and Docker for scalable, secure deployments.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Web Scraping & Automation Engineer",
    desc: "Developed universal and site-specific scrapers using Scrapy and Selenium for 100+ e-commerce sites. Built ElasticSearch-powered search engines and PostgreSQL data pipelines.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: 'https://github.com/kz2511',
  },
  {
    id: 2,
    img: "/link.svg",
    link: 'https://linkedin.com/in/kz2511',
  },
];


export const approach = [
  {
    order: 'Phase 1',
    title: "Discovery & Architecture Blueprint",
    des: "We start by deeply understanding your data landscape, business objectives, and AI requirements. I audit existing systems, define success metrics, and map out the ideal end-to-end architecture — from data ingestion to model deployment — ensuring every component is purposeful and aligned with your strategic goals.",
    icon: "🔍",
    highlights: ["Requirements gathering & stakeholder alignment", "System audit & feasibility analysis", "Architecture design & tech stack selection", "Risk identification & mitigation planning"],
    color: "from-violet-500 to-purple-600",
    bgLight: "bg-violet-50",
    borderColor: "border-violet-200",
  },
  {
    order: 'Phase 2',
    title: "Data Engineering & Pipeline Design",
    des: "Clean, reliable data is the foundation of every AI system. I design and build robust ETL/ELT pipelines using Apache Spark and Medallion Architecture, establish data quality checks, implement feature stores, and ensure your data flows seamlessly from raw sources to model-ready formats.",
    icon: "⚙️",
    highlights: ["ETL/ELT pipeline development with Apache Spark", "Medallion Architecture (Bronze → Silver → Gold)", "Data quality validation & anomaly detection", "Feature engineering & vector embedding pipelines"],
    color: "from-blue-500 to-cyan-500",
    bgLight: "bg-blue-50",
    borderColor: "border-blue-200",
    otherProp: { colors: [[125, 211, 252]], dotSize: 2 }
  },
  {
    order: 'Phase 3',
    title: "AI & Model Development",
    des: "With clean data flowing, I build, fine-tune, and evaluate the AI models. Whether it's RAG pipelines, LLM orchestration with LangChain, or custom PyTorch models — I iterate rapidly through experiments, track results with MLflow, and select the best-performing approach for your specific problem.",
    icon: "🧠",
    highlights: ["LLM fine-tuning (LoRA/QLoRA) & RAG pipeline development", "Model evaluation, benchmarking & A/B testing", "Prompt engineering & LangGraph agent design", "MLflow/W&B experiment tracking & model registry"],
    color: "from-emerald-500 to-teal-500",
    bgLight: "bg-emerald-50",
    borderColor: "border-emerald-200",
    otherProp: { colors: [[167, 243, 208]], dotSize: 2 }
  },
  {
    order: 'Phase 4',
    title: "Backend Integration & API Development",
    des: "Once models are validated, I build the production-grade backend that brings everything together. Using FastAPI, I create high-performance REST & streaming APIs, integrate with existing systems (Liferay, Salesforce, internal databases), and implement robust auth, rate limiting, and observability.",
    icon: "🔗",
    highlights: ["High-performance FastAPI/Django REST & streaming APIs", "System integration (Kafka event streaming, webhooks)", "OAuth 2.0, RBAC & API security hardening", "OpenAPI documentation & SDK generation"],
    color: "from-orange-500 to-amber-500",
    bgLight: "bg-orange-50",
    borderColor: "border-orange-200",
    otherProp: { colors: [[255, 166, 158]], dotSize: 2 }
  },
  {
    order: 'Phase 5',
    title: "Deployment, DevOps & Scaling",
    des: "I containerize and deploy your AI solution on AWS or GCP using Docker and Kubernetes. CI/CD pipelines automate testing and deployment. I configure autoscaling, set up infrastructure as code with Terraform, and ensure the system is production-hardened — performant, resilient, and cost-efficient under load.",
    icon: "🚀",
    highlights: ["Docker & Kubernetes orchestration (AWS EKS / GKE)", "CI/CD pipelines with GitHub Actions & ArgoCD", "Infrastructure as Code with Terraform & Helm", "Load testing, horizontal scaling & cost optimization"],
    color: "from-pink-500 to-rose-500",
    bgLight: "bg-pink-50",
    borderColor: "border-pink-200",
    otherProp: { colors: [[221, 255, 247]], dotSize: 3 }
  },
  {
    order: 'Phase 6',
    title: "Monitoring, Iteration & Long-Term Support",
    des: "Deployment is not the finish line. I set up Grafana/Datadog dashboards for real-time monitoring, configure alerting for model drift and data quality degradation, and maintain a continuous improvement loop. I remain available post-launch for support, new feature development, and performance tuning.",
    icon: "📊",
    highlights: ["Grafana + Prometheus / Datadog observability stack", "Model drift detection & automated retraining triggers", "Performance tuning, cost monitoring & SLA enforcement", "Regular review cycles & iterative feature development"],
    color: "from-sky-500 to-indigo-500",
    bgLight: "bg-sky-50",
    borderColor: "border-sky-200",
    otherProp: { colors: [[125, 211, 252]], dotSize: 2 }
  },
];


export const skills = [
  // AI / ML
  { Icon: FaPython, name: 'Python', prog: 97, category: 'AI & ML', color: '#306998' },
  { Icon: SiTensorflow, name: 'TensorFlow', prog: 88, category: 'AI & ML', color: '#ff6f00' },
  { Icon: SiPytorch, name: 'PyTorch', prog: 85, category: 'AI & ML', color: '#ee4c2c' },
  { Icon: SiOpenai, name: 'OpenAI / LLMs', prog: 92, category: 'AI & ML', color: '#74aa9c' },
  { Icon: SiHuggingface, name: 'Hugging Face', prog: 85, category: 'AI & ML', color: '#ffd21e' },
  { Icon: SiLangchain, name: 'LangChain', prog: 88, category: 'AI & ML', color: '#1c3c3c' },
  { Icon: SiScikitlearn, name: 'Scikit-learn', prog: 85, category: 'AI & ML', color: '#f89939' },
  { Icon: SiPandas, name: 'Pandas', prog: 90, category: 'AI & ML', color: '#150458' },
  { Icon: SiNumpy, name: 'NumPy', prog: 90, category: 'AI & ML', color: '#4dabcf' },
  { Icon: SiJupyter, name: 'Jupyter', prog: 90, category: 'AI & ML', color: '#f37626' },

  // Backend & Frameworks
  { Icon: SiFastapi, name: 'FastAPI', prog: 90, category: 'Backend', color: '#009688' },
  { Icon: SiDjango, name: 'Django / DRF', prog: 92, category: 'Backend', color: '#44b78b' },
  { Icon: SiFlask, name: 'Flask', prog: 88, category: 'Backend', color: '#000000' },

  // Data Engineering
  { Icon: SiApachespark, name: 'Apache Spark', prog: 85, category: 'Data Engineering', color: '#e25a1c' },
  { Icon: SiApachehadoop, name: 'Hadoop', prog: 78, category: 'Data Engineering', color: '#fae234' },
  { Icon: SiApachekafka, name: 'Kafka', prog: 80, category: 'Data Engineering', color: '#231f20' },
  { Icon: SiElasticsearch, name: 'Elasticsearch', prog: 82, category: 'Data Engineering', color: '#fed10a' },
  { Icon: SiPostgresql, name: 'PostgreSQL', prog: 88, category: 'Data Engineering', color: '#336791' },
  { Icon: SiMongodb, name: 'MongoDB', prog: 80, category: 'Data Engineering', color: '#4db33d' },
  { Icon: SiRedis, name: 'Redis', prog: 78, category: 'Data Engineering', color: '#dc382d' },

  // Scraping & Automation
  { Icon: SiScrapy, name: 'Scrapy', prog: 90, category: 'Scraping & Tools', color: '#60a839' },
  { Icon: SiCelery, name: 'Celery', prog: 82, category: 'Scraping & Tools', color: '#a9cc54' },

  // Cloud & DevOps
  { Icon: FaGitAlt, name: 'Git', prog: 92, category: 'Cloud & DevOps', color: '#f05032' },
];
