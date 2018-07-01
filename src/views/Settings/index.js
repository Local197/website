import Page from 'components/Page';
import React, { Component } from 'react';
import Settings from 'components/Settings';


require('./index.scss');

export default class SettingsView extends Component {

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
