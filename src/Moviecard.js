import React from 'react'
import { Link } from 'react-router-dom'
const Moviecard = ({light}) => {
  return (
    <Link to={`/movie/${light.title}`}>
    <div>
      {light.title}
    {light.descreption}
    {light.raiting}
    <img src={light.posterURL}></img>
    </div>
    </Link>
    
    
  )
}

export default Moviecard