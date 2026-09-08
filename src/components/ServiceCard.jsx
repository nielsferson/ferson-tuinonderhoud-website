import { useId, useState } from 'react'
import ServiceIcon from './ServiceIcon.jsx'

export default function ServiceCard({ icon, title, description, details }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div className={`service-card${open ? ' is-open' : ''}`}>
      <button
        type="button"
        className="service-card-header"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="service-card-icon">
          <ServiceIcon name={icon} />
        </span>
        <span className="service-card-heading">
          <h3>{title}</h3>
          <p>{description}</p>
        </span>
        <span className="service-card-chevron" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      <div className="service-card-panel" id={panelId}>
        <div className="service-card-panel-inner">
          <p className="service-card-details">{details}</p>
        </div>
      </div>
    </div>
  )
}
