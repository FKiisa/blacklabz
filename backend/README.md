# Backend

This is the backend of the **Black Labz Task** project. It provides the API layer, caching, and database persistence for crypto/fiat prices.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Unit Test](#unit-tests)

## Getting Started

Follow these instructions to set up and run the backend locally.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (22.19.0)
- [npm](https://www.npmjs.com/) (10.9.3)
- [Docker](https://www.docker.com/) (for Postgres DB)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/FKiisa/blacklabz.git
   cd blacklabz/backend
   ```

2. Install dependencies:

   ```bash
   cp .env.example .env
   npm install
   npm run start:dev
   ```

3. Ensure the database is running:
   ```bash
   docker-compose up -d
   ```

## Usage

To start the backend in development mode:

```bash
npm run start:dev
```

## Environment Variables

| Variable       | Description                               | Example                                           |
| -------------- | ----------------------------------------- | ------------------------------------------------- |
| `DATABASE_URL` | PostgreSQL connection string for the app. | `postgres://postgres:postgres@localhost:5432/app` |

---

## API Endpoints

### Prices

- **GET `/prices/:token/:currency`**  
  Fetch the current price for a token/currency pair.  
  Returns cached data if available (TTL: 1 minute).  
  Example response:
  ```json
  {
    "pair": "TON/EUR",
    "price": 2.76,
    "at": "2025-09-14T10:09:30.782Z",
    "cached": false
  }
  ```
- **GET `/prices/history/:token/:currency?limit=`**  
   Fetch the last n rows from the database for a token/currency pair, ordered by most recent first.
  Example response:
  ```json
  [
    {
      "pair": "TON/EUR",
      "price": 2.76,
      "at": "2025-09-14T10:09:30.782Z"
    },
    {
      "pair": "TON/EUR",
      "price": 2.74,
      "at": "2025-09-14T09:59:12.111Z"
    }
  ]
  ```

## Folder Structure

```
backend/
├── src/                 # Source code
│   ├── db/              # Database module (pg pool, init service)
│   │   ├── db.module.ts
│   │   └── db-init.service.ts
│   ├── prices/          # Prices module (controller, service, types)
│   │   ├── prices.controller.ts
│   │   ├── prices.service.ts
│   │   └── types/
│   ├── app.module.ts    # Root application module
│   └── main.ts          # Application entry point
├── test/                # Unit/integration tests
├── dist/                # Compiled output (after build)
├── package.json         # Project metadata and dependencies
├── tsconfig*.json       # TypeScript configuration files
└── README.md            # Backend documentation
```

## Unit Tests

To run tests run the following
```bash
npm run test
```