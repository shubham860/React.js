import React,{Component} from 'react'
import './Mystyles.css'

class Form extends Component{

 constructor(){
   super()
   this.state = {
     email : '',
     password : '',
     comment : '',
     mobile : ''
   }
 }

emailHandler = event => {
  this.setState({
    email : event.target.value
  })
}

passwordHandler = event => {
  this.setState({
    password : event.target.value
  })
}

textHandler = event => {
  this.setState({
   comment : event.target.value
  })
}

noHandler = event => {
  this.setState({
   mobile : event.target.value
  })
}

submitHandler = event => {
  alert(`Submit successfully`)
}

 render(){
   const {email,password,comment,mobile} = this.state
   return(
   <div className="container jumbotron form" >
    <h1 className="display-5">ReactJS Form</h1><br/>
    <input type="email" className="form-control form-control-lg" placeholder="Email" value={email} onChange={this.emailHandler}/><br/>
    <input type="password" className="form-control form-control-lg" placeholder="Password" value={password} onChange={this.passwordHandler}/><br/>
    <input type="text" className="form-control form-control-lg" placeholder="Mobile no" value={mobile} onChange={this.noHandler}/><br/>
    <textarea className="form-control form-control-lg" placeholder="Comment"  rows="5" value={comment} onChange={this.textHandler}></textarea><br/>
    <button type="button" onClick={this.submitHandler} class="btn btn-success">Submit</button>
   </div>
 )
}
}

export default Form
