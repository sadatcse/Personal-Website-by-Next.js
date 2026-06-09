# 🖥️ Teaxo POS - Advanced Restaurant Management System Backend

[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green.svg?logo=node.js)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.21.2-lightgrey.svg?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v6.4.7-blue.svg?logo=mongodb)](https://www.mongodb.com/)
[![Socket.io](https://img.shields.io/badge/Socket.io-v4.8.1-010101.svg?logo=socket.dot-io)](https://socket.io/)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-API_Integration-orange.svg?logo=google-gemini)](https://ai.google.dev/)
[![AWS S3](https://img.shields.io/badge/AWS_S3-Storage-yellow.svg?logo=amazon-s3)](https://aws.amazon.com/s3/)

The backend of **Teaxo POS** is a high-performance RESTful API and real-time WebSocket server designed to power the Teaxo Restaurant Management System. Built using **Node.js (ES Modules)**, **Express**, and **MongoDB (Mongoose)**, it features robust authentication, fine-grained Role-Based Access Control (RBAC), automatic reporting engines, real-time live kitchen syncing via Socket.io, AWS S3 image hosting integration, and AI-powered forecasting modules leveraging Google Gemini.

---

## 🗺️ Table of Contents

- [✨ Core Capabilities](#-core-capabilities)
- [🛠️ Tech Stack & Integrations](#-tech-stack--integrations)
- [⚙️ Setup & Installation](#-setup--installation)
  - [1. Prerequisites](#1-prerequisites)
  - [2. Environment Configuration](#2-environment-configuration)
  - [3. Seeding Database](#3-seeding-database)
  - [4. Running the Server](#4-running-the-server)
- [📂 Modular Directory Structure](#-modular-directory-structure)
- [🔌 API Endpoint Structure](#-api-endpoint-structure)
- [🤖 AI & Scheduled Services](#-ai--scheduled-services)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Core Capabilities

*   **Modular Architecture**: Structured domain modules grouped inside `app/modules` with dedicated models, controllers, and routing rules.
*   **Real-time Event Synchronization**: Bidirectional Socket.io integration to broadcast POS orders instantly to the Kitchen Display System (KDS).
*   **Role-Based Access Control (RBAC)**: Fine-grained user permissions control checking cashier, waiter, chef, and admin roles.
*   **Automated Back-office Cron Jobs**: Auto-generated daily, weekly, and monthly HTML summary reports using EJS templates sent via Nodemailer.
*   **AWS S3 Asset Management**: Automated file uploading middleware using `multer` and `@aws-sdk/client-s3`.
*   **AI Business Forecasting**: Custom generative text and data analyses via Google Gemini API.

---

## 🛠️ Tech Stack & Integrations

| Dependency | Purpose |
| :--- | :--- |
| **Express & Node.js** | Core server routing, middlewares, and request processing. |
| **MongoDB & Mongoose** | Document-oriented database storage and object-relational mapping. |
| **Socket.io** | Low-latency WebSockets communication layer for live-kitchen orders. |
| **Google Gemini SDK** | Advanced data analysis, reviews sentiment classification, and chat models. |
| **AWS SDK v3 (S3)** | Secure media and receipt snapshot uploads. |
| **Passport.js & JWT** | Identity management with OAuth strategies (Google, Facebook) and local JSON Web Tokens. |
| **Nodemailer & EJS** | Email dispatch engine coupled with HTML templates for automatic PDF summary reports. |
| **Node-Cron** | Schedules background daily, weekly, and monthly sales calculations. |

---

## ⚙️ Setup & Installation

### 1. Prerequisites
Ensure you have the following installed on your machine:
*   [Node.js](https://nodejs.org/) (v18.x or v20.x recommended)
*   [MongoDB](https://www.mongodb.com/) (Atlas cluster or a local server)

### 2. Environment Configuration
Create a `.env` file in the root backend directory:

```env
NODE_ENV=development
PORT=8000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-signing-secret

# AWS S3 / DigitalOcean Spaces credentials
ACCESS_KEY_ID=your-aws-access-key
SPACES_SECRET=your-aws-secret-key
BUCKET=your-bucket-name
AWS_URL=your-bucket-subdomain

# Allowed CORS client hosts
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173

# Generative AI Key
GEMINI_API_KEY=your-google-gemini-api-key

# Email Server settings for reports
EMAIL_HOST=mail.your-domain.com
EMAIL_PORT=587
EMAIL_USER=reports@your-domain.com
EMAIL_PASS=your-smtp-password
```

### 3. Seeding Database
A demo database seeder is available under `services/demoSeeder.js`. To seed default Categories, Products, Users, Tables, and mock historical sales data:
1. Run the temporary execution seeder:
   ```bash
   node services/runSeeder.js
   ```

### 4. Running the Server
Start the development server with nodemon:
```bash
# Run server
npm run server
```

For production hosting:
```bash
npm start
```

---

## 📂 Modular Directory Structure

The project code is modularized into discrete entities. Below is a breakdown of the key directories:

```text
Texao-a-back/
├── app/
│   ├── Json/              # Calibration databases (calendars, default seed assets)
│   ├── helpers/           # Common utilities (AWS S3 client wrapper, response templates)
│   └── modules/           # Modular core business domains
│       ├── Product/       # Menu lists & pricing databases
│       ├── Invoice/       # Real-time POS checkout transactions
│       ├── Recipe/        # Multi-ingredient costing specifications
│       ├── Ingredient/    # Ingredient ledger master data
│       ├── Table/         # Dine-in layout and reservations
│       ├── Company/       # Branch config profiles
│       ├── User/          # Employee profiles & credentials
│       └── ...            # Additional modules (Vendors, Stock, Roles, Logs)
├── config/                # Global config scripts (database connections)
├── controllers/           # Shared top-level controllers
├── middleware/            # JWT authentication, file upload limits, error handlers
├── routes/                # Central route orchestrators
├── services/              # Seeder pipelines, AI models, cron-scheduler definitions
└── server.js              # Application entrypoint
```

---

## 🔌 API Endpoint Structure

The endpoints are mounted under `/api` in `routes/routes.js` and split logically by resource paths:

*   `/api/auth` — Login, registration, JWT refresh, OAuth.
*   `/api/products` — Item updates, inventory assignments.
*   `/api/invoices` — Point of Sale orders, registers counter, invoice downloads.
*   `/api/recipes` — Costing calculations, material formulas.
*   `/api/ingredients` — Stock check-ins, threshold alerts.
*   `/api/vendors` — Ledgers, payments, suppliers listing.
*   `/api/admin` — Global configuration, audit trails, activity trackers.

---

## 🤖 AI & Scheduled Services

*   **Scheduler (`services/scheduler.js`)**: Executes daily (1:00 AM), weekly (Friday 2:00 AM), and monthly (1st at 3:00 AM) cron jobs to calculate statistics, build PDF invoices, and email performance insights to administrators.
*   **Auto-Poster (`services/autoPoster.js`)**: Automatically posts or matches sales to adjust stock levels dynamically.
*   **Gemini Service (`services/geminiService.js`)**: Interfaces with the Gemini models to power natural language query translation and menu recommendations.

---

## 🤝 Contributing

1. Fork the Repository.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

This software is **Proprietary and Confidential**. All rights reserved. Under no circumstances may this source code be distributed or used without express authorization from the owner.
