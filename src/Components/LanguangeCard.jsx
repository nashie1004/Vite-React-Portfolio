import React from 'react'

export default function LanguangeCard({image, name}) {
  return (
    <div className="languange">
        <div className="img">
            <img src={image} alt={name} className='img-pic' />
        </div>
        <p>{name}</p>
    </div>
  )
}
