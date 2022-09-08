import React, { useEffect } from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/p1.webp'
import IMG2 from '../../assets/p2.webp'
import IMG3 from '../../assets/p3.webp'
import IMG4 from '../../assets/p4.webp'
import IMG5 from '../../assets/p5.webp'
import IMG6 from '../../assets/p6.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Portfolio = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <section id='portfolio' data-aos="zoom-in">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container"data-aos="zoom-in">
        <article className='portfolio__item'data-aos="zoom-in">
          <div className="portfolio__item-image"data-aos="zoom-in">
            <img src={IMG1} alt="" data-aos="zoom-in"/>
          </div>
          <h3 data-aos="zoom-in">Farming Management App</h3>
          <p data-aos="zoom-in">This ia a standalone project and this is a simple farming management system.Implement by
              using JavaFx and MySQL.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/DulanjayaSandaruwan/green-valley-farm" className='btn' target='_blank' data-aos="zoom-in">Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank' data-aos="zoom-in">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item' data-aos="zoom-in">
          <div className="portfolio__item-image" data-aos="zoom-in">
            <img src={IMG2} alt="" data-aos="zoom-in"/>
          </div>
          <h3 data-aos="zoom-in">ToDo List App</h3>
          <p data-aos="zoom-in">This is a standalone project and this is a simple To-Do list system.Implement by using
              JavaFx and MySQL.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/DulanjayaSandaruwan/todo-list" className='btn' target='_blank' data-aos="zoom-in">Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank' data-aos="zoom-in">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item' data-aos="zoom-in">
          <div className="portfolio__item-image" data-aos="zoom-in">
            <img src={IMG3} alt="" data-aos="zoom-in"/>
          </div>
          <h3 data-aos="zoom-in">Real Time Chat App</h3>
          <p data-aos="zoom-in">This ia a standalone project and this is a simple chat application.Implement by using 
              JavaFx , Socket and Multithreading.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/DulanjayaSandaruwan/real-time-chat-app" className='btn' target='_blank' data-aos="zoom-in">Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank' data-aos="zoom-in">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item' data-aos="zoom-in">
          <div className="portfolio__item-image" data-aos="zoom-in">
            <img src={IMG4} alt="" data-aos="zoom-in"/>
          </div>
          <h3 data-aos="zoom-in">Car Rental System</h3>
          <p data-aos="zoom-in">This ia a web application that able to manage all reservations.Implement by using
              Java , Spring, MySQL, HTML , CSS and JavaScript.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/DulanjayaSandaruwan/easy-car-rental-system" className='btn' target='_blank' data-aos="zoom-in">Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank' data-aos="zoom-in">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item' data-aos="zoom-in">
          <div className="portfolio__item-image" data-aos="zoom-in">
            <img src={IMG5} alt="" data-aos="zoom-in"/>
          </div>
          <h3 data-aos="zoom-in">Point Of Sale System</h3>
          <p data-aos="zoom-in">This ia a web application for manage inventory, manage order and manage bill for customers.Implement by using 
              Java, Spring and MySQL.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/DulanjayaSandaruwan/spring-mvc-pos-system" className='btn' target='_blank' data-aos="zoom-in">Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank' data-aos="zoom-in">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item' data-aos="zoom-in">
          <div className="portfolio__item-image" data-aos="zoom-in">
            <img src={IMG6} alt="" data-aos="zoom-in"/>
          </div>
          <h3 data-aos="zoom-in">Dice Game</h3>
          <p data-aos="zoom-in">This ia a web base game for demonstrate the knowledge of JavaScript.Implement by using
              HTML, CSS, JavaScript</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/DulanjayaSandaruwan/dice-game" className='btn' target='_blank' data-aos="zoom-in">Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank' data-aos="zoom-in">Live Demo</a>
          </div>
        </article>
        
      </div>

      <div className="explore-more__project" data-aos="zoom-in">
        <a href="https://github.com/DulanjayaSandaruwan?tab=repositories" target='_blank' data-aos="zoom-in">
          <h4 data-aos="zoom-in">Explore More ▶▶</h4></a>
      </div>

    </section>
  )
}

export default Portfolio
