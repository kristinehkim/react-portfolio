import React from 'react'
import './footer.css'
import { FaGithub } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer>
      <a href='#header' className='footer__tag'>Kristine Kim</a>

      <ul className='permalinks'>
        <li><a href='#header'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://github.com/kristinehkim'><FaGithub /></a>
        <a href='https://twitter.com/kristinehkim'><FaXTwitter /></a>
      </div>

      <div className='footer__copyright'>
      <small>&copy; KRISTINE KIM. ALL RIGHTS RESERVED.</small>
    </div>
    </footer>

  )
}

export default Footer