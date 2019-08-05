import React,{Component} from 'react'

class Classclicked extends Component{

eventHandler(){
  alert("button clickeed")
}

 render(){
   return(
   <div>
    <button onClick={this.eventHandler}>class clicked </button>
   </div>
 )
}
}

export default Classclicked
