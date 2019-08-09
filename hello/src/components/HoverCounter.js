import React from 'react'
import PropTypes from 'prop-types'
import HocCounter from './HocCounter'


class HoverCounter extends React.Component {

  render () {
    const  {count,handler,name} = this.props
    return(
    <h1 onMouseOver = {handler}>{name} Hover {count} </h1>
  )}
}

export default HocCounter(HoverCounter,5)
