import React,{Component} from 'react'

class Classclicked extends Component{

clickHandler(){
  alert("button clickeed")
}

 render(){
   return(
   <div>
    <button onClick={this.clickHandler}>class clicked </button>
   </div>
 )
}
}

export default Classclicked
