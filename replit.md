# ZambaJobs

## Overview

ZambaJobs is an AI-powered job portal designed for the Philippine market. It connects job seekers with employers through intelligent matching, featuring OpenAI-powered fraud detection and job-candidate scoring. The platform supports three user roles: job seekers, employers, and administrators, each with dedicated dashboards and functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript, built using Vite
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state and caching
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom theme configuration supporting light/dark modes
- **Forms**: React Hook Form with Zod validation schemas

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Authentication**: Hybrid system supporting JWT tokens, Google OAuth 2.0, and OTP email verification
- **Password Security**: Bcrypt for hashing with configurable salt rounds
- **Session Management**: PostgreSQL-backed sessions via connect-pg-simple

### Data Layer
- **Database**: PostgreSQL via Neon serverless
- **ORM**: Drizzle ORM with type-safe schema definitions
- **Schema Location**: `shared/schema.ts` contains all table definitions shared between frontend and backend

### AI Integration
- **Provider**: OpenAI API (GPT models)
- **Features**: 
  - Fraud detection for user profiles and job postings
  - Job-candidate match scoring (0-100 scale)
  - Profile image analysis support
- **Fallback**: System gracefully handles missing API keys

### File Storage
- **Service**: Google Cloud Storage via Replit's object storage integration
- **Use Cases**: Profile images, resumes, company logos, requirement documents

### Role-Based Access
- **Job Seekers**: Profile management, job search, applications, AI-powered recommendations
- **Employers**: Job posting, applicant management, candidate analytics
- **Admins**: User management, fraud alerts, platform analytics, contact message handling

## External Dependencies

### Database
- **Neon PostgreSQL**: Serverless Postgres with WebSocket connections (`@neondatabase/serverless`)

### Email Services
- **Resend**: Primary email provider for OTP verification, password resets, and notifications
- **SendGrid**: Alternative email integration available

### Authentication
- **Google OAuth 2.0**: Social login via `passport-google-oauth20`
- **Passport.js**: Authentication middleware framework

### AI/ML
- **OpenAI API**: Powers fraud detection and job matching algorithms

### Cloud Storage
- **Google Cloud Storage**: File uploads and document management
- **Replit Object Storage**: Alternative storage option for Replit deployments

### Frontend Libraries
- **Recharts**: Analytics dashboards and data visualization
- **date-fns**: Date formatting and manipulation
- **Lucide React**: Icon library