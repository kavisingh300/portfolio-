# Kavi Kumar Singh — Portfolio (portpoli)

A modern, responsive, glassmorphism-styled personal portfolio built with **React + Vite + Tailwind CSS v4**.

## ✨ Features

- Hero section with animated typing effect and a live "code card" signature element
- Dark / light mode toggle (persisted to localStorage, respects system preference)
- Glassmorphism UI with an animated gradient mesh background
- Scroll-reveal animations (Framer Motion + IntersectionObserver)
- Skills section with animated progress bars, grouped by category
- Animated stat counters in the Hero section
- Featured Projects grid with category filtering (All / React / JavaScript), GitHub + Live Demo links
- Education & Experience timeline
- Certificates section (placeholder cards — swap in your real certificates)
- Resume download button (`public/resume.pdf` — replace with your real resume)
- Contact form with client-side validation
- Back-to-top button, loading animation, fully responsive (mobile-first)
- SEO meta tags (title, description, keywords, Open Graph)

## 🧱 Tech Stack

React 19 · Vite · Tailwind CSS v4 · Framer Motion · react-icons · react-intersection-observer

## 📁 Project Structure

```
src/
  main.jsx              # App entry point
  App.jsx                # Composes all sections
  index.css              # Design tokens, theme variables, gradient bg, glass utility
  context/
    ThemeContext.jsx     # Dark/light mode provider
  components/
    Loader.jsx
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Education.jsx
    Certificates.jsx
    Contact.jsx
    Footer.jsx
    BackToTop.jsx
    Reveal.jsx            # Reusable scroll-reveal wrapper
  data/
    skills.js             # Skills + stats data
    projects.js            # Projects + filter categories
    education.js           # Education, experience, certificates
public/
  resume.pdf              # Replace with your real resume
```

## 🚀 Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## 🎨 Customize

- **Colors**: edit the CSS variables in `src/index.css` (`:root` and `[data-theme="light"]`) or the `@theme` block for the Tailwind tokens.
- **Content**: edit the files in `src/data/` — no need to touch components for text/project/skill changes.
- **Resume**: replace `public/resume.pdf` with your actual resume file.
- **Social & contact links**: update the arrays in `Hero.jsx`, `Footer.jsx`, and `Contact.jsx`.
- **Contact form backend**: the form currently validates and shows a success state locally. Wire it up to a real service (e.g. Formspree, EmailJS, or your own API) inside `handleSubmit` in `Contact.jsx`.

## 📦 Deploy

Works out of the box on **Vercel**, **Netlify**, or **GitHub Pages** — just run `npm run build` and deploy the `dist/` folder (or connect the repo directly for CI builds).
