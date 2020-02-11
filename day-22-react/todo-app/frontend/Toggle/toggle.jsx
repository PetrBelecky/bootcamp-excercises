import './toggle.scss';

import React from 'react'

export class Toggle extends React.Component {

  state = {
    status: 'unknown'
  }

  clickHandle = () => {
    console.log('State changed!')
    if (this.state.status === 'unknown') {
      this.setState({ status: 'done' })
    } else {
      this.setState({ status: 'unknown' })
    }
  }

  render() {

    return (
      <div
        className={`toggle toggle--${this.state.status}`}
        onClick={this.clickHandle}
      >
      </div >
    )
  }
}




