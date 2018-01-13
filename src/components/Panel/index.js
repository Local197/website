import React, {Component} from 'react';

import Translate from 'containers/Translate';

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
            <Translate language="en">
              <iframe width="100%" height="220" src="https://www.youtube.com/embed/3-X5hCxdaLc" frameBorder="0" allowFullScreen></iframe>
            </Translate>
            <Translate language="es">
              <iframe width="100%" height="220" src="https://www.youtube.com/embed/iaBCBXy600E" frameBorder="0" allowFullScreen></iframe>
            </Translate>
            <p>join our movement</p>
            <p>facebook</p>
            <p>blog</p>
          </div>
        }
      </div>
    );
  }
}
