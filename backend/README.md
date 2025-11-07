# Catálogo de Bolos - Backend API

Backend API for the cake catalog application. This is a Node.js/Express/TypeScript REST API providing endpoints for product catalog, shopping cart, and reviews functionality.

## Features

- RESTful API architecture
- TypeScript for type safety
- Express.js framework
- In-memory data storage (no database)
- CORS enabled for frontend integration
- Comprehensive error handling
- Request validation with Zod

## Prerequisites

- Node.js 18.x or higher
- npm or yarn

## Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
```

## Development

```bash
# Run in development mode with hot reload
npm run dev
```

The API will be available at `http://localhost:3000`

## Build

```bash
# Build for production
npm run build

# Run production build
npm start
```

## Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## API Documentation

### Base URL

- Development: `http://localhost:3000/api/v1`
- Production: `https://api.yourdomain.com/api/v1`

### Endpoints

API endpoints will be documented as features are implemented.

## Project Structure

```
src/
├── api/              # API controllers
│   └── v1/           # API version 1
│       ├── external/ # Public endpoints
│       └── internal/ # Authenticated endpoints
├── routes/           # Route definitions
├── middleware/       # Express middleware
├── services/         # Business logic
├── utils/            # Utility functions
├── constants/        # Application constants
├── instances/        # Service instances
└── server.ts         # Application entry point
```

## Environment Variables

See `.env.example` for all available configuration options.

## License

ISC