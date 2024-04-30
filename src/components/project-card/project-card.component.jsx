import './project-card.styles.scss'
const ProjectCard = ({data}) => {
  return (
    <div className="project-card-container">
      <a href={data.projectLink} className='project-image-link' target='_blank' rel='noreferrer'>
        <img src={data.imageUrl} alt={data.name}/>
      </a>
       <a href={data.projectLink} className='project-title-link' target='_blank' rel='noreferrer'>
        <h3 className='project-name'>{data.name}</h3>
      </a>
        <div className='project-link-container'>
        <a href={data.sourceLink} className='source-link' target='_blank' rel='noreferrer'>View Source</a>
        </div>
    </div>
  )
}

export default ProjectCard