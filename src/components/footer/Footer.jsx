import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>英雄•Minato™</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100004547087112"><FaFacebookF /></a>
        <a href="https://www.instagram.com/invites/contact/?i=zoe2hcb6et64&utm_content=3dsi5qf"><FaInstagram /></a>
        <a href="https://twitter.com/DulanjayaSanda2?t=mhB821gVSlgGbRCY5bKtGA&s=08"><FaTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Dulanjaya Sandaruwan. All rights reserved.</small>
      </div>
      
    </footer>
  )
}

export default Footer
