import React, { useEffect } from 'react'
import './Services.css'
import {ImRadioChecked} from 'react-icons/im'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Services = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <section id='services' data-aos="zoom-in">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container" data-aos="zoom-in">
        <article className='service' data-aos="zoom-in">
          <div className="service__head" data-aos="zoom-in">
            <h3 data-aos="zoom-in">App Development</h3>
          </div>
          <ul className='service__list' data-aos="zoom-in">
            <li data-aos="zoom-in">
              <ImRadioChecked className='service__list-icon'/>
              <p>I am best known for developing apps for android and standalone.</p>
            </li>
          </ul>
        </article>
        <article className='service' data-aos="zoom-in">
          <div className="service__head" data-aos="zoom-in">
            <h3 data-aos="zoom-in">Web Development</h3>
          </div>
          <ul className='service__list' data-aos="zoom-in">
            <li data-aos="zoom-in">
              <ImRadioChecked className='service__list-icon'/>
              <p>I make your site future-proof with HTML 5, CSS, JavaScript services.</p>
            </li>
          </ul>
        </article>
        <article className='service' data-aos="zoom-in">
          <div className="service__head" data-aos="zoom-in">
            <h3 data-aos="zoom-in">UI/UX Design</h3>
          </div>
          <ul className='service__list' data-aos="zoom-in">
            <li data-aos="zoom-in">
              <ImRadioChecked className='service__list-icon'/>
              <p>Do you want your own logo or Ui/Ux design ? Great you are in the correct place.</p>
            </li>
          </ul>
        </article>
      </div>

    </section>
  )
}

export default Services
