import React, {Component} from 'react';

import Input from 'components/Input';
import Button from 'components/Button';
import Text from 'components/Text';
import Translate from 'containers/Translate';

import { Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';

require('./index.scss');

export default class SignIn extends Component {

  constructor(props) {
    super(props);

    this._getStatusMessage = this._getStatusMessage.bind(this);
    this._signInSubmit = this._signInSubmit.bind(this);
    this._renderInput = this._renderInput.bind(this);
    this._generateSignIn = this._generateSignIn.bind(this);
    this._generateWelcome = this._generateWelcome.bind(this);

    this.state = {
      email: '',
      password: '',
      stage: 1
    }
  }

  render() {
    return(
      <div className="app-SignIn">
        <Link className="app-SignIn-link" to="/sign-up">
          <Translate language="en">
            Sign Up
          </Translate>
          <Translate language="es">
            Reg&iacute;strarse
          </Translate>
        </Link>
        {this._renderInput()}
        <Text className="app-SignIn-status">
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
    if (this.props.authState == 'signedIn')
      window.location = '/';
    switch(this.state.stage) {
      case 1: case 2: case 3:
        return this._generateSignIn();
      case 4:
        return this._generateWelcome();
    }
  }

  _generateSignIn() {
    return (
      <div className="app-SignIn-inputGroup">
        <Input
          title="Email"
          titleEs="Email"
          name="username"
          type="email"
          content={this.state.email}
          controlFunc={e => this.setState({email: e.target.value})}
          placeholder="user@domain.com"
          />
        <Input
          title="Password"
          titleEs="Contrase&ntilde;a"
          name="password"
          type="password"
          content={this.state.password}
          controlFunc={e => this.setState({password: e.target.value})}
          placeholder="Enter Password"
          onEnter={() => {
            this.state.password &&
            this.state.email &&
            this._signInSubmit()
          }}
          />
        <Button
          click={this._signInSubmit}
          className="app-SignIn-button"
          disabled={
            this.state.password == '' ||
            this.state.email == ''
          }>
          <Translate language="en">
            Login
          </Translate>
          <Translate language="es">
            Ingresar
          </Translate>
        </Button>
      </div>
    );
  }

  _generateWelcome() {
    return (
      <div className="app-SignIn-inputGroup">
        Welcome!
        <Link className="app-Panel-sidebar-link" to="/sign-in">
          <Translate language="en">
            Go back Home
          </Translate>
          <Translate language="es">
            Rgresar a Inicio
          </Translate>
        </Link>
      </div>
    );
  }

  _getStatusMessage(stage) {
    switch (stage) {
      case 1:
        return {
          en: 'Enter your email and password to sign in.',
          es: 'Ingrese su email is password para ingresar.'
        }
      case 2:
        return {
          en: 'Loading...',
          es: 'Cargando...'
        }
      case 3:
        return {
          en: 'Incorrect username/password combination',
          es: 'combinación incorrecta de nombre de usuario/contraseña'
        }
      case 4:
        return {
          en: 'You\'re signed in!',
          es: '¡Has iniciado sesión!'
        }
    }
  }

  _signInSubmit() {
    this.setState({
      stage: 2
    });
    Auth.signIn(this.state.email, this.state.password)
      .then(data => {
        console.log(data)
        this.props.onStateChange('signedIn');
        this.setState({
          stage: 4
        });
      })
      .catch((e) => {
        this.setState({stage: 3});
        console.log(e);
      });
  }
}
