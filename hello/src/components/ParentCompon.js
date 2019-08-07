import React,{PureComponent,Component } from 'react'
import PureCompon from './PureCompon'
import RegularCompon from './RegularCompon'
import MemoComp from './MemoComp'

class ParentCompon extends Component {
 constructor(){
   super()
   this.state = {
     name : 'shubham'
   }
 }

 componentDidMount(){
   setInterval(()=>{
     this.setState({
       name : 'shubham'
     })
   },2000)
 }

  render () {
    document.write('parent components')
      return(<div>
          <p>Regular Component</p>
          <MemoComp name={this.state.name} />
          {/*<RegularCompon name={this.state.name} />*/}
          {/*<PureCompon name={this.state.name} />*/}
        </div>)
  }
}

export default ParentCompon;
