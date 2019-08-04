import React from 'react'

const Greet = props => {
  return(
     <div class="he">
     <h1>{props.name} hobby is {props.hobbies}</h1>
     {props.children}
     </div>
  )
}

export default Greet
