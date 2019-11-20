import React, {Component} from 'react';

import Panel from 'components/Panel';
import Text from 'components/Text';
import Translate from 'containers/Translate';

require('./index.scss');

export default class TrainingView extends Component {

  render() {
    return(
      <div className="app-TrainingView">
        <Panel noSidebar>
          <Text>
            <h2>
              <Translate language="en">
                Journeyman Upgrade Classes (JUC)
              </Translate>
              <Translate language="es">
                Clases Adicionales para Personal de Oficio (JUC)
              </Translate>
            </h2>
            <h4>
              <Translate language="en">
                Why training?
              </Translate>
              <Translate language="es">
                Porque entrenarse?
              </Translate>
            </h4>
            <p>
              <Translate language="en">
                Be the best you can be. Strengthen your knowledge and be more employable and more competitive, by keeping up with your qualifications and certifications.
              </Translate>
              <Translate language="es">
                Dest&aacute;cate. Fortalece tus conocimientos y abre oportunidades de empleo y competencia, manteniendo tus certificaciones y calificaciones al d&iacute;a.
              </Translate>
            </p>
            <h4>
              <Translate language="en">
                Free classes
              </Translate>
              <Translate language="es">
                Clases Gratis
              </Translate>
            </h4>
            <p>
              <Translate language="en">
                Classes are at not cost to you, but offered only to union members. Please keep your card current. You will be issued full color textbooks and will be taught at top of the line installations with highly qualified instructors. We are aiming to best serve the industry needs.
              </Translate>
              <Translate language="es">
                Clases son sin costo para ti, pero solo se ofrecen a miembros de uni&oacute;n. Favor de mantener su tarjeta vigente. Se te dar&aacute;n libros a todo color y se te ense&ntilde;ara en instalaciones modernas con instructores calificados. Estamos mirando en servir mejor las necesidades de la industria.
              </Translate>
            </p>
            <h4>
              <Translate language="en">
                How to register
              </Translate>
              <Translate language="es">
                Como Registrarse
              </Translate>
            </h4>
            <p>
              <Translate lanugage="en">
                They are classes designed for you, conveniently set after working hours. See which one fits your schedule and call the school to reserve a seat.
              </Translate>
              <Translate language="es">
                Tenemos clases dise&ntilde;adas para ti, en horas convenientes. Ve cual se ajusta a tu calendario y llama a la escuela para que reserves un asiento.
              </Translate>
            </p>
            <p>
              <Translate lanugage="en">
                Telephone:
              </Translate>
              <Translate language="es">
                Tel&eacute;fono:
              </Translate>
              <span>(301) 735 - 6660</span>
            </p>
            <p>
              <Translate language="en">
                Check out what classes we offer: <a href="https://www.197-carpenters.com/JUS.pdf" target="__blank">Classes.pdf</a>
              </Translate>
              <Translate language="es">
                Estas son las clases que damos:
              </Translate>
              <a href="https://www.197-carpenters.com/JUS.pdf" target="__blank">
                <Translate language="en">Classes.pdf</Translate>
                <Translate language="es">Clases.pdf</Translate>
              </a>
            </p>
            <p>
              <Translate language="en">
                Carpenters’ Training Center:
              </Translate>
              <Translate language="es">
                Centro de Entrenamiento de Carpinteros:
              </Translate>
              8510 Pennsylvania Ave. Upper Marlboro MD 201772
            </p>
            <h2>
              <Translate language="en">
                UBC Training Verification Card
              </Translate>
              <Translate language="es">
                UBC Tarjeta de Verificaci&oacute;n de Entrenamiento
              </Translate>
            </h2>
            <p>
              <Translate language="en">
                The Carpenter International Training Fund has begun sending members a Personal Training Verification Card (TVC). The purpose of this card is to act as a single source to verify all of our members certifications. Simply scan the QR Code on the face of the card with one of the many barcode apps available for smart phones. You will then be taken to a personal webpage listing all of your certifications with the Labor Technical College.
              </Translate>
              <Translate language="es">
                El Fondo de Entrenamiento Internacional de Carpinteros ha comenzado a enviar a miembros  una Tarjeta Personal de Verificaci&oacute;n de Entrenamiento (TVC). El prop&oacute;sito de esta tarjeta es que sirva como vehículo &uacute;nico para verificar todas las certificaciones del miembro. Simplemente escanea el C&oacute;digo QR de encima de la tarjeta usando uno de los muchos dispositivos de aplicaciones disponibles en los tel&eacute;fonos inteligentes. Este te llevara a una pagina personal de internet la cual listara todas las certificaciones obtenidas con el Colegio T&eacute;cnico del Trabajo.
              </Translate>
            </p>
            <p>
              <Translate language="en">
                Important: In order to receive this TVC card, you will have to take any certification or qualification class first, and your union card has to be current. Pictures are taken at a training center near you. GET YOURS NOW!
              </Translate>
              <Translate language="es">
                Importante: Para poder recibir esta tarjeta TVC, deber&aacute;s tomar primero clases de certificaci&oacute;n o calificaci&oacute;n, y tu tarjeta de uni&oacute;n deber&aacute; estar al corriente. Tu foto puede tomarse en uno de los centros de entrenamiento mas cercano a ti.  SACA TU CREDENCIAL AHORA!
              </Translate>
            </p>
            <img className="app-TrainingView-image" src={require('assets/training.png')} />
          </Text>
        </Panel>
      </div>
    )
  }
}
