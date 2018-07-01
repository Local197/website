import { connect } from 'react-redux';

import { getCurrentUser } from 'actions/auth';
import Static from 'components/Static';

const mapStateToProps = (state) => ({
  auth: { ...state.auth }
})

const mapDispatchToProps = (dispatch) => ({
  getUserInfo: () => getCurrentUser(dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Static);