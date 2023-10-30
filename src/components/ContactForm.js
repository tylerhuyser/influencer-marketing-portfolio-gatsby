import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import "../styles/ContactForm.css"

export default function ContactForm () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${process.env.GATSBY_EMAILJS_SERVICE_ID}`, `${process.env.GATSBY_EMAILJS_TEMPLATE_ID}`, form.current, 
    `${process.env.GATSBY_EMAILJS_PUBLIC_KEY}`)
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  };

  console.log('here')

  console.log(process.env.GATSBY_EMAILJS_PUBLIC_KEY)

  return (

    <div className="contact-form-container" id="contact-form">

      <h2 className="contact-form-title">Let's Work.</h2>
  
      <form className='contact-form' ref={form} onSubmit={sendEmail}>

        <input className='contact-form-input' id="name-input" type="text" name="user_name" placeholder='Name' />
        <input className='contact-form-input' id="email-input" type="email" name="user_email" placeholder='Email' />
        <textarea className='contact-form-input' id="message-input" name="message" placeholder='Tell me about your project...' />

        <input className='contact-form-submit-button' type="submit" value="Send" />

      </form>
      
    </div>
  );
};
