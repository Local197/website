import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Translate from 'containers/Translate';

require('./index.scss');

/**
 * Class representing an input field
 * @extends Component
 */
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
          onKeyUp={e => e.keyCode == 13 && this.props.onEnter()}
          placeholder={this.props.placeholder} />
      </div>
    );
  }
}

Input.propTypes = {
  /** The title of the input field. */
  title: PropTypes.string,
  /** The title of the input field in spanish. */
  titleEs: PropTypes.string,
  /** Text to display in the input field when there is no text */
  placeholder: PropTypes.string,
  /** The name of the input field */
  name: PropTypes.string,
  /** The type of the input field (text, email, password, etc.) */
  type: PropTypes.type,
  /** Text to display in the input field as text. */
  content: PropTypes.string.isRequired,
  /**
  * Function to update the *content* prop variable.
  * @param e event on change, get the text by with `e.target.value`
  */
  controlFunc: PropTypes.func.isRequired,
  /** Function to run when the Enter key is pressed in the input field. */
  onEnter: PropTypes.func,
  /** Class name to add a class to the component for extra styling. */
  className: PropTypes.string
}
