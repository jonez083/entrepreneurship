# MedAI – Landing Page

Landing page for an AI-powered patient data search prototype, focused on medication management in medical practices.

## Live Prototype

[https://med-scan-table.lovable.app](https://med-scan-table.lovable.app)

## Tech Stack

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
```

Output is written to `dist/`.

## Project Structure

```
src/
├── components/
│   ├── Nav.jsx            # Sticky navigation bar
│   ├── Hero.jsx           # Hero section with CTA
│   ├── Problem.jsx        # Problem statement cards
│   ├── Solution.jsx       # Step-by-step solution
│   ├── ExampleQueries.jsx # Example query cards
│   ├── Features.jsx       # Feature grid
│   ├── FinalCTA.jsx       # Bottom call-to-action
│   └── Footer.jsx
├── hooks/
│   └── useInView.js       # Intersection observer hook
├── App.jsx                # Root component, click tracking
└── index.css              # Global styles & Tailwind
```

## Click Tracking

Launch count is stored in `localStorage` under the key `medai_launch_count` and displayed on the page. No backend required.

---

*Built as a university research prototype. Not for clinical use.*
