import React from 'react'
import PropTypes from 'prop-types'
import HocCounter from './HocCounter'

class WithCounter extends React.Component {
  render () {
  const  {count,handler} = this.props
    return(
    <button onClick = {handler}>Click {count}</button>
  )}
}

export default HocCounter(WithCounter)
