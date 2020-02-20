import React from 'react';
import ReactDOM from 'react-dom';
import List from './List/List.jsx';

import './index.scss';
import './index.html';

class App extends React.Component {
  render() {
    return (
      <>
        <List
          url={`
          http://exercises:8080/day-29-laravel/workout/api/api.php${"?" + window.location.href.split('?')[1]}`}
        />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));