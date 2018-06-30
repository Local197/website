import React, { Component } from 'react';
import PropTypes from 'prop-types';

require('./index.scss');

/**
* Hero component with background picture and graphic.
*
* @reactProps {!Array} children Content inside of the tags to be displayed.
* @reactProps {!string} iconImage - The image that will be shown to the right of the content.
* @reactProps {?string} className - A class name for exra styling
* @reactProps {?string} backGroundImage - Background image of the hero component.
*/
export default class Hero extends Component {

  /** @ignore */
  constructor(props) {
    super(props);

    /** @ignore */
    this.bgStyle = {
      background: 'url(' + this.props.backgroundImage + ') no-repeat center center',
    };
  }

  /** @ignore */
  render() {
    return(
      <div className={`app-Hero ${this.props.className}`} style={this.bgStyle}>
        <div className="app-Hero-text">
          {this.props.children}
        </div>
        <div className="app-Hero-icon">
          <img src={this.props.iconImage} />
        </div>
      </div>
    );
  }
}

Hero.propTypes = {
  children: PropTypes.array.isRequired,
  iconImage: PropTypes.string.isRequired,
  className: PropTypes.string,
  backgroundImage: PropTypes.string
}
