import React, {Component} from 'react';

import Panel from 'components/Panel';
import Text from 'components/Text';
import SignIn from 'components/SignIn';
import Translate from 'containers/Translate';

import { Link } from 'react-router-dom';
import { Authenticator } from 'aws-amplify-react';

require('./index.scss');

export default class SignInView extends Component {

  render() {
    return(
      <div className="app-SignIpView">
        <Panel noSidebar>
          <div className="app-SignIpView-container">
            <Text>
              <h2>
                <Translate language="en">Sign In to Local 197</Translate>
                <Translate language="es">Reg&iacute;strarse a Local 197</Translate>
              </h2>
              <Authenticator hideDefault>
                <SignIn />
              </Authenticator>
              <p>
                <Translate language="en">
                  Don't have an account yet? You can <Link to="/sign-up">Sign Up here</Link>.
                </Translate>
                <Translate language="es">
                  no tienes una cuenta todav&iacute;a? <Link to="/sign-up">Registrate aqu&iacute;</Link>.
                </Translate>
              </p>
            </Text>
          </div>
        </Panel>
      </div>
    )
  }
}
