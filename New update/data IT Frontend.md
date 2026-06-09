# DataIT RX - Frontend Application

DataIT RX is a state-of-the-art hybrid clinic management and prescription generation dashboard. Designed for doctors and clinical assistants, the application features an **offline-first hybrid architecture** with strong local client-side cryptographic security, dynamic RBAC actions (View, Add, Edit/Delete), and real-time syncing.

---

## 🚀 Key Features

### 1. Offline-First Hybrid Architecture
- **Dexie.js Integration**: The client runs a local IndexedDB instance mapping critical tables: `patients`, `chambers`, `preCheckups`, `appointments`, `doctorProfiles`, `prescriptions`, `medicines`, `labtests`, and a `syncQueue`.
- **Sync Queue Mechanism**: Online mutations are pushed directly to the backend. Offline mutations are serialized, cryptographically secured, and queued in IndexedDB. Once connectivity is restored, the queue is processed sequentially, syncing the local actions back to the database.

### 2. Client-Side Cryptographic Security
- **AES-256 Encryption**: Patient details (names, phone numbers, vitals, medical history) and doctor profile details are encrypted using CryptoJS AES prior to writing to IndexedDB.
- **Auto-Decryption Hooks**: Dexie read hooks intercept index queries, decrypting the ciphertext transparently in memory so that no unencrypted patient or doctor data sits at rest on the user's browser.

### 3. Dynamic Page-Level Action Permissions (RBAC)
- Fine-grained role permissions are fetched dynamically from the database and cached locally.
- In addition to path-level routing protection, individual actions (**View**, **Add**, **Edit/Delete**) are dynamically checked page-by-page. For example, assistants can view chambers but can be restricted from adding new ones or editing/deleting existing ones.

---

## 🛠️ Technology Stack

- **Framework**: React 18
- **Routing**: React Router DOM v7
- **Styling**: TailwindCSS & DaisyUI (for premium dark/light glassmorphic UI)
- **Database (Client)**: Dexie.js (IndexedDB wrapper)
- **Security**: Crypto-JS (AES)
- **Charts**: Recharts (for demographic and prescription analytics)
- **Icons**: React Icons (Hi2, Md)
- **HTTP Client**: Axios

---

## 📦 Directory Structure

```bash
src/
├── assets/          # SVG Logos and media assets
├── components/      # Common components (SectionTitle, Pagination, modals, offline warnings)
├── db/              # MasterDB.js (Dexie DB configuration, hooks, encryption)
├── Hook/            # Custom React Hooks (useUserPermissions, useChamber, useAppointment)
├── layouts/         # Root layout components (Sidebar, Navbar)
├── pages/           # Admin/Superadmin Pages (Dashboard, Chambers, Appointments, Prescriptions)
├── providers/       # AuthProvider (Session, active chamber context)
├── routes/          # Router configuration and PrivateRoot / PermissionPrivateRoute
└── App.css / index.css
```

---

## 🚦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone the repository and navigate to the frontend directory:
   ```bash
   cd DataitrxFrontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App
- Run the development server:
  ```bash
  npm run dev # or npm start
  ```
- Build the optimized production bundle:
  ```bash
  npm run build
  ```