import { connect } from 'react-redux';

import { getLocale } from 'reducers/locale';
import { toggleLocale } from 'actions/locale';
import Header from 'components/Header';

const mapStateToProps = (state) => ({
  locale: getLocale(state.locale)
});

const mapDispatchToProps = dispatch => {
  return {
    onTranslate: locale => {
      dispatch(toggleLocale(locale))
    }
  }
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer;
