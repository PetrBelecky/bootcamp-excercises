import React from 'react';
import './term.css';

export class Term extends React.Component {
  render() {
    return (
      <div className="term">
        <div className="term__headline">
          <h1>{this.props.term}</h1>
        </div>
        <div className="term__defintion">
          <p>{this.props.definition}</p>
        </div>
      </div>
    );
  }
};
