import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

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
                <NavLink className="app-Panel-sidebar-link" activeClassName="app-Panel-sidebar-link-active" to="/sign-in">
                  <Translate language="en">
                    Sign In
                  </Translate>
                  <Translate language="es">
                    Estandares
                  </Translate>
                </NavLink>
                <NavLink className="app-Panel-sidebar-link" activeClassName="app-Panel-sidebar-link-active" to="/sign-up">
                  <Translate language="en">
                    Sign Up
                  </Translate>
                  <Translate language="es">
                    Estandares
                  </Translate>
                </NavLink>
              </div>
              <Translate language="en">
                <iframe width="100%" height="220" src="https://www.youtube.com/embed/3-X5hCxdaLc" frameBorder="0" allowFullScreen></iframe>
              </Translate>
              <Translate language="es">
                <iframe width="100%" height="220" src="https://www.youtube.com/embed/iaBCBXy600E" frameBorder="0" allowFullScreen></iframe>
              </Translate>
              <div className="app-Panel-sidebar-links">
                <p>join our movement</p>
                <p>facebook</p>
                <p>blog</p>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}
