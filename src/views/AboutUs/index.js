import React, {Component} from 'react';

import Panel from 'components/Panel';
import Snippet from 'components/Snippet';
import Text from 'components/Text';
import Translate from 'containers/Translate';

require('./index.scss');

export default class AboutUsView extends Component {

  render() {
    return(
      <div>
        <Panel noSidebar className="app-AboutUsView">
          <Text className="app-AboutUsView-main">
            <h2>
              <Translate language="en">Preamble</Translate>
              <Translate language="es">Preambulo</Translate>
            </h2>
            <p>
              <Translate language="en">
                Our aim will be to promote and protect the interest of our membership, to elevate the moral, intellectual and social conditions of all working men and women, to assist each other in sickness and distress.
              </Translate>
              <Translate language="es">
                Nuestro objetivo sera promover y proteger el interes de nuestra membres&iacute;a, a elevar la moral, condiciones intelectuales y sociales de todos los hombres y mujeres de trabajo, a asistir uno al otro en enfermedad y angustia.
              </Translate>
            </p>
            <p>
              <Translate language="en">
                To encourage apprenticeship and a higher standard of skills, to cultivate a feeling of friendship, and to assist each other to secure employment.
              </Translate>
              <Translate language="es">
                A alentar aprendizaje y altos est&aacute;ndares de destrezas, a cultivar un sentimiento de amistad, y a asistir mutuamente a asegurar empleo.
              </Translate>
            </p>
            <p>
              <Translate language="en">
                To aid and assist all organizations to uphold the dignity of labor and resist oppression by honorable means.
              </Translate>
              <Translate language="es">
                A ayudar y asistir todas las organizaciones a defender la dignidad del trabajo y resistir opresi&oacute;n a trav&eacute;s de medios honorables.
              </Translate>
            </p>
            <p>
              <Translate language="en">
                To hold it as a sacred principle, that union members, above all others, should set a good example as good and faithful workers, performing their duties to their employer with honor to themselves and to their organization.
              </Translate>
              <Translate language="es">
                A mantener como principio sagrado, que miembros de la union, por encima de otros, deber&aacute;n establecer un buen ejemplo como fieles y buenos trabajadores, realizando sus deberes ante el empleador con honor para ellos y su organizaci&oacute;n.
              </Translate>
            </p>
            <p>
              <Translate language="en">
                We resent the principle of open shop association, and will continually strive for the enactment of legislation, which will enable us to achieve our objectives.
              </Translate>
              <Translate language="es">
                Nosotros resentimos el principio de asociaciones por despacho abierto, y continuaremos esforzando por promulgación de legislaciones, que nos permitan alcanzar nuestros objetivos.
              </Translate>
            </p>
            <p>
              <Translate language="en">
                Realizing that a blow at one organization is a blow to all, therefore, it shall be our duty as union members to purchase union-made goods and patronize union shops and business establishments whenever possible to do so.
              </Translate>
              <Translate language="es">
                Comprendiendo que un golpe a una organizaci&oacute;n es un golpe a todos, por consiguiente, deber&aacute; ser nuestro deber como miembros de union a comprar art&iacute;culos hechos union y patrocinar fabricas y establecimientos de negocios union siempre que esto sea posible hacerlo.
              </Translate>
            </p>
            <p>
              <Translate language="en">
                So with these aims and principles in mind, we the Carpenters of the vicinity of Alexandria, VA affiliate ourselves into an organization that shall be known as Local Union No.197 of the United Brotherhood of Carpenters and Joiners of America, in conformity with the provisions of the Constitution and Laws of the United Brotherhood.
              </Translate>
              <Translate language="es">
                As&iacute; que, con estos objetivos y principios en mente, nosotros los Carpinteros de la region de Alexandria, VA, afiliamos nosotros mismos dentro de una organizaci&oacute;n que deber&aacute; conocerse como Local Union No. 197 de la Hermandad Unida de Carpinteros y Ensambladores de America, en conformidad con las provisiones de la Constituci&oacute;n y Leyes de Hermandad Unida.
              </Translate>
            </p>
          </Text>
          <div className="app-AboutUsView-side">
            <Snippet heading={
                <span>
                  <Translate language="en">
                    United Brotherhood of Carpenters and Joiners of America
                  </Translate>
                  <Translate language="es">
                    Hermandad Unida de Carpinteros y Ensambladores de America
                  </Translate>
                </span>
              }>
              <Translate language="en">
                Carpenters Local 197 was chartered the 3rd of February, 2016 by the <a href="https://www.carpenters.org" target="__blank">United Brotherhood of Carpenters and Joiners of America</a>.
              </Translate>
              <Translate language="es">
                Local de Carpinteros 197 fue titulado en Febrero 3, 2016 por la <a href="https://www.carpenters.org" target="__blank">Hermandad Unida de Carpinteros y Ensambladores de America</a>.
              </Translate>
            </Snippet>
            <Snippet heading={
                <span>
                  <Translate language="en">
                    Keystone-Mountain-Lakes Regional Council of Carpenters
                  </Translate>
                  <Translate language="es">
                    Consejo Regional de Carpinteros Keystone-Mountain-Lakes
                  </Translate>
                </span>
              }>
              <Translate language="en">
                We are part of the <a href="http://www.kmlcarpenters.org/home.html" target="__blank">Keystone-Mountain-Lakes Regional Council of Carpenters</a> since the 3rd of February, 2016.
              </Translate>
              <Translate language="es">
                Es parte del <a href="http://www.kmlcarpenters.org/home.html" target="__blank">Consejo Regional de Carpinteros Keystone-Mountain-Lakes</a>, desde Febrero 3 del 2016.
              </Translate>
            </Snippet>
          </div>
        </Panel>
      </div>
    )
  }
}
