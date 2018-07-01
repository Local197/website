import Page from 'components/Page';
import React, { Component } from 'react';
import Settings from 'containers/Settings';


require('./index.scss');

export default class DashboardView extends Component {

  constructor (props) {
    super(props);
  }

  render() {
    return(
      <Page>
        <Settings/>
      </Page>
    )
  }
}
