import React from 'react'
import PropTypes from 'prop-types'

class Childref extends React.Component {
  constructor(){
    super()
    this.ref = React.createRef()
  }

  inputref = () =>{
    this.ref.current.focus()
  }
  
  render () {
    return(
   <div>
   <input type="text" ref={this.ref}/>
   </div>
 )}
}

export default Childref;
