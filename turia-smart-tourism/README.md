# TurIA · Smart Tourism for Local Businesses

**TurIA** is an experimental web application designed to build a smart tourism platform focused on local businesses, municipalities, and associations in Valencia, Spain. This project leverages **Next.js** and **Supabase** for authentication and data management, along with **Tailwind CSS** for styling.

---

## 🚀 Project Structure

The project is organized as follows:

```
turia-smart-tourism
├── public                # Static assets
├── src
│   ├── components        # Reusable components
│   │   └── Navbar.tsx    # Navigation bar component
│   ├── pages             # Application pages
│   │   ├── api           # API routes
│   │   │   └── auth.ts   # Authentication handling
│   │   ├── dashboard.tsx  # Protected dashboard page
│   │   ├── index.tsx     # Home page (landing)
│   │   ├── login.tsx     # Login page
│   │   └── signup.tsx    # Signup page
│   ├── styles            # Stylesheets
│   │   └── globals.css    # Global styles including Tailwind CSS
│   └── utils             # Utility functions
│       └── supabaseClient.ts # Supabase client instance
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── package.json           # npm configuration and dependencies
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

---

## ✨ Features

- User authentication with Supabase (login and signup)
- Protected dashboard for authenticated users
- Responsive design using Tailwind CSS
- Reusable components for better maintainability

---

## 📦 Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   cd turia-smart-tourism
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure Supabase:
   - Create a Supabase project and set up authentication.
   - Update the `src/utils/supabaseClient.ts` file with your Supabase credentials.

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

---

## 📄 License

MIT License. This project is experimental and under active development.  
Powered by GitHub Copilot & OpenAI · © 2025 Andrés Tobio