import './footer.styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodepen } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className='social-icons'>
              <a 
        href='https://www.linkedin.com/in/tiffanychen13/'  alt='Linkedlin' 
        target='_blank' 
        rel='noreferrer'
      > 
        <FontAwesomeIcon icon={faLinkedin} className='font-icon'/>
      </a>
      <a 
        href='https://github.com/yinjuchen'
        alt='Github'
        target='_blank' 
        rel='noreferrer'
      > 
        <FontAwesomeIcon icon={faGithub} className='font-icon'/>
      </a>
      <a
        href='https://codepen.io/yinjuchen'
        alt='CodePen'
        target='_blank' 
        rel='noreferrer'
      >
        <FontAwesomeIcon icon={faCodepen} className='font-icon'/>
      </a>
      <a
        href='mailto:tiffanyc1213@gmail.com'
        alt='Gmail'
        target='_blank' 
        rel='noreferrer'
      >
      <FontAwesomeIcon icon={faEnvelope} className='font-icon'/>
      </a>
      </div>
      <footer>Made By Tiffany Chen &copy;2024</footer>
    </div>
  )
}

export default Footer