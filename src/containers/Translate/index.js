import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getLocale } from 'reducers/locale';

require('./index.scss');

const Translate = ({ locale, language, children }) => (
  locale == language ?
  <span className="app-Translate">{children}</span> :
  <span className="app-Translate"></span>
)

Translate.propTypes = {
  locale: PropTypes.string
};

const mapStateToProps = (state) => ({
  locale: getLocale(state.locale)
});


export default connect(
  mapStateToProps
)(Translate);
