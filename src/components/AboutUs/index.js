import React, {Component} from 'react';

import Panel from 'components/Panel';
import Button from 'components/Button';
import HeaderContainer from 'containers/HeaderContainer';
import Translate from 'containers/Translate';

require('./index.scss');

export default class AboutUs extends Component {

  render() {
    return(
      <div className="app-AboutUs">
        <Panel noSidebar>
          <h2>
            <Translate language="en">This is the about us page</Translate>
            <Translate language="es">Esta es la pagina de about us</Translate>
          </h2>
          <p>supp</p>
        </Panel>
      </div>
    )
  }
}
