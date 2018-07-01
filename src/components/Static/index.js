import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

class Static extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getUserInfo();
  }

  componentWillUpdate ({ location, history, notify }, ) {
    ReactGA.pageview(location.pathname, document.title);

  }

  render () {
    return null;
  }
}

export default withRouter(Static);
