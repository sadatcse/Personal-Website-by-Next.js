🏗️ Skyroot Real Estate
Skyroot is a modern, high-performance real estate platform built with React 19, Vite, and Tailwind CSS 4. It features smooth animations with Framer Motion, a powerful AI assistant powered by Google Gemini, and a responsive UI using DaisyUI.

🔗 Live Demo: https://skyroot-two.vercel.app/

🚀 Step-by-Step Setup
Follow these instructions to get the project running on your local machine.

1. Prerequisites
Ensure you have the following installed:

Node.js (v18.0.0 or higher)

npm (comes with Node)

2. Clone the Project
Open your terminal and run:

Bash
git clone https://github.com/sadatcse/Skyroot.git
cd SKYROOT
3. Install Dependencies
Install all required libraries, including React 19 and Tailwind 4:

Bash
npm install
4. Environment Variables
The AI Assistant requires a Google Gemini API Key.

Create a .env file in the root directory.

Add your key:

Code snippet
VITE_GEMINI_API_KEY=your_actual_key_here
5. Start Development Server
Run the project locally on port 3000:

Bash
npm run dev
Your app will be live at http://localhost:3000.

🏗️ Build & Deployment
Build for Production
To create an optimized production build in the dist folder:

Bash
npm run build
Deploying to Vercel
Install Vercel CLI: npm i -g vercel

Run: vercel

Important: Ensure you have a vercel.json in the root to handle React Router refreshes:

JSON
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
🧹 Maintenance Scripts
Linting: npm run lint (Checks TypeScript types)

Clean Build: npm run clean (Removes old dist folder)

Preview Build: npm run preview (Test the production build locally)
