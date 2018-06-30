import React, { Component } from 'react';
import PropTypes from 'prop-types';

require('./index.scss');

/**
* Announcement component with background picture.
*
* @reactProps {!Array} children Content inside of the tags to be displayed.
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
      backgroundSize: '100%'
    };
  }

  /** @ignore */
  render() {
    return(
      <div className={`app-Announcement ${this.props.className || "" }`} style={this.bgStyle}>
        <div className="app-Announcement-heading">
          <h2>{this.props.heading}</h2>
          <hr />
        </div>
      </div>
    );
  }
}

Hero.propTypes = {
  heading: PropTypes.string,
  className: PropTypes.string,
  backgroundImage: PropTypes.string
}
