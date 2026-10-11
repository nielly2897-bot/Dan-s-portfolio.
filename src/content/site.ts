import type { Credential, SocialLink } from './schema'

/**
 * Who the site is about. START HERE: every page, the sidebar, the SEO tags and the legal pages read
 * these values, so changing them here changes them everywhere.
 */
export const site = {
  name: 'Daniel Torres',
  brand: 'Socinex',
  /** The brand name as the sidebar logo shows it: the second part takes the accent color. */
  brandParts: ['Soci', 'nex'],
  /** Your logo mark, one file per theme (`light` = for light backgrounds). The 96px copies are the
   *  sidebar header (shown at 32-36px); the full ones are the Work logo faces. */
  logo: {
    light: '/images/brand/socinex.svg',
    dark: '/images/brand/socinex.svg',
    headerLight: '/images/brand/socinex.svg',
    headerDark: '/images/brand/socinex.svg',
  },
  /** The live address, no trailing slash. Canonical URLs, the sitemap and the JSON-LD use it. */
  url: import.meta.env.VITE_SITE_URL || 'http://127.0.0.1:5190',
  role: 'GHL Website & Automation Specialist | SMM Content Strategist',
  email: 'nielly2897@gmail.com',
  whatsapp: '+63 976 022 8374',
  whatsappUrl: 'https://wa.me/639760228374',
  discordUsername: '.newerth',
  emailSubject: 'Project inquiry',
  replyPromise: 'Reply within one business day.',
  location: 'Cavite, Philippines',
  /** Two-letter country code (ISO 3166) for the Person JSON-LD address. */
  countryCode: 'PH',
  /** Your clock, shown live at the top of the sidebar. Any IANA zone, e.g. 'America/New_York'. */
  timeZone: 'Asia/Manila',
  timePlace: 'in Cavite',
  avatar: { src: '/images/profile/daniel-torres.png', alt: 'Daniel Torres', width: 1086, height: 1448 },
  /** The sidebar picture (112px, 44px on the rail). */
  avatarSmall: '/images/profile/daniel-torres.png',
} as const

/** A credential shown in About and the sidebar check. Delete the `image` to show it without a badge. */
export const certification: Credential = {
  title: 'Your Certification',
  detail: 'Credential ID #0000',
  issuer: 'Issuing Organization',
  href: '#',
  image: { src: '/images/badges/badge.webp', alt: 'Your certification badge', width: 96, height: 96 },
}

/** Up to five fit the sidebar header. `icon` picks the glyph in components/brand/SocialIcon.tsx. */
export const socials: SocialLink[] = [
{label:'Facebook',href:'https://www.facebook.com/dnltrrs/',external:true,icon:'facebook'},
{label:'TikTok',href:'https://www.tiktok.com/@danieltorresghl',external:true,icon:'tiktok'},
{label:'LinkedIn',href:'https://www.linkedin.com/in/daniel-torres-4a647b17a/',external:true,icon:'linkedin'},
{label:'YouTube',href:'https://www.youtube.com/@DanielTorres-go7vn',external:true,icon:'youtube'},
{label:'GitHub',href:'https://github.com/nielly2897-bot',external:true,icon:'github'},
{label:'X',href:'https://x.com/DyRonce_',external:true,icon:'x'},
{label:'WhatsApp',href:site.whatsappUrl,external:true,icon:'whatsapp'},
]
/** Off-site links the pages point at. Replace each `#` with a real URL. */
export const externalLinks = {
  resource: '#',
  showcase: '#',
  company: '#',
} as const

export function mailtoHref(): string {
  if (!site.email) return site.whatsappUrl
  return `mailto:${site.email}?subject=${encodeURIComponent(site.emailSubject)}`
}
