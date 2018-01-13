import React, {Component} from 'react';

import Button from 'components/Button';
import Translate from 'containers/Translate';
import logo from 'assets/logo.png';
import { logoPlaceholder } from 'constants/InlineSVGs';

require('./index.scss');

export default class Header extends Component {

  render() {
    return(
      <div className="app-Header">
        <div className="app-Header-top">
          <div className="app-Header-container">
              <div className="app-Header-logo">
                <div className="app-Header-logo-placeholder" dangerouslySetInnerHTML={logoPlaceholder}/>
                <img data-src={logo}/>
              </div>
            <h1>Carpenters&rsquo; Local 197</h1>
            <h3>Washington D.C., Maryland, & Virginia</h3>
            <Button click={() => this.props.onTranslate(this.props.locale) }>
              <Translate language="en">
                Traducir a Espa&ntilde;ol
              </Translate>
              <Translate language="es">
                Translate to English
              </Translate>
            </Button>
          </div>
        </div>
        <div className="app-Header-nav">
          nav...
        </div>
      </div>
    );
  }
}
