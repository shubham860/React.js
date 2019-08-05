import React, { Component } from 'react'

class  Eventhandler extends Component{
  constructor(){
    super()
    this.state = {
      message: "hello"
    }
    // this.clickHandler =  this.clickHandler.bind(this)
  }

// clickHandler(){
//   this.setState({
//     message : "goodbye"
//   })
// }

clickHandler = () => {
  this.setState({
    message : "googbye"
  })
}

  render(){
      return(
        <div>
         <p>{this.state.message}</p>
         {/*<button onClick={this.clickHandler.bind(this)}>click</button>   binding in render funvtion*/}
         {/*<button onClick={()=>this.clickHandler()}>click me</button> binding in render using  arrow function*/}
         {/*<button onClick={this.clickHandler}>click us</button> binding in constructor*/}
         <button onClick={this.clickHandler}>click us</button> //binding in constructor
        </div>
      )
  }
}
export default Eventhandler
