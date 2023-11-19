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
    demo: 'https://kristinehkim.github.io/doggygps/',
    desc: 'There comes a time in our lives when we are ready for a dog, but we do not know where to start. With DoggyGPS, future dog owners will be able to search different dog breeds and find its barking, energy, shedding, and trainability levels.  Once they select a dog breed with the qualities they prefer, they can find where these dogs are available to adopt.'
  },
  {
    id: 2,
    image: GITAJOB,
    title: 'Git A Job',
    github: 'https://github.com/kristinehkim/git-a-job',
    demo: 'https://lit-dawn-72869-0437fa1dd280.herokuapp.com/login',
    desc: 'There are always web devlopers looking for a job. Git A Job is an application that creates a community of web developers that can use this to post about anything related to their job search and comment on posts giving specific feedback to each individual’s need.  Sign up to create login information which will give you access to the community of web developers.'
  },
  {
    id: 3,
    image: EDURATER,
    title: 'EduRATEr',
    github: 'https://github.com/kristinehkim/edurater',
    demo: 'https://damp-wildwood-31060-690d212e58d9.herokuapp.com/',
    desc:'Parents, students, educators, and the community always want to be informed about the staff working at elementary and high schools. EduRater is used to rate teachers and principals so that we can find information about educators in schools in the area and other educators can get a feel for the work environment of prospective schools.'
  },
  {
    id: 4,
    image: PASSWORD,
    title: 'Password Generator',
    github: 'https://github.com/kristinehkim/password-generator',
    demo: 'https://kristinehkim.github.io/password-generator/',
    desc: ' A password generator has been created for employees with access to sensitive data. It will randomly generate a password that meets certain criteria so a strong password can be created in order to ensure greater security.  Now there is no hassle with creating a strong password in an instant.'
  },
  {
    id: 5,
    image: SCHEDULER,
    title: 'Work Day Scheduler',
    github: 'https://github.com/kristinehkim/work-day-scheduler',
    demo: 'https://kristinehkim.github.io/work-day-scheduler/',
    desc: 'Life can get chaotic for everyone! This is a simple daily calendar application that allows users to save events for each hour of the day.  Hours in the past are gray, the present hour is red, and future hours are green.  The clickable save buttons are to save text in local storage.'
  },
  {
    id: 6,
    image: TEXT,
    title: 'Text Editor',
    github: 'https://github.com/kristinehkim/text-editor',
    demo: 'https://ancient-basin-84021-467278b42de0.herokuapp.com/',
    desc:'This app is a text editor that runs in the browser. It is a single-page application that meets the PWA criteria. It features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. It will also be able to function offline.'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github, demo, desc }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h4>{desc}</h4>
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