# Portfolio — Izzlan Anuar

This repository contains my personal portfolio website built with **Astro**. It showcases my projects, documents my growth, and evolves with continuous integration of modern tools.

---

## Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [CI/CD & Checks](#cicd--checks)
- [Integrations — Completed](#integrations--completed)

---

## About

This project began as a personal portfolio and now serves as a hands-on playground to explore frontend development, CI/CD pipelines, and automation workflows — improved incrementally with each integration.

---

## Tech Stack

- **Framework:** Astro
- **Language:** TypeScript
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions
- **Linting:** ESLint
- **Formatting:** Prettier

---

## CI/CD & Checks

Workflows are powered by **GitHub Actions**, triggered on pull requests to ensure code quality and deployment readiness.

### Workflow Overview

1. **Lint & Format Check** — Runs ESLint and Prettier validation.
2. **Build** — Compiles the Astro project.
3. **Deploy** — Publishes to GitHub Pages once all checks pass.

---

## Integrations — Completed

1. **ESLint** — Configured using flat config (`eslint.config.cjs`) with `.astro` and TypeScript support.
2. **Prettier** — Ensures consistent formatting across all files, enforced via `prettier --check` in PR validation.

---

> This README will be updated as new integrations are added.
