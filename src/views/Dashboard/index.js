import Page from 'components/Page';
import React, { Component } from 'react';
import Settings from 'containers/Settings';
import Resources from 'containers/Resources';


require('./index.scss');

export default class DashboardView extends Component {

  constructor (props) {
    super(props);
  }

  render() {
    return(
      <Page>
        <div>
          <Resources/>
          <Settings/>
        </div>
      </Page>
    )
  }
}
