import React from 'react'
import './about.css'
import ME from '../../assets/kk-tito.jpg'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import { RiComputerLine } from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='Kristine and her dog, Tito' />
          </div>
        </div>


        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>10+ Years Working</small>
            </article>

            <article className='about__card'>
              <RiComputerLine className='about__icon' />
              <h5>Education</h5>
              <small>UCSD Full Stack Flex Bootcamp</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            My name is Kristine Kim and I was a teacher for 16 years. I taught English to first graders in Mexico for 4 years then moved back to San Diego. I was at an inner city school teaching 5th grade for 12 years. I incorporated technology into the classroom on a daily basis which led me to an interest in technology. I am now looking to get into the tech industry. Being a teacher has molded me into a dilligent worker that will transfer into any job in any industry. I have learned a huge amount of information through UCSD coding bootcamp program, and I am excited to showcase my skills in this portfolio. Please browse this site showcasing my abilities and what I have accomplished during the course. If interested in reaching out to me, go to the contact section by clicking on the link above and the LinkedIn, GitHub, and Twitter icons below will take you to my profiles.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About