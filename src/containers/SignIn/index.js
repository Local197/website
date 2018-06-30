import { connect } from 'react-redux';

import { signIn } from 'actions/auth';
import SignIn from 'components/SignIn';

const mapStateToProps = (state) => ({
  authState: state.auth.state
})

const mapDispatchToProps = (dispatch) => ({
  signIn: (username, password) => signIn(username, password, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);