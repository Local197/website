import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Translate from 'containers/Translate'

require('./index.scss')

export default class Section extends Component {
  static propTypes = {
    sidebar: PropTypes.bool,
    grow: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
  }

  render() {
    return (
      <div className={`app-Section${this.props.grow ? "-grow" : ""}`}>
        <span className="app-Section-title">
          <Translate language="en">
            {this.props.title}
          </Translate>
          <Translate language="es">
            {this.props.titleEs}
          </Translate>
        </span>
        {this.props.children}
      </div>
    )
  }
}
