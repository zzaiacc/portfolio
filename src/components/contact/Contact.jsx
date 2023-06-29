import React from 'react'
import './contact.css'
import { BiMailSend } from 'react-icons/bi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ksgrelo', 'template_tun12lf', form.current, 'x1Atoy6TQfLIk8pUI')

    e.target.reset()
    
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5> Entre em contato </h5>
      <h2> Fale comigo </h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <BiMailSend className='contact__option-icon'/>
            <h4> Email </h4>
            <h5> kauanzajac@gmail.com </h5>
            <a href="mailto:kauanzajac@gmail.com"> Mande uma mensagem </a>
          </article>
          <article className='contact__option'>
            <AiOutlineInstagram className='contact__option-icon'/>
            <h4> Instagram </h4>
            <h5> zzaiiacc </h5>
            <a href=" https://ig.me/m/zzaiiacc"> Mande uma mensagem </a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4> WhatsApp </h4>
            <h5> +55 (11) 94847-4544 </h5>
            <a href="https://api.whatsapp.com/send?phone=55948474544"> Mande uma mensagem </a>
          </article>
        </div>
        {/* FIM DE CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}> 
          <input type="text" name='name' placeholder='Seu nome completo' required />
          <input type="email" name='email' placeholder='Seu Email' required />
          <textarea name="message" rows="7" placeholder='Escreva sua mensagem aqui' required> </textarea>
          <button type='submit' className='btn btn-primary'> Enviar Mensagem </button>
        </form>
      </div>
    </section>
  )
}

export default Contact