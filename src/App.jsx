import {useEffect, useRef} from 'react'
import './App.scss'
import Nav from './Components/Nav'
import Home from './Components/Home'

function App() {
  
  const sectionsRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting || entry.isVisible){
          entry.target.classList.add('animate')
        } else {
          entry.target.classList.remove('animate')
        }
      }) 
    }, {
      root: null,
      rootMargin: '0px',
      threshold: .1
    });

    const sectionsDiv = [...sectionsRef.current.childNodes[1].children];
    const array = [];

    array.push(
      sectionsDiv[1].childNodes[0],
      sectionsDiv[1].childNodes[1],
      sectionsDiv[2].childNodes[0],
      sectionsDiv[2].childNodes[1],
      sectionsDiv[3].childNodes[0],
      sectionsDiv[3].childNodes[1].childNodes[0],
      sectionsDiv[3].childNodes[1].childNodes[1],
      sectionsDiv[3].childNodes[1].childNodes[2],
      sectionsDiv[4].childNodes[0],
      sectionsDiv[4].childNodes[1]
    )

    array.forEach(div => div.classList.add('no-animate'))
    array.forEach(div => observer.observe(div))

  }, [])

  return (
    <div className="App" ref={sectionsRef}>
      <Nav />
      <Home />
    </div>
  )
}

export default App
