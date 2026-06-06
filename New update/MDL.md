# 🏗️ Mohammadi Developers Ltd (MDL)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-https%3A%2F%2Fmdl--wo28.vercel.app%2F-blue?style=for-the-badge&logo=vercel&logoColor=white)](https://mdl-wo28.vercel.app/)

Welcome to the official web application for **Mohammadi Developers Ltd (MDL)**, a premier real estate development company. This platform showcases luxury residential and commercial properties, corporate achievements, and structural services. It features a fully responsive, modern user experience paired with a robust administrative dashboard.

---

## 🌐 Live Application
The production build is deployed and live at:
🔗 **[https://mdl-wo28.vercel.app/](https://mdl-wo28.vercel.app/)**

---

## ✨ Features

### 🌟 Client-Facing Website
- **Interactive Property Directory:** Filter properties seamlessly by type/status (Ongoing, Upcoming, Completed) with detailed specifications, photo galleries, flat configurations, and lists of premium amenities.
- **Dynamic Services & Core Values:** Fully detailed pages detailing architectural design, interior design, structural engineering, and land development offerings.
- **Smooth Theming (Light/Dark Mode):** Dynamic CSS variables combined with a pre-injected JS theme loader to prevent styling flashes during hydration.
- **Micro-Animations & Transitions:** Fluid page load animations and responsive layout changes powered by `framer-motion`.
- **Contact & Inquiry Forms:** Dynamic input validation and direct database storage for customer queries and feedback.

### 🛡️ Administrative Dashboard
- **Secure Authentication:** JSON Web Token (JWT) credentials management with cookies, backed by secure `bcryptjs` and `jose` encryption.
- **Project Catalog Management:** Create, read, update, and delete (CRUD) operations on property listings including dynamic uploads, status shifts, and details.
- **Client Message Center:** View, organize, and reply to inquiries submitted through the contact portal.
- **Testimonials Manager:** Curate client reviews, managing who is highlighted on the front-end homepage.
- **Media & Press Newsroom:** Write, post, and publish real-time updates and media coverage details.

---

## ⚡ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | [Next.js 16 (App Router)](https://nextjs.org/) & [React 19](https://react.dev/) |
| **Styling & Theme** | [Tailwind CSS v4](https://tailwindcss.com/) & CSS Custom Variables |
| **Database** | [MongoDB](https://www.mongodb.com/) (using [Mongoose](https://mongoosejs.com/)) & [MySQL](https://www.mysql.com/) compatible |
| **Authentication** | [Jose](https://github.com/panva/jose) (JWT) & [Bcrypt.js](https://github.com/dcodeIO/bcrypt.js/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Notifications** | [SweetAlert2](https://sweetalert2.github.io/) |
| **Iconography** | [Lucide React](https://lucide.dev/) |

---

## 🛠️ Deep Dive: The Hybrid Database Layer

A key architectural component of the MDL system is the robust database adapter located in `src/lib/db.js`. To support maximum flexibility during deployment (switching between relational SQL and Document-oriented databases), a custom query parser:
1. **Detects** and intercepts raw SQL statements (`SELECT`, `INSERT`, `UPDATE`, `DELETE`).
2. **Translates** queries into equivalent Mongoose actions in real-time.
3. **Auto-Seeds** database schemas with mock listings, default admin credentials, and initial testimonials if the target collections are empty, ensuring a zero-configuration developer onboarding experience.

---

## 📂 Project Structure

```bash
├── public/                # Static assets, logos, favicon, and theme loaders
├── src/
│   ├── app/               # Next.js App Router (Pages, API Endpoints, Layouts)
│   │   ├── about/         # About Us Page
│   │   ├── api/           # API routes (Auth, Project/Message/Updates CRUD)
│   │   ├── contact/       # Contact Inquiry Page
│   │   ├── dashboard/     # Admin Dashboard Pages & Components
│   │   ├── services/      # Engineering & Design Services Page
│   │   └── page.js        # Main Landing Page
│   ├── components/        # Reusable UI Elements (Navbar, Footer, Hero, Grid, etc.)
│   ├── data/              # Default JSON configurations for seeding and fallback data
│   └── lib/               # Utility scripts (Authentication, Database Wrapper, Sweets)
├── package.json           # Scripts, dependencies, and configuration
└── tailwind.config.js     # Tailwind design configurations
```

---

## 🚀 Getting Started

### 📋 Prerequisites
- **Node.js** (v18.x or later recommended)
- **NPM** or **Yarn**
- A **MongoDB Atlas** connection string or local MongoDB instance

### 🔧 Setup Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/sadatcse/MDL.git
   cd MDL
   ```

2. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory and define the following variables:
   ```env
   # Database Configurations
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/mdl_db?retryWrites=true&w=majority
   
   # JWT Configuration
   JWT_SECRET=your_super_secure_jwt_secret_key
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Run Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

5. **Build for Production:**
   ```bash
   npm run build
   npm run start
   ```

