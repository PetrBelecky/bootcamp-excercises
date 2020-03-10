import React, { Component } from 'react';

class Display extends Component {

  render() {
    console.log('Props of Display: ', this.props);

    const { count } = this.props;

    return (
      <h2>{count}</h2>
    )
  }
}

export default Display;