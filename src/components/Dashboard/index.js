import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Translate from 'containers/Translate';

require('./index.scss')

export default class Dashboard extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
  }

  render() {
    return (
      <div className="app-Dashboard">
        <h2 className="app-Dashboard-title">
          <Translate language="en">
            {this.props.title}
          </Translate>
          <Translate language="es">
            {this.props.titleEs}
          </Translate>
        </h2>
        {this.props.children}
      </div>
    )
  }
}
