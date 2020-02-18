import React from 'react';
import ReactDOM from 'react-dom';
import Celebrities from './Celebrities/Celebrities.jsx';

import './index.scss';
import './index.html';

class App extends React.Component {
  render() {
    return (
      <>
        <Celebrities
          url="http://exercises:8080/day-27-mysql/react-php-celebrities/api/index.php"
        />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
