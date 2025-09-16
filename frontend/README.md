# Frontend

This is the frontend of the Black Labz Task project. It is responsible for the user interface and client-side logic of the application.

## Table of Contents
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Unit Test](#unit-tests)

## Getting Started

Follow these instructions to set up and run the frontend locally.

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (22.19.0)
- [npm](https://www.npmjs.com/) (10.9.3)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/FKiisa/blacklabz.git
    cd blacklabz/frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Usage

To start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`.

## Folder Structure

```
frontend/
├── public/         # Static asset (icon)
├── src/            # Source code
│   ├── components/ # Reusable components
│   ├── services/   # Services used for calls to the local API
│   ├── types/      # Types
│   ├── util/       # Utility functions
│   ├── main.tsx    # Entry point
|   ├── App.tsx     # Main component that will render subcomponents
│   ├── index.css   # Main body/html/root css
├── package.json    # Project metadata and dependencies
├── tsconfig*.json  # TypeScript configuration files
└── README.md       # Project documentation
```

## Unit Tests

To run tests run the following
```bash
npm run test
```