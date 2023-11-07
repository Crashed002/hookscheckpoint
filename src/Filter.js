import React from 'react'


const Filter = ({Search,Search_rate,handlefiltre}) => {
  return (
    <div>
        <input type="text" placeholder='Search by name' ref={Search}></input>
        <input type="number" placeholder='Search by rate' ref={Search_rate}></input>
        <button onClick={()=>handlefiltre()}>Search</button>

    </div>
  )
}

export default Filter