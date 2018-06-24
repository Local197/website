import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {
  Route,
  Switch
} from 'react-router-dom';
import { Authenticator, Greetings } from 'aws-amplify-react';

import Button from 'components/Button';
import SignIn from 'components/SignIn';
import SignUp from 'components/SignUp';
import Translate from 'containers/Translate';
import HeaderContainer from 'containers/HeaderContainer';

import { Auth } from 'aws-amplify';

require('./index.scss');

export default class Panel extends Component {

  constructor(props) {
    super(props);
    this._generateAuthLinks = this._generateAuthLinks.bind(this);
    this._signOutSubmit = this._signOutSubmit.bind(this);

    Auth.currentUserInfo().then(user => this.setState(user));
    Auth.currentAuthenticatedUser().then(usr => console.log(usr));
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
    if (this.props.authState == 'signedIn') {
      return (
        <div style={{textAlign: "center"}}>
          <div className="app-Panel-sidebar-auth">
            <Translate language="en">
              Welcome
            </Translate>
            <Translate language="es">
              ¡Bienvenido
            </Translate>
            <span> {this.state &&
                        this.state.attributes &&
                        this.state.attributes.name ?
                        this.state.attributes.name :
                        this.props.authData.username}
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
          <button
            onClick={() => window.location = '/settings' }
            className="app-Panel-sidebar-button">
            <Translate language="en">
              Settings
            </Translate>
            <Translate language="es">
              Preferencias
            </Translate>
          </button>
        </div>
      );
    }
    return (
      <div>
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
    Auth.signOut().then(() => location.reload());
  }
}
