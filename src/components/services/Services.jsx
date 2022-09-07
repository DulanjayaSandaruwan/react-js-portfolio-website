import React from 'react'
import './Services.css'
import {ImRadioChecked} from 'react-icons/im'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>App Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <ImRadioChecked className='service__list-icon'/>
              <p>I am best known for developing apps for android and standalone.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <ImRadioChecked className='service__list-icon'/>
              <p>I make your site future-proof with HTML 5, CSS, JavaScript services.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
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
