import React from 'react'

const Hero = ({ name }) => {
  if (name=== 'joker') {
    throw new Error(' Not a hero!')
  }
  return <h1>{name}</h1>
}

export default Hero
