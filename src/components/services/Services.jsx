import React from 'react'
import './services.css'
import { SlRocket } from 'react-icons/sl'

const Services = () => {
  return (
    <section id='services'>

      <h5> O que ofereço </h5>
      <h2> Serviços </h2>

      <div className="container service__container">

        <article className='service'>
          <div className='service__head'>
            <h3> Design UI/UX </h3>
          </div>

          <ul className='service__list'>
            <li> 
              <SlRocket className='service__list-icon'/> 
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sunt! </p>
              </li>
            <li> 
              <SlRocket className='service__list-icon'/> 
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sunt! </p>
              </li>
            <li> 
              <SlRocket className='service__list-icon'/> 
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sunt! </p>
              </li>
            <li> 
              <SlRocket className='service__list-icon'/> 
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sunt! </p>
              </li>
            <li> 
              <SlRocket className='service__list-icon'/> 
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sunt! </p>
              </li>
            <li> 
              <SlRocket className='service__list-icon'/> 
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sunt! </p>
              </li>
          </ul>
        </article>

        {/* FIM DO UI/UX */}

        <article className='service'>
          <div className='service__head'>
            <h3> Desenvolvimento Web </h3>
          </div>

          <ul className='service__list'>
            <li> 
              <SlRocket className='service__list-icon'/> 
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sunt! </p>
              </li>
            <li> 
              <SlRocket className='service__list-icon'/> 
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sunt! </p>
              </li>
            <li> 
              <SlRocket className='service__list-icon'/> 
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sunt! </p>
              </li>
            <li> 
              <SlRocket className='service__list-icon'/> 
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sunt! </p>
              </li>
            <li> 
              <SlRocket className='service__list-icon'/> 
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sunt! </p>
              </li>
            <li> 
              <SlRocket className='service__list-icon'/> 
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sunt! </p>
              </li>
            <li> 
              <SlRocket className='service__list-icon'/> 
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sunt! </p>
              </li>
          </ul>
        </article>

               {/* FIM DO DESENVOLVIMENTO WEB*/}

               <article className='service'>
          <div className='service__head'>
            <h3> Criação de conteúdo </h3>
          </div>

          <ul className='service__list'>
            <li> 
              <SlRocket className='service__list-icon'/> 
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sunt! </p>
              </li>
            <li> 
              <SlRocket className='service__list-icon'/> 
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sunt! </p>
              </li>
            <li> 
              <SlRocket className='service__list-icon'/> 
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sunt! </p>
              </li>
            <li> 
              <SlRocket className='service__list-icon'/> 
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sunt! </p>
              </li>
            <li> 
              <SlRocket className='service__list-icon'/> 
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sunt! </p>
              </li>
            <li> 
              <SlRocket className='service__list-icon'/> 
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sunt! </p>
              </li>
          </ul>
        </article>

               {/* FIM DE CRIAÇÃO DE CONTEUDO */}

      </div>

    </section>
  )
}

export default Services