import React from 'react'
import './experience.css'
import { AiFillCheckCircle } from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Minhas habilidades  </h5>
      <h2> Minhas Experiências</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3> Frontend Development </h3>
          <div className='experience__content'>

            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4> HTML </h4>
                <small className=''> Experiente </small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4> CSS </h4>
                <small className=''> Experiente </small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4> JavaScript </h4>
                <small className=''> Mediano </small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4> Bootstrap </h4>
                <small className=''> Básico </small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4> Vue </h4>
                <small className=''> Básico </small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4> React </h4>
                <small className=''> Experiente </small>
              </div>
            </article>

          </div>
        </div>

        {/* =========================== FIM DO FRONT ======================  */}

        <div className='experience__backend'>
          <h3> Backend Development </h3>
          <div className='experience__content'>

            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4> Node JS</h4>
                <small className=''> Básico </small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4> MongoDB </h4>
                <small className=''> Báscio </small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4> MySQL </h4>
                <small className=''> Básico </small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4> PHP </h4>
                <small className=''> Básico </small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4> Python </h4>
                <small className=''> Básico </small>
              </div>
            </article>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience