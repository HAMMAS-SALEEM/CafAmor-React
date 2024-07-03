import React from 'react'

const Chef = ({chef}) => {
  return (
    <div>
        <img src={chef.pic} alt="chef" />
        <h2>{chef.name}</h2>
        <p>{chef.description}</p>
    </div>
  )
}

export default Chef
