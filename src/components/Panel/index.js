import React, {Component} from 'react';

require('./index.scss');

export default class Panel extends Component {

  render() {
    return(
      <div className="app-Panel">
        <div className="app-Panel-container">
          content area.
        </div>
      </div>
    );
  }
}
