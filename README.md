# Md Saifuzzaman Abhi - Portfolio

Modern, responsive portfolio website built with React + Vite + TypeScript + Tailwind CSS + Framer Motion.

## Tech Stack

- React (Vite)
- TypeScript
- Tailwind CSS (via `@tailwindcss/vite`)
- Framer Motion
- Lucide React Icons

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Project Structure

```text
src/
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Education.tsx
    Publications.tsx
    Experience.tsx
    Projects.tsx
    Skills.tsx
    Achievements.tsx
    CertificationsLeadership.tsx
    Contact.tsx
    Footer.tsx
    SectionShell.tsx
  data/
    data.ts
  assets/
  App.tsx
  index.css
```

## Deployment

### GitHub Pages

1. Update `vite.config.ts` with your repository base path:

```ts
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react(), tailwindcss()],
})
```

2. Build:

```bash
npm run build
```

3. Deploy the `dist/` folder using your preferred method:
- `gh-pages` package
- GitHub Actions workflow
- Manual upload to `gh-pages` branch

### Vercel

- Import this repository into Vercel.
- Framework preset: `Vite`.
- Build command: `npm run build`.
- Output directory: `dist`.

### Netlify

- Import this repository into Netlify.
- Build command: `npm run build`.
- Publish directory: `dist`.

## Customization Guide

- Edit content (projects, skills, experience, links, contact info): `src/data/data.ts`
- Edit colors and theme tokens: `src/index.css`
- Replace profile image path: `src/data/data.ts` (`siteConfig.profileImage`)
- Update SEO tags/title/meta: `index.html`
- Update CV file: `public/Md_Saifuzzaman_Abhi_CV.pdf`

## Contact Form Integration (Later)

The form UI is currently static and ready for integration.

- Component to update: `src/components/Contact.tsx`
- Typical options:
  - EmailJS (client-side)
  - Formspree (form endpoint)
  - Custom API/backend endpoint

You can convert the form button to submit behavior and attach `onSubmit` logic in the same file.
