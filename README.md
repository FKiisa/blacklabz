# Black Labz Task – Crypto Price Viewer

This project fetches live crypto/fiat prices (e.g., TON/USDT) from CoinGecko, caches them for speed, persists them in PostgreSQL, and visualizes them in a simple React frontend.

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
- **Postgres DB** (via Docker Compose)
  - `prices` table auto-created on startup
  - Stores `(token, currency, pair, price, at)`

---


## Setup
### Prerequisites
- Node - v22.19.0
- Docker Daemon needs to be running (e.g. Docker Desktop)
### 1. Start database
```bash
docker-compose up -d
```
### 2. Install and start backend
```bash
cd backend
cp .env.example .env
npm install
npm run start:dev
```
### 3. Install and start frontend
```bash
cd frontend
npm install
npm run dev
```
