# Deploy Daniel's portfolio

In Netlify, choose **Add new project → Import an existing project → GitHub** and select `nielly2897-bot/Dan-s-portfolio.`.

- Production branch: `main`
- Base directory: leave blank (the portfolio is at the repository root)
- Build command: `npm run build`
- Publish directory: `dist`

`netlify.toml` supplies these settings, Node 24, security headers, and the rewrite needed for direct links such as `/work/screens` and `/contact`.

The build uses Netlify's production URL for link previews, canonical URLs, and the sitemap. If adding a custom domain, set `VITE_SITE_URL` to its HTTPS URL without a trailing slash, then redeploy.

The contact buttons open a prefilled email or WhatsApp message for visitors to send. The booking calendar connects to the supplied GoHighLevel widget. No API keys or backend setup are required.

Future pushes to `main` trigger a new deploy once GitHub is connected in Netlify.
