import React from 'react';
import ReactDOM from 'react-dom';

import { Week } from './Week/week.jsx';

import './index.html';
import './style.css';

class App extends React.Component {
  render() {
    return (
      <Week />
    );
  }
};

ReactDOM.render(<App />, document.querySelector('#app'));