import './project-card.styles.scss'
const ProjectCard = ({data}) => {
  return (
    <div className="project-card-container">
       <img src={data.imageUrl} alt={data.name}/>
        <h2 className='project-name'>{data.name}</h2>
        <div className='project-link-container'>
          <a href={data.projectLink} className='project-link'target='_blank' rel='noreferrer'>Discover</a>
        </div>
        <a href={data.sourceLink} className='source-link' target='_blank' rel='noreferrer'>View Source Code</a>
    </div>
  )
}

export default ProjectCard