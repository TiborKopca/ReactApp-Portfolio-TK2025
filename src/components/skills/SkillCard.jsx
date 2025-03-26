import React from 'react'

function SkillCard({data, src}) {
  return (
    
    <figure className='skills__card'>
        <img className='card__img' src={src} alt={`${data} logo`} />
        <figcaption className='card__description'>{data}</figcaption>
    </figure>
  )
}

export default SkillCard