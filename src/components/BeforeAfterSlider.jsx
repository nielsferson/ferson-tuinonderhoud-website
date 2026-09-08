import { useRef, useState } from 'react'

export default function BeforeAfterSlider({ beforeImg, afterImg, alt, beforeLabel = 'Voor', afterLabel = 'Na' }) {
  const [pos, setPos] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [interacted, setInteracted] = useState(false)
  const containerRef = useRef(null)
  const draggingRef = useRef(false)

  function updateFromClientX(clientX) {
    const rect = containerRef.current.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, pct)))
  }

  function onPointerDown(e) {
    draggingRef.current = true
    setIsDragging(true)
    setInteracted(true)
    containerRef.current.setPointerCapture(e.pointerId)
    updateFromClientX(e.clientX)
  }

  function onPointerMove(e) {
    if (!draggingRef.current) return
    updateFromClientX(e.clientX)
  }

  function onPointerUp() {
    draggingRef.current = false
    setIsDragging(false)
  }

  function onKeyDown(e) {
    if (e.key === 'ArrowLeft') { setInteracted(true); setPos((p) => Math.max(0, p - 5)) }
    if (e.key === 'ArrowRight') { setInteracted(true); setPos((p) => Math.min(100, p + 5)) }
    if (e.key === 'Home') { setInteracted(true); setPos(0) }
    if (e.key === 'End') { setInteracted(true); setPos(100) }
  }

  return (
    <div
      className={`ba-slider${isDragging ? ' is-dragging' : ''}`}
      ref={containerRef}
      style={{ '--pos': `${pos}%` }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <img src={afterImg} alt={`${alt} - ${afterLabel.toLowerCase()}`} className="ba-slider-img" draggable={false} />

      <div className="ba-slider-before-wrap">
        <img src={beforeImg} alt={`${alt} - ${beforeLabel.toLowerCase()}`} className="ba-slider-img" draggable={false} />
      </div>

      <span className="ba-slider-tag ba-slider-tag-before">{beforeLabel}</span>
      <span className="ba-slider-tag ba-slider-tag-after">{afterLabel}</span>

      {!interacted && <span className="ba-slider-hint">Sleep om te vergelijken</span>}

      <div
        className="ba-slider-handle"
        style={{ left: `${pos}%` }}
        role="slider"
        tabIndex={0}
        aria-label={`Vergelijk ${beforeLabel.toLowerCase()} en ${afterLabel.toLowerCase()}`}
        aria-valuenow={Math.round(pos)}
        aria-valuemin={0}
        aria-valuemax={100}
        onKeyDown={onKeyDown}
      >
        <span className="ba-slider-handle-grip">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 6l6 6-6 6M9 6L3 12l6 6" />
          </svg>
        </span>
      </div>
    </div>
  )
}
