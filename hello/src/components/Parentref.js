import React from 'react'
import PropTypes from 'prop-types'
import Childref from './Childref'

class Parentref extends React.Component {
  constructor(){
    super()
    this.newref = React.createRef()
  }

  click = () => {
    this.newref.current.inputref()
  }

  render () {
    return(
   <div>
   <Childref ref={this.newref}/>
   <button type="submit" onClick={this.click} >Check</button>
   </div>
 )}
}

export default Parentref;
