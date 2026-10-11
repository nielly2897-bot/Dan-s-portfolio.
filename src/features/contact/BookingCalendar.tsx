import { useEffect } from 'react'

export function BookingCalendar() {
  useEffect(() => {
    if (document.querySelector('script[data-ghl-calendar]')) return
    const script = document.createElement('script')
    script.src = 'https://link.msgsndr.com/js/form_embed.js'
    script.async = true
    script.dataset.ghlCalendar = 'true'
    document.body.appendChild(script)
  }, [])
  return <section id="booking" className="ct-booking" aria-labelledby="booking-title">
    <h2 id="booking-title">Book a call</h2>
    <p>Choose a time to talk about your website, automation, or content project.</p>
    <iframe src="https://api.leadconnectorhq.com/widget/booking/b2AjFinUT8TtUHEWUBGY" title="Book a call with Daniel Torres" allow="payment" scrolling="no" id="b2AjFinUT8TtUHEWUBGY_1791743252898" />
    <a className="btn-line" href="https://api.leadconnectorhq.com/widget/booking/b2AjFinUT8TtUHEWUBGY" target="_blank" rel="noopener noreferrer">Open calendar in a new tab</a>
  </section>
}
