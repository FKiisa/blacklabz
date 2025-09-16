# Black Labz Task – Crypto Price Viewer

This project fetches live crypto/fiat prices (e.g., TON/USDT) from CoinGecko, caches them for speed, persists them in PostgreSQL, and visualizes them in a simple React frontend.

In total this project took me approximately 5-6 hours to complete.

## Features

- **NestJS backend**
  - `GET /prices/:token/:currency` → live price
  - **Caching** (1 min TTL) with `@nestjs/cache-manager`
  - Persists prices to Postgres on **cache miss only**
  - `GET /prices/history/:token/:currency&limit=...` → recent DB rows
  - Error handling and automation tests
- **React frontend**
  - Select token + currency
  - Display current price & when was it last updated
  - Show recent history in a table
  - Component/Service tests
- **Postgres DB** (via Docker Compose)
  - `prices` table auto-created on startup
  - Stores `(token, currency, pair, price, at)`

## Tech Explanation
### NestJS
I went with NestJS because I wanted to challenge myself with something new. It gives a clear structure, built-in TypeScript, and good patterns like modules and dependency injection. That makes the project easier to grow later while keeping the code clean.

### PostgreSQL
I picked PostgreSQL because it’s reliable, easy to work with, and a solid choice for handling structured data like tokens or price history. It also plays nicely with Docker and can scale if the project grows.

### ReactJS
I went with React because I know it well and honestly, I just enjoy working with it. It’s fast to build UIs, has a huge ecosystem, and felt like the natural fit here. Also I'm a little fanboy

## Setup

### Prerequisites

- Node - v22.19.0
- Docker Daemon needs to be running (e.g. Docker Desktop)

### 1. Clone the project

```bash
git clone https://github.com/FKiisa/blacklabz.git
```

### 2. Start database

In the project root
```bash
docker-compose up -d
```

### 3. Install and start backend

```bash
cd backend
cp .env.example .env
npm install
npm run start:dev
```

### 4. Install and start frontend

```bash
cd frontend
npm install
npm run dev
```

## Future Improvements
- Add more trading pairs and multiple providers with fallback (allow adding custom pairs)
- Store and display historical price data with charts
- Improve error handling and show better messages in the UI
- Use Redis for caching instead of in-memory
- Add more tests (backend + frontend) for better coverage
- Translation support
- Dockerize all services
- Deploy to AWS/AzDo via IaC (terraform)
