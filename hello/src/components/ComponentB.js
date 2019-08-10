import React from 'react'
import PropTypes from 'prop-types'
import ComponentC from './ComponentC'

class ComponentB extends React.Component {
  render () {
     return(
       <ComponentC/>
     )
  }
}

export default ComponentB;
