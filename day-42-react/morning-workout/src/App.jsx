import React, { Component } from 'react';
import './App.css';
import Display from './Display';
import CounterButton from './CounterButton';

class App extends Component {

  constructor(props) {
    super(props)

    // controls the state of class
    this.state = {
      count: 9,
    }
  }

  // increment count
  incrementCount = () => {
    console.log('increment');
    console.log(this.state)

    // set state and see previous state
    this.setState((prevState) => {

      // return object (that is reason for curly braces)
      const newState = {
        count: prevState.count + 1
      }

      console.log('New state', newState);
      return newState;
    })
  }

  // decrement count
  decrementCount = () => {
    console.log('decrement');
    console.log(this.state)

    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }

  // renders on creation and on change
  render() {
    console.log('App state: ', this.state)

    return (
      <div className="App">
        <br />
        <Display count={this.state.count} />
        <CounterButton value='+' handleClick={this.incrementCount} />
        <CounterButton value='-' handleClick={this.decrementCount} />
      </div >
    );
  }
}

export default App;
