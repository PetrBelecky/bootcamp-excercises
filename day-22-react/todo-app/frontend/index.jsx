import './index.html';
import './style.scss';

import ReactDOM from 'react-dom'
import React from 'react'

/* import { Toggle } from "./Toggle/toggle.jsx"; */
import { TodoItem } from './TodoItem/todoitem.jsx';

class App extends React.Component {
  render() {
    return <TodoItem />
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

