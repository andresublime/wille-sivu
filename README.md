# Psykologipalvelu Ville Huuskonen

A professional psychology services website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Hero Section**: Full-screen forest background with call-to-action
- **About Section**: Two-column layout with biography and professional photo
- **Contact Form**: Functional form with client-side validation
- **Responsive Design**: Mobile-first design that works on all devices
- **Finnish Language**: All content in Finnish
- **Smooth Scrolling**: Navigation between sections

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Image Optimization**: Next.js Image component
- **Form Handling**: React state with validation

## Getting Started

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build

```bash
npm run build
```

Creates an optimized production build.

### Start Production Server

```bash
npm run start
```

Runs the production build locally.

## Project Structure

```
/app
  layout.tsx        # Root layout with metadata
  page.tsx          # Main page combining all sections
  globals.css       # Global styles and CSS variables

/components
  Hero.tsx          # Hero section with forest background
  About.tsx         # About section with bio and photo
  ContactForm.tsx   # Contact form with validation

/public
  /images
    hero-forest.jpg     # Hero background image
    ville-portrait.jpg  # Portrait photo
```

## Form Submission

The contact form currently includes client-side validation but needs a backend API endpoint for actual form submission. To implement:

1. Create an API route at `/app/api/contact/route.ts`
2. Set up email service (e.g., SendGrid, Resend, or Nodemailer)
3. Update the form submission handler in `ContactForm.tsx`

## Customization

### Colors

The site uses a custom color palette defined in the components. Main colors:
- Beige/Taupe: `#c4b5a0` (buttons and accents)
- Dark Blue-Grey: `#5a6a72` (About section background)
- Dark Grey: `#3a3a3a` (Contact section background)

### Content

All text content is in Finnish and can be edited directly in the component files.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new):

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Your site will be deployed with automatic HTTPS and global CDN

## License

Private project for Ville Huuskonen Psychology Services.
