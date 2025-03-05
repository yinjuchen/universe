import { Link, Outlet } from "react-router-dom"
import {ReactComponent as Logo} from '../../assests/logo.svg'
import './navigation.styles.scss'
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Footer from "../../components/footer/footer.component"
import Scroll from "../../components/scroll/scroll.component"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return( 
    <div className="navigation-container">
  
      <Link className='logo-container' to='/'>
        <Logo className="logo"/>
      </Link>
  
      <div className={`nav-links-container ${isMenuOpen ? 'show': ''}`}>
        <Link className="nav-link" to='/about'>
          About
        </Link>
        <Link className="nav-link" to='/projects'>
          Projects
        </Link>
        <a className="nav-link" 
           href='/Resume_ChenYinJu2024.pdf'    
           target="_blank"
           rel="noopener noreferrer"
        >
          Resume
        </a> 
        <button className="icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="fa-vars"/>
        </button>
      </div>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Navigation