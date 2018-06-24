import React, { Component } from 'react'
import PropTypes from 'prop-types'

require('./index.scss')

export default class Dashboard extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
  }

  render() {
    return (
      <div className="app-Dashboard">
        {this.props.children}
      </div>
    )
  }
}
