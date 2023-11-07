import React from 'react'
import { useParams } from 'react-router-dom'
const Movie = ({movies}) => {
    const params=useParams()

    const x=movies.find(el=>el.title===params.title)
  return (
    <div>{x.title}{x.trailer}</div>
  )
}

export default Movie