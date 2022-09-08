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

      <div className="container contact__container" data-aos="zoom-in">
        <div className="contact__options" data-aos="zoom-in">
          <article className="contact__option" data-aos="zoom-in">
            <MdMailOutline className='contact__option-icon' data-aos="zoom-in"/>
            <h4 data-aos="zoom-in">E-Mail</h4>
            <h5 data-aos="zoom-in">dulanjayasandaruwan1998@gmail.com</h5>
            <a href="mailto:dulanjayasandaruwan1998@gmail.com" data-aos="zoom-in">Send a message</a>
          </article>
          <article className="contact__option" data-aos="zoom-in">
            <AiOutlineLinkedin className='contact__option-icon' data-aos="zoom-in"/>
            <h4 data-aos="zoom-in">Linkedin</h4>
            <h5 data-aos="zoom-in">Dulanjaya Sandaruwan</h5>
            <a href="https://www.linkedin.com/in/dulanjaya-sandaruwan-11b334220" data-aos="zoom-in">Send a message</a>
          </article>
          <article className="contact__option" data-aos="zoom-in">
            <BsWhatsapp className='contact__option-icon' data-aos="zoom-in"/>
            <h4 data-aos="zoom-in">Whats App</h4>
            <h5 data-aos="zoom-in">+94769654764</h5>
            <a href="https://wa.me/94769654764" data-aos="zoom-in">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} data-aos="zoom-in">
          <input type="text" name='name' placeholder='Your Full Name' required data-aos="zoom-in"/>
          <input type="email" name='email' placeholder='Your E-Mail' required data-aos="zoom-in"/>
          <textarea name="message" rows="10" placeholder='Your Message' data-aos="zoom-in"></textarea>
          <button type='submit' className='btn btn-primary' data-aos="zoom-in">Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact
