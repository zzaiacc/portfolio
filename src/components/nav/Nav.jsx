import React, { useState, useEffect } from 'react';
import './nav.css';
import { BiHomeAlt2 } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { AiOutlineMessage } from 'react-icons/ai';

const Nav = () => {
  const [navAtivo, setNavAtivo] = useState('#');

  // Função para atualizar a classe do botão ativo com base na seção atual
  const handleScroll = () => {
    const home = document.getElementById('home');
    const about = document.getElementById('about');
    const experience = document.getElementById('experience');
    const services = document.getElementById('services');
    const contact = document.getElementById('contact');

    const scrollPosition = window.scrollY;

    if (scrollPosition < about.offsetTop) {
      setNavAtivo('#');
    } else if (scrollPosition >= about.offsetTop && scrollPosition < experience.offsetTop) {
      setNavAtivo('#about');
    } else if (scrollPosition >= experience.offsetTop && scrollPosition < services.offsetTop) {
      setNavAtivo('#experience');
    } else if (scrollPosition >= services.offsetTop && scrollPosition < contact.offsetTop) {
      setNavAtivo('#services');
    } else {
      setNavAtivo('#contact');
    }
  };

  // Adiciona um listener para o evento de scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>
      <a href="#" onClick={() => setNavAtivo('#')} className={navAtivo === '#' ? 'active' : ''}>
        {' '}
        <BiHomeAlt2 />{' '}
      </a>
      <a href="#about" onClick={() => setNavAtivo('#about')} className={navAtivo === '#about' ? 'active' : ''}>
        {' '}
        <AiOutlineUser />{' '}
      </a>
      <a href="#experience" onClick={() => setNavAtivo('#experience')} className={navAtivo === '#experience' ? 'active' : ''}>
        {' '}
        <BiBook />{' '}
      </a>
      <a href="#services" onClick={() => setNavAtivo('#services')} className={navAtivo === '#services' ? 'active' : ''}>
        {' '}
        <RiServiceLine />{' '}
      </a>
      <a href="#contact" onClick={() => setNavAtivo('#contact')} className={navAtivo === '#contact' ? 'active' : ''}>
        {' '}
        <AiOutlineMessage />{' '}
      </a>
    </nav>
  );
};

export default Nav;
