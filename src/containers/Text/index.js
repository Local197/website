import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getLocale } from 'reducers/locale';

require('./index.scss');

const Text = ({ locale, language, children }) => (
  locale == language ?
  <span className="app-Text">{children}</span> :
  <span className="app-Text"></span>
)

Text.propTypes = {
  locale: PropTypes.string
};

const mapStateToProps = (state) => ({
  locale: getLocale(state.locale)
});


export default connect(
  mapStateToProps
)(Text);
