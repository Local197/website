import React, {Component} from 'react';

import { NavLink } from 'react-router-dom';
import Translate from 'containers/Translate';

export default class Nav extends Component {
  render() {
    return (
      <div>
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
    )
  }
}