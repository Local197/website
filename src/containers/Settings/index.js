import { connect } from 'react-redux';

import Settings from 'components/Settings';

const mapStateToProps = (state) => ({
  ...state.auth,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Settings);