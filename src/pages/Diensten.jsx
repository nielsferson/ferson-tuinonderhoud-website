import { useLocation } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { diensten } from '../data/services.js'

export default function Diensten() {
  const location = useLocation()
  const activeSlug = location.hash.replace('#', '')

  return (
    <section>
      <div className="page-header">
        <h2>Onze diensten</h2>
      </div>
      <div className="services-grid">
        {diensten.map((d, i) => (
          <Reveal key={d.slug} delay={i * 70}>
            <ServiceCard
              id={d.slug}
              icon={d.icon}
              title={d.title}
              description={d.description}
              details={d.details}
              forceOpen={d.slug === activeSlug}
            />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
