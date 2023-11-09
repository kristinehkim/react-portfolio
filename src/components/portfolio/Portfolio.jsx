import React from 'react'
import './portfolio.css'
import DOGGYGPS from '../../assets/doggy-gps.png'
import GITAJOB from '../../assets/git-a-job.png'
import EDURATER from '../../assets/edu.png'
import PASSWORD from '../../assets/password.png'
import SCHEDULER from '../../assets/work.png'
import TEXT from '../../assets/text.png'

const data = [
  {
    id: 1,
    image: DOGGYGPS,
    title: 'Doggy GPS',
    github: 'https://github.com/kristinehkim/doggygps',
    demo: 'https://kristinehkim.github.io/doggygps/'
  },
  {
    id: 2,
    image: GITAJOB,
    title: 'Git A Job',
    github: 'https://github.com/kristinehkim/git-a-job',
    demo: 'https://lit-dawn-72869-0437fa1dd280.herokuapp.com/login'
  },
  {
    id: 3,
    image: EDURATER,
    title: 'EduRATEr',
    github: 'https://github.com/kristinehkim/edurater',
    demo: 'https://damp-wildwood-31060-690d212e58d9.herokuapp.com/'
  },
  {
    id: 4,
    image: PASSWORD,
    title: 'Password Generator',
    github: 'https://github.com/kristinehkim/password-generator',
    demo: 'https://kristinehkim.github.io/password-generator/'
  },
  {
    id: 5,
    image: SCHEDULER,
    title: 'Work Day Scheduler',
    github: 'https://github.com/kristinehkim/work-day-scheduler',
    demo: 'https://kristinehkim.github.io/work-day-scheduler/'
  },
  {
    id: 6,
    image: TEXT,
    title: 'Text Editor',
    github: 'https://github.com/kristinehkim/text-editor',
    demo: 'https://ancient-basin-84021-467278b42de0.herokuapp.com/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='blank'>GitHub Repo</a>
                  <a href={demo} className='btn btn-primary' target='blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio