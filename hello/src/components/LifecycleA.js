import React,{Component} from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
   constructor(props){
     super(props)
     this.state = {
       name : 'shubham'
     }
     console.log('1')
   }

   static getDerivedStateFromProps(props, state){
     console.log('2')
     return null
   }

  componentDidMount(){
     console.log('4')
   }

  shouldComponentUpdate(){
    console.log('LifecycleA')
    return true
  }

getSnapshotBeforeUpdate(prevProps,prevState){
  console.log("LifecycleA")
  return null
}
componentDidUpdate(){
  console.log("LifecycleA")  
}

  render() {
     console.log('3')
     return <div> LifecycleA <LifecycleB/></div>
  }
}

export default LifecycleA
