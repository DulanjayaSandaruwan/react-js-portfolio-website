import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/dulanjaya-sandaruwan/" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/DulanjayaSandaruwan" target="_blank"><BsGithub /></a>
      <a href="https://twitter.com/DulanjayaSanda2?t=6J5VXgMw0M3KdOQRe7Uihg&s=08" target="_blank"><FaTwitterSquare /></a>
    </div>
  )
}

export default HeaderSocial