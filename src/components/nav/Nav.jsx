import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsCardChecklist} from 'react-icons/bs'
import {AiOutlineFolderOpen} from 'react-icons/ai'
import {BiMessageAltDetail} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>
      <a href='#' className='active'><AiOutlineHome/></a>
      <a href='#about'><AiOutlineUser/></a>
      <a href='#skills'><BsCardChecklist/></a>
      <a href='#portfolio'><AiOutlineFolderOpen/></a>
      <a href='#contact'><BiMessageAltDetail/></a>
    </nav>
  )
}

export default Nav