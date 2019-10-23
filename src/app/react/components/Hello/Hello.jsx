import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class HelloComponent extends Component {
  render() {
    return <span>Hello {this.props.fname} {this.props.lname}</span>
  }
}
HelloComponent.propTypes = {
  fname: PropTypes.string.isRequired,
  lname: PropTypes.string.isRequired
}
