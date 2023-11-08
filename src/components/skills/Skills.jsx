import React from 'react'
import './skills.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Skills = () => {
  return (
    <section id='skills'>
      <h5>Skills I Have</h5>
      <h2>skills</h2>

      <div className='container skills__container'>
        <div className='skills__frontend'>
          <h3>Frontend Development</h3>
          <div className='skills__content'>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>Responsive Design</h4>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className='skills__backend'>
          <h3>Backend Development</h3>
          <div className='skills__content'>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>APIs</h4>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>Node</h4>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>Express</h4>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>MySQL, Sequelize</h4>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>Mongo, Mongoose</h4>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>REST</h4>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>GraphQL</h4>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>JWT</h4>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Skills