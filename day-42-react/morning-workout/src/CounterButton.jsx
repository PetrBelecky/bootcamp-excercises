import React, { Component } from 'react';

class CounterButton extends Component {

  render() {
    const { handleClick, value } = this.props;

    return (
      < button onClick={handleClick} > {value}</button >
    )
  }
}

export default CounterButton;