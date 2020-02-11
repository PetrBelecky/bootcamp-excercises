
/*
- Every bubble is component
- side (remote vs local) decides formating and image and text

- buttons will be components on bubles
- will have a state of count of likes
 */

import './index.html';
import './style.scss';
import React from "react";
import ReactDOM from "react-dom";

import { ChatBubble } from './ChatBubble/chatbubble.jsx';

class App extends React.Component {
  render() {
    return <ChatBubble />
  }
}

ReactDOM.render(<App />, document.querySelector('#class'));
