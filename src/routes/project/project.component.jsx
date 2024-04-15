import ProjectCard from '../../components/project-card/project-card.component'
import './project.styles.scss'

const Projects = () => {
  const projectData = [
    {
      name: 'Artsync',
      imageUrl: 'https://i.ibb.co/LYyWkJJ/artsync.webp',
      projectLink: 'https://artsync.netlify.app/',
      sourceLink: 'https://github.com/yinjuchen/artsync.git'
    },
    {
      name: 'SandWichology',
      imageUrl: 'https://i.ibb.co/fdKgbgs/sandwich.webp',
      projectLink: 'https://yinjuchen.github.io/sandwichology/',
      sourceLink: 'https://github.com/yinjuchen/sandwichology.git'
    },
    {
      name: 'Bookflow',
      imageUrl: 'https://i.ibb.co/PMvXnYy/bookflow.webp',
      projectLink: 'https://bookflow-fbcg.onrender.com',
      sourceLink: 'https://github.com/yinjuchen/bookflow.git'
    },
  ]
  return (
    <div className='projects'>
      <div className="project-container">
          {
            projectData.map((data, index) => {
              return (
                <div className='project-detail-container' key={index}>
                  <ProjectCard data={data}/>
                </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default Projects