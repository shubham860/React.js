import React,{PureComponent } from 'react'

class PureCompon extends PureComponent {
  render () {
    document.write('pure components')
      return(<h1>pure {this.props.name}</h1>)
  }
}

export default PureCompon;
