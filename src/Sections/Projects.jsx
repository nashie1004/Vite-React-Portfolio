import React from 'react'
import '../Styles/Projects.scss'
import ProjectCard from '../Components/ProjectCard';

const imageURL = [
  'https://picsum.photos/id/110/400/500',
  'https://picsum.photos/id/145/400/500', 
  'https://picsum.photos/id/170/400/500',
]

export default function Projects() {
  return (
    <>
      <p className='heading-p'>Projects</p>
      <div className="card-container">
        <ProjectCard image={imageURL[0]} />
        <ProjectCard image={imageURL[1]} />
        <ProjectCard image={imageURL[2]} />
      </div>
    </>
  )
}
