import { useState } from 'react'

const FORM_ENDPOINT = 'https://formspree.io/f/VUL_HIER_JE_FORM_ID_IN'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section>
      <h2>Contact</h2>

      <ul className="contact-list">
        <li>
          <span>E-mail</span>
          <a href="mailto:ferson.tuinonderhoud@gmail.com">ferson.tuinonderhoud@gmail.com</a>
        </li>
        <li>
          <span>Telefoon</span>
          <a href="tel:+32470194728">+32 470 19 47 28</a>
        </li>
      </ul>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Naam</label>
        <input id="name" name="name" type="text" required />

        <label htmlFor="email">E-mailadres</label>
        <input id="email" name="email" type="email" required />

        <label htmlFor="message">Bericht</label>
        <textarea id="message" name="message" rows="5" required />

        <button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Bezig met versturen...' : 'Versturen'}
        </button>

        {status === 'sent' && <p className="form-status form-status-ok">Bedankt, uw bericht is verstuurd.</p>}
        {status === 'error' && <p className="form-status form-status-error">Er ging iets mis. Probeer het later opnieuw of mail rechtstreeks.</p>}
      </form>
    </section>
  )
}
