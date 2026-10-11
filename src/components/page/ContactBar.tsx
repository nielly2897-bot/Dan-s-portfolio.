import { EnvelopeSimple, WhatsappLogo, CalendarBlank } from '@phosphor-icons/react'
import { Link } from 'react-router'
import { mailtoHref, site } from '@/content/site'
import './contact-bar.css'

export function ContactBar() {
  return <nav className="contact-bar" aria-label="Quick contact">
    <span className="contact-bar__label">Let’s talk about your project</span>
    <a href={mailtoHref()}><EnvelopeSimple size={18} aria-hidden />Email</a>
    <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer"><WhatsappLogo size={18} aria-hidden />WhatsApp</a>
    <Link to="/contact#booking"><CalendarBlank size={18} aria-hidden />Book a call</Link>
  </nav>
}
