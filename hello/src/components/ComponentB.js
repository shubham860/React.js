import React from 'react'
import PropTypes from 'prop-types'
import ComponentC from './ComponentC'
import UserContext from './Context'

class ComponentB extends React.Component {
  render () {
     return(
       <div>
       ComponentB {this.Context}

       <ComponentC/>
       </div>

     )
  }
}

ComponentB.ContextType = UserContext



export default ComponentB;
