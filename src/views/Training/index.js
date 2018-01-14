import React, {Component} from 'react';

import Panel from 'components/Panel';
import Text from 'components/Text';
import Translate from 'containers/Translate';

require('./index.scss');

export default class Training extends Component {

  render() {
    return(
      <div className="app-Training">
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
            </h4>
            <p>
              <Translate language="en">
                Be the best you can be. Strengthen your knowledge and be more employable and more competitive, by keeping up with your qualifications and certifications.
              </Translate>
            </p>
            <h4>
              <Translate language="en">
                Free classes
              </Translate>
            </h4>
            <p>
              <Translate language="en">
                Classes are at not cost to you, but offered only to union members. Please keep your card current. You will be issued full color textbooks and will be taught at top of the line installations with highly qualified instructors. We are aiming to best serve the industry needs.
              </Translate>
            </p>
            <h4>
              <Translate language="en">
                How to register
              </Translate>
            </h4>
            <p>
              <Translate lanugage="en">
                They are classes designed for you, conveniently set after working hours. See which one fits your schedule and call the school to reserve a seat.
              </Translate>
            </p>
            <p>
              <Translate lanugage="en">
                Telephone: (301)736-1696
              </Translate>
            </p>
            <p>
              <Translate language="en">
                Check out what classes we offer: <a href="https://www.197-carpenters.com/JUS.pdf" target="__blank">Classes.pdf</a>
              </Translate>
            </p>
            <p>
              <Translate language="en">
                Carpenters’ Training Center: 8510 Pennsylvania Ave. Upper Marlboro MD 201772
              </Translate>
            </p>
            <h2>
              <Translate language="en">
                UBC Training Verification Card
              </Translate>
            </h2>
            <p>
              <Translate language="en">
                The Carpenter International Training Fund has begun sending members a Personal Training Verification Card (TVC). The purpose of this card is to act as a single source to verify all of our members certifications. Simply scan the QR Code on the face of the card with one of the many barcode apps available for smart phones. You will then be taken to a personal webpage listing all of your certifications with the Labor Technical College.
              </Translate>
            </p>
            <p>
              <Translate language="en">
                Important: In order to receive this TVC card, you will have to take any certification or qualification class first, and your union card has to be current. Pictures are taken at a training center near you. GET YOURS NOW!
              </Translate>
            </p>
          </Text>
        </Panel>
      </div>
    )
  }
}
