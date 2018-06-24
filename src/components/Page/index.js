import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderContainer from 'containers/HeaderContainer';

require('./index.scss');

export class Page  extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  }

  render() {
    return (
      <div className="app-Page">
        <HeaderContainer />
        <div className="app-Page-content">
            {this.props.children}
        </div>
      </div>
    )
  }
}

export default Page
