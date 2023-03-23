import React from 'react'
import '../Styles/Tech.scss'
import LanguangeCard from '../Components/LanguangeCard'

import html from '../Assets/html.png'
import css from '../Assets/css.png'
import js from '../Assets/js.png'
import sass from '../Assets/sass.png'
import react from '../Assets/react.png'
import jsnode from '../Assets/jsnode.png'
import git from '../Assets/git.png'
const vite = 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg'

const IMG_ARRAY = [
    {url: html, name: 'HTML5'}, 
    {url: css, name: 'CSS3'},
    {url: js, name: 'JavaScript'},
    {url: sass, name: 'SASS'},
    {url: react, name: 'React'},
    {url: jsnode, name: 'Express.js'},
    {url: git, name: 'Git'},
    {url: vite, name: 'Vite'},
];

export default function Tech() {
  return (
    <>
        <p className='heading-p'>Tech</p>
        <div className="languanges-container">
            {
                IMG_ARRAY.map((item, i) => {
                    return (
                        <LanguangeCard
                            key={i} 
                            image={item.url} 
                            name={item.name} 
                        />
                    )
                })
            }
        </div> 
    </>
  )
}
