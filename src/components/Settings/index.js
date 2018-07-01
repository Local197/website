import { Auth } from 'aws-amplify';
import { SNS } from 'aws-sdk'
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
      verifyPhoneNote: 'Your phone number is not verified! To verify, type your number below and press "Verify Phone"',
      verifyPhoneNoteEs: '¡Tu numero telefónico no esta verificado! Para verificarlo, ingresalo abajo y presiona "Verificar Telėfono"'
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
      <Dashboard title="My Settings" titleEs="Mis Ajustes">
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
            titleEs="Idetificación de Unión"
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
            content={this.state.user && (this.state.user.attributes['custom:role'] || 'Member') || 'Loading...'}
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
            titleEs="Correo Electrónico"
            name="uid"
            type="text"
            disabled
            content={this.state.email}
            placeholder={this.state.user && this.state.user.attributes.email || 'Loading...'}
          />
        </Section>
        <Section title="Notifications" titleEs="Notificaciones">
          {phoneNotVerified &&
            <Note warning>
              <Translate language="en">
                Verify phone before subscribing
              </Translate>
              <Translate language="es">
                Verificar teléfono antes de suscibirse
              </Translate>
            </Note>
          }
          {this.state.user && !this.state.user.attributes.phone_number &&
            <Note warning>
              <Translate language="en">
                A phone number is needed to subscribe
              </Translate>
              <Translate language="es">
                Se necesita un número telefónico para suscibirse
              </Translate>
            </Note>
          }
          { this.state.user && (this.state.user.attributes['custom:sns_subscription_arn'] ? this._generateUnsubscribeNote() : this._generateSubscribeNote())}
          { this.state.user && (this.state.user.attributes['custom:sns_subscription_arn'] ? this._generateUnsubscribeButton() : this._generateSubscribeButton(phoneNotVerified))}
        </Section>
      </Dashboard>
    )
  }

  _generateSubscribeNote() {
    return (
      <Note>
        <Translate language="en">
          Subscribe below to receive text messages! We ocassionally send important information to our members.
        </Translate>
        <Translate language="es">
          Suscribete abajo pare recibir mensajes de texto. Nosotros ocacionalmente le mandamos a nuestros miembros información importante.
        </Translate>
      </Note>
    );
  }

  _generateUnsubscribeNote() {
    return (
      <Note>
        <Translate language="en">
          Thank you for subscribing! If you wish to unsubscribe for any reason, you can do so below:
        </Translate>
        <Translate language="es">
          Gracias por suscribirse. Si quieiera dejar de suscribirse, puede apachar el boton abajo:
        </Translate>
      </Note>
    );
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
            Un mensage se ha mandado a {this.state.phone}. Favor de entrar el código de verificación.
          </Translate>
        </Note>
        <Input
          title="Verification Code"
          titleEs="Código de Verificación"
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
          titleEs="Numero Telefónico"
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
            {phoneNotVerified ? "Verificar Teléfono" : "Cambiar Teléfono"}
          </Translate>
        </Button>
      </div>
    )
  }

  _generateSubscribeButton(phoneNotVerified) {
    return (
      <Button
        disabled={phoneNotVerified}
        click={() => {
          Auth.currentUserCredentials()
          .then(credentials => {
            const sns = new SNS({
              apiVersion: '2010-03-31',
              region: 'us-east-1',
              credentials: credentials
            }).subscribe({
              Protocol: 'sms', /* required */
              TopicArn: 'arn:aws:sns:us-east-1:535191684348:Local197', /* required */
              Endpoint: this.state.user.attributes.phone_number
            }, (err, data) => {
              if (!err) {
                Auth.updateUserAttributes(this.state.user, {
                  'custom:sns_subscription_arn': data.SubscriptionArn
                }).then(location.reload());
              }
            });
          })
        }}
      >
        <Translate language="en">
          Subscribe SMS
        </Translate>
        <Translate language="es">
          Suscribirse a SMS
        </Translate>
      </Button>
    );
  }

  _generateUnsubscribeButton(phoneNotVerified) {
    return (
      <Button
        secondary
        click={() => {
          Auth.currentUserCredentials()
          .then(credentials => {
            const sns = new SNS({
              apiVersion: '2010-03-31',
              region: 'us-east-1',
              credentials: credentials
            }).unsubscribe({
              SubscriptionArn: this.state.user.attributes['custom:sns_subscription_arn']
            }, (err, data) => {
              if (!err) {
                Auth.updateUserAttributes(this.state.user, {
                  'custom:sns_subscription_arn': ''
                }).then(location.reload());
              }
            });
          })
        }}
      >
        <Translate language="en">
          Unsibscribe SMS
        </Translate>
        <Translate language="es">
          Dejar la Suscripsion
        </Translate>
      </Button>
    );
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
