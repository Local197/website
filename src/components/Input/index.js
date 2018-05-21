import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Translate from 'containers/Translate';

require('./index.scss');

/**
 * Styled input field.
 * @example
 * let updateText = (e) => {
 *  this.setState({field: e.target.value});
 * }
 *
 * <Input
 *  title="My Title"
 *  titleEs="Mi Titulo"
 *  placeholder="Enter text here"
 *  name="fieldName"
 *  type="text"
 *  content={this.state.field}
 *  controlFunc={updateText}
 *  onEnter={() => { console.log(this.state.field); }}
 *  classNAme="app-ClassExample"
 * />
 * @reactProps {?string} title - The title of the input field.
 * @reactProps {?string} titleEs - The title of the input field in spanish.
 * @reactProps {?string} placeholder - Text to display in the input field when
 *                                    there is no text.
 * @reactProps {?string} name - The name of the input field.
 * @reactProps {?string} type - The type of the input field (text, email, password, etc.)
 * @reactProps {!Object} content - Text to display in the input field as text.
 * @reactProps {!function(e: {target: {value: string}}}): void} controlFunc -
 *                                      Function to update the content prop object.
 * @reactProps {?function} onEnter - Function to run when the Enter key is pressed in the input field.
 * @reactProps {?string} className - Class name to add a class to the component for extra styling.
 */
export default class Input extends Component {

  /** @ignore */
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
  title: PropTypes.string,
  titleEs: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  content: PropTypes.string.isRequired,
  controlFunc: PropTypes.func.isRequired,
  onEnter: PropTypes.func,
  className: PropTypes.string
}
