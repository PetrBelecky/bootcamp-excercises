import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    // controls the state of class
    // initial value of state is blank
    this.state = {
      formValues: {
        name: 'Name',
        email: 'e-mail@email.com',
        password: '1234',
      }
    }
  }

  // when called
  // it will get value of input (in event)
  // it will set state of class
  updateInput = (fieldName) => {

    // e is by default accessible
    // since function is called by input onChange attribute
    return (e) => {

      // save value of value
      const newValue = e.target.value

      // in order to change state, I need function
      // first argument is previous state
      this.setState((previousState) => {
        return {

          // spread previous state
          ...previousState,

          // overwrites the data from Previous State
          formValues: {

            // since I overwrite old values, I should spread them again
            ...previousState.formValues,
            // change form Values
            // with name of passed argument
            // with value of event
            [fieldName]: newValue
          }
        }
      })
    }
  }

  // render of component
  render() {
    return (
      <div className="App">
        Start Here
        <br />

        {/* include props (arguments to function = which is component) */}
        <MyForm
          name={this.state.formValues.name}
          email={this.state.formValues.email}
          password={this.state.formValues.password}
          updateInput={this.updateInput}
        />
      </div >
    );
  }
}

export default App;

class MyForm extends Component {
  render() {

    // component recieves props from render method

    // same as
    // const {name, email, password, updateInput} = this.props;
    const name = this.props.name;
    const email = this.props.email;
    const password = this.props.password;
    const updateInput = this.props.updateInput;

    // input recieved props as arguments
    // return the result 
    return (
      <form action="">
        <input
          type="text"
          value={name}
          onChange={updateInput('name')}
        />

        <br />

        <input
          type="email"
          value={email}
          onChange={updateInput('email')}
        />

        <br />

        <input
          type="password"
          value={password}
          onChange={updateInput('password')}
        />
      </form>
    )
  }
}
