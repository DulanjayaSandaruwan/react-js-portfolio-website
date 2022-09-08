import React, { useEffect } from 'react'
import './Contact.css'
import {MdMailOutline} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {

  const form = useRef();

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_46ay0qa', 'template_52hybtc', form.current, '_FqgOHdF6ThvCV6NE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact' data-aos="zoom-in">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdMailOutline className='contact__option-icon'/>
            <h4>E-Mail</h4>
            <h5>dulanjayasandaruwan1998@gmail.com</h5>
            <a href="mailto:dulanjayasandaruwan1998@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Dulanjaya Sandaruwan</h5>
            <a href="https://www.linkedin.com/in/dulanjaya-sandaruwan-11b334220">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whats App</h4>
            <h5>+94769654764</h5>
            <a href="https://wa.me/94769654764">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your E-Mail' required />
          <textarea name="message" rows="10" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact
