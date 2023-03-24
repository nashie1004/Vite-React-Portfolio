import {useEffect, useRef, useState} from 'react'
import './App.scss'
import Nav from './Components/Nav'
import Home from './Components/Home'

function App() {
  
  const sectionsRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting || entry.isVisible){
          entry.target.classList.add('slide-animation')
        } else {
          entry.target.classList.remove('slide-animation')
        }
      }) 
    }, {
      root: null,
      rootMargin: '0px',
      threshold: .3
    });

    const sectionsDiv = sectionsRef.current.childNodes[1].children;
    [...sectionsDiv].forEach(div => {
      observer.observe(div);
    })

  }, [])

  return (
    <div className="App" ref={sectionsRef}>
      <Nav />
      <Home />
    </div>
  )
}

export default App
