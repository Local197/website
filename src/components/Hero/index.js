import React, { Component, PropTypes } from 'react';

require('./index.scss');

export default class Hero extends Component {

  constructor(props) {
    super(props);

    this.bgStyle = {
      background: 'url(' + this.props.backgroundImage + ') no-repeat center center',
    };
  }

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
