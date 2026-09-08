import BeforeAfterSlider from './BeforeAfterSlider.jsx'

export default function ProjectCard({ title, description, beforeImg, afterImg }) {
  return (
    <div className="project-card">
      <BeforeAfterSlider beforeImg={beforeImg} afterImg={afterImg} alt={title} />
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  )
}
