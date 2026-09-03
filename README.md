# Bank - Full Stack Application

A modern full-stack banking application with Next.js frontend, Node/Express backend, and PostgreSQL database.

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript, TailwindCSS
- **Backend**: Node.js, Express, TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **API**: RESTful API with standardized response format

## Project Structure

```
Bank/
├── frontend/                  # Next.js Frontend Application
│   ├── src/
│   │   ├── app/              # App Router pages & layouts
│   │   ├── hooks/            # Custom React hooks
│   │   ├── lib/              # Utilities and helpers
│   │   ├── services/         # API service layers
│   │   └── types/            # TypeScript interfaces
│   ├── public/               # Static assets
│   ├── .env.local            # Environment variables
│   ├── .env.example          # Example environment variables
│   ├── package.json
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── tsconfig.json
│
├── backend/                   # Node/Express Backend API
│   ├── src/
│   │   ├── config/           # Configuration files
│   │   ├── controllers/      # Route controllers
│   │   ├── middleware/        # Express middleware
│   │   ├── models/           # Data models
│   │   ├── routes/           # API routes
│   │   ├── services/         # Business logic
│   │   ├── utils/            # Utility functions
│   │   ├── types/            # TypeScript types
│   │   └── app.ts            # Express app entry
│   ├── prisma/
│   │   ├── schema.prisma     # Database schema
│   │   └── migrations/       # Database migrations
│   ├── .env                  # Environment variables
│   ├── .env.example          # Example environment variables
│   ├── package.json
│   └── tsconfig.json
│
├── .gitignore
├── .env.example               # Root example environment variables
├── docker-compose.yml         # Docker setup for PostgreSQL & pgAdmin
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 14+ (or Docker)
- npm or yarn or pnpm

### Setup

1. **Clone and install dependencies**

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

2. **Configure environment variables**

```bash
# Backend
cp backend/.env.example backend/.env
# Edit backend/.env with your database credentials

# Frontend
cp frontend/.env.example frontend/.env.local
```

3. **Start PostgreSQL (via Docker)**

```bash
docker-compose up -d
```

4. **Setup Database**

```bash
cd backend
npx prisma generate
npx prisma migrate dev --name init
```

5. **Start Development Servers**

```bash
# Terminal 1 - Backend (runs on port 5000)
cd backend
npm run dev

# Terminal 2 - Frontend (runs on port 3000)
cd frontend
npm run dev
```

## Scripts

### Backend
```bash
npm run dev              # Development server with hot reload
npm run build            # TypeScript compilation
npm run start            # Production server
npm run lint             # ESLint
npm run test             # Run tests
npm run prisma:generate  # Generate Prisma client
npm run prisma:migrate   # Run database migrations
npm run prisma:studio    # Open Prisma Studio GUI
```

### Frontend
```bash
npm run dev              # Development server
npm run build            # Production build
npm run start            # Production server
npm run lint             # ESLint
```

## Branch Strategy

- **main** — Base project structure and configuration only
- Feature branches will be created for specific functionality
