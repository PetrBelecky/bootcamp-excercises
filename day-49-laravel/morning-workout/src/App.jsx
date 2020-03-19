import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    // controls the state of class
    // state is an object
    this.state = {
      grid: [
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', '']
      ],
      player: 1
    }
  }

  changeSquare = (e) => {

    if (!e.target.textContent) {

      // create a copy of state variables we can modify
      // remember we can't modify state directly!
      let newGrid = this.state.grid;
      let newPlayer = this.state.player;

      // save row and column
      let row = e.target.getAttribute('data-row');
      let column = e.target.getAttribute('data-column');

      // save X to target position of variable
      // change player variable
      if (this.state.player === 1) {
        newGrid[row][column] = 'X';
        newPlayer = 2;

        // save Y to target position  
        // change player variable
      } else if (this.state.player === 2) {
        newGrid[row][column] = 'O';
        newPlayer = 1;
      }

      // store new values to state of component
      this.setState({
        grid: newGrid,
        player: newPlayer
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="board">
          {
            this.state.grid.map((row, i) => (
              row.map((cell, j) => (
                <div

                  // save the position
                  data-row={i}
                  data-column={j}

                  // add click handle
                  onClick={this.changeSquare}
                >
                  {cell}
                </div>
              ))
            ))
          }
        </div>
      </div >
    );
  }
}

export default App;
