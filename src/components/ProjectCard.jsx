export default function ProjectCard({ title, description, beforeImg, afterImg }) {
  return (
    <div className="project-card">
      <div className="project-images">
        <div className="project-image">
          <img src={beforeImg} alt={`${title} - voor`} />
          <span className="project-label">Voor</span>
        </div>
        <div className="project-image">
          <img src={afterImg} alt={`${title} - na`} />
          <span className="project-label">Na</span>
        </div>
      </div>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  )
}
