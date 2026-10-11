# Daniel Torres — Socinex Portfolio

Live website: https://danieltorresportfolio.netlify.app

Portfolio for Daniel Torres, showcasing GoHighLevel websites, automation, CRM pipeline management, social content, video editing, campaign strategy, and product design.

## Run locally

Use Node.js 24.

```sh
npm ci
npm run dev
```

The preview runs at http://localhost:5190.

## Production build

```sh
npm run build
```

The production website is generated in `dist/`. The build checks TypeScript and generates the sitemap, robots file, and build version.

## Publish on Netlify

See [Netlify deployment instructions](NETLIFY.md). The repository includes `netlify.toml` with build settings, security headers, and page routing. Connect the `main` branch for automatic deployments.

## Update the portfolio

- `src/content/`: portfolio entries, services, profile, contact details, and testimonials
- `public/images/`: project previews, portraits, thumbnails, and testimonials
- `public/documents/`: DISC report, DTI registration, and email design PDF
- `public/videos/`: automation walkthrough

The contact form opens prefilled WhatsApp or email messages. Booking uses the supplied GoHighLevel calendar widget.

Built with React, TypeScript, and Vite, based on the Portfolio Template V2 layout. See [LICENSE](LICENSE) for the retained template license.
