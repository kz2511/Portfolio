"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const projectsData = [
  {
    id: 1,
    title: "AI-Powered Document Intelligence & Recommendation System",
    category: "Generative AI · RAG · Vector DB",
    des: "Designed and developed an AI-driven platform for intelligent document processing, semantic search, and personalized recommendations using LLMs and vector databases across legal, healthcare, and financial documents.",
    bullets: [
      "Engineered a document ingestion pipeline using Scrapy, Selenium & BeautifulSoup for automated multi-source extraction",
      "Built ETL workflows with Apache Spark & Medallion Architecture to preprocess metadata and document embeddings",
      "Developed backend APIs in FastAPI + PostgreSQL supporting dynamic queries, semantic search & real-time recommendations",
      "Integrated OpenAI, Llama & Claude via LangChain and RAG pipelines for context-aware summarization and Q&A",
      "Implemented vector search with Pinecone & Elasticsearch for lightning-fast document retrieval and relevance scoring",
      "Deployed on AWS EC2 & Hugging Face Spaces with OAuth 2.0 & AWS IAM for HIPAA/GDPR compliance",
    ],
    techStack:
      "Python · FastAPI · PostgreSQL · Apache Spark · Pinecone · Elasticsearch · LangChain · OpenAI · Llama · Docker · AWS EC2 · Hugging Face · Streamlit · GitHub Actions",
    color: "#7928CA",
  },
  {
    id: 2,
    title: "AI-Driven Data Pipeline & Analytics Platform",
    category: "Data Engineering · ETL · Big Data",
    des: "Designed and implemented an AI-powered data processing pipeline using Apache Spark, ETL workflows, and Medallion Architecture to manage large-scale datasets and enable predictive analytics.",
    bullets: [
      "Designed scalable ETL pipeline with Medallion Architecture (Bronze → Silver → Gold) for structured data processing",
      "Developed high-performance Data Warehouse on PostgreSQL & AWS Redshift for AI-driven analytics storage",
      "Integrated LLMs (Llama, OpenAI) with vector embeddings to power NLP-based insights and predictive analytics",
      "Optimized big data workflows on AWS (EC2, S3, Redshift) ensuring high availability and cost-efficient performance",
      "Automated data extraction, transformation & real-time analytics using AWS Glue, Lambda & Elasticsearch",
      "Implemented OAuth 2.0 & Cloud IAM for secure access control and GDPR-compliant data handling",
    ],
    techStack:
      "Python · SQL · Apache Spark · PostgreSQL · AWS Redshift · ETL · LangChain · OpenAI · TensorFlow · Cloud IAM · Docker · Lambda · Medallion Architecture",
    color: "#0070F3",
  },
  {
    id: 3,
    title: "Bridging Imagination & Reality — AI Fashion Designer",
    category: "Computer Vision · Generative AI · Image Synthesis",
    des: "Built a sophisticated AI image generation system that transforms hand-drawn designer sketches into realistic fashion product images, with a continuous learning mechanism to improve accuracy from user feedback.",
    bullets: [
      "Led AI model design using TensorFlow & OpenAI GPT to translate designer sketches into high-fidelity images",
      "Integrated the AI solution with a React frontend enabling real-time seamless image generation interaction",
      "Designed a continuous learning pipeline gathering user feedback to refine model accuracy iteratively",
      "Built scalable Django + PostgreSQL backend to handle large volumes of sketch data and generation requests",
      "Secured designer IP with OAuth 2.0 and Cloud IAM for encrypted, role-based data access control",
      "Collaborated with UX Designers & Prompt Engineers to refine the generation quality and user experience",
    ],
    techStack:
      "Python · TensorFlow · OpenAI GPT · Django · PostgreSQL · React · AWS · OAuth 2.0 · Docker · REST APIs · TensorFlow Serving",
    color: "#FF4D4D",
  },
  {
    id: 4,
    title: "Liferay AI-Powered Enterprise Chatbot",
    category: "NLP · Microservices · Enterprise AI",
    des: "Enhanced the Liferay enterprise portal with an AI chatbot that automates website creation and user management tasks via NLP, built on a scalable microservices architecture with Kafka event streaming.",
    bullets: [
      "Developed AI functionalities using OpenAI for intent recognition and accurate NLP-based query processing",
      "Designed microservices architecture for chatbot modules ensuring scalability, modularity and fault tolerance",
      "Integrated Liferay API for seamless task automation — website creation, user provisioning and portal management",
      "Built & maintained RESTful APIs for efficient two-way communication between the chatbot and Liferay platform",
      "Implemented role-based access control and data encryption for secure enterprise-grade chatbot sessions",
      "Added Kafka for event streaming & Zipkin for distributed tracing across microservices in production",
    ],
    techStack:
      "OpenAI GPT · NLP · TensorFlow · Django · REST APIs · PostgreSQL · Docker · Kubernetes · AWS · Kafka · Zipkin · CI/CD · Microservices",
    color: "#00B4D8",
  },
  {
    id: 5,
    title: "Tourist Guide using AI",
    category: "RAG · Recommendation · Voice AI",
    des: "An intelligent AI-powered tourist guide offering personalized recommendations using RAG, Google Places API, Wikipedia integration, voice commands, and real-time caching for enhanced travel experiences.",
    bullets: [
      "Built AI-driven NLP functions for understanding user queries and generating facts about tourist destinations",
      "Implemented a RAG model to improve AI-generated facts quality from external knowledge sources",
      "Designed microservices backend with REST APIs integrating Google Places API & Wikipedia API",
      "Integrated ML models to rank places based on user location, popularity and relevance scoring",
      "Built intuitive voice command functionality with real-time data processing using memory caching with Redis/Celery",
      "Led DevOps efforts with CI/CD pipelines for automated testing, deployment and infrastructure monitoring",
    ],
    techStack:
      "Python · Django · PostgreSQL · REST APIs · OAuth 2.0 · Cloud IAM · AWS · TensorFlow · Docker · Kubernetes · Celery · GitHub CI/CD",
    color: "#10B981",
  },
  {
    id: 6,
    title: "E-Commerce Web Scraping Platform",
    category: "Web Scraping · Automation · Data Extraction",
    des: "Universal scraping platform built for 100+ e-commerce sites using Scrapy and Selenium. Solved dynamic content challenges with application/ld+json parsing and built a specialized Shopify-specific scraper.",
    bullets: [
      "Started with Selenium across 100+ e-commerce sites; migrated to Scrapy to eliminate server memory errors",
      "Devised innovative solution using script tags with application/ld+json format for dynamic content extraction",
      "Built a Universal Scraper using meta tags to extract product data across diverse website structures",
      "Developed a specialized Shopify-specific scraper tailored for any Shopify-powered storefront",
      "Created Flask-powered API to return real-time scraping responses to end users on URL submission",
      "Implemented structured data transformation pipelines to standardize product data across site formats",
    ],
    techStack:
      "Python · Scrapy · Selenium · BeautifulSoup · Flask · PostgreSQL · ElasticSearch · Django REST Framework",
    color: "#F59E0B",
  },
];

const Projects = () => (
  <section className="py-16" id="projects">
    <h1 className="heading">
      A selection of <span className="text-purple">recent projects</span>
    </h1>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-2 md:px-4">
      {projectsData.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  </section>
);

const ProjectCard = ({
  title,
  category,
  des,
  bullets,
  techStack,
  color,
}: {
  id: number;
  title: string;
  category: string;
  des: string;
  bullets: string[];
  techStack: string;
  color: string;
}) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <motion.div
      layout
      className="relative rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgb(4,7,26)] overflow-hidden flex flex-col"
      style={{ boxShadow: `0 0 0 1px rgba(255,255,255,0.04)` }}
      whileHover={{
        boxShadow: `0 0 30px 2px ${color}22, 0 0 0 1px ${color}44`,
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Coloured top accent bar */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
      />

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Category pill */}
        <span
          className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full w-fit mb-3"
          style={{ background: `${color}22`, color }}
        >
          {category}
        </span>

        {/* Title — always visible, prominent */}
        <h2 className="font-bold text-sm md:text-base text-white leading-snug mb-2 line-clamp-2">
          {title}
        </h2>

        {/* Summary */}
        <p className="text-[13px] text-[#BEC1DD] leading-relaxed line-clamp-3 mb-4">
          {des}
        </p>

        {/* View Details toggle button — inside the card */}
        <button
          onClick={() => setShowDetail((v) => !v)}
          className="mt-auto flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg w-fit transition-all duration-200"
          style={{
            background: showDetail ? `${color}33` : `${color}18`,
            color,
            border: `1px solid ${color}44`,
          }}
        >
          <span>{showDetail ? "Hide Details" : "View Details"}</span>
          <motion.span
            animate={{ rotate: showDetail ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            style={{ display: "inline-block", lineHeight: 1 }}
          >
            ▼
          </motion.span>
        </button>

        {/* Expandable detail block — no bending, native document flow */}
        <AnimatePresence initial={false}>
          {showDetail && (
            <motion.div
              key="detail"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-4 border-t border-[rgba(255,255,255,0.07)] pt-4">
                <ul className="space-y-2 mb-4">
                  {bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-[12px] text-[#BEC1DD] leading-relaxed"
                    >
                      <span style={{ color, flexShrink: 0, marginTop: "3px" }}>
                        ▸
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="rounded-xl p-3"
                  style={{
                    background: `${color}10`,
                    border: `1px solid ${color}22`,
                  }}
                >
                  <p
                    className="text-[10px] font-bold uppercase tracking-widest mb-1.5"
                    style={{ color }}
                  >
                    Tech Stack
                  </p>
                  <p className="text-[11px] text-[#BEC1DD] leading-relaxed">
                    {techStack}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Projects;
