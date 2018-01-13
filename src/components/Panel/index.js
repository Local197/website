import React, {Component} from 'react';

require('./index.scss');

export default class Panel extends Component {

  render() {
    return(
      <div className="app-Panel">
        <div className="app-Panel-container">
          {this.props.children}
        </div>
        { this.props.noSidebar == true ? null :
          <div className="app-Panel-sidebar">
            <p>video</p>
            <p>join our movement</p>
            <p>facebook</p>
            <p>blog</p>
          </div>
        }
      </div>
    );
  }
}
