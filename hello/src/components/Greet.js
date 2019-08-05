import React from 'react'

// const Greet = ({name,hobbie}) => { method 1
const Greet = props => {
  const {name,hobbies} = props
  return(
     <div class="he">
     <h1>{name} hobby is {hobbies}</h1>
      {props.children}
     </div>
  )
}

export default Greet
