import React from 'react'
import PropTypes from 'prop-types'

class Hover2 extends React.Component {
  render () {
    const {count,increment} = this.props
   return(
     <h1 onMouseOver={increment}>Hover  {count} times</h1>
   )
  }
}

export default Hover2;
