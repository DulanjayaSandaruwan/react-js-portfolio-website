import React, { useEffect } from 'react'
import './About.css'
import ME from '../../assets/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  
  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <section id='about' data-aos="zoom-in">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container" data-aos="zoom-in"> 
        <div className="about__me" data-aos="zoom-in">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content" data-aos="zoom-in">
          <div className="about__cards" data-aos="zoom-in">
            <article className='about__card' data-aos="zoom-in">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>
            <article className='about__card' data-aos="zoom-in">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>5+ Worldwide</small>
            </article>
            <article className='about__card' data-aos="zoom-in">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>40+ Completed</small>
            </article>
          </div>

          <p data-aos="zoom-in">
            I'm Dulanjaya Sandaruwan.I'm a Fullstack Developer & Web Designer from Ayagama, Rathnapura,
            Sri lanka who is 23 years old. I'm currently studying software engineering in Institute of
            Software Engineering.Always looking forward for working on newest projects and career opportunities.
          </p>

          <a href="#contact" className='btn btn-primary' data-aos="zoom-in">Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About
