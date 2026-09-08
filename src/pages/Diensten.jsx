import ServiceCard from '../components/ServiceCard.jsx'

const diensten = [
  {
    title: 'Onkruid verwijderen',
    description: 'Perken, opritten en terrassen onkruidvrij gemaakt.',
  },
  {
    title: 'Snoeien van hagen',
    description: 'Strakke, gezonde hagen in de gewenste vorm.',
  },
  {
    title: 'Onderhoud van gazons',
    description: 'Maaien, kanten steken en een verzorgd gazon het hele seizoen.',
  },
  {
    title: 'Frequent onderhoud',
    description: 'Vast bezoekritme, zodat uw tuin het hele jaar verzorgd blijft.',
  },
  {
    title: 'Bemesten van planten',
    description: 'Gerichte bemesting voor sterke, gezonde beplanting.',
  },
]

export default function Diensten() {
  return (
    <section>
      <h2>Onze diensten</h2>
      <div className="services-grid">
        {diensten.map((d) => (
          <ServiceCard key={d.title} title={d.title} description={d.description} />
        ))}
      </div>
    </section>
  )
}
