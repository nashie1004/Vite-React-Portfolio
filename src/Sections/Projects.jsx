import React from 'react'
import '../Styles/Projects.scss'
import ProjectCard from '../Components/ProjectCard';

import js from '../Assets/js.png'
import sass from '../Assets/sass.png'
import react from '../Assets/react.png'
import fullnode from '../Assets/fullnode.png'

const obj = [
  {
    title: 'Path Finding Algorithm Visualizer',
    gifImg: 'https://media.giphy.com/media/IThjAlJnD9WNO/giphy.gif',
    techs: [
      { name: 'JavaScript', image: js }
    ],
    liveURL: '#',
    githubURL: ['https://github.com/nashie1004/Path-Finding-Visualizer']
  },
  {
    title: 'Socket.io Chat Application',
    gifImg: 'https://media.giphy.com/media/DhulSUWynvliwOmpOE/giphy-downsized-large.gif',
    techs: [
      { name: 'SASS', image: sass },
      { name: 'React', image: react },
      { name: 'Express.js', image: fullnode }
    ],
    liveURL: '#',
    githubURL: [
      'https://github.com/nashie1004/Client-Tetris',
      'https://github.com/nashie1004/Server-Tetris',
    ]
  },
  {
    title: 'Spotify Clone',
    gifImg: 'https://media.giphy.com/media/13XarhksGkhCZG/giphy.gif',
    techs: [
      { name: 'SASS', image: sass },
      { name: 'React', image: react },
      { name: 'Express.js', image: fullnode }
    ],
    liveURL: '#',
    githubURL: [
      'https://github.com/nashie1004/Client-Spotify',
      'https://github.com/nashie1004/Server-Spotify'
    ]
  },
]
export default function Projects() {
  return (
    <>
      <p className='heading-p'>Projects</p>
      <div className="card-container">
        {
          obj.map((item, i) => {
            return (
              <ProjectCard 
                key={i}
                title={item.title}
                gifImg={item.gifImg}
                techs={item.techs}
                liveURL={item.liveURL}
                githubURL={item.githubURL}
              />
            )
          })
        }
      </div>
    </>
  )
}
