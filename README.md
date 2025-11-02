# IEDC IEM Salt Lake - Innovation and Entrepreneurship Development Center

A modern full-stack web application for the Innovation and Entrepreneurship Development Center (IEDC) at IEM Salt Lake. This platform showcases the center's mission, team, incubated startups, research activities, and events.

## Features

- **Modern Tech Stack**: React 18 with TypeScript, Express.js backend
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Library**: shadcn/ui for consistent, accessible UI components
- **Database Integration**: Drizzle ORM with PostgreSQL support
- **Fast Development**: Vite for lightning-fast hot module replacement

## Project Structure

```
iedc_website
├── client/                 # Frontend React application
│   ├── src/               # React components and pages
│   └── index.html         # Main HTML template
├── server/                # Backend Express.js application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── storage.ts        # Data storage layer
├── shared/               # Shared TypeScript schemas
├── attached_assets/      # Static assets and data files
└── dist/                # Production build output
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL database (optional, uses memory storage by default)

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd iedc-website
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables (optional):

```bash
# Create .env file for database configuration
DATABASE_URL=your_postgresql_connection_string
```

### Development

#### Option 1: Full-stack development (recommended for production testing)

```bash
npm run build
npm start
```

The application will be available at `http://localhost:5000`

#### Option 2: Frontend-only development (faster for UI development)

```bash
npm run dev:vite
```

The frontend will be available at `http://localhost:5173`
Note: API calls will need to be proxied or mocked in this mode.

#### Option 3: Separate frontend and backend (for API development)

Terminal 1 (Backend):

```bash
npm run dev:server
```

Terminal 2 (Frontend):

```bash
npm run dev:vite
```

### Building for Production

1. Build the application:

```bash
npm run build
```

2. Start the production server:

```bash
npm start
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Type check with TypeScript
- `npm run db:push` - Push database schema changes

## Deployment

### AWS EC2 Deployment

1. Clone the repository on your EC2 instance
2. Install Node.js (v18 or higher)
3. Install dependencies: `npm install`
4. Set environment variables (optional): `export DATABASE_URL=your_db_url`
5. Build the application: `npm run build`
6. Start the production server: `npm start`

For production, consider using a process manager like PM2:

```bash
npm install -g pm2
pm2 start dist/index.js --name "iedc-website"
```

## Technology Stack

### Frontend

- **React 18** with TypeScript
- **Vite** for build tooling and development server
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **TanStack Query** for server state management
- **Wouter** for client-side routing

### Backend

- **Express.js** with TypeScript
- **Drizzle ORM** for database operations
- **Zod** for schema validation
- **Memory storage** with PostgreSQL support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details
