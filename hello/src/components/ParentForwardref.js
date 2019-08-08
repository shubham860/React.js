import React from 'react'
import PropTypes from 'prop-types'
import Childref from './ChildForwardref'

class ParentForwardref extends React.Component {
  constructor(){
    super()
    this.ref = React.createRef()
  }

  click = () => {
    this.ref.current.focus()
  }

  render () {
    return(
   <div>
   <Childref ref={this.ref}/>
   <button type="submit" onClick={this.click} >Check</button>
   </div>
 )}
}

export default ParentForwardref;
