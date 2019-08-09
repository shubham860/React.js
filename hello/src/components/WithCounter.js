import React from 'react'
import PropTypes from 'prop-types'

class WithCounter extends React.Component {
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
    <button onClick = {this.Handler}>Click {this.state.count}</button>
  )}
}

export default WithCounter
