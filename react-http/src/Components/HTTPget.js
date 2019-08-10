import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

class HTTPget extends React.Component {

  constructor(){
    super()
    this.state = {
      list : [],
      error : ''
    }
  }

componentDidMount(){
  axios
 .get('https://jsonplaceholder.typicode.com/posts')
 .then(response=>{
   console.log(response.data)
   this.setState({list : response.data})
 })
.catch(error=>{
  this.setState({error : 'error'})
})
}

  render(){
    const {list,error} = this.state
    return(
      <div>
      list of elements
      {
      list.length?
      list.map(list=><div key={list.id}>{list.title}</div>):null
    }
    {error?(<div>{error}</div>):null}
    </div>
  )
  }
}

export default HTTPget;
