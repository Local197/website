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
                <Translate language="en">Sign Up to Local 197</Translate>
                <Translate language="es">Reg&iacute;strarse a Local 197</Translate>
              </h2>
              <p>
                <Translate language="en">
                  To make an appointment to join Local 197, you can call 301-735-6660 and ask for an interview. They are open Monday - Friday, 7:00AM - 4:00PM.
                </Translate>
                <Translate language="es">
                  Aplicables a la uni&oacute;n deber&iacute;an ir en persona a la oficina para una entrevista. La entrevista se consigue por tel&eacute;fono, llamando al 301-735-6660. Hablar con un representante del consejo o dejar un mensaje espec&iacute;fico. <br/> <br/> El horario es Lunes - Viernes de las 7:00AM - 4:00PM.
                </Translate>
              </p>
              <p>
                <Translate language="en">
                  After joining, you will be given a union ID number. You can join the Local 197 online by signing up with that number here. By joining you will be able to access the following:
                </Translate>
                <Translate language="es">
                  Despu&eacute;s de unirse, se le dar&aacute; un n&uacute;mero de identificaci&oacute;n del sindicato. Puede unirse al Local 197 en l&iacute;nea registr&aacute;ndose con ese n&uacute;mero aqu&iacute;. Al unirse, podr&aacute; acceder a lo siguiente:
                </Translate>
              </p>
              <ul>
                <li>
                  <Translate language="en">
                    <b>Find a job:</b> we keep an updated list of avaliable union jobs.
                  </Translate>
                  <Translate language="es">
                    <b>Encuentra un trabajo:</b> mantenemos una lista actual de trabajos de union disponibles.
                  </Translate>
                </li>
                <li>
                  <Translate language="en">
                    <b>Union benefits:</b> quick access to the benefits you have as a union member.
                  </Translate>
                  <Translate language="es">
                    <b>Beneficios de union:</b> acceso r&aacute;pido a beneficios que tiene como miembro de la union.
                  </Translate>
                </li>
                <li>
                  <Translate language="en">
                    <b>Report jobs (coming soon):</b> let your union brothers know of avaiable jobs and of union-compliant jobs.
                  </Translate>
                  <Translate language="es">
                    <b>Reportar trabajos (biene pronto):</b> ayuda a sus hermanos de la union compartiendo informaci&oacute;n sobre trabajos de union.
                  </Translate>
                </li>
              </ul>
            </Text>
            <SignUp />
          </div>
        </Panel>
      </div>
    )
  }
}
