# JobLens-MIT

A Vite + React + TypeScript demo application (shadcn-style UI) for exploring job listings, company profiles, and model-based predictions. This repository was created as a student project and includes a local SQLite snapshot (`project.db`) along with a written project report.

This README expands on the original summary: it covers the project goals, architecture, data, how to run the app locally, and guidance for contributors and maintainers.

---

## Project overview

Goal: provide an interactive client-side dashboard to explore job market data, inspect company information, view job details, and demonstrate simple prediction workflows (e.g., match/score predictions). The UI follows Radix + shadcn-style primitives and is composition-oriented for rapid prototyping.

Primary use-cases:

- Browse job listings and filter/sort results
- Inspect company profiles and related metrics
- View detailed job descriptions and related tags/skills
- Explore insights and visualizations in a dashboard page
- Demonstrate a prediction flow (local model or heuristic) using stored dataset

Target audience: data/project stakeholders, UI/UX students, and developers learning how to combine React + TypeScript with a small local dataset.

---

## Tech stack

- Framework: Vite + React + TypeScript
- UI primitives: Radix + shadcn-style component patterns (components in `src/components/ui`)
- Routing: react-router-dom
- Data fetching / state: TanStack Query (react-query) patterns for async logic
- Styling: Tailwind CSS (see `tailwind.config.ts`) and component-level CSS
- Local data: SQLite snapshot (`project.db`) included for demo/testing

---

## What is in this repo

- `src/` — application source code
  - `components/` — shared components and UI primitives
  - `components/ui/` — small shadcn-style UI primitives (buttons, inputs, tables, dialogs)
  - `pages/` — route pages (Jobs, Companies, Dashboard, JobDetails, Predict, etc.)
  - `contexts/` — React contexts (e.g. AuthContext)
  - `hooks/` — small reusable hooks
  - `lib/` — utility functions
  - `data/` — mock data used by the app
- `public/` — static assets
- `project.db` — local SQLite database snapshot used by the demo (read-only for the front-end)
- `DBS Project Report.pdf.pdf` / `DBS Project Report.pdf.docx` — student report with dataset details, methodology and findings
- `package.json` — scripts and dependencies

---

## Data & database

- A local SQLite file `project.db` is included as a snapshot of the dataset used in the project. It is intended for development/demo purposes only.
- The front-end reads from a mock/data layer (or from a small server if you add one). There is no production backend in this repository by default.
- See the project report files for dataset provenance, cleaning steps, feature engineering, and the predictive model (if used in the project).

Important: Do not treat `project.db` as a production data source. It is included for reproducibility of the student demo and to make exploration easier.

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

## App architecture & routing

- Entry: `src/main.tsx` mounts the React tree and router
- Routing: configured in `src/App.tsx` — add or modify routes here
- Pages: each file in `src/pages/` represents a route and its related UI and data access logic
- Data fetching: follow patterns in `src/lib` and `src/hooks` — prefer TanStack Query for async state and caching

---

## UI component guidelines

- UI primitives live in `src/components/ui/`. They follow small, composable patterns (Radix primitives wrapped with Tailwind)
- When adding components, match existing API shapes (props, className passthrough, ref forwarding when relevant)
- Keep components presentation-focused; business logic belongs to pages or hooks

---

## Development notes for contributors

- TypeScript: this project uses strict-ish TS config. Ensure your editor uses the workspace TypeScript version (see tsconfig.json)
- Formatting & linting: follow existing ESLint/Prettier configuration
- Adding routes: update `src/App.tsx` and add an entry in navigation where appropriate (see `src/components/Navbar.tsx`)
- Tests: minimal/no tests included by default. Add unit or integration tests if you expand the project.

PR checklist suggestion:

- Run `npm run lint` and fix issues
- Verify the new UI works on the Jobs / Companies pages
- Add or update story/demo page if you add a new UI primitive

---

## Extending the project

Ideas for next steps:

- Add a small Express / Fastify backend to serve `project.db` via a simple REST API (use sqlite3 or better-sqlite3) so the front-end can fetch via HTTP
- Add search and filter capabilities to Jobs with server-side pagination
- Integrate a simple ML model endpoint (Flask/FastAPI) for prediction demo and call it from `Predict` page
- Add unit/integration tests (Jest + React Testing Library)

---

## License & credits

This repository is a student project (JobLens-MIT) by saaniia. See the attached project report for dataset citations, methodology, and acknowledgements. If you plan to reuse code or data from this repo, please follow academic reuse norms and cite the original work.

---
