import React from 'react'
import './extras.css'
import GIRLS from '../../assets/girlsintechsf.png'
import EXTRA1 from '../../assets/extra1.png'
import EXTRA2 from '../../assets/extra2.png'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    image: GIRLS,
    name: 'Hacking for Humanity',
    review: 'I worked with a group of women to solve a problem at the Hacking for Humanity hackathon at MindsDB AI Collective in San Francisco in November 2023.  I experienced the design thinking to create a solution for an organization called Nalam.'
  },
  {
    image: EXTRA1,
    name: 'Extra 1',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam error ipsum expedita ipsam dolorem illum hic debitis voluptates dolorum, optio quisquam, eum recusandae ab temporibus perferendis, fugiat reiciendis sed fuga?'
  },
  {
    image: EXTRA2,
    name: 'Extra 2',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam error ipsum expedita ipsam dolorem illum hic debitis voluptates dolorum, optio quisquam, eum recusandae ab temporibus perferendis, fugiat reiciendis sed fuga?'
  }
]

const Extras = () => {
  return (
    <section id='extras'>
      <h5>Other</h5>
      <h2>Extra Curricular</h2>

      <Swiper className='container extras__container'// install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
    >
        {
          data.map(({ image, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='extra'>
                <div className='extra__img'>
                  <img src={image} alt='Visual of extra'/>
                </div>
                <h5 className='extra__name'>{name}</h5>
                <small className='extra__review'>{review}</small>
              </SwiperSlide>

            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Extras