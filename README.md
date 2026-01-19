## JobLens-MIT

JobLens-MIT is a Vite + React + TypeScript demo application built to explore placement and recruitment data across Manipal Institute of Technology (MIT) campuses in India. The application provides a unified interface to browse companies, job roles, eligibility criteria, and placement-related insights, along with a simple model-based eligibility prediction workflow.

## Project overview

To provide an interactive, client-side dashboard that centralizes placement-related information for MIT campuses, enabling students to explore companies, job roles, hiring requirements, and trends in a structured and accessible manner.

The project is best described as a placement-focused professional network, similar in spirit to LinkedIn, but limited in scope to placement data relevant to MIT campuses. Instead of general professional networking, the emphasis is on placement preparation, eligibility understanding, and data-driven insights.

Primary use-cases:
- Browse job listings and filter or sort results
- Inspect company profiles and associated hiring information
- View detailed job descriptions, required skills, and eligibility criteria
- Explore dashboards showing placement-related insights and trends
- Demonstrate an eligibility or match-style prediction workflow based on stored data

## Motivation

Students at MIT often face difficulty accessing structured and reliable placement information. Details related to company visits, job roles, eligibility criteria, required skills, and hiring trends are typically scattered across notices, documents, and informal communication channels.

This lack of centralization makes it difficult for students to:
- Compare opportunities across campuses
- Understand role-specific requirements
- Track hiring patterns over time
- Assess their own readiness for specific roles

JobLens-MIT addresses this problem by aggregating placement-related data from publicly available and curated sources and organizing it into a structured database, which is then exposed through an interactive web interface.

## Tech stack

- Framework: React + TypeScript
- UI components: Radix primitives with shadcn-style wrappers
- Data fetching and async state: TanStack Query patterns
- Styling: Tailwind CSS
- Data storage (demo): SQLite (project.db)

---

## What is in this repo

- `src/`
  - `components/` — Shared reusable components
  - `components/ui/` — shadcn-style UI primitives
  - `pages/` — Route-level pages (Jobs, Companies, Insights, Predict, etc.)
  - `contexts/` — React contexts
  - `hooks/` — Reusable hooks
  - `lib/` — Utility and helper functions
  - `data/` — Mock or demo data
- `public/` — Static assets
- `project.db` — SQLite database snapshot (demo use only)
- `package.json` — Project metadata and scripts

---

## Quick start (Windows - cmd.exe)

1. Install dependencies

   npm install

2. Start development server (local dev + HMR)

   npm run dev

3. Build for production

   npm run build

4. Preview production build locally

   npm run preview

5. Lint the project

   npm run lint

Notes:

- You can use yarn or pnpm if you prefer; replace commands accordingly (e.g. `yarn`, `yarn dev`).
- If you need a different Node version, use nvm or your preferred version manager. Node 18+ is recommended.

---

## Scripts (from package.json)

- dev: run Vite dev server
- build: produce production assets
- preview: preview the built output
- lint: run the configured linter

(See `package.json` for exact script names and additional tools.)

---

## Future extensions

- Potential directions for extending the project include:

- Adding a backend API to serve the SQLite database over HTTP

- Implementing server-side filtering and pagination

- Enhancing prediction logic with more advanced models

- Expanding the dataset or supporting additional institutions

- Adding automated tests and analytics
  
---
