import React from 'react'
import '../Styles/Intro.scss'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Intro() {
  return (
    <>
      <div className="present">
        <h1>Lorem ipsum <span>dolor sit.</span></h1>
        <div className="p-container">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, nihil.</p>
        </div>
        <div className="logos">
          <span className="logo">
            <FaGithub size='1.5rem' fontcolor='#477397' />
          </span>
          <span className="logo">
            <FaLinkedin size='1.5rem' fontcolor='#477397' />
          </span>
        </div>
        <div className='btn-container'>
          <button className='outline-only'>Lorem, ipsum.</button>
          <button className='solid'>Lorem, ipsum.</button>
        </div>
      </div>
    </>
  )
}
