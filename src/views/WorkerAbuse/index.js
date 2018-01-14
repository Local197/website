import React, {Component} from 'react';

import Panel from 'components/Panel';
import Translate from 'containers/Translate';

require('./index.scss');

export default class WorkerAbuse extends Component {

  render() {
    return(
      <div className="app-WorkerAbuse">
        <Panel noSidebar>
          <h2>
            <Translate language="en">This is the worker abuse</Translate>
          </h2>
          <p>supp</p>
        </Panel>
      </div>
    )
  }
}
