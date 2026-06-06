# 🍽️ Chef's Special Restaurant

A premium, modern web application for **Chef's Special Restaurant** located in Uttara. This website provides a comprehensive, interactive dining experience—showcasing a rich food menu, facilitating seamless table reservations, featuring dynamic shop & blog systems, and offering immersive custom animations. Built on React 19, Vite, TypeScript, and Bootstrap 5.

---

## 🚀 Live Demo & Deployment
- **Live Link**: [chefspecial.vercel.app](https://chefspecial.vercel.app/)
- The app is fully configured for deployment on **Vercel** via standard single-page app configuration.
- Rewrites are configured in `vercel.json` to handle dynamic React Router navigation.

---

## ✨ Key Features

- **🏠 Interactive Homepage**: Includes slider banners, trending menus, chef highlights, feature sections, reviews, special offers, blogs, and an interactive custom cursor effect.
- **📅 Online Table Reservation**: An integrated booking form with dynamic date/time selection using `react-datepicker`, ensuring smooth booking submissions.
- **🍲 Dynamic Food Menu**: Interactive filtering and categorization for food items, backed by clean component styling.
- **🛒 E-Commerce Shop**: Includes a product showcase, shop pagination, single product details, and thumbnail-based product viewing (`react-photo-view`).
- **✍️ Blog Portal**: A grid-based blog layout featuring detailed single posts with a sticky sidebar.
- **✨ Ultra-Smooth Animations**: Features motion graphics powered by **GSAP (GreenSock)**, scroll triggers via **AOS**, and carousels using **Swiper**.
- **🔍 SEO & Meta Optimization**: Dynamic meta tags, OpenGraph properties, and route-specific headers handled via `react-helmet-async`.
- **🔔 Toast & Status Notifications**: Dynamic status notifications using `react-toastify`.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vite.dev/) (using `@vitejs/plugin-react-swc`)
- **Styling & Icons**:
  - [Bootstrap 5](https://getbootstrap.com/) (for grid systems, layouts, utility helper classes)
  - Custom CSS & CSS Variables (loaded via `src/assets/css/style.css`)
  - Flaticon (`flaticon-set.css`) & FontAwesome (`font-awesome.min.css`)
- **Libraries & Plugins**:
  - `gsap` (GreenSock Animation Platform)
  - `aos` (Animate on Scroll)
  - `swiper` (Dynamic touch sliders)
  - `react-router-dom` (Routing & navigation)
  - `react-helmet-async` (SEO management)
  - `react-datepicker` (Reservation date-time selection)
  - `react-toastify` (Toasts and alert banners)
  - `react-photo-view` (High-performance image lightbox viewer)
  - `react-modal-video` (Immersive overlay video player)
  - `react-countup` (Animated numeric counters for restaurant statistics)
  - `isotope-layout` & `imagesloaded` (Smooth, categorized filtering grid)

---

## 📁 Directory Structure

```text
Chefspecial/
├── public/                 # Static public assets (favicons, manifest, etc.)
├── src/
│   ├── assets/             # CSS stylesheets, images, icons, fonts, and scripts
│   ├── components/         # Reusable page components
│   │   ├── animation/      # Custom cursor and hover animation effects
│   │   ├── banner/         # Interactive slider and hero banners
│   │   ├── blog/           # Blog layout widgets and grids
│   │   ├── menu/           # Food menu visualizer components
│   │   ├── reservation/    # Booking form and inputs
│   │   ├── shop/           # Shop grid, list items, and cart visuals
│   │   └── utilities/      # Scroll-to-top, Preloaders, and core dependencies
│   ├── pages/              # High-level page-views mapped to routing
│   │   ├── FoodPage/       # Food menu listings
│   │   ├── blogPages/      # Blog grids and detailed articles
│   │   ├── homePages/      # Main home views
│   │   ├── innerPages/     # About Us, Contact, Chef lists, and Reservations
│   │   └── shopPage/       # E-commerce store and product details
│   ├── App.tsx             # Root React component (preloader, routing wrap, CSS imports)
│   ├── Routers.tsx         # Page-level routes and URL path mapping
│   └── main.tsx            # Application entry point
├── package.json            # Project dependencies and script runner setup
├── tsconfig.json           # TypeScript configuration
├── vercel.json             # Vercel deployment rewrite rules
└── vite.config.ts          # Vite bundler configurations
```

---

## 🚀 Getting Started

### 📋 Prerequisites
Ensure you have **Node.js** (version 18+ recommended) and **npm** or **Yarn** installed.

### 📥 Installation
1. Clone this repository to your local machine:
   ```bash
   git clone <repository-url>
   cd Chefspecial
   ```
2. Install the dependencies (use `--legacy-peer-deps` due to React 19 peer constraints on certain libraries):
   ```bash
   npm install --legacy-peer-deps
   # or
   yarn install
   ```

> [!NOTE]
> **Windows Path Resolution**: If your local working directory path contains spaces or special characters (like an ampersand `&` in `Web & Programming`), npm's default CLI wrapper executables will fail to resolve. To resolve this, the package scripts have been configured to invoke Node directly:
> - **Dev**: `node node_modules/vite/bin/vite.js`
> - **Build**: `node node_modules/typescript/bin/tsc -b && node node_modules/vite/bin/vite.js build`
> - **Preview**: `node node_modules/vite/bin/vite.js preview`

### 💻 Running Locally
To launch the Vite development server:
```bash
npm run dev
# or
yarn dev
```
The application will be running locally at `http://localhost:5173`.

### 🏗️ Production Build
To compile the TypeScript project and generate the optimized production assets:
```bash
npm run build
# or
yarn build
```
The build artifacts will be stored in the `/dist` directory.

### 🔍 Previewing Build
To spin up a local preview server for the compiled production build:
```bash
npm run preview
# or
yarn preview
```

---

## 🎨 Theme & Stylesheets
The styling architecture leverages custom assets bundled in `src/assets/css`:
- `style.css`: Primary styling, colors, and layout modifiers.
- `validnavs.css`: Advanced responsive header, navigation menus, and dropdowns.
- `animate.css` & `helper.css`: Custom animations and quick utility classes.

---

## 🛡️ License
This project is private and proprietary. All rights reserved.

---

Made with ❤️ for **Chef's Special Restaurant**.