import './home.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Skills from '../../components/skill/skill.component'

const Home = () => {
  return (
    <div className="home-container"> 
      <h1>Hi, I'm Tiffany Chen</h1>
      <Skills/>
      <p className="header-text">
        Crafting digital experience as a Frontend Developer and Creative Learner
      </p>
      <div className='links-container'>
        Dive into my <Link to="/projects" className='project-link'>Projects,</Link>
        {/* <a className="resume-link" 
           href='/Resume_ChenYinJu2025.pdf'    
           target="_blank"
           rel="noopener noreferrer">
           Resume,
        </a> */}
        or feel free to reach out at 
        <a className='contact-link' href="mailto:tiffanyc1213@gmail.com">tiffanyc1213@gmail.com</a>
      </div><br/>
      <div className='about-container'>
        Discover More About My Journey <Link to='/about' className='about-link'><FontAwesomeIcon icon={faArrowRight}/></Link>
      </div>
    </div>
  )
}

export default Home