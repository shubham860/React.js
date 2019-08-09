import React from 'react'
import PropTypes from 'prop-types'
import HocCounter from './HocCounter'

class WithCounter extends React.Component {
  render () {
  const  {count,handler,name} = this.props
    return(
    <button onClick = {handler}>{name} Click {count} times</button>
  )}
}

export default HocCounter(WithCounter,10)
