import React, {Component} from 'react'

class UserGretting extends Component{
  constructor(){
    super()
    this.state = {
      IsLoggedIn : true
    }
  }

  render(){
      //if-else rendering
    // if(this.state.IsLoggedIn){
    //   return(<div>WELCOME USER</div> )}
    // else{
    //   return(<div>WELCOME Guest</div> )
    // }



        //variable rendering
        // let message
        // if(this.state.IsLoggedIn){
        //   message = <div>logged in</div>
        // }
        // else{
        //   message = <div>sorry</div>
        // }
        //return <div>{message}</div>


      // // ternary coditional operator
      // return(
      //   this.state.IsLoggedIn?(<div>welcome</div>):(<div>not wlcm</div>)
      // )

      //shot circuit opertor 
      return this.state.IsLoggedIn&&<div>mazza aa gya</div>
    }
  }

export default UserGretting
