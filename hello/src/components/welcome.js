import React, { Component } from 'react'

class Welcome extends Component{
  render(){
   const {name,hobbies} = this.props
    return <h1>{name} hobby is {hobbies}</h1>
  }
}
export default Welcome
