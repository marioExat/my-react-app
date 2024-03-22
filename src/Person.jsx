import React, { Component, useState } from 'react';

class Person extends React.Component {
    // We define a constructor method that accepts props as input. 
    // Inside the constructor, we call super() to pass down whatever 
    // is being inherited from the parent class. 
    constructor(props) {
        super(props);
        this.state = {
            myState: true,
            // count: 0
        }
    }

    render() {
        return (
            <div>
                <h1>Class Component</h1>
                <h2>Hello {this.props.name}</h2>
                {/* Use the below to update state in events */}
                {/* {this.setState((prevState) => ({myState: !myState}))} */}
                {/* {this.setState({count: count + 1})} */}
            </div>
        );
    }
}

export default Person;
