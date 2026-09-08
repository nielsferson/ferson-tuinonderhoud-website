import { useState } from 'react'
import ServiceIcon from '../components/ServiceIcon.jsx'
import { diensten } from '../data/services.js'

const FORM_ENDPOINT = 'https://formspree.io/f/mbgjpgnb'

const SERVICES = [
  ...diensten.map((d) => ({ id: d.slug, label: d.title, icon: d.icon })),
  { id: 'anders', label: 'Iets anders', icon: 'other' },
]

const GARDEN_SIZES = [
  { id: 'klein', label: 'Klein', hint: 'tot 100 m²' },
  { id: 'middel', label: 'Middelgroot', hint: '100 - 500 m²' },
  { id: 'groot', label: 'Groot', hint: '500 m²+' },
]

const TIMINGS = [
  { id: 'spoedig', label: 'Zo snel mogelijk' },
  { id: 'binnenkort', label: 'Binnen enkele weken' },
  { id: 'flexibel', label: 'Ik ben flexibel' },
]

const FREQUENCIES = [
  { id: 'eenmalig', label: 'Eenmalige beurt' },
  { id: 'terugkerend', label: 'Regelmatig onderhoud' },
]

const STEPS = ['Dienst', 'Tuin & planning', 'Contactgegevens', 'Overzicht']

const initialData = {
  services: [],
  gardenSize: '',
  timing: '',
  frequency: '',
  postcode: '',
  name: '',
  email: '',
  phone: '',
  message: '',
}

function labelFor(list, id) {
  return list.find((item) => item.id === id)?.label ?? ''
}

export default function Contact() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState(initialData)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [touched, setTouched] = useState(false)

  const stepValid = [
    data.services.length > 0,
    Boolean(data.gardenSize && data.timing && data.frequency),
    Boolean(data.name.trim() && data.email.trim()),
    true,
  ]

  function update(field, value) {
    setData((d) => ({ ...d, [field]: value }))
  }

  function toggleService(id) {
    setData((d) => ({
      ...d,
      services: d.services.includes(id) ? d.services.filter((s) => s !== id) : [...d.services, id],
    }))
  }

  function goNext() {
    if (!stepValid[step]) {
      setTouched(true)
      return
    }
    setTouched(false)
    setStep((s) => Math.min(s + 1, STEPS.length - 1))
  }

  function goBack() {
    setTouched(false)
    setStep((s) => Math.max(s - 1, 0))
  }

  function goToStep(i) {
    if (i < step) {
      setTouched(false)
      setStep(i)
    }
  }

  function handleKeyDown(e) {
    if (e.key !== 'Enter' || e.target.tagName === 'TEXTAREA') return
    if (step < STEPS.length - 1) {
      e.preventDefault()
      goNext()
    }
  }

  async function submitQuote() {
    if (!stepValid[2]) {
      setTouched(true)
      return
    }
    setStatus('sending')

    const payload = {
      Diensten: data.services.map((id) => labelFor(SERVICES, id)).join(', '),
      Tuingrootte: labelFor(GARDEN_SIZES, data.gardenSize),
      'Gewenste timing': labelFor(TIMINGS, data.timing),
      Type: labelFor(FREQUENCIES, data.frequency),
      Postcode: data.postcode || '-',
      Naam: data.name,
      Email: data.email,
      Telefoon: data.phone || '-',
      Bericht: data.message || '-',
      _subject: `Offerteaanvraag van ${data.name}`,
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  function startOver() {
    setData(initialData)
    setStep(0)
    setStatus('idle')
    setTouched(false)
  }

  return (
    <section>
      <div className="page-header">
        <h2>Contact</h2>
      </div>

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

      {status === 'sent' ? (
        <div className="quote-success">
          <span className="quote-success-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </span>
          <h3>Bedankt{data.name ? `, ${data.name.split(' ')[0]}` : ''}!</h3>
          <p>Uw offerteaanvraag is verstuurd. We nemen zo snel mogelijk contact met u op.</p>
          <button type="button" className="quote-btn quote-btn-ghost" onClick={startOver}>
            Nieuwe aanvraag starten
          </button>
        </div>
      ) : (
        <div className="quote-wizard">
          <ol className="quote-steps">
            {STEPS.map((label, i) => (
              <li
                key={label}
                className={`quote-step-indicator${i === step ? ' is-active' : ''}${i < step ? ' is-done' : ''}${i < step ? ' is-clickable' : ''}`}
                onClick={() => goToStep(i)}
              >
                <span className="quote-step-dot">
                  {i < step ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </span>
                <span className="quote-step-label">{label}</span>
              </li>
            ))}
          </ol>
          <p className="quote-step-counter" aria-live="polite">Stap {step + 1} van {STEPS.length} — {STEPS[step]}</p>

          <form className="quote-form" onSubmit={(e) => e.preventDefault()} onKeyDown={handleKeyDown}>
            <div className="quote-track" style={{ transform: `translateX(-${step * 100}%)` }}>
              <div className="quote-panel" {...(step !== 0 ? { inert: '' } : {})}>
                <h3>Voor welke dienst(en) wilt u een offerte?</h3>
                <p className="quote-panel-hint">Kies één of meerdere diensten.</p>
                <div className="chip-grid">
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      className={`chip${data.services.includes(s.id) ? ' is-selected' : ''}`}
                      aria-pressed={data.services.includes(s.id)}
                      onClick={() => toggleService(s.id)}
                    >
                      <ServiceIcon name={s.icon} />
                      {s.label}
                    </button>
                  ))}
                </div>
                {touched && !stepValid[0] && <p className="quote-error">Kies minstens één dienst.</p>}
              </div>

              <div className="quote-panel" {...(step !== 1 ? { inert: '' } : {})}>
                <h3>Vertel iets over uw tuin</h3>

                <fieldset className="quote-field">
                  <legend>Grootte van de tuin</legend>
                  <div className="option-grid">
                    {GARDEN_SIZES.map((g) => (
                      <button
                        key={g.id}
                        type="button"
                        className={`option-card${data.gardenSize === g.id ? ' is-selected' : ''}`}
                        aria-pressed={data.gardenSize === g.id}
                        onClick={() => update('gardenSize', g.id)}
                      >
                        <span className="option-card-label">{g.label}</span>
                        <span className="option-card-hint">{g.hint}</span>
                      </button>
                    ))}
                  </div>
                </fieldset>

                <fieldset className="quote-field">
                  <legend>Gewenste timing</legend>
                  <div className="chip-grid">
                    {TIMINGS.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        className={`chip chip-plain${data.timing === t.id ? ' is-selected' : ''}`}
                        aria-pressed={data.timing === t.id}
                        onClick={() => update('timing', t.id)}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <fieldset className="quote-field">
                  <legend>Type dienstverlening</legend>
                  <div className="chip-grid">
                    {FREQUENCIES.map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        className={`chip chip-plain${data.frequency === f.id ? ' is-selected' : ''}`}
                        aria-pressed={data.frequency === f.id}
                        onClick={() => update('frequency', f.id)}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div className="quote-field">
                  <label htmlFor="postcode">Postcode / gemeente <span className="quote-optional">(optioneel)</span></label>
                  <input
                    id="postcode"
                    type="text"
                    value={data.postcode}
                    onChange={(e) => update('postcode', e.target.value)}
                    placeholder="bv. 3500 Hasselt"
                  />
                </div>

                {touched && !stepValid[1] && <p className="quote-error">Kies de grootte, timing en het type dienstverlening.</p>}
              </div>

              <div className="quote-panel" {...(step !== 2 ? { inert: '' } : {})}>
                <h3>Uw contactgegevens</h3>
                <div className="quote-field">
                  <label htmlFor="name">Naam</label>
                  <input id="name" type="text" value={data.name} onChange={(e) => update('name', e.target.value)} required />
                </div>
                <div className="quote-field">
                  <label htmlFor="email">E-mailadres</label>
                  <input id="email" type="email" value={data.email} onChange={(e) => update('email', e.target.value)} required />
                </div>
                <div className="quote-field">
                  <label htmlFor="phone">Telefoon <span className="quote-optional">(optioneel)</span></label>
                  <input id="phone" type="tel" value={data.phone} onChange={(e) => update('phone', e.target.value)} />
                </div>
                <div className="quote-field">
                  <label htmlFor="message">Extra informatie <span className="quote-optional">(optioneel)</span></label>
                  <textarea id="message" rows="4" value={data.message} onChange={(e) => update('message', e.target.value)} />
                </div>
                {touched && !stepValid[2] && <p className="quote-error">Vul minstens uw naam en e-mailadres in.</p>}
              </div>

              <div className="quote-panel" {...(step !== 3 ? { inert: '' } : {})}>
                <h3>Controleer uw aanvraag</h3>
                <dl className="quote-summary">
                  <div className="quote-summary-row">
                    <dt>Diensten</dt>
                    <dd>{data.services.map((id) => labelFor(SERVICES, id)).join(', ') || '-'}</dd>
                  </div>
                  <div className="quote-summary-row">
                    <dt>Tuingrootte</dt>
                    <dd>{labelFor(GARDEN_SIZES, data.gardenSize) || '-'}</dd>
                  </div>
                  <div className="quote-summary-row">
                    <dt>Timing</dt>
                    <dd>{labelFor(TIMINGS, data.timing) || '-'}</dd>
                  </div>
                  <div className="quote-summary-row">
                    <dt>Type</dt>
                    <dd>{labelFor(FREQUENCIES, data.frequency) || '-'}</dd>
                  </div>
                  {data.postcode && (
                    <div className="quote-summary-row">
                      <dt>Locatie</dt>
                      <dd>{data.postcode}</dd>
                    </div>
                  )}
                  <div className="quote-summary-row">
                    <dt>Naam</dt>
                    <dd>{data.name}</dd>
                  </div>
                  <div className="quote-summary-row">
                    <dt>E-mail</dt>
                    <dd>{data.email}</dd>
                  </div>
                  {data.phone && (
                    <div className="quote-summary-row">
                      <dt>Telefoon</dt>
                      <dd>{data.phone}</dd>
                    </div>
                  )}
                  {data.message && (
                    <div className="quote-summary-row">
                      <dt>Bericht</dt>
                      <dd>{data.message}</dd>
                    </div>
                  )}
                </dl>
                <p className="quote-panel-hint">Klopt er iets niet? Gebruik "Terug" om het aan te passen.</p>
              </div>
            </div>

            <div className="quote-actions">
              {step > 0 ? (
                <button type="button" className="quote-btn quote-btn-ghost" onClick={goBack}>
                  ← Terug
                </button>
              ) : <span />}

              {step < STEPS.length - 1 ? (
                <button type="button" className="quote-btn" onClick={goNext}>
                  Volgende →
                </button>
              ) : (
                <button type="button" className="quote-btn" onClick={submitQuote} disabled={status === 'sending'}>
                  {status === 'sending' ? 'Bezig met versturen...' : 'Offerte aanvragen'}
                </button>
              )}
            </div>

            {status === 'error' && (
              <p className="form-status form-status-error">Er ging iets mis. Probeer het later opnieuw of mail rechtstreeks.</p>
            )}
          </form>
        </div>
      )}
    </section>
  )
}
