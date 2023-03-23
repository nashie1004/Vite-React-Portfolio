import React from 'react'
import '../Styles/Contact.scss'

export default function Contact() {
  return (
    <>
      <p className='heading-p'>Contact</p>
      <div className="contact-form">
        <div className="form">
          <div className="input-container">
            <input type="text" placeholder='Email...' />
            <input type="text" placeholder='Name...' />
          </div>
          <textarea cols="30" rows="15" placeholder='Message...'></textarea>
          <button>Submit</button>
        </div>
      </div>
    </>
  )
}
