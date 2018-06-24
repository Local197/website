import { Auth } from 'aws-amplify';
import Dashboard from 'components/Dashboard';
import Input from 'components/Input';
import Section from 'components/Section';
import Button from 'components/Button';
import Translate from 'containers/Translate';
import React, { Component } from 'react';
import Note from 'components/Note';


require('./index.scss');

export default class Settings extends Component {

  constructor (props) {
    super(props);
    this.state = {
      phone: '',
      phone_verify: {
        stage: false,
        code: ''
      },
      email: '',
      verifyPhoneNote: 'Your phone number is not verified! To verify, type your number below and press "Verify Phone".',
      verifyPhoneNoteEs: '¡Tu numero telefonico no esta verificado! Para verificarlo, entralo abajo y presiona "Verificar Telefono".'
    }

    Auth.currentAuthenticatedUser().then(data => {
      this.setState({
        user: data
      });
    });

    this._phoneInputChange = this._phoneInputChange.bind(this);
    this._phoneVerifyCodeChange = this._phoneVerifyCodeChange.bind(this);
    this._phoneChangeSubmit = this._phoneChangeSubmit.bind(this);
    this._phoneVerifySubmit = this._phoneVerifySubmit.bind(this);
  }

  render() {
    const canSubmitPhoneChange = !!(this.state.phone && this.state.phone.replace( /\s/g, '').length == 12);
    const canSubmitPhoneVerify = !!this.state.phone_verify.code;
    const phoneNotVerified = this.state.user && this.state.user.attributes.phone_number && !this.state.user.attributes.phone_number_verified;
    return(
      <Dashboard>
        <Section title="User Info" titleEs="Informacion de Usuario">
          <Input
            title="Name"
            titleEs="Nombre"
            name="name"
            type="text"
            disabled
            content={this.state.user && this.state.user.attributes.name + ' ' + this.state.user.attributes.family_name || 'Loading...'}
          />
          <Input
            title="Union ID"
            titleEs="Idetificacion de Union"
            name="uid"
            type="text"
            disabled
            content={this.state.user && this.state.user.username || 'Loading...'}
          />
          <Input
            title="Role"
            titleEs="Cargo"
            name="role"
            type="text"
            disabled
            content={this.state.user && (this.state.user.attributes.role || 'Member') || 'Loading...'}
          />
        </Section>
        <Section grow title="User Settings" titleEs="Ajustes de Usuario">
          {!this.state.phone_verify.stage && phoneNotVerified &&
            <Note warning>
              <Translate language="en">
                {this.state.verifyPhoneNote}
              </Translate>
              <Translate language="es">
                {this.state.verifyPhoneNoteEs}
              </Translate>
            </Note>
          }
          {this.state.phone_verify.stage && this._generatePhoneVerify(canSubmitPhoneVerify)}
          {!this.state.phone_verify.stage && this._generatePhoneInput(canSubmitPhoneChange, phoneNotVerified)}
          <Input
            title="Email"
            titleEs="Correo Electronico"
            name="uid"
            type="text"
            disabled
            content={this.state.email}
            placeholder={this.state.user && this.state.user.attributes.email || 'Loading...'}
          />
        </Section>
        <Section title="Notifications" titleEs="Notificaciones">
          <Note>
            <Translate language="en">
              We ocassionally send important information to our members.
            </Translate>
            <Translate language="es">
              Nosotros ocacionalmente le mandamos a nuestros miembros información importante.
            </Translate>
          </Note>
          <Note>
            <Translate language="en">
              Standard SMS charges may apply.
            </Translate>
            <Translate language="es">
              Cobros estandares de SMS pueden aplicar.
            </Translate>
          </Note>
        </Section>
      </Dashboard>
    )
  }

  _phoneChangeSubmit(e) {
    const phone = this.state.phone.replace( /\s/g, '');
    if (phone.length == 12) {
      Auth.updateUserAttributes(this.state.user, {
        'phone_number': phone
      }).then(res => {
        Auth.verifyCurrentUserAttribute('phone_number').then(m => {
          this.setState({
            phone_verify: {
              code: '',
              stage: true
            }
          });
        });
      });
    }
  }

  _generatePhoneVerify(canSubmitPhoneVerify) {
    return (
      <div>
        <Note>
          <Translate language="en">
            A message has been sent to {this.state.phone}. Please enter the verification code.
          </Translate>
          <Translate language="es">
            Un mensage se ha mandado a {this.state.phone}. Fabor de entrar el codigo de verificación.
          </Translate>
        </Note>
        <Input
          title="Verification Code"
          titleEs="Codigo de Verificación"
          name="phone_verify"
          type="text"
          onEnter={canSubmitPhoneVerify ? this._phoneVerifySubmit : () => null }
          content={this.state.phone_verify.code}
          controlFunc={this._phoneVerifyCodeChange}
        />
        <Button
          disabled={!canSubmitPhoneVerify}
          click={this._phoneVerifySubmit}
        >
          <Translate language="en">
            Verify Phone
          </Translate>
          <Translate language="es">
            Verificar Telefono
          </Translate>
        </Button>
      </div>
    )
  }

  _generatePhoneInput(canSubmitPhoneChange, phoneNotVerified) {
    return (
      <div>
        <Input
          title="Phone Number"
          titleEs="Numero Teléfonico"
          name="phone"
          type="text"
          onEnter={canSubmitPhoneChange ? this._phoneChangeSubmit : () => null }
          content={this.state.phone}
          placeholder={this.state.user && (this.state.user.attributes.phone_number || ' ') || 'Loading...'}
          controlFunc={this._phoneInputChange}
        />
        <Button
          disabled={!canSubmitPhoneChange}
          click={this._phoneChangeSubmit}
        >
          <Translate language="en">
            {phoneNotVerified ? "Verify Phone" : "Change Phone"}
          </Translate>
          <Translate language="es">
            {phoneNotVerified ? "Verificar Telefono" : "Cambiar Teléfono"}
          </Translate>
        </Button>
      </div>
    )
  }

  _phoneVerifySubmit(e) {
    Auth.verifyCurrentUserAttributeSubmit('phone_number', this.state.phone_verify.code).then( m => {
      location.reload();
    });
  }

  _phoneVerifyCodeChange(e) {
    this.setState({
      phone_verify: {
        stage: true,
        code: e.target.value
      }
    });
  }

  _phoneInputChange(e) {
    const newPhone = e.target.value;
    if (/^[0-9]$/.test(newPhone)) {
      this.setState({phone: '+1 ' + e.target.value});
    } else if (/^\+1 $/.test(newPhone)) {
      this.setState({phone: ''});
    } else if (/^\+1 [0-9]{1,3}$/.test(newPhone)) {
      this.setState({phone: e.target.value});
    } else if (/^\+1 [0-9]{4}$/.test(newPhone)) {
      this.setState({phone: e.target.value.substring(0, 6) + ' ' + e.target.value[6]});
    } else if (/^\+1 [0-9]{3} $/.test(newPhone)) {
      this.setState({phone: e.target.value.substring(0, 6)});
    } else if (/^\+1 [0-9]{3} [0-9]{1,3}$/.test(newPhone)) {
      this.setState({phone: e.target.value});
    } else if (/^\+1 [0-9]{3} [0-9]{4}$/.test(newPhone)) {
      this.setState({phone: e.target.value.substring(0, 10) + ' ' + e.target.value[10]});
    } else if (/^\+1 [0-9]{3} [0-9]{3} $/.test(newPhone)) {
      this.setState({phone: e.target.value.substring(0, 10)})
    } else if (/^\+1 [0-9]{3} [0-9]{3} [0-9]{1,3}$/.test(newPhone)) {
      this.setState({phone: e.target.value})
    } else if (/^\+1 [0-9]{3} [0-9]{3} [0-9]{4}$/.test(newPhone)) {
      this.setState({
        phone: e.target.value
      });
    }
  }
}
