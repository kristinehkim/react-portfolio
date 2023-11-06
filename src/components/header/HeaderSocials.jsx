import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaSlack } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'><BsLinkedin /></a>
      <a href='https://github.com' target='_blank' rel='noopener noreferrer'><FaGithub /></a>
      <a href='https://slack.com/' target='_blank' rel='noopener noreferrer'><FaSlack /></a>
    </div>
  )
}

export default HeaderSocials