import React from 'react'
import Moviecard from './Moviecard'

const Movielist = ({films}) => {
  return (
    <div>
    {films.map(movie=>
       <Moviecard light={movie}/>
        
        )}
   </div>
  )
}

export default Movielist