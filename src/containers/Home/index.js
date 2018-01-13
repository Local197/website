import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getLocale } from 'reducers/locale';
import Footer from 'components/Footer';
import Panel from 'components/Panel';
import Text from 'containers/Text';

require('./index.scss');

const Home = ({ locale }) => (
    <div className="app-Home">
      <Panel>
        <h1>
          <Text language="en">This is who we are:</Text>
          <Text language="es">Esto es lo que somos nosotros:</Text>
        </h1>
      </Panel>
      <Footer />
    </div>
);

Home.propTypes = {
  locale: PropTypes.string
};

const mapStateToProps = (state) => ({
  locale: getLocale(state.locale)
});


export default connect(
  mapStateToProps
)(Home);
