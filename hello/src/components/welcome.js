import React, { Component } from 'react'

class Welcome extends Component{
  render(){
    return <h1>{this.props.name} hobby is {this.props.hobbies}</h1>
  }
}
export default Welcome
