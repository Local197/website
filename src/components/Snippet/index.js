import React, {Component} from 'react';

require('./index.scss');

export default class Snippet extends Component {

  render() {
    return(
      <div className="app-Snippet">
        <h3>{this.props.heading}</h3>
        <hr />
        {this.props.children}
      </div>
    );
  }
}
