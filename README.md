# Sankar Raghuthaman — Portfolio Website

A modern personal portfolio website built to showcase my work across **Data Science**, **AI/ML Engineering**, **LLM applications**, and **data workflow engineering**.

This site is designed to be:
- clean and recruiter-friendly
- mobile responsive
- easy to maintain
- project-focused with dedicated detail pages
- deployable on Netlify

---

## Live Site


```txt
https://sankar-raghuthaman.netlify.app
```

---

## Overview

This portfolio highlights:
- featured projects
- project detail pages
- work experience
- skills
- education
- selected research
- contact links

The goal of this site is to present my background as a **Data Scientist / AI-ML Engineer** with strong experience in:
- machine learning systems
- experimentation and evaluation
- LLM-powered workflows
- scalable data pipelines
- production-minded implementation

---

## Tech Stack

### Frontend
- React
- Vite
- React Router DOM
- Framer Motion
- React Icons

### Styling
- Custom CSS
- Responsive layout with modular stylesheets

### Deployment
- Netlify

---

## Project Structure

```txt
my-portfolio/
├── public/
│   ├── profile.jpg
│   └── resume/
│       └── Sankar_Raghuthaman_Resume_DS.docx
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   ├── sections/
│   │   │   ├── AboutSection.jsx
│   │   │   ├── ContactSection.jsx
│   │   │   ├── EducationSection.jsx
│   │   │   ├── ExperienceSection.jsx
│   │   │   ├── FeaturedProjectsSection.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── ResearchSection.jsx
│   │   │   └── SkillsSection.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── EducationCard.jsx
│   │       ├── ExperienceCard.jsx
│   │       ├── ProjectCard.jsx
│   │       ├── SectionHeader.jsx
│   │       ├── SkillGroup.jsx
│   │       └── TagList.jsx
│   │
│   ├── content/
│   │   ├── education.js
│   │   ├── experience.js
│   │   ├── projects.js
│   │   ├── research.js
│   │   ├── siteConfig.js
│   │   └── skills.js
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── NotFoundPage.jsx
│   │   ├── ProjectDetailPage.jsx
│   │   └── ProjectsPage.jsx
│   │
│   ├── styles/
│   │   ├── components.css
│   │   ├── globals.css
│   │   └── sections.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
└── README.md
```

---

## Features

- Multi-section homepage
- Dedicated project detail pages
- Responsive design for desktop, tablet, and mobile
- Research and publication section
- Resume download
- GitHub / LinkedIn / email links
- Clean and structured content architecture

---

## Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app will run locally at:

```txt
http://localhost:5173
```

---

## Build for Production

```bash
npm run build
```

---

## Lint the Project

```bash
npm run lint
```

---

## Content Updates

Most site content can be updated without touching layout components.

### Update these files for content changes:
- `src/content/siteConfig.js` → headline, links, hero text
- `src/content/projects.js` → projects and project detail content
- `src/content/experience.js` → experience roles and bullets
- `src/content/skills.js` → grouped skills
- `src/content/education.js` → education entries
- `src/content/research.js` → selected research / publications

### Update these files for assets:
- `public/profile.jpg` → profile photo
- `public/resume/...` → resume file

---

## Routing

This project uses React Router with the following routes:

- `/` → homepage
- `/projects` → all projects
- `/projects/:slug` → project detail page

---

## Deployment Notes

This site is intended to be deployed on **Netlify**.

### Typical Netlify settings
- Build command:

```txt
npm run build
```

- Publish directory:

```txt
dist
```

If using branch previews, Netlify can deploy feature branches separately before merging to production.

---

## Recommended Workflow

For major redesign changes:

```bash
git checkout -b portfolio-revamp
git add .
git commit -m "Revamp portfolio website"
git push -u origin portfolio-revamp
```

This helps avoid conflicts with the production branch and allows safe Netlify preview testing.

---

## About This Portfolio

This portfolio is built to reflect a hybrid profile spanning:

- Data Science
- AI / ML Engineering
- LLM workflows
- experimentation and evaluation
- scalable data and application systems

It is intentionally designed to be:
- structured
- professional
- not overly flashy
- easy to navigate for recruiters and hiring managers

---

## License

This project is for personal portfolio use.
