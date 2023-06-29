import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/kauan-zajac-12bb761a1/" target='_blanck'><BsLinkedin/></a>
        <a href="https://github.com" target='_blanck'> <BsGithub/> </a>
    </div>
  )
}

export default HeaderSocials