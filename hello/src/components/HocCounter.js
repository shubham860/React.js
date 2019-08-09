import React from 'react'
import PropTypes from 'prop-types'

const HocCounter = (CounterFunction,increment) => {
class UpdatedComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count : 0
    }
  }

  Handler = () =>{
    this.setState((prevState) => ({
      count : prevState.count + increment
    }))
    }
render(){
   return (
    <CounterFunction count={this.state.count} handler={this.Handler} {...this.props} />

         )
      }
}
return UpdatedComponent
}
export default HocCounter
