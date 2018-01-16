import React, {Component} from 'react';

import Panel from 'components/Panel';
import Translate from 'containers/Translate';

require('./index.scss');

export default class ContractorsView extends Component {

  render() {
    return(
      <div className="app-ContractorsView">
        <Panel noSidebar>
          <h2>
            <Translate language="en">This is the contractors</Translate>
          </h2>
          <p>supp</p>
        </Panel>
      </div>
    )
  }
}
