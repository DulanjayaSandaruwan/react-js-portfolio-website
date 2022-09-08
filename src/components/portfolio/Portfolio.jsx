import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/p1.webp'
import IMG2 from '../../assets/p2.webp'
import IMG3 from '../../assets/p3.webp'
import IMG4 from '../../assets/p4.webp'
import IMG5 from '../../assets/p5.webp'
import IMG6 from '../../assets/p6.webp'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Farming Management App</h3>
          <p>This ia a standalone project and this is a simple farming management system.Implement by
              using JavaFx and MySQL.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/DulanjayaSandaruwan/green-valley-farm" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>ToDo List App</h3>
          <p>This is a standalone project and this is a simple To-Do list system.Implement by using
              JavaFx and MySQL.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/DulanjayaSandaruwan/todo-list" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Real Time Chat App</h3>
          <p>This ia a standalone project and this is a simple chat application.Implement by using 
              JavaFx , Socket and Multithreading.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/DulanjayaSandaruwan/real-time-chat-app" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Car Rental System</h3>
          <p>This ia a web application that able to manage all reservations.Implement by using
              Java , Spring, MySQL, HTML , CSS and JavaScript.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/DulanjayaSandaruwan/easy-car-rental-system" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Point Of Sale System</h3>
          <p>This ia a web application for manage inventory, manage order and manage bill for customers.Implement by using 
              Java, Spring and MySQL.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/DulanjayaSandaruwan/spring-mvc-pos-system" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Dice Game</h3>
          <p>This ia a web base game for demonstrate the knowledge of JavaScript.Implement by using
              HTML, CSS, JavaScript</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/DulanjayaSandaruwan/dice-game" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        
      </div>

      <div className="explore-more__project">
        <a href="https://github.com/DulanjayaSandaruwan?tab=repositories" target='_blank'>
          <h4>Explore More >></h4></a>
      </div>

    </section>
  )
}

export default Portfolio
