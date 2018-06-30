import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {
  Route
} from 'react-router-dom';

import SignIn from 'containers/SignIn';
import SignUp from 'components/SignUp';
import Note from 'components/Note';
import Translate from 'containers/Translate';
import HeaderContainer from 'containers/HeaderContainer';

import { Auth } from 'aws-amplify';

require('./index.scss');

export default class Panel extends Component {

  constructor(props) {
    super(props);
    this._generateAuthLinks = this._generateAuthLinks.bind(this);
    this._signOutSubmit = this._signOutSubmit.bind(this);
  }

  render() {
    return(
      <div className="app-Panel">
        {this.props.noHeader ? null :
          <HeaderContainer />
        }
        <div className="app-Panel-container">
          <div className={`app-Panel-content ${this.props.className}`}>
            {this.props.children}
          </div>
          { this.props.noSidebar == true ? null :
            <div className="app-Panel-sidebar">
              {this._generateAuthLinks()}
              <Translate language="en">
                <iframe src="https://www.youtube.com/embed/3-X5hCxdaLc" frameBorder="0" allowFullScreen></iframe>
              </Translate>
              <Translate language="es">
                <iframe src="https://www.youtube.com/embed/iaBCBXy600E" frameBorder="0" allowFullScreen></iframe>
              </Translate>
              <div className="app-Panel-sidebar-links">
                {
                // <Link className="app-Panel-sidebar-link" to="/">
                //   <Translate language="en">
                //     Join our Movement
                //   </Translate>
                //   <Translate language="es">
                //     Unete al Movimiento
                //   </Translate>
                // </Link>
                }
                <a className="app-Panel-sidebar-link" href="https://www.facebook.com/UBC197/" target="__blank">
                  <Translate language="en">
                    Facebook
                  </Translate>
                  <Translate language="es">
                    Facebook
                  </Translate>
                </a>
                <a className="app-Panel-sidebar-link" href="http://blog.197-carpenters.com/" target="__blank">
                  <Translate language="en">
                    View our Blog
                  </Translate>
                  <Translate language="es">
                    Lee Nuestro Blog
                  </Translate>
                </a>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }

  _generateAuthLinks() {
    if (this.props.state == 'signed_in') {
      return (
        <div style={{textAlign: "center"}}>
          <div className="app-Panel-sidebar-auth">
            <Translate language="en">
              Welcome
            </Translate>
            <Translate language="es">
              ¡Bienvenido
            </Translate>
            <span> {this.props &&
                    this.props.attributes &&
                    this.props.attributes.name ?
                    this.props.attributes.name :
                    this.props.username}
            !</span>
          </div>
          <button
            onClick={this._signOutSubmit}
            className="app-Panel-sidebar-button">
            <Translate language="en">
              Logout
            </Translate>
            <Translate language="es">
              Cerrar Sesi&oacute;n
            </Translate>
          </button>
          <Link className="app-Panel-sidebar-button" to="/settings">
            <Translate language="en">
            Settings
            </Translate>
            <Translate language="es">
            Preferencias
            </Translate>
          </Link>
        </div>
      );
    }
    return (
      <div>
        <Note warning>
          <Translate language="en">
          Members, sign up now to receive text alerts!
          </Translate>
          <Translate language="es">
          Miembros, suscríbanse hoy para rexibir alertas de texto!
          </Translate>
        </Note>
        <Route
          path="/sign-up"
          component={SignUp}>
        </Route>
        <Route
          exact
          path="/"
          component={SignIn}>
        </Route>
      </div>
    );
  }

  _signOutSubmit() {
    this.props.signOut()
  }
}
