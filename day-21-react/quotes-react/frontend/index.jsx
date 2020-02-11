import React from 'react';
import ReactDOM from 'react-dom';
import { Term } from './term/term.jsx';
import './index.css';
import './index.html';

class App extends React.Component {
  render() {
    return (
      <>
        <Term
          term="Entrepreneur"
          definition="A person who sets up a business or businesses, taking on financial risks in the hope of profit."
        />
        <Term
          term="Anathema"
          definition="Something or someone that is detested or shunned. In its other main usage, it is a formal excommunication."
        />
        <Term
          term="Phenomenon"
          definition="A fact or situation that is observed to exist or happen, especially one whose cause or explanation is in question"
        />
      </>
    );
  }
};

ReactDOM.render(< App />, document.getElementById('app'));
