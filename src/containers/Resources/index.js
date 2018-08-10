import { connect } from 'react-redux';

import Resources from 'components/Resources';

const mapStateToProps = (state) => ({
  ...state.auth,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Resources);