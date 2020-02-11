import React from 'react';
import './likebutton.scss';


export class LikeButton extends React.Component {

  state = {
    count: 0
  }

  clickHandle = () => {
    console.log('clicked!')

    this.setState({ count: this.state.count + 1 });
  }

  render() {

    return (
      <div className="button">
        <p
          className="button__image"
          onClick={this.clickHandle}>
          &#x1F44D;
        </p>
        <p className="button__count">{this.state.count}</p>
      </div>
    )
  }
}