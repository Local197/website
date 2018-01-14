import React, {Component} from 'react';

import Panel from 'components/Panel';
import Translate from 'containers/Translate';

require('./index.scss');

export default class PoliticalCorner extends Component {

  render() {
    return(
      <div className="app-PoliticalCorner">
        <Panel noSidebar>
          <h2>
            <Translate language="en">This is the politics</Translate>
          </h2>
          <p>supp</p>
        </Panel>
      </div>
    )
  }
}
