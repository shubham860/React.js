import React,{Component} from 'react'

class LifecycleB extends Component {
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
     console.log('LifecycleB')
     return true
   }

 getSnapshotBeforeUpdate(prevProps,prevState){
   console.log("LifecycleB")
   return null
 }
 componentDidUpdate(){
   console.log("LifecycleB")  
 }

  render() {
     console.log('3')
     return <div> LifecycleB</div>
  }
}

export default LifecycleB
