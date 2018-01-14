import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Translate from 'containers/Translate';
import HeaderContainer from 'containers/HeaderContainer';

require('./index.scss');

export default class Panel extends Component {

  render() {
    return(
      <div className="app-Panel">
        {this.props.noHeader ? null :
          <HeaderContainer />
        }
        <div className="app-Panel-container">
          <div className="app-Panel-content">
            {this.props.children}
          </div>
          { this.props.noSidebar == true ? null :
            <div className="app-Panel-sidebar">
              <div>
                <Link className="app-Panel-sidebar-link" to="/sign-in">
                  <Translate language="en">
                    Login
                  </Translate>
                  <Translate language="es">
                    Ingresar
                  </Translate>
                </Link>
                <Link className="app-Panel-sidebar-link" to="/sign-up">
                  <Translate language="en">
                    Sign Up
                  </Translate>
                  <Translate language="es">
                    Reg&iacute;strarse
                  </Translate>
                </Link>
              </div>
              <Translate language="en">
                <iframe width="220" height="220" src="https://www.youtube.com/embed/3-X5hCxdaLc" frameBorder="0" allowFullScreen></iframe>
              </Translate>
              <Translate language="es">
                <iframe width="220" height="220" src="https://www.youtube.com/embed/iaBCBXy600E" frameBorder="0" allowFullScreen></iframe>
              </Translate>
              <div className="app-Panel-sidebar-links">
                <Link className="app-Panel-sidebar-link" to="/sign-up">
                  <Translate language="en">
                    Join our Movement
                  </Translate>
                  <Translate language="es">
                    Unete al Movimiento
                  </Translate>
                </Link>
                <Link className="app-Panel-sidebar-link" to="/sign-up">
                  <Translate language="en">
                    Facebook
                  </Translate>
                  <Translate language="es">
                    Facebook
                  </Translate>
                </Link>
                <Link className="app-Panel-sidebar-link" to="/sign-up">
                  <Translate language="en">
                    View our Blog
                  </Translate>
                  <Translate language="es">
                    Lee Nuestro Blog
                  </Translate>
                </Link>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}
