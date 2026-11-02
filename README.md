# Portfolio Website

A personal portfolio built with Next.js for showcasing projects, skills, training, and contact information.

## Overview

This project is a modern portfolio website for a web developer and network administrator. It includes:

- a landing page with profile details and technology tags
- a projects section with case studies and links
- a skills page
- a trainings page
- a diplomas page
- a contact page
- a reusable UI layer based on shadcn-style components

## Tech Stack

- Next.js 16
- React 19
- JavaScript
- Tailwind CSS
- Lucide React
- shadcn-style UI components

## Project Structure

```bash
.
├── app/
│   ├── about/
│   ├── contact/
│   ├── diplomas/
│   ├── projects/
│   ├── skills/
│   ├── trainings/
│   ├── globals.css
│   ├── layout.js
│   ├── not-found.js
│   ├── page.js
│   └── page.module.css
├── components/
├── data/
├── lib/
├── public/
├── package.json
├── jsconfig.json
├── next.config.mjs
├── eslint.config.mjs
├── components.json
└── README.md
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the local development server:

```bash
npm run dev
```

3. Open the app in your browser:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev    # start development server
npm run build  # create production build
npm run start  # run production build
npm run lint   # check code quality with ESLint
```

## Content Customization

Most portfolio content is stored in the data files and page components:

- homepage content: `app/page.js`
- page-specific sections: `app/*/page.js`
- public images: `public/`

## Deployment

This app is ready to be deployed on platforms such as:

- Vercel
- Netlify
- any Node.js hosting service compatible with Next.js

## License

This project is for personal portfolio use.
