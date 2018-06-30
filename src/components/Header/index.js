import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import Button from 'components/Button';
import Translate from 'containers/Translate';
import logo from 'assets/logo.png';
import { logoPlaceholder } from 'constants/InlineSVGs';

require('./index.scss');

export default class Header extends Component {

  componentWillMount() {
    this.props.getUserInfo();
  }

  render() {
    return(
      <div className="app-Header">
        <div className="app-Header-top">
          <div className="app-Header-container">
            <div className="app-Header-logo">
              <div className="app-Header-logo-placeholder" dangerouslySetInnerHTML={logoPlaceholder}/>
              <img src={logo}/>
            </div>
            <h1>Carpenters&rsquo; Local 197</h1>
            <h3>Washington D.C., Maryland, & Virginia</h3>
            <Button tertiary click={() => this.props.onTranslate(this.props.locale) }>
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
          <NavLink className="app-Header-link" activeClassName="app-Header-link-active" exact to="/">
            <Translate language="en">
              Home
            </Translate>
            <Translate language="es">
              Entrada
            </Translate>
          </NavLink>
          <NavLink className="app-Header-link" activeClassName="app-Header-link-active" to="/about">
            <Translate language="en">
              About
            </Translate>
            <Translate language="es">
              Acerca De
            </Translate>
          </NavLink>
          <NavLink className="app-Header-link" activeClassName="app-Header-link-active" to="/contractors">
            <Translate language="en">
              Contractors
            </Translate>
            <Translate language="es">
              Contratistas
            </Translate>
          </NavLink>
          <NavLink className="app-Header-link" activeClassName="app-Header-link-active" to="/politics">
            <Translate language="en">
              Politics
            </Translate>
            <Translate language="es">
              Politicas
            </Translate>
          </NavLink>
          <NavLink className="app-Header-link" activeClassName="app-Header-link-active" to="/area-standards">
            <Translate language="en">
              Standards
            </Translate>
            <Translate language="es">
              Estandares
            </Translate>
          </NavLink>
          <NavLink className="app-Header-link" activeClassName="app-Header-link-active" to="/abuse">
            <Translate language="en">
              Abuse
            </Translate>
            <Translate language="es">
              Abuso
            </Translate>
          </NavLink>
          <NavLink className="app-Header-link" activeClassName="app-Header-link-active" to="/training">
            <Translate language="en">
              Training
            </Translate>
            <Translate language="es">
              Entrenamiento
            </Translate>
          </NavLink>
        </div>
      </div>
    );
  }
}
