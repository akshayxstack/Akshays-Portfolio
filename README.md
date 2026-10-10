# Akshay's Portfolio

Personal portfolio website for showcasing Akshay's skills, projects, professional journey, resume, and contact details.

## Live Website

Visit the deployed portfolio at [akshayys-portfolio.vercel.app](https://akshayys-portfolio.vercel.app/).

## Overview

This is a lightweight, responsive static website built with plain HTML, CSS, and JavaScript. It has no build step, package manager, or runtime dependency.

### Pages

- **Home** - Introduction, featured work, and contact links
- **About** - Background and profile information
- **Skills** - Technical skills and selected projects
- **Journey** - Education, experience, and certifications

## Project Structure

```text
.
├── index.html          # Home page and contact section
├── about.html          # About page
├── skills.html         # Skills and projects page
├── journey.html        # Education, experience, and certifications
├── Akshay_Resume.pdf   # Downloadable resume
├── assets/             # Project images and other media
├── fonts/              # Local font files and font definitions
├── js/                 # Navigation styles and behavior
└── favicon.svg         # Browser tab icon
```

## Run Locally

No installation is required. Open `index.html` directly in a browser, or serve the folder locally:

```bash
python -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Customization

- Update the LinkedIn URL in `index.html`.
- Replace `Akshay_Resume.pdf` with the latest resume using the same filename.
- Update project images in `assets/` and edit project details in `skills.html`.
- Adjust shared navigation styles and behavior in `js/nav.css` and `js/nav.js`.

## Deployment

Because this is a static site, it can be deployed directly to:

- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages

Upload or connect the repository, and configure the site to serve from the repository root.

## License

This project is a personal portfolio. Please do not reuse the personal content, resume, images, or branding without permission.
