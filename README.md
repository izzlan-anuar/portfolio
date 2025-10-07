# Portfolio — Izzlan Anuar

This repository contains my personal portfolio website built with **Astro**. It serves as a platform to showcase my projects, document my growth, and continuously integrate modern tools into the workflow.

---

## Table of contents

* [About](#about)
* [Tech stack](#tech-stack)
* [CI/CD & checks](#cicd--checks)
* [Integrations — Completed](#integrations--completed)

---

## About

This project started as a personal portfolio and is now also a learning ground to experiment with frontend tools, CI/CD pipelines, and automation workflows — added gradually, one integration at a time.

---

## Tech stack

* **Framework:** Astro
* **Language:** TypeScript
* **Hosting:** GitHub Pages
* **CI/CD:** GitHub Actions
* **Linting:** ESLint
* **Formatting:** Prettier

---

## CI/CD & checks

Automated workflows are powered by **GitHub Actions**, running on every pull request to verify that the code is linted, formatted, and build-ready before merging.

### Workflow overview

1. **Lint & Format Check** — Runs ESLint and Prettier validation.
2. **Build** — Compiles the Astro project.
3. **Deploy** — Publishes to GitHub Pages upon successful checks.

---

## Integrations — Completed

1. **ESLint** — Configured using flat config (`eslint.config.cjs`) with support for `.astro` and TypeScript files.
2. **Prettier** — Ensures consistent formatting across all files, enforced via `prettier --check` during PR validation.

---

> *This README will be updated as new integrations are added.*
