import { useState } from 'react';

import React from 'react'

const FormComponent = () => {
    const [username, setUsername] = useState(); 
    const [usernameError, setUsernameError] = useState();

    // the handleSubmit() function will stop the default form submission
    // behavior, which will trigger a refresh, and then create an alert box
    // to display the username value.
    const handleSubmit = (e) => {
        e.preventDefault();
        if(usernameError) {
            alert('Unable to submit: Form contains errors');
        } else {
            alert(`Submitted Form username: ${username}`);
        }
    }
    
    const handleUsername = (event) => {
      const { value } = event.target;
      setUsername(value);

      // Validate username value:
      if (value.length <= 6) {
        setUsernameError('Username length must be more than 6 characters');
      } else {
        setUsernameError();
      }
    }
    

    return (
    <>
        <h1>Form Component</h1>
        <form onSubmit={handleSubmit}>
            Username:
            <input 
                type='text' 
                name='username' 
                value={username} 
                // onChange={event => setUsername(event.target.value)}
                onChange={handleUsername}/>
                
            <p>{usernameError}</p>
            <button>Submit</button>
        </form>
        {/* <h2>Type User name: {username}</h2> */}
    </>
  );
}

export default FormComponent;