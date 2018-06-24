import { Auth, Analytics } from 'aws-amplify';
import Panel from 'components/Panel';
import Input from 'components/Input';
import React, { Component } from 'react';


require('./index.scss');

export default class SettingsView extends Component {

  constructor (props) {
    super(props);
    this.state = {
      phone: ''
    }

    Auth.currentAuthenticatedUser().then(data => {
      this.setState({
        user: data
      });
    });

    this._phoneInputChange = this._phoneInputChange.bind(this);
    this._phoneChangeSubmit = this._phoneChangeSubmit.bind(this);
  }

  render() {
    return(
      <div className="app-SettingsView">
        <Panel noSidebar>
          <span>Role: {this.state.user && this.state.user.attributes.role || 'member'}</span>
          <Input
            title="Phone Number"
            titleEs="Numero Teléfonico"
            name="phone"
            type="text"
            onEnter={this._phoneChangeSubmit}
            content={this.state.phone}
            controlFunc={this._phoneInputChange}
          />
        </Panel>
      </div>
    )
  }

  _phoneChangeSubmit(e) {
    const phone = this.state.phone.replace( /\s/g, '');
    if (phone.length == 12) {
      Auth.updateUserAttributes(this.state.user, {
        'phone_number': phone
      });
    }
  }

  _phoneInputChange(e) {
    const newPhone = e.target.value;
    if (/^[0-9]$/.test(newPhone)) {
      this.setState({phone: '+1 ' + e.target.value});
    } else if (/^\+1 [0-9]{1,2}$/.test(newPhone)) {
      this.setState({phone: e.target.value});
    } else if (/^\+1 [0-9]{3}$/.test(newPhone)) {
      this.setState({phone: e.target.value + ' '});
    } else if (/^\+1 [0-9]{3} [0-9]{1,2}$/.test(newPhone)) {
      this.setState({phone: e.target.value});
    } else if (/^\+1 [0-9]{3} [0-9]{3}$/.test(newPhone)) {
      this.setState({phone: e.target.value + ' '});
    } else if (/^\+1 [0-9]{3} [0-9]{3} [0-9]{1,3}$/.test(newPhone)) {
      this.setState({phone: e.target.value})
    } else if (/^\+1 [0-9]{3} [0-9]{3} [0-9]{4}$/.test(newPhone)) {
      this.setState({
        phone: e.target.value,
        readyToSubmit: true
      });
    } else {
      this.setState({
        readyToSubmit: false
      });
    }
  }
}
