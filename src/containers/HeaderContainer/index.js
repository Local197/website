import { connect } from 'react-redux';

import { getLocale } from 'reducers/locale';
import { toggleLocale } from 'actions/locale';
import { getCurrentUser } from 'actions/auth';
import Header from 'components/Header';

const mapStateToProps = (state) => ({
  locale: getLocale(state.locale)
});

const mapDispatchToProps = dispatch => {
  return {
    onTranslate: locale => {
      dispatch(toggleLocale(locale))
    },
    getUserInfo: () => getCurrentUser(dispatch)
  }
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer;
