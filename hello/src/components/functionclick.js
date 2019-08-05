import React from 'react'

function Functionclick(){
  function clickHandler(){
    alert('Button clicked')
  }
  return(
    <div>
    <button onClick={clickHandler}> Function Click</button>
    </div>
  )
}

export default Functionclick
