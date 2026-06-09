# 🍽️ Teaxo POS - Advanced Restaurant Management System Client

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg?logo=react)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38bdf8.svg?logo=tailwind-css)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-4.12.23-5a0df8.svg?logo=daisyui)](https://daisyui.com/)
[![React Router](https://img.shields.io/badge/React_Router-v7.1.2-CA4245.svg?logo=react-router)](https://reactrouter.com/)
[![Socket.io](https://img.shields.io/badge/Socket.io-v4.8.1-010101.svg?logo=socket.dot-io)](https://socket.io/)

**Teaxo POS** is a state-of-the-art, feature-rich Point of Sale (POS) and comprehensive restaurant operation management client. Built on **React 18**, **Tailwind CSS & DaisyUI**, and **Sass**, it provides an elegant, highly responsive dashboard tailored to modern restaurants, multi-branch operations, and dark kitchens.

The application integrates real-time communications for kitchen sync, advanced recipe/ingredient costing, a vendor management ledger, robust role-based access control, and **AI-powered business intelligence/forecasting** models to optimize kitchen efficiency and profit margins.

---

## 🗺️ Table of Contents

- [✨ Key Feature Modules](#-key-feature-modules)
  - [🖥️ Smart POS & Order Management](#-smart-pos--order-management)
  - [🍳 Live Kitchen Display System (KDS)](#-live-kitchen-display-system-kds)
  - [🪑 Seating & Reservation System](#-seating--reservation-system)
  - [📦 Recipe Costing & Inventory Control](#-recipe-costing--inventory-control)
  - [🤖 AI Business Intelligence & Analytics](#-ai-business-intelligence--analytics)
  - [📊 Finance, Sales & Activity Auditing](#-finance-sales--activity-auditing)
  - [🛡️ Security & Fine-grained RBAC](#-security--fine-grained-rbac)
  - [🏢 Multi-Branch & Super Admin Suite](#-multi-branch--super-admin-suite)
- [📴 Offline POS & Sync Capabilities](#-offline-pos--sync-capabilities)
- [🛠️ Technology Stack](#-technology-stack)
- [⚙️ Setup & Installation](#-setup--installation)
  - [1. Prerequisites](#1-prerequisites)
  - [2. Clone & Install Dependencies](#2-clone--install-dependencies)
  - [3. Configure Environment Variables](#3-configure-environment-variables)
  - [4. Development & Build Scripts](#4-development--build-scripts)
- [📂 Directory Structure](#-directory-structure)
- [🔌 API & Environments Integration](#-api--environments-integration)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Key Feature Modules

### 🖥️ Smart POS & Order Management
*   **Fast-Lane Checkout**: Rapid checkout screen with real-time category filtering and visual menu selectors.
*   **Custom Orders & Modifiers**: Support for custom ingredient add-ons, variable modifiers, and custom instructions per plate.
*   **Hybrid Payment Methods**: Multi-gateway payment handling, discounts, vat/tax logic, and split bills.
*   **Dynamic Receipt Engine**: Real-time receipt previews using browser printing and PDF generators.
*   **Draft & Pending Orders**: Suspend orders (hold) and retrieve them seamlessly when the customer is ready.

### 🍳 Live Kitchen Display System (KDS)
*   **Real-time Synchronization**: Instant transmission of POS orders to the kitchen display screen using Socket.io.
*   **Visual Status Indicators**: Color-coded queue categories showing time elapsed, preparation stage (pending, cooking, ready), and order details.
*   **Kitchen Ticket Printer integration**: Direct receipt-to-kitchen printer routing.

### 🪑 Seating & Reservation System
*   **Lobby/Table View**: A visual floor map showing real-time occupancy status (Available, Occupied, Reserved).
*   **Reservation Bookings**: Secure booking slots for dine-in tables, managing guest counts, times, and pre-orders.

### 📦 Recipe Costing & Inventory Control
*   **Ingredient Master List**: Centrally log dry ingredients, meats, greens, and liquids with units (g, kg, L, pcs) and base costs.
*   **Menu & Recipe Costing**: Auto-calculate plate cost margins based on individual ingredient quantities, identifying profitable and loss-making menu items.
*   **Stock Ledger & Alerts**: Live tracking of ingredient levels with low-stock warnings.
*   **Vendor Ledgers**: Manage supply vendors, log inventory purchases, tracking payments, and balancing outstanding invoices.

### 🤖 AI Business Intelligence & Analytics
*   **AI Business Chat**: An intelligent, context-aware chatbot trained on the restaurant's operational metrics to answer business queries.
*   **Daily Sales Forecasting**: Predictive forecasting of sales volumes using seasonal and historical business data.
*   **AI Purchase Advisor**: Smarter ingredient procurement schedules based on historical stock depletion and forecasted sales.
*   **Menu Optimizer & Reviews Sentiment**: Natural language processing on reviews to identify top-performing dishes and sentiment bottlenecks.

### 📊 Finance, Sales & Activity Auditing
*   **Comprehensive Reports**: Detailed views for daily sales, product performance charts, and register counter closeouts.
*   **Profit & Loss Statement**: Real-time business P&L accounting comparing menu sales revenue against ingredient costs, overheads, and extra expenses.
*   **Comparison Charts**: Stock consumption versus actual sales volume comparisons to flag waste or inventory shrinkage.

### 🛡️ Security & Fine-grained RBAC
*   **Granular Role Management**: Define roles (e.g., cashier, waiter, chef, branch manager, admin) and customize their functional authorizations.
*   **Action Permissions**: Prevent/allow specific interactions, such as modifying orders, deleting invoices, or viewing profit summaries.
*   **Comprehensive Logs**: Real-time system audibility including login logs, error logs, and worker activity logs.

### 🏢 Multi-Branch & Super Admin Suite
*   **New Branch Wizard**: Easily provision new branch databases, default settings, and inventories.
*   **Global Settings Manager**: Manage multi-company options, unified tax brackets (VAT, BIN), system settings, and logo branding.

---

## 📴 Offline POS & Sync Capabilities

The application implements a robust offline fallback to ensure uninterrupted dining room operations during network outages:

*   **PWA Caching Proxy**: A Service Worker caches core static assets (`/`, `/index.html`, `/manifest.json`, styles, images, etc.) using a stale-while-revalidate pattern to allow the app to boot offline.
*   **IndexedDB Local DB (`TeaxoPOSDatabase` v2)**: Stores critical data structures including Products, Categories, Add-ons, System Settings, User Permissions, Dining Tables, and Customer profiles.
*   **Offline Table Selection**: Caches floor plan table status online, with an automatic fallback that generates 16 default offline tables if the cache is empty or fails.
*   **Offline Customer Management**: Searches cached customer profiles offline by mobile number. Supports offline creation of new customers, saving them with `isSyncPending: true`.
*   **Offline Order Processing**: Processes and prints KOT/Bar tickets and client receipts offline, saving invoice transactions to the local `invoices` store.
*   **Automatic Synchronization**: Automatically detects network status changes. On regaining internet connection, it runs a background sync that:
    1. POSTs pending offline-created customers to the database first to register them.
    2. POSTs pending offline invoices afterward, automatically linking them to the newly registered customer database records.
*   **Database Lock Prevention**: Handles IndexedDB `onversionchange` and `onblocked` requests to automatically close active connections across multiple open browser tabs during database schema upgrades.

---

## 🛠️ Technology Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Core Client** | React 18.3.1, React Router DOM v7 | Single Page Application architecture & client-side routing |
| **Styling & UI** | Tailwind CSS v3, DaisyUI v4, Sass/SCSS | Modern responsive styling system using utility-first classes and custom styling |
| **State & Fetching**| Axios | Promise-based HTTP client for secure API requests |
| **Auth & Security** | JWT (JSON Web Tokens), Local Storage, Role Guards | Secured local credentials validation and routing authorization checks |
| **Real-time Sync**  | Socket.io-client | Live order transmission and status notifications |
| **Data Viz**        | Recharts, Chart.js, React-Chartjs-2 | Visual analytical reports and dashboard counters |
| **Document/PDF**   | JSPDF, JSPDF-Autotable, React-to-print, DOM-to-image | High-fidelity invoice creation and physical receipt printing |
| **Utilities**       | Moment.js, React-helmet-async, Zod, React Hook Form, ExcelJS/XLSX | Form validation, offline state handling, date manipulation, spreadsheet exports, and SEO metadata management |

---

## ⚙️ Setup & Installation

### 1. Prerequisites
Ensure you have the following installed:
*   [Node.js](https://nodejs.org/) (v18.x or v20.x recommended)
*   [npm](https://www.npmjs.com/) (v9.x+)

### 2. Clone & Install Dependencies
Navigate to the root project folder in your terminal and install dependencies:
```bash
# Install NPM dependencies
npm install
```

### 3. Configure Environment Variables
Create a file named `.env` in the root directory (or modify the existing one) to specify backend routes and assets storage:

```env
# Backend Base API Endpoint URL
REACT_APP_BACKEND_URL=http://localhost:8000/api

# Asset Uploads/Static Files Host
REACT_APP_UPLOAD_URL=http://localhost:8000

# AWS S3 Storage Bucket URL for images and items
REACT_APP_S3_BASE_URL=https://your-s3-bucket.s3.amazonaws.com
```

Create a `.env.production` file for live production deployment configurations:
```env
REACT_APP_BACKEND_URL=https://your-live-api-domain.com/api
REACT_APP_UPLOAD_URL=https://your-live-api-domain.com
REACT_APP_S3_BASE_URL=https://your-production-s3-bucket.s3.amazonaws.com
```

### 4. Development & Build Scripts
Manage the project build pipeline using standard package scripts:

*   **Start Local Development Server**:
    ```bash
    npm start
    ```
    Runs the app in development mode. Opens [http://localhost:3000](http://localhost:3000) in your browser.

*   **Build Production Bundle**:
    ```bash
    npm run build
    ```
    Compiles the React application into optimized static assets in the `/build` folder, ready for hosting.

*   **Execute Test Suite**:
    ```bash
    npm test
    ```
    Runs the React testing suite in interactive watch mode.

---

## 📂 Directory Structure

Below is an overview of the key folders within the `src/` directory:

```text
src/
├── Hook/                     # Custom React Hooks (e.g., auth, secure axios, user permissions)
├── assets/                   # Static local assets (images, icons, etc.)
├── components/               # Shareable UI elements (Header, Receipts, QRCode generators)
├── components library/       # Supplementary custom UI blocks
├── config/                   # Helper services (Image upload controllers)
├── firebase/                 # Legacy Firebase configurations (Inactive)
├── pages/                    # Main Feature Views
│   ├── AIInsights/           # Business chatbot, forecasts, and menu optimizers
│   ├── Accounting & Inventory/# Ledger, inventory, purchases, expenses
│   ├── Admin/                # Branch Wizard, logs, and central admin settings
│   ├── Dashboard/            # Dashboard landing components
│   ├── Ingredients/          # Costing models and recipe management
│   ├── Login/                # Social & password auth pages
│   ├── Reports/              # Sales, P&L, stock comparators
│   ├── Review/               # Customer feedback capture & analysis
│   ├── Table/                # Table layouts & reservation systems
│   └── VendorLedger/         # Vendor purchase tracking files
├── providers/                # Context API Providers (e.g., AuthContext, Theme)
├── routes/                   # Routing configuration & route guard components
│   └── Root/                 # Route-level layout containers and private guards
└── utilities/                # Helper functions & utility variables
```

---

## 🔌 API & Environments Integration

The client communicates with the backend via **Axios**. Standard security features include:
1.  **Axios Interceptors**: The custom hook `UseAxioSecure.jsx` intercepts outgoing HTTP requests, automatically injecting the JWT `authToken` from local storage into the headers.
2.  **IP Activity Logger**: The `AuthProvider.jsx` client fetches the client's current IP address on initialization via `ipify` to log user logins and actions for audit logs.
3.  **Role Access Control**: Route guards (`AdminPrivateRoute.jsx`, `PermissionPrivateRoute.jsx`, `SuperAdminPrivateRoute.jsx`) check user capabilities before allowing UI access, redirecting unauthorized traffic dynamically.

---

## 🤝 Contributing

1. Fork the Project Repository.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

This software is **Proprietary and Confidential**. All rights reserved. Under no circumstances may this source code or compiled output be distributed, modified, or used without express authorization from the repository owner.
