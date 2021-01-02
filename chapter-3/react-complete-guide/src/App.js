import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Colby', age: 25 },
      { name: 'Linnea', age: 27 },
      { name: 'Frodo', age: 6 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi I am Colby!</h1>
        <p>Is this p tag working?</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobby is Coding</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobby is Training</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I am Colby!'));
  }
}

export default App;
