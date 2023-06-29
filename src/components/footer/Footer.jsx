import React from 'react'
import './footer.css'
import {FiTwitter} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiDribbble} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer> 
      <a href="#" className='footer__logo'> KAUAN ZAJAC </a>
      <ul className='permalinks'>
      <li> <a href="#"> Home </a></li>
      <li> <a href="#about"> Sobre Mim </a></li>
      <li> <a href="#experience"> Experiências </a></li>
      <li> <a href="#services"> Serviços </a></li>
      <li> <a href="#portfolio"> Portfolio</a></li>
      <li> <a href="#contact"> Contato </a></li>
      </ul>

      <div className='footer__socials'> 
        <a href="https://instagram.com"> <AiOutlineInstagram/> </a>
        <a href="https://twitter.com"> <FiTwitter/> </a>
        <a href="https://dribbble.com"><FiDribbble/> </a>
       
      </div>

      <div className="footer__copyright">

        <small>&copy; Kauan Zajac. Todos os direitos reservados. </small>
      </div>
      </footer>
  )
}

export default Footer