import React from 'react'
import Intro from '../sections/Intro'
import About from '../sections/About'
import Tech from '../sections/Tech'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'

export default function Home() {

  return (
    <div className='Home'>
      <div className="section">
        <Intro />
      </div>
      <div className="section mid-padding">
        <About />
      </div>
      <div className="section low-padding">
        <Tech />
      </div>
      <div className="section">
        <Projects />
      </div>
      <div className="section contact-padding">
        <Contact />
      </div>
    </div>
  )
}
