# WhoIsVoting API

A simple REST API for managing voter registration data. Built with Node.js, Express, and TypeScript.

## What it does

- Basic CRUD operations for users
- Query users by location (city, state, zip)
- Get some basic stats
- Swagger docs for testing

## Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
npm start
```

## API Documentation

**Interactive API Documentation**: Visit `http://localhost:3000/docs` to access the full Swagger UI documentation with:
- Interactive endpoint testing
- Request/response examples
- Schema definitions
- Try-it-out functionality

## API Endpoints

### Health Check
- `GET /health` - Check API status

### User Operations
- `POST /api/users` - Create a new user
- `GET /api/users` - Get all users (with optional filtering)
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Query Endpoints
- `GET /api/users/city/:city` - Get users by city
- `GET /api/users/state/:state` - Get users by state
- `GET /api/users/zip/:zipCode` - Get users by zip code
- `GET /api/users/stats` - Get registration statistics

### Query Parameters
- `city` - Filter by city
- `state` - Filter by state
- `zipCode` - Filter by zip code
- `isRegistered` - Filter by registration status
- `votingPreference` - Filter by voting preference
- `politicalAffiliation` - Filter by political affiliation
- `limit` - Limit number of results
- `offset` - Offset for pagination

## Example Usage

### Create a User
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001",
    "dateOfBirth": "1990-01-01",
    "votingPreference": "in-person",
    "politicalAffiliation": "independent"
  }'
```

### Get Users by City
```bash
curl http://localhost:3000/api/users/city/New%20York
```

### Get Registration Statistics
```bash
curl http://localhost:3000/api/users/stats
```

