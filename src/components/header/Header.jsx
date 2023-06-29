import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import EU from '../../assets/eu-header.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
   <header> 
    <div className="container header__container">
      <h5> Olá, sou</h5>
      <h1> Kauan Zajac </h1>
      <h5 className="text-light">FrontEnd Dev</h5>
      <CTA/>
      <HeaderSocials/>

      <div className='eu'> 
      <img src={EU} alt="eu" />
      </div>

      <a href="#contact" className='scroll__down'> Scroll Down </a>
      
    </div>
   </header>
  )
}

export default Header