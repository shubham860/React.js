import React, { Component } from 'react'

class  Message extends Component{
  constructor(){
    super()
    this.state = {
      count : 0
    }
  }

 increment(){
  //  this.setState({
  //     count : this.state.count + 1
  // },
//   ()=>{console.log('callback function',this.state.count)}
// )
  this.setState((prevState) => ({
    count : prevState.count + 1
  }))
 }

  render(){
      return(
        <div>
         <p>COUNTER {this.state.count}</p>
         <button onClick={() => this.increment()}>Subsribe</button>
        </div>
      )
  }
}
export default Message
