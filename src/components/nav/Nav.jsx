import React from 'react'
import './nav.css'
import { BiHomeAlt2 } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { AiOutlineMessage } from 'react-icons/ai'
import { useState } from 'react'


const Nav = () => {
  const [navAtivo, setNavAtivo] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setNavAtivo('#')} className={navAtivo === '#' ? 'active' : ''}> <BiHomeAlt2 /> </a>
      <a href="#about" onClick={() => setNavAtivo('#about')} className={navAtivo==='#about' ? 'active' : ''}> <AiOutlineUser /> </a>
      <a href="#experience" onClick={() => setNavAtivo('#experience')} className={navAtivo==='#experience' ? 'active' : ''}> <BiBook /> </a>
      <a href="#services" onClick={() => setNavAtivo('#services')} className={navAtivo==='#services' ? 'active' : ''}> <RiServiceLine /> </a>
      <a href="#contact" onClick={() => setNavAtivo('#contact')} className={navAtivo==='#contact' ? 'active' : ''}> <AiOutlineMessage /> </a>
    </nav>
  )
}

export default Nav