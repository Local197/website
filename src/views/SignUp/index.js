import React, {Component} from 'react';

import Panel from 'components/Panel';
import Text from 'components/Text';
import SignUp from 'components/SignUp';
import Translate from 'containers/Translate';

require('./index.scss');

export default class SignUpView extends Component {

  render() {
    return(
      <div className="app-SignUpView">
        <Panel noSidebar>
          <div className="app-SignUpView-container">
            <Text>
              <h2>
                <Translate language="en">Sign Up to Local 197 Online</Translate>
              </h2>
              <p>You can join the Local by</p>
              <p>After joining, you will be given a union ID number. You can join the Local 197 online by signing up with that numberhere. By joining you will be able to access the following:</p>
              <ul>
                <li><b>Find a job:</b> we keep an updated list of avaliable union jobs.</li>
                <li><b>Union benefits:</b> quick access to the benefits you have as a union member.</li>
                <li><b>Report jobs (coming soon):</b> let your union brothers know of avaiable jobs and of union-compliant jobs.</li>
              </ul>
            </Text>
            <SignUp />
          </div>
        </Panel>
      </div>
    )
  }
}
