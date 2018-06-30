import { connect } from 'react-redux';

import { signOut } from 'actions/auth';
import Panel from 'components/Panel';

const mapStateToProps = (state) => ({
  ...state.auth,
})

const mapDispatchToProps = (dispatch) => ({
  signOut: () => signOut(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Panel);