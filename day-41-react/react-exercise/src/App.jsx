import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    // controls the state of class
    // initial value of state is blank
    this.state = {
      inputValue: ''
    }
  }

  // when called
  // it will get value of input (in event)
  // it will set state of class
  updateInput = (e) => {
    console.log('Event', e.target.value);
    this.setState({
      inputValue: e.target.value,
    })
  }

  render() {
    return (
      <div className="App">
        Start Here
        <br />

        <input
          type="text"

          // prop => 
          // sets the value
          value={this.state.inputValue}

          // prop => 
          // listens for change on input, when triggered, calls method
          onChange={this.updateInput} />

      </div >
    );
  }
}

export default App;
