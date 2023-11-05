import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/kristinekim.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kristine Kim</h1>
        <h5 className="text-light">Software Development Professional</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='' />

          <a href='#contact' className='scroll_down'>Scroll Down</a>
        </div>
      </div>
      
    </header>
  )
}

export default Header
