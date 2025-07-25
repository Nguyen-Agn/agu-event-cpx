# Replit.md

## Overview

This is a full-stack web application for a Vietnamese waste recycling program called "Chợ Xanh" (Green Market). The application allows students to register, log recycling activities, earn points, and participate in market sessions where they can exchange waste for gifts. It includes both student and admin interfaces.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite for development and production builds
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Session Management**: Simple in-memory session storage using Maps
- **API**: RESTful API endpoints
- **Development**: Hot module replacement via Vite integration

### Data Storage Solutions
- **Current**: In-memory storage (MemStorage) for development
- **Prepared**: Firebase Firestore integration ready
- **Schema Location**: Shared schema definitions in `/shared/schema.ts`
- **Firebase Config**: Configured for project "agu-event-cpx"
- **Collections**: students, transactions, market_sessions, admins
- **Note**: Firebase requires service account key for production use

## Key Components

### Database Schema
- **Students**: User accounts with personal info, student ID, and points balance
- **Transactions**: Recycling activities with waste type, weight, points earned
- **Market Sessions**: Scheduled events for waste collection
- **Admins**: Administrative user accounts

### Authentication & Authorization
- **Session-based**: Simple session management with random session IDs
- **Client Storage**: Session IDs stored in localStorage
- **Middleware**: Express middleware for session validation
- **Role-based**: Separate interfaces for students and admins

### API Endpoints
- `/api/register` - Student registration
- `/api/login` - User authentication
- `/api/logout` - Session termination
- `/api/me` - Current user information
- `/api/student/dashboard` - Student data and statistics
- `/api/admin/students` - Admin student management
- `/api/admin/transactions` - Admin transaction management
- `/api/market-sessions` - Market session information

### Frontend Pages
- **Home**: Landing page with program information and upcoming sessions
- **Register**: Student registration form with validation
- **Login**: Authentication for both students and admins
- **Dashboard**: Student interface showing points and transaction history
- **Admin**: Administrative interface for managing students and transactions

## Data Flow

1. **User Registration**: Students register with personal information, receive session ID
2. **Authentication**: Login validates credentials, creates session
3. **Student Dashboard**: Displays personal stats, transaction history, and points
4. **Admin Operations**: Admins can view all students, create transactions, manage market sessions
5. **Session Management**: Session IDs track user state across requests

## External Dependencies

### Core Libraries
- **Drizzle ORM**: Database operations and schema management
- **Neon Database**: Serverless PostgreSQL hosting
- **Zod**: Schema validation for forms and API inputs
- **React Hook Form**: Form state management with validation
- **TanStack Query**: API state management and caching

### UI Libraries
- **shadcn/ui**: Pre-built accessible components
- **Radix UI**: Headless UI primitives
- **Tailwind CSS**: Utility-first styling
- **Lucide React**: Icon library
- **date-fns**: Date formatting and manipulation

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety across the stack
- **ESBuild**: Production build optimization

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: Uses tsx for TypeScript execution
- **Production**: Compiled JavaScript with NODE_ENV=production
- **Database URL**: Required environment variable for PostgreSQL connection

### File Structure
- `/client`: Frontend React application
- `/server`: Backend Express server
- `/shared`: Common TypeScript definitions and schemas
- `/migrations`: Database migration files

The application follows a monorepo structure with clear separation between client, server, and shared code, making it suitable for deployment on platforms that support full-stack Node.js applications.