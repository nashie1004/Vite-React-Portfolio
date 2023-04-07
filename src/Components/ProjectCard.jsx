import React from 'react'
import '../Styles/Projects.scss'
import { FaLink, FaGithub } from 'react-icons/fa';

export default function ProjectCard({title, gifImg, techs, liveURL, githubURL, description}) {
  return (
    <div className='project-card'>
        <div className="img">
            <img src={gifImg} alt="pic" />
        </div>
        <div className="info">
            <p className="header">{title}</p>
            <div className="languanges-used">
                {
                    techs.map((item, i) => {
                        return (
                            <span className='inline' key={i}>
                                <img src={item.image} alt={item.name} className='circle' />
                                {item.name}
                            </span>
                        )
                    })
                }
            </div>
            <p>{description}</p>
            <div className="links">
                <a href={liveURL}>
                    <FaLink size='1.6rem' />
                </a>
                {
                    githubURL.map((item, i) => {
                        return (
                            <a href={item} key={i}>
                                <FaGithub size='1.6rem' />
                            </a>                
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
