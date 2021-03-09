import React from 'react';

//stateless component
const person = (props) => {
    return (
    <div>
        <h1 onClick={props.click}>I am {props.name} and I am {props.age} years old!</h1>
        <h3>{props.children}</h3>
        <input type="text" onChange={props.change}></input>
    </div>
    )
};

export default person;