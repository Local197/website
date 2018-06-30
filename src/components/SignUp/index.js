import React, {Component} from 'react';

import Input from 'components/Input';
import Button from 'components/Button';
import Text from 'components/Text';
import Translate from 'containers/Translate';

import { Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';

require('./index.scss');

export default class SignUp extends Component {

  constructor(props) {
    super(props);

    this._usernameInputChange = this._usernameInputChange.bind(this);
    this._codeInputChange = this._codeInputChange.bind(this);
    this._getStatusMessage = this._getStatusMessage.bind(this);
    this._passwordInputChange = this._passwordInputChange.bind(this);
    this._forgotPasswordSubmit = this._forgotPasswordSubmit.bind(this);
    this._changePasswordSubmit = this._changePasswordSubmit.bind(this);
    this._renderInput = this._renderInput.bind(this);
    this._generateSignUp = this._generateSignUp.bind(this);
    this._generateConfirm = this._generateConfirm.bind(this);

    this.state = {
      username: '',
      code: '',
      email: '',
      password: '',
      stage: 1,
      readyToSubmit: false,
      phone: ''
    }
  }

  render() {
    return(
      <div className="app-SignUp">
        <Link className="app-SignUp-link" to="/">
          <Translate language="en">
            Login
          </Translate>
          <Translate language="es">
            Ingresar
          </Translate>
        </Link>
        {this._renderInput()}
        <Text className="app-SignUp-status">
          <Translate language="en">
            {this._getStatusMessage(this.state.stage).en}
          </Translate>
          <Translate language="es">
            {this._getStatusMessage(this.state.stage).es}
          </Translate>
        </Text>
      </div>
    );
  }

  _renderInput() {
    switch(this.state.stage) {
      case 1: case 2: case 4:
        return this._generateSignUp();
      case 3: case 6:
        return this._generateConfirm();
      case 5:
        return null
    }
  }

  _generateSignUp() {
    return (
      <div className="app-SignUp-inputGroup">
        <Input
          title="Union ID"
          titleEs="ID de Union"
          name="username"
          type="text"
          content={this.state.username}
          controlFunc={this._usernameInputChange}
          placeholder="U-####-####"
          onEnter={() => this.state.readyToSubmit && this._forgotPasswordSubmit()}
          />
        <Button
          click={this._forgotPasswordSubmit}
          className="app-SignUp-button"
          disabled={!this.state.readyToSubmit}>
          Email Code
        </Button>
      </div>
    );
  }

  _generateConfirm() {
    return (
      <div className="app-SignUp-inputGroup">
        <Input
          title="Code from Email"
          titleEs="Codigo de Email"
          name="code"
          type="text"
          content={this.state.code}
          controlFunc={this._codeInputChange}
          placeholder="######"
          />
        <Input
          title="New Password"
          titleEs="Nueva Contrase&ntilde;a"
          name="password"
          type="password"
          content={this.state.password}
          controlFunc={this._passwordInputChange}
          placeholder="Enter Password"
          onEnter={this._changePasswordSubmit}
          />
        <Button
          click={this._changePasswordSubmit}
          className="app-SignUp-button">
          Set Password
        </Button>
      </div>
    );
  }

  _usernameInputChange(e) {
    const newUsername = e.target.value;
    if (/^U$/.test(newUsername)) {
      this.setState({username: e.target.value + '-'});
    } else if (/^[0-9]$/.test(newUsername)) {
      this.setState({username: 'U-' + e.target.value});
    } else if (/^u$/.test(newUsername)) {
      this.setState({username: 'U-'});
    } else if (/^U$/.test(newUsername)) {
      this.setState({username: 'U-'});
    } else if (/^U-$/.test(newUsername)) {
      this.setState({username: e.target.value});
    } else if (/^U-[0-9]{1,4}$/.test(newUsername)) {
      this.setState({username: e.target.value});
    } else if (/^U-[0-9]{5}$/.test(newUsername)) {
      this.setState({username: e.target.value.substring(0, 6) + '-' + e.target.value[6]})
    } else if (/^U-[0-9]{4}-$/.test(newUsername)) {
      this.setState({username: e.target.value.substring(0, 6)})
    } else if (/^U-[0-9]{4}-[0-9]{1,3}$/.test(newUsername)) {
      this.setState({
        username: e.target.value,
        readyToSubmit: false
      });
    } else if (/^U-[0-9]{4}-[0-9]{4}$/.test(newUsername)) {
      this.setState({
        username: e.target.value,
        readyToSubmit: true
      });
    }
  }

  _getStatusMessage(stage) {
    switch (stage) {
      case 1:
        return {
          en: 'Enter your Union ID to receive your login code.',
          es: 'Ingrese su ID de sindicato para recibir su código de inicio de sesión.'
        }
      case 2:
        return {
          en: 'Loading...',
          es: 'Cargando...'
        }
      case 3:
        return {
          en: `An message has been sent to ${this.state.email} with a login code.\
              Please enter the code and choose a new password that is at least \
              8 characters long, has a number, upper and lowecase letters.`,
          es: `Se ha enviado un mensaje a ${this.state.email} con \
              un código de inicio de sesión. Ingrese el código y elija una \
              nueva contraseña que sea al menos 8 caracteres de largo, \
              contiene un número y letras mayúsculas y minúsculas.`
        }
      case 4:
        return {
          en: 'Oops! Something went wrong. Make sure you have typed your Union \
              ID correctly.',
          es: '¡Oh no! Algo salió mal. Asegúrate de haber escrito tu ID de \
               sindicato correctamente'
        }
      case 5:
       return {
         en: 'Submitted successfully! You can now log in with your new password.',
         es: '¡Enviado con éxito! Ahora puede iniciar sesión con su nueva contraseña.'
       }
      case 6:
        return {
          en: 'Make sure your password is at least 6 characters long.',
          es: 'Asegurase que su contraseña tenga por lo menos 6 letras.'
        }
    }
  }

  _codeInputChange(e) {
    this.setState({code: e.target.value});
  }

  _passwordInputChange(e) {
    this.setState({password: e.target.value});
  }

  _forgotPasswordSubmit() {
    this.setState({
      stage: 2
    });
    Auth.forgotPassword(this.state.username)
      .then(data => {
        this.setState({
          stage: 3,
          email: data.CodeDeliveryDetails.Destination
        });
      })
      .catch(() => { this.setState({stage: 4})});
  }

  _changePasswordSubmit() {
    Auth.forgotPasswordSubmit(
      this.state.username,
      this.state.code,
      this.state.password)
      .then(data => {
        this.setState({stage: 5});
      })
      .catch(error => {
        this.setState({stage: 6});
      });
  }
}
