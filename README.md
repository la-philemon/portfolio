# 🚀 Intellix Portfolio
Enterprise Grade Full-Stack Developer Portfolio with AI Twin, Microservices Architecture & Production Infrastructure

---

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Folder Structure](#folder-structure)
3. [Features](#features)
4. [Technology Stack](#technology-stack)
5. [Setup Instructions](#setup-instructions)
6. [Environment Variables](#environment-variables)
7. [Development](#development)
8. [Build & Deployment](#build--deployment)
9. [Infrastructure](#infrastructure)
10. [Microservices Architecture](#microservices-architecture)

---

## 🎯 Project Overview
Production-ready Next.js 15 portfolio built with modern architecture patterns, featuring:
- ✅ AI Chat Twin (GPT-4o powered)
- ✅ Sanity CMS Headless Backend
- ✅ Enterprise Folder Structure
- ✅ Microservices Ready
- ✅ Production Monitoring & Observability
- ✅ Security Hardened Middleware
- ✅ Docker & Kubernetes Deployment

---

## 📂 Folder Structure
```
portfolio/
├── src/                                  # 🔥 MAIN SOURCE FOLDER
│   ├── app/                              # Next.js App Router
│   │   ├── (portfolio)/
│   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── about/
│   │   │   ├── dashboard/
│   │   │   └── sections/
│   │   │
│   │   ├── (chat)/
│   │   │   └── chat/
│   │   │       ├── page.tsx
│   │   │       └── loading.tsx
│   │   │
│   │   ├── studio/
│   │   │   └── [[...index]]/page.tsx
│   │   │
│   │   ├── api/
│   │   │   ├── chat/route.ts
│   │   │   ├── contact/route.ts
│   │   │   ├── analytics/route.ts
│   │   │   ├── logs/route.ts
│   │   │   └── revalidate/route.ts
│   │   │
│   │   ├── globals.css
│   │   └── layout.tsx
│   │
│   ├── components/
│   │   ├── ui/                           # Shadcn/UI base components
│   │   ├── layout/                       # Navbar, Footer, Dock, Themes
│   │   ├── sections/                     # Page sections (Hero, About etc)
│   │   ├── animations/
│   │   ├── charts/
│   │   ├── ai/                           # AI Twin components
│   │   └── shared/                       # Reusable cross-feature components
│   │
│   ├── features/                         # Domain feature modules
│   │   ├── ai-twin/
│   │   ├── portfolio/
│   │   ├── contact/
│   │   └── analytics/
│   │
│   ├── sanity/                           # Sanity CMS Integration
│   │   ├── schemas/
│   │   ├── lib/
│   │   └── config/
│   │
│   ├── lib/
│   │   ├── api.ts
│   │   ├── env.ts
│   │   ├── constants.ts
│   │   ├── helpers.ts
│   │   ├── logger.ts
│   │   ├── kafka.ts
│   │   ├── security.ts
│   │   └── monitoring.ts
│   │
│   ├── hooks/
│   ├── providers/
│   ├── store/
│   ├── types/
│   ├── styles/
│   └── middleware.ts                     # 🔒 Security Middleware
│
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── docs/
│   ├── architecture.md
│   ├── api.md
│   ├── setup.md
│   ├── deployment.md
│   └── security.md
│
├── infrastructure/                       # 🔥 DEVOPS / CLOUD
│   ├── docker/
│   │   ├── Dockerfile
│   │   └── docker-compose.yml
│   │
│   ├── kubernetes/
│   │   ├── deployment.yaml
│   │   ├── service.yaml
│   │   ├── ingress.yaml
│   │   └── hpa.yaml
│   │
│   ├── kafka/
│   │   ├── producer.ts
│   │   ├── consumer.ts
│   │   └── topics.ts
│   │
│   └── monitoring/
│       ├── prometheus.yml
│       └── grafana-dashboard.json
│
├── scripts/                              # Automation scripts
│   ├── seed.ts
│   ├── migrate.ts
│   └── healthcheck.ts
│
├── .env.local
├── .env.production
├── .dockerignore
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## ✨ Features

### 🎨 Frontend
- ✅ Next.js 15 App Router
- ✅ React 19
- ✅ Tailwind CSS v3
- ✅ Framer Motion Animations
- ✅ Fully Responsive Design
- ✅ Dark / Light Theme
- ✅ Floating Navigation Dock
- ✅ Advanced UI Components

### 🤖 AI Features
- ✅ GPT-4o AI Twin Chatbot
- ✅ Context Aware Responses
- ✅ Real-time Streaming
- ✅ Conversation History
- ✅ Rate Limiting
- ✅ Prompt Injection Protection

### 📝 Content Management
- ✅ Sanity CMS v3
- ✅ Real-time Preview
- ✅ Live Content Editing
- ✅ On-demand Revalidation
- ✅ Full Type Safety

### 🔒 Security
- ✅ Helmet Security Headers
- ✅ Rate Limiting
- ✅ CORS Protection
- ✅ XSS Protection
- ✅ CSRF Tokens
- ✅ Input Sanitization

### 📊 Observability
- ✅ Structured Logging
- ✅ Prometheus Metrics
- ✅ Grafana Dashboards
- ✅ Distributed Tracing
- ✅ Error Tracking

---

## 🛠 Technology Stack

| Layer               | Technologies |
|---------------------|--------------|
| **Frontend**        | Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion |
| **CMS**             | Sanity.io v3 |
| **AI**              | OpenAI GPT-4o, Vercel AI SDK |
| **Database**        | PostgreSQL, Redis |
| **Messaging**       | Apache Kafka |
| **DevOps**          | Docker, Kubernetes, Helm |
| **Monitoring**      | Prometheus, Grafana, OpenTelemetry |
| **CI/CD**           | GitHub Actions |
| **Deployment**      | Vercel, AWS, GCP |

---

## 🚀 Setup Instructions

### 1. Prerequisites
```bash
Node.js 20+
npm / yarn / pnpm
Docker (optional)
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
```bash
cp .env.local.example .env.local
```
Edit `.env.local` with your actual values

### 4. Start Development Server
```bash
npm run dev
```

Application will be available at: `http://localhost:3000`
Sanity Studio: `http://localhost:3000/studio`

---

## 🔑 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SITE_URL` | Application URL | ✅ |
| `OPENAI_API_KEY` | OpenAI GPT API Key | ✅ |
| `SANITY_PROJECT_ID` | Sanity Project ID | ✅ |
| `SANITY_DATASET` | Sanity Dataset | ✅ |
| `SANITY_API_TOKEN` | Sanity API Token | ✅ |
| `REDIS_URL` | Redis Connection URL | ⚪ |
| `KAFKA_BROKERS` | Kafka Brokers | ⚪ |

---

## 💻 Development

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | TypeScript validation |
| `npm run test` | Run test suite |
| `npm run test:watch` | Run tests in watch mode |
| `npm run sanity:dev` | Start Sanity Studio standalone |

---

## 🐳 Docker Deployment

```bash
# Build image
docker build -f infrastructure/docker/Dockerfile -t portfolio .

# Run with docker compose
docker-compose -f infrastructure/docker/docker-compose.yml up -d
```

---

## ☸️ Kubernetes Deployment

```bash
# Apply manifests
kubectl apply -f infrastructure/kubernetes/

# Check deployment
kubectl get pods
kubectl get services
kubectl get ingress
```

---

## 🏗 Microservices Architecture

This portfolio is designed as a modular monolith that can be easily split into microservices:

| Service | Responsibility |
|---------|----------------|
| **Frontend Service** | Next.js SSR / UI |
| **AI Service** | Chatbot / LLM operations |
| **Content Service** | Sanity CMS / Content API |
| **Analytics Service** | Metrics / Tracking |
| **Notification Service** | Email / Contact forms |

All services communicate via Apache Kafka for event streaming.

---

## 📄 License
Proprietary - All Rights Reserved

---
> Built with ❤️ using modern enterprise best practices