import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Projeto para empresa de tecnologia',
    github: 'https://github.com',
    demo: 'https://zaiac-website-git-main-zzaiacc.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Projeto para empresa de tecnologia',
    github: 'https://github.com',
    demo: 'https://dribbble.com/zaiacc'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Projeto para empresa de tecnologia',
    github: 'https://github.com',
    demo: 'https://dribbble.com/zaiacc'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Projeto para empresa de tecnologia',
    github: 'https://github.com',
    demo: 'https://dribbble.com/zaiacc'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Projeto para empresa de tecnologia',
    github: 'https://github.com',
    demo: 'https://dribbble.com/zaiacc'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Projeto para empresa de tecnologia',
    github: 'https://github.com',
    demo: 'https://dribbble.com/zaiacc'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> Trabalhos Recentes </h5>
      <h2> Portfólio </h2>


      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (

              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3> {title} </h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn'> Github </a>
                  <a href={demo} className='btn btn-primary' target='_blank'> Live Demo </a>
                </div>
              </article>

            )
            
          }

          )
        }




      </div>

    </section>
  )
}

export default Portfolio