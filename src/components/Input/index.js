import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Translate from 'containers/Translate';

require('./index.scss');

export default class Input extends Component {

  render() {
    return(
      <div className={`app-Input ${this.props.className}`}>
        <label className="app-Input-label">
          <Translate language="en">
            {this.props.title}
          </Translate>
          <Translate language="es">
            {this.props.titleEs}
          </Translate>
        </label>
        <br />
        <input
          className="app-Input-field"
          name={this.props.name}
          type={this.props.type}
          value={this.props.content}
          onChange={this.props.controlFunc}
          placeholder={this.props.placeholder} />
      </div>
    );
  }
}
