import React, {Component} from 'react';

import Panel from 'components/Panel';
import Text from 'components/Text';
import Translate from 'containers/Translate';

require('./index.scss');

export default class HomeView extends Component {

  render() {
    return(
      <div className="app-HomeView">
        <Panel>
          <Text>
            <h2>
              <Translate language="en">This is who we are:</Translate>
              <Translate language="es">Esto es quienes somos:</Translate>
            </h2>
            <Translate language="en">
              <p>We are construction carpenters. We live here, in the community. We come from different backgrounds, but we share many things in common.</p>
              <p>We give our best effort to serve our membership and support the needs of union contractors that hire us.</p>
              <p>We build houses, commercial and residentail structures, highway and industrial infrastructure, shopping centers, local, state, military, and government installations.</p>
              <p>We promote <em>excellence, work ethics, and values</em>.</p>
              <p>We train our members with a certified apprenticeship program.</p>
              <p>We serve our community by being active participants in social and civic activities.</p>
              <p><b>We are inspired in shaping a better future for working families.</b></p>
            </Translate>
            <Translate language="es">
              <p>Somos carpinteros de construcci&oacute;n. Vivimos aqu&Iacute;, en la comunidad. Venimos de culturas diferentes, pero tenemos muchas cosas en com&uacute;n.</p>
              <p>Damos nuestro mejor esfuerzo en servir nuestra membres&iacute;a y apoyar compa&ntilde;&iacute;as que nos contratan.</p>
              <p>Construimos casas, edificaciones residenciales y comerciales, infraestructura de caminos e industrial, instalaciones gubernamentales locales, estatales, federal y militar.</p>
              <p>Nosotros promevemos <em>excelencia, &eacute;tica laboral, y valores</em>.</p>
              <p>Entrenamos a nuestra membres&iacute;a con un programa de aprendizaje certificado.</p>
              <p>Servimos a nuestra comunidad al ser participantes acrivos en eventos c&iacute;vicos y sociales.</p>
              <p><b>Nosotros estamos inspirados en moldear un futuro mejor para familias trabajadoras.</b></p>
            </Translate>
          </Text>
        </Panel>
      </div>
    )
  }
}
