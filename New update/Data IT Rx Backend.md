# DataIT RX - Backend Application

DataIT RX Backend is a modular Node.js/Express server that serves as the core database engine and API server for the clinic management dashboard, handling clinical data management, transactional logging, patient tracking, and role-based permissions synchronization.

---

## 🛠️ Technology Stack

- **Runtime Environment**: Node.js
- **Web Framework**: Express.js
- **Database Wrapper**: Mongoose / MongoDB
- **Security & Utilities**: JSON Web Tokens (JWT) for authentication, Cors, Morgan
- **Date Handling**: Moment.tz (Timezone-aware scheduling boundaries)
- **Deployment**: Vercel Serverless Ready (`vercel.json`)

---

## 📂 Modular Architecture

The application is structured into domain-specific modules under `app/modules/`. Each module encapsulates its respective Mongoose model, controller routes, and controllers:

```bash
app/modules/
├── Appointment/             # Appointment booking and serial generation
├── AppointmentBlock/        # Dates and time boundaries blocking configuration
├── Chamber/                 # Chamber schedules, old/new fees, and maximum patient configuration
├── Dashboard/               # KPI aggregations, demographics, and weather integrations
├── DoctorProfile/           # Practitioner profile details
├── Medicine/                # Medicine master database
├── Patient/                 # Patient index profiles
├── Permission/              # Dynamic action (View, Add, Edit) permissions by role
├── PreCheckups/             # Preliminary nursing checkups (vitals, symptoms)
├── Prescription/            # Doctor clinical prescriptions
├── PrescriptionTemplates/   # Layout styles classification
├── User/                    # User account management
└── UserRole/                # Roles mapping (Assistants, Compounders, Doctors, Admins)
```

---

## 🚦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Database (Local instance or Atlas connection string)

### Configuration
1. Create a `.env` file in the backend root directory.
2. Define the following environment variables:
   ```env
   PORT=5000
   MONGODB_URI=mongodb+srv://...
   JWT_SECRET=your_jwt_secret
   OPENWEATHER_API_KEY=your_weather_key # Optional: For dashboard weather widget
   ```

### Installation
1. Clone the repository and navigate to the backend directory:
   ```bash
   cd DataITRX-Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App
- Run the API server in development mode:
  ```bash
  npm run dev # or node server.js
  ```

---

## 📋 Database Seed & Utility Scripts

Several utility scripts are available to initialize department lists, reset password defaults, and load CSV data:
- **`npm run seed-depts`**: Run `seed_depts.js` to populate the lab/doctor departments.
- **`node createUserScript.js`**: Create default user roles.
- **`node importMedicineScript.js`**: Seed the medicine database from CSV files.
