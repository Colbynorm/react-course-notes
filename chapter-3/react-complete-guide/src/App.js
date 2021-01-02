import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I am Colby!</h1>
        <p>Is this p tag working?</p>
        <Person />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I am Colby!'));
  }
}

export default App;
