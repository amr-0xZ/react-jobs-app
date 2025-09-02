# React Jobs

A modern job listing web application built with **React**, **Vite**, **Tailwind CSS** and **Json server**.

## Features

- Browse all job listings
- Add new job postings
- Edit and delete jobs
- View recent jobs on the homepage
- Responsive design
- Fast development with Vite and HMR

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

- `src/components` – Reusable UI components (Navbar, Job, JobListing, etc.)
- `src/pages` – Application pages (Home, AddJobPage, EditJobPage, JobPage)
- `src/assets` – Images and static assets

## API

The app expects a backend API running at `http://localhost:8000` with endpoints like:

- `GET /api/jobs` – List jobs
- `POST /api/jobs` – Add job
- `PUT /api/jobs/:id` – Edit job
- `DELETE /api/jobs/:id` – Delete job

you can use a mockup json server on the `src/jobs.json` file, i added the right data to it and configured the script :
**run mockup json server:**
   ```bash
   npm run server
   ```

## Customization

- Update Tailwind styles in `tailwind.config.js`
- Change API endpoints in `vite.config.js` if needed

## License

MIT

---
