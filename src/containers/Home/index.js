import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getLocale } from 'reducers/locale';
import Footer from 'components/Footer';

require('./index.scss');

const Home = ({ locale }) => (
    <div className="app-Home">
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
