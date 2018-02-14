import React, {Component} from 'react';

import Panel from 'components/Panel';
import Text from 'components/Text'
import Translate from 'containers/Translate';

require('./index.scss');

export default class ContractorsView extends Component {

  render() {
    return(
      <div className="app-ContractorsView">
        <Panel noSidebar>
          <Text>
            <h2>
              <Translate language="en">Subcontracting</Translate>
              <Translate language="es">Subcontratando</Translate>
            </h2>
            <p>
              <Translate language="en">General Contractors...</Translate>
              <Translate language="es">Constructoras Generales...</Translate>
            </p>
            <p>
              <Translate language="en">Is your firm looking for subcontractors that can finish the job on time and right the first time?</Translate>
              <Translate language="es">Desea tu firma buscar subcontratistas que puedan terminar tus trabajos a tiempo y bien la primera vez?</Translate>
            </p>
            <p>
              <Translate language="en">Then, consider calling union contractors.</Translate>
              <Translate language="es">Entonces, considera llamar a contratistas de union.</Translate>
            </p>
            <p>
              <Translate language="en">They are big and small. They practice excellence in performance and comply with all aspects of employment laws that pay area standard wages and benefits to their workforce.</Translate>
              <Translate language="es">Estos son grandes y peque&ntilde;as empresas. Practican excelencia en su desempe&ntilde;o, y cumplen con todos los aspectos de leyes de empleos, y pagan salarios est&aacute;ndares y beneficios a su fuerza laboral.</Translate>
            </p>
            <p>
              <Translate language="en">Contact us for a list of Best Value Contractors within our trade.</Translate>
              <Translate language="es">Contactanos para solicitar una lista de empresas especializadas en los varios aspectos de nuestro oficio.</Translate>
            </p>
            <h2>
              <Translate language="en">Visit out Installations</Translate>
              <Translate language="es">Visite nuestras instalaciones</Translate>
            </h2>
            <p>
              <Translate language="en">Would you be interested in having a tour of our training center?</Translate>
              <Translate language="es">Le interesar&iacute;a visitar uno de nuestros centros de entrenamiento?</Translate>
            </p>
            <p>
              <Translate language="en">Let us offer you a visit to one of our centers. Please schedule a visit by calling us at </Translate>
              <Translate language="es">Perm&iacute;tanos reservarle una visita a una de nuestras instalaciones. Favor de hacer una cita llamandonos a </Translate>
              <span>(301) 736 - 1696</span>
            </p>
          </Text>
        </Panel>
      </div>
    )
  }
}
