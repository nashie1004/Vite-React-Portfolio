import React from 'react'
import '../Styles/Projects.scss'
import ProjectCard from '../Components/ProjectCard';

import js from '../Assets/js.png'
import sass from '../Assets/sass.png'
import react from '../Assets/react.png'
import fullnode from '../Assets/fullnode.png'
import dbBG from '../Assets/dbBG.png'

import PROJ1 from '../Assets/PROJ1.gif'
import PROJ2 from '../Assets/PROJ2.gif'
import proj3GIF from '../Assets/proj3GIF.gif'

const DESCRIPTION_ONE = 'A path finding/graph traversal algorithm visualizer using Javascript without any libraries. This project showcases common graph traversal algorithms such as DFS, BFS, Dijkstra and A* algorithm with an easy to use interface.'
const DESCRIPTION_TWO = 'A full stack web application made with React, Express.js and MongoDB Atlas. This project lets you create an account and communicate with other users using web sockets to emit messages from front-end to backend on real time.'
const DESCRIPTION_THREE = "A Spotify clone made using React, Express.js, and Spotify's REST API. This project lets you manage your Spotify account by adding and removing tracks from your library and lets you surf various albums, playlists, artists and their songs."

const obj = [
  {
    title: 'Path Finding Algorithm Visualizer',
    gifImg: PROJ1,
    techs: [
      { name: 'JavaScript', image: js }
    ],
    liveURL: '#',
    githubURL: ['https://github.com/nashie1004/Path-Finding-Visualizer'],
    description: DESCRIPTION_ONE 
  },
  {
    title: 'Socket.io Chat App with MongoDB Atlas',
    gifImg: PROJ2,
    techs: [
      { name: 'SASS', image: sass },
      { name: 'React', image: react },
      { name: 'Express.js', image: fullnode },
      { name: 'MongoDB Atlas', image: dbBG }
    ],
    liveURL: '#',
    githubURL: [
      'https://github.com/nashie1004/Socket.io-MongoDB-front',
      'https://github.com/nashie1004/Socket.io-MongoDB-back',
    ],
    description: DESCRIPTION_TWO
  },
  {
    title: 'Spotify 2.0',
    gifImg: proj3GIF,
    techs: [
      { name: 'SASS', image: sass },
      { name: 'React', image: react },
      { name: 'Express.js', image: fullnode }
    ],
    liveURL: '#',
    githubURL: [
      'https://github.com/nashie1004/Client-Spotify',
      'https://github.com/nashie1004/Server-Spotify'
    ],
    description: DESCRIPTION_THREE
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
                description={item.description}
              />
            )
          })
        }
      </div>
    </>
  )
}
