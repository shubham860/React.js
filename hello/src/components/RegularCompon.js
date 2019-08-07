import React,{Component } from 'react'

class RegularCompon extends Component {
  render () {
    console.log('regular components')
      return(<h1>Regular {this.props.name}</h1>)
  }
}

export default RegularCompon;
