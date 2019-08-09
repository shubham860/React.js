import React from 'react'
import PropTypes from 'prop-types'

const HocCounter = (CounterFunction) => {
class UpdatedComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count : 0
    }
  }

  Handler = () =>{
    this.setState((prevState) => ({
      count : prevState.count + 1
    }))
    }
render(){
   return (
    <CounterFunction count={this.state.count} handler={this.Handler} />
         )
      }
}
return UpdatedComponent
}
export default HocCounter
