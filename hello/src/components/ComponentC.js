import React from 'react'
import PropTypes from 'prop-types'
import {UserConsumer} from './Context'

class ComponentC extends React.Component {
  render () {
     return(
      <UserConsumer>
      {
        (name) => {
          return <h1>Hello {name} </h1>
        }
      }
      </UserConsumer>
     )
  }
}

export default ComponentC;
