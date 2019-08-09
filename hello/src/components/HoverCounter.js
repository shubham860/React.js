import React from 'react'
import PropTypes from 'prop-types'

class HoverCounter extends React.Component {
  constructor(){
    super()
    this.state = {
      count : 0
    }
  }

  Handler = () =>{
    this.setState((prevState) => ({
      count : prevState.count + 1
    }))
    }

  render () {
    return(
    <h1 onMouseOver = {this.Handler}>Hover {this.state.count}</h1>
  )}
}

export default HoverCounter
