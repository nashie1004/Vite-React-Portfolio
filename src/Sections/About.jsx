import React from 'react'
import '../Styles/About.scss'

export default function About() {
  return (
    <>
      <p className='heading-p'>About</p>
      <div className="about-info">
        <div className="about-img">
          <div className="bg-color"></div>
          <img src="https://picsum.photos/id/234/300/300" alt="pic" />
        </div>
        <div className="about-info">
          <div className="p-about">
            <p className='heading'>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro consectetur nobis, debitis mollitia odio doloremque nam numquam quasi magni facere?</p>
          </div>
        </div>
      </div>
    </>
  )
}
