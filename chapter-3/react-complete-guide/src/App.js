import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props =>  {
  //stateful component
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Colby', age: 25 },
      { name: 'Linnea', age: 27 },
      { name: 'Frodo', age: 6 }
    ], 
  });

  switchNameHandler = (newName) => {
    this.setState({ 
      persons: [
        { name: 'Kyle', age: 26 },
        { name: 'Alex', age: 26 },
        { name: newName, age: 24 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({ 
      persons: [
        { name: 'Frodo', age: 6 },
        { name: event.target.value, age: 27 },
        { name: 'Brett', age: 25 }
      ]
    })
  }

  render () {
   return (
      <div className="App">
        <h1>Hi I am Colby!</h1>
        <p>Is this p tag working?</p>
        <button onClick={() => this.switchNameHandler('Hermon!!!')}>Switch Name</button>
        <Person
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}
          click={switchNameHandler.bind(this, 'Hermon')}>My Hobby is Coding
          changed={this.nameChangedHandler}</Person>
        <Person 
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}>My Hobby is Training</Person>
        <Person
          name={personsState.persons[2].name}
          age={personsState.persons[2].age}/>
      </div>
    ); 
  }
}

export default app;