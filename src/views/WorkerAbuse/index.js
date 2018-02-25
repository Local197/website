import React, {Component} from 'react';

import Panel from 'components/Panel';
import Hero from 'components/Hero';
import Translate from 'containers/Translate';

require('./index.scss');

export default class WorkerAbuseView extends Component {

  render() {
    return(
      <div className="app-WorkerAbuseView">
        <Panel noSidebar>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/mqeLHjyIXzo?autoplay=0&loop=0&showinfo=0&theme=dark&color=red&controls=1&modestbranding=0&start=0&fs=1&iv_load_policy=1&wmode=transparent&rel=1" frameBorder="0" allowFullScreen></iframe>
          <Hero
            backgroundImage={require('./images/abuse-background.jpg')}
            iconImage={require('./images/abuse-icon.png')}
            className="app-WorkerAbuseView-hero"
          >
            <h2 style={{ color: "white" }}>
              <Translate language="en">Worker Abuse</Translate>
              <Translate language="es">Abuso Laboral</Translate>
            </h2>
            <hr />
            <p style={{ color: "white" }}>
              <Translate language="en">
                Sometimes in a desperation or intentional act, contractors look for ways to cut cost an increase profit by cheating the system and offering substandard wages and working conditions.
                Unfortunately, employees become victims of these acts.
              </Translate>
              <Translate language="es">
                Algunas veces, en desesperación o acto intencional, compañías ven maneras de cortar costos e incrementar ganancias al hacer trampa al sistema y ofrecer salarios y condiciones laborales con bajos estándares.
                Desafortunadamente, sus empleados se vuelven victimas de estos actos.
              </Translate>
            </p>
          </Hero>
          <Hero
            backgroundImage={require('./images/record-keeping-background.jpg')}
            iconImage={require('./images/record-keeping-icon.png')}
            className="app-WorkerAbuseView-hero"
          >
            <h2 style={{ color: "white" }}>
              <Translate language="en">Record Keeping</Translate>
              <Translate language="es">Anotaciones</Translate>
            </h2>
            <hr />
            <p style={{ color: "white" }}>
              <Translate language="en">
                Keeping written records of your job agreement, situation, and daily work schedule to help your case should you ever need to file a complaint.
              </Translate>
              <Translate language="es">
                Mantener anotaciones de sus t&eacute;rminos de empleo, detalles del proyecto, y un registro diario puede ayudar grandiosamente su caso si necesita reportar una artima&ntilde;a.
              </Translate>
            </p>
          </Hero>
        </Panel>
      </div>
    )
  }
}
