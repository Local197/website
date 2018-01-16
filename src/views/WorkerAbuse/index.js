import React, {Component} from 'react';

import Panel from 'components/Panel';
import Translate from 'containers/Translate';

require('./index.scss');

export default class WorkerAbuseView extends Component {

  render() {
    return(
      <div className="app-WorkerAbuseView">
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
