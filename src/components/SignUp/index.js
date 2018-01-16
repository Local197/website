import React, {Component} from 'react';

require('./index.scss');

export default class SignUp extends Component {

  render() {
    return(
      <div className="app-SignUp">
        <p>Name:</p>
        <p>Email:</p>
        <p>Phone:</p>
        <p>Union Member ID:</p>
      </div>
    );
  }
}
