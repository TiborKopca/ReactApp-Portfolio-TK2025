import React from 'react'
import { useEffect, useRef } from "react";

function SkillCard({data, src}) {
    const cardRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show__card");
              observer.unobserve(entry.target); // Stop observing once visible
            }
          });
        },
        {
          threshold: 0.5, // Trigger when 50% of the element is visible
        }
      );
  
      if (cardRef.current) {
        observer.observe(cardRef.current);
      }
  
      return () => observer.disconnect(); // Cleanup observer on unmount
    }, []);
  return (
    
    <figure className='skills__card hidden__card' ref={cardRef}>
        <img className='card__img' src={src} alt={`${data} logo`} />
        <figcaption className='card__description'>{data}</figcaption>
    </figure>
  )
}

export default SkillCard