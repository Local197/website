import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

class GoogleAnalytics extends React.Component {
    componentWillUpdate ({ location, history }) {
      ReactGA.pageview(location.pathname, document.title);
    }

    render () {
        return null;
    }
}

export default withRouter(GoogleAnalytics);
