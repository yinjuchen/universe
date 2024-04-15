import { Fragment } from "react"
import './skill.styles.scss'


const Skill = () => {
  const skllsData = [
    'JavaScripts', 
    'React', 
    'HTML',
    'CSS',
    'SASS',
    'Node.js',
    'PostgreSql',
    'Firebase', 
    'Cypress'
  ]
  return (
    <div className="skill-container">
      <h3 className="skill-text">Skills</h3>
      {
        skllsData.map((data, index) => {
          return (
            <div className="skills" key={index}>{data}</div>
          )
        })
      }
    </div>
  )
}

export default Skill