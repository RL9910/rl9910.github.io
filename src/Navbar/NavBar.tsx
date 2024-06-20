import React from 'react';
import './NavBar.css';
import { Link } from 'react-scroll'

export function NavBar(){

  const[scrolled, setScrolled] = React.useState(false)

  const handleScroll = () => {
    if(window.scrollY >= 20){
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  window.addEventListener('scroll', handleScroll)

    return (
      <header className={"header" +' '+ (scrolled? "navbar-scrolled" : "") }>
        <nav className={"navbar"}>
        <Link to="home" smooth={true} duration={500}>
            Hello
        </Link>
        <Link to="about" smooth={true} duration={500}>
            About
        </Link>
        <Link to="skill" smooth={true} duration={500}>
            Skill
        </Link>
        <Link to="project" smooth={true} duration={500}>
            Project
        </Link>
        
        <Link to="contact" smooth={true} duration={500}>
            Contact
        </Link>
        </nav>
      </header>
      


    )
}