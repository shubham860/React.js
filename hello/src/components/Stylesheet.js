import React from 'react'
import './Mystyles.css'

const heading = {
  fontSize: '72px',
  color: 'red'
}

function Stylesheet(props){
 let className = props.primary?'primary':''
  return(
    <div>
     <h1 className={ `${className} font`}>STYKESGEJ</h1>
     <h1 style = {heading}>shubham  chauhan</h1>
    </div>
  )
}

export default Stylesheet
