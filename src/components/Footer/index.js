import React, {Component} from 'react';

import {
  github
} from 'constants/InlineSVGs';

require('./index.scss');

export default class Footer extends Component {

  render() {
    return(
      <div className="app-Footer">
        <div className="app-Footer-content">
          <div className="app-Footer-content-social">
            <a dangerouslySetInnerHTML={github} href="https://github.com/Local197" rel="noopener" target="__blank" />
          </div>
          <div>
            <span className="app-Footer-content-copy">2016 - 2018 &copy; UBC Local 197</span>
          </div>
        </div>
      </div>
    );
  }
}
