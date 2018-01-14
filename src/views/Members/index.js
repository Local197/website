import React, {Component} from 'react';

import Panel from 'components/Panel';
import Translate from 'containers/Translate';

require('./index.scss');

export default class Members extends Component {

  render() {
    return(
      <div className="app-Members">
        <Panel noSidebar>
          <h2>
            <Translate language="en">This is the members</Translate>
          </h2>
          <p>supp</p>
        </Panel>
      </div>
    )
  }
}
