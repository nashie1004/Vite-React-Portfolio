import React from 'react'
import '../Styles/Projects.scss'
import { FaLink, FaGithub } from 'react-icons/fa';

export default function ProjectCard({image}) {
  return (
    <div className='project-card'>
        <div className="img">
            <img src={image} alt="pic" />
        </div>
        <div className="info">
            <p className="header">Lorem, ipsum dolor.</p>
            <div className="languanges-used">
                <span className='inline'>
                    <span className='circle'></span>
                    Lorem, ipsum.
                </span>
                <span className='inline'>
                    <span className='circle'></span>
                    Error, in.
                </span>
                <span className='inline'>
                    <span className='circle'></span>
                    Alias, aut.
                </span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam unde numquam, eligendi perspiciatis dicta culpa laborum odio exercitationem cumque sequi, saepe quibusdam sapiente. Voluptates, laboriosam.</p>
            <div className="links">
                <a href="#">
                    <FaLink size='1.6rem' />
                </a>
                <a href="#">
                    <FaGithub size='1.6rem' />
                </a>
            </div>
        </div>
    </div>
  )
}
