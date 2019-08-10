import React from 'react'
import PropTypes from 'prop-types'

class Counter2 extends React.Component {
  render () {
    const {count,increment} = this.props
   return(
     <button onClick={increment}>click {count} times</button>
   )
  }
}

export default Counter2;
