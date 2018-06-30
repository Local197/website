import React, {Component} from 'react';

import Panel from 'components/Panel';
import Announcement from 'components/Announcement';
import Translate from 'containers/Translate';

require('./index.scss');

export default class PoliticalCornerView extends Component {

  render() {
    return(
      <div className="app-PoliticalCornerView">
        <Panel noSidebar>
          <Announcement heading="Under Construction" backgroundImage={require('assets/under-construction.jpg')} />
        </Panel>
      </div>
    )
  }
}
