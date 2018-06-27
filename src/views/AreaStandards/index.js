import React, {Component} from 'react';

import Panel from 'components/Panel';
import Translate from 'containers/Translate';
import Hero from 'components/Hero';

require('./index.scss');

export default class AreaStandardsView extends Component {

  render() {
    return(
      <div className="app-AreaStandardsView">
        <Panel noSidebar>
          <Hero
            backgroundImage={require('./images/hero-background.jpg')}
            iconImage={require('./images/hero-icon.png')}
          >
            <h2>
              <Translate language="en">Our Mission</Translate>
              <Translate language="es">Nuestra Misi&oacute;n</Translate>
            </h2>
            <hr />
            <p>
              <Translate language="en">
                We believe in a fair day’s work for a fair day’s pay.
                We produce wealth for our contractors and expect a fair share of that wealth.
                We encourage employers to pay area standard wages and benefits for each area.
                We discourage and act upon contractors that exploit workers and hurt our way of living.
              </Translate>
              <Translate language="es">
                Nosotros creemos en dar un buen d&iacute;a de labor por un buen d&iacute;a de pago.
                Producimos ganancias para empresarios y esperamos un reparto justo de esa riqueza.
                Nosotros exhortamos a empleadores a pagar sueldos y beneficios est&aacute;ndares del &aacute;rea.
                Desalentamos y actuamos en contra de actos de compa&ntilde;&iacute;as que hieren nuestra forma de vivir.
              </Translate>
            </p>
          </Hero>
          <h3>
            <Translate language="en">In the most challenging times of our nation, exceptionally-minded leaders said it best. They are on the right side of history.</Translate>
            <Translate language="es">En los momentos m&aacute;s difíciles de nuestra naci&oacute;n, los l&iacute;deres de mentalidad excepcional lo dijeron mej&oacute;r. Ellos est&aacute;n en el lado correcto de la historia.</Translate>
          </h3>
          <Hero
            backgroundImage={require('./images/standards-background.jpg')}
            iconImage={require('./images/standards-icon.png')}
          >
            <h2>
              <Translate language="en">Area Standards</Translate>
              <Translate language="es">Estandares Del Area</Translate>
            </h2>
            <hr />
            <p>
              <Translate language="en">Area Standards are prevailing conditions and requirements that construction tradesmen in this area have established in exchange of our labor to employers who agree to offer good working conditions and pay fair wages and benefits.</Translate>
              <Translate language="es">Los estandares del area son condiciones prevalecientes y requerimientos que personas de oficio en construcci&oacute;n han establecido en esta &aacute;rea a cambio de nuestra labor a empresarios quienes aceptan ofrecer buenas condiciones de trabajo con sueldos justos y beneficios.</Translate>
            </p>
          </Hero>
          <h3>
            <Translate language="en">To learn more about what to do if a company does not follow these standards, go to our <a href="/abuse">worker abuse page</a>.</Translate>
            <Translate language="es">Para aprender mas sobre que hacer si una compa&ntilde;ia no sigue estos estandares, visia nuestra pagina contra <a href="/abuse">el abuso del trebejador</a>.</Translate>
          </h3>
        </Panel>
      </div>
    )
  }
}
