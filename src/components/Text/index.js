import React, {Component} from 'react';

require('./index.scss');

export default class Text extends Component {

  render() {
    return(
      <div className="app-Text">
        {this.props.children}
      </div>
    );
  }
}
