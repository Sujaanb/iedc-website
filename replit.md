# IEDC IEM Salt Lake - Innovation and Entrepreneurship Development Center

## Overview

This is a full-stack web application for the Innovation and Entrepreneurship Development Center (IEDC) at IEM Salt Lake. The application serves as a comprehensive digital platform showcasing the center's mission, team, incubated startups, and activities. Built with modern web technologies, it provides an engaging user experience with a professional design system.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast hot module replacement
- **Wouter** for lightweight client-side routing instead of React Router
- **Tailwind CSS** for utility-first styling with custom IEDC brand colors
- **shadcn/ui** component library for consistent, accessible UI components
- **TanStack Query (React Query)** for server state management and caching

### Backend Architecture
- **Express.js** server with TypeScript for API endpoints
- **Node.js** runtime environment
- **Modular routing system** with separation of concerns
- **Memory storage implementation** with interface for easy database migration
- **Error handling middleware** for consistent error responses

### Database Layer
- **Drizzle ORM** configured for PostgreSQL with Neon Database
- **Schema-first approach** with TypeScript type generation
- **Zod validation** integrated with database schemas
- **Migration system** using Drizzle Kit

## Key Components

### Frontend Components
- **Layout System**: Navigation, Footer, and responsive design
- **Page Components**: Home, About, Team, Events, Gallery, Contact, Innovation section (Startups, Patents, Research Grants, Publications, Projects)
- **UI Components**: Complete shadcn/ui component library implementation
- **Responsive Design**: Mobile-first approach with adaptive layouts

### Backend Services
- **Storage Interface**: Abstracted data layer supporting multiple implementations
- **API Routes**: RESTful endpoints with `/api` prefix
- **Static File Serving**: Vite integration for development and production builds
- **Request Logging**: Detailed logging for API requests with response times

### Data Models
- **User Schema**: Basic user management with username/password authentication
- **Extensible Schema**: Easy to add new entities like startups, events, gallery items

## Data Flow

1. **Client Requests**: React components make API calls through TanStack Query
2. **Server Processing**: Express routes handle requests and interact with storage layer
3. **Data Storage**: Storage interface abstracts database operations
4. **Response Caching**: TanStack Query caches responses for optimal performance
5. **UI Updates**: React components automatically re-render on data changes

## External Dependencies

### Frontend Dependencies
- **@radix-ui/***: Accessible UI primitives for shadcn/ui components
- **@tanstack/react-query**: Server state management
- **wouter**: Client-side routing
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **date-fns**: Date manipulation utilities

### Backend Dependencies
- **drizzle-orm**: Type-safe ORM for PostgreSQL
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **express**: Web application framework
- **tsx**: TypeScript execution for development

### Development Tools
- **vite**: Build tool and development server
- **typescript**: Type safety and tooling
- **tailwindcss**: CSS framework
- **postcss**: CSS processing
- **esbuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Development Environment
- **Replit Integration**: Configured for Replit development environment
- **Hot Module Replacement**: Instant updates during development
- **Development Banner**: Replit-specific development indicators

### Production Build
- **Vite Build**: Optimized frontend bundle generation
- **Server Bundle**: ESBuild for efficient server-side bundling
- **Static Assets**: Served from `dist/public` directory
- **Environment Variables**: Database URL and other configuration

### Database Setup
- **Neon PostgreSQL**: Serverless PostgreSQL database
- **Migration System**: Drizzle Kit for schema migrations
- **Connection Pooling**: Built-in connection management

## Changelog

```
Changelog:
- July 01, 2025. Initial setup
- July 29, 2025. Added Innovation & Research section with dropdown navigation (Startups, Patents, Research Grants, Publications, Projects)
- July 29, 2025. Created Events section featuring Bengal E-Summit 2024 with image gallery and event details
- July 29, 2025. Updated year of inception from 2014 to 2023
- July 29, 2025. Enhanced Team section with faculty member photos and detailed information
- July 29, 2025. Updated Home page statistics to reflect accurate data
- July 29, 2025. Fixed white text visibility issues by correcting CSS classes and adding font-weight to improve contrast
- July 29, 2025. Updated IEDC logo throughout the website using the provided brand logo image
- July 29, 2025. Enhanced text contrast for better readability on Badge components and buttons
- August 04, 2025. Implemented three-logo layout: IEM (top-left), UEM (top-right), IEDC (center home page)
- August 04, 2025. Moved "Year of Inception: 2023" from Home to About page
- August 04, 2025. Updated Team page: changed "Role" to "Bio", removed category tags, updated faculty designations
- August 04, 2025. Added Student Members section to Team page
- August 21, 2025. Integrated authentic student data from Excel file with 27 students organized by sub-committee hierarchy
- August 21, 2025. Updated student display: students now appear in ALL their sub-committees (32 total appearances across committees)
- August 21, 2025. Corrected Snehangshu De committee membership: removed from Management, kept in Events and Social Media/Collaboration only
- August 04, 2025. Combined AI and ML into "AI & Machine Learning", updated "RF & Microwave" to "RF, MF & Antenna"
- August 04, 2025. Reordered Innovation & Research navigation: Research Grants → Projects → Patents → Publications → Start-ups
- August 04, 2025. Added authentic IEM and UEM logos to navigation
- August 04, 2025. Updated footer copyright to "Developed by Sujaan & Sanket"
- August 21, 2025. Restructured Events section: Created year-wise event organization with separate pages for each event
- August 21, 2025. Created EventsOverview page showcasing events by year (2024, 2025) with different event categories
- August 21, 2025. Added individual event pages: Bengal E-Summit 2024, Tech Innovation Workshop 2024, Startup Pitch Competition 2024
- August 21, 2025. Updated About page content: new vision/mission statements, updated technology areas (removed MF, replaced AR/VR with VLSI, added Communications)
- August 21, 2025. Updated Team page faculty designations and removed "Our Expertise" section completely
- August 21, 2025. Removed specific prize amounts from events, using generic "attractive prizes and recognition" language
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```