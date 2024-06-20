import {NavBar} from './Navbar/NavBar';
import { Home } from './Home/Home';
import { About } from './About/About';
import { Element } from 'react-scroll';
import { Project } from './Project/Project';
import { Skill } from './Skill/Skill';
import { Contact } from './Contact/Contact';
import { Footer } from './Footer/Footer';

export function Main() {
    return (
    <>
    <NavBar/>
      <Element name="home">
        <Home/>
      </Element>
      <Element name="about">
        <About/>
      </Element>
      <Element name="skill">
        <Skill/>
      </Element>
      <Element name="project">
        <Project/>
      </Element>
      <Element name="contact">
        <Contact/>
      </Element>
      <Footer/>
    </>
    )
}