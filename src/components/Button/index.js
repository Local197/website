import React, {Component} from 'react';

require('./index.scss');

export default class Button extends Component {

  render() {
    const priority = getPriority(this.props);

    return(
      <button
      className={`app-Button${priority}`}
      onClick={this.props.click}>
        {this.props.children}
      </button>
    );
  }
}

function getPriority(props) {
  if (props.secondary) {
    return '-secondary';
  } else if (props.tertiary) {
    return '-tertiary';
  } else {
    return '-primary';
  }
}
