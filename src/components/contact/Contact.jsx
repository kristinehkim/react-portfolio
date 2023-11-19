import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md"
import { BsLinkedin } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aahpjyp', 'template_ql07vkp', form.current, 'JqBJ7F0mDIy6-vqRU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In ATouch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>kristinehkim@gmail.com</h5>
            <a href='mailto:kristinehkim@gmail.com'target='blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>kristinehkim@gmail.com</h5>
            <a href='https://www.linkedin.com/in/kristinehkim/' target='blank'>Send a message</a>
          </article>
          {/* <article className='contact__option'>
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>kristinehkim@gmail.com</h5>
            <a href='https://www.linkedin.com/in/kristinehkim/'>Send a message</a>
          </article> */}
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact