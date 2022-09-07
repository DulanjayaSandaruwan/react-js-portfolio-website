import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
      <a href="https://gihub.com" target="_blank"><BsGithub /></a>
      <a href="https://twitter.com" target="_blank"><FaTwitterSquare /></a>
    </div>
  )
}

export default HeaderSocial