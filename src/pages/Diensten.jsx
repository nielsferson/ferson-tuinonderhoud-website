import ServiceCard from '../components/ServiceCard.jsx'
import Reveal from '../components/Reveal.jsx'

const diensten = [
  {
    icon: 'leaf',
    title: 'Onkruid verwijderen',
    description: 'Perken, opritten en terrassen onkruidvrij gemaakt.',
    details:
      'We verwijderen onkruid grondig uit borders, opritten, terrassen en voegen met de hand of op een milieuvriendelijke manier, zonder schadelijke chemische middelen. Zo blijft uw tuin langer netjes en voorkomen we dat het onkruid zich verder verspreidt.',
  },
  {
    icon: 'cut',
    title: 'Snoeien van hagen',
    description: 'Strakke, gezonde hagen in de gewenste vorm.',
    details:
      'Met vakkundig snoeiwerk brengen we uw hagen terug in model, of het nu gaat om een jaarlijkse opfrisbeurt of een grondige renovatie van verwilderde beplanting. We letten op de juiste snoeitechniek en het juiste moment, zodat de haag gezond blijft en mooi dicht vertakt doorgroeit.',
  },
  {
    icon: 'grass',
    title: 'Onderhoud van gazons',
    description: 'Maaien, kanten steken en een verzorgd gazon het hele seizoen.',
    details:
      'Regelmatig maaien, kanten steken en indien nodig verticuteren of bemesten: wij zorgen voor een dicht, groen gazon zonder kale plekken of mos. U kiest het gewenste ritme, wij houden het gazon het hele seizoen strak en verzorgd.',
  },
  {
    icon: 'repeat',
    title: 'Frequent onderhoud',
    description: 'Vast bezoekritme, zodat uw tuin het hele jaar verzorgd blijft.',
    details:
      'Met een vast onderhoudscontract komen we op regelmatige basis langs: wekelijks, tweewekelijks of maandelijks, in overleg met u. Zo blijft uw tuin het hele jaar door verzorgd, zonder dat u er zelf nog naar hoeft om te kijken.',
  },
  {
    icon: 'droplet',
    title: 'Bemesten van planten',
    description: 'Gerichte bemesting voor sterke, gezonde beplanting.',
    details:
      'We kiezen de juiste meststof per plant en per seizoen, zodat hagen, gazon en border optimaal gevoed worden. Gezonde, goed bemeste beplanting is beter bestand tegen ziektes en droogte, en groeit sterker terug na het snoeien.',
  },
]

export default function Diensten() {
  return (
    <section>
      <div className="page-header">
        <h2>Onze diensten</h2>
      </div>
      <div className="services-grid">
        {diensten.map((d, i) => (
          <Reveal key={d.title} delay={i * 70}>
            <ServiceCard icon={d.icon} title={d.title} description={d.description} details={d.details} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
