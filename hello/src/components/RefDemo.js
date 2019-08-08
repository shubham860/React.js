import React , { Component } from 'react'

class RefDemo extends Component {
constructor(){
  super()
  this.inputref = React.createRef()
  this.cbref = null
  this.setcbref = (element) => {   //callback ref
    this.cbref = element
  }
}
 componentDidMount(){
   this.inputref.current.focus()
   this.cbref.focus()
 }

 clickhandler = () => {
   alert(this.inputref.current.value)
 }

  render () {
     return(
       <div>
      <input type="text" ref={this.inputref}/>
      <button type="button" onClick={this.clickhandler}>Click</button>
      <input type="text" ref={this.setcbref}/>
       </div>
     )
  }
}

export default RefDemo;
