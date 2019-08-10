import React from 'react'
import PropTypes from 'prop-types'
import ComponentB from './ComponentB'

class ComponentA extends React.Component {
  render () {
     return(
       <ComponentB/>
     )
  }
}

export default ComponentA;
