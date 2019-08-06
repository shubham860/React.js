import React from 'react'

function  Child({person,key}){
    return(
      <div>
      <h2>myself {person.name} and i am {person.skill} Developer </h2>
      </div>
  )
}

export default Child
