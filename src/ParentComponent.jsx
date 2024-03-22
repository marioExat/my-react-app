import { useState } from "react";

export default function ParentComponent() {
    // John is the inital state value before
    // name holds the state value, setName allows to change the state value
    const [name, setName] = useState('John');

    const[user, setUser] = useState(false);
    return (
        <>  
        {/* pass a prop from ParentComponent into ChildComponent 
        by adding a new attribute after the component name. 
        You can pass as many props as you want into a single child component*/}
            <ChildComponent 
                name={name} 
                setName={setName}
                //  if you pass anything other than a string as a prop value, 
                // you need to put the value in curly brackets
                age={29}
                hobbies={["read books", "drink coffee"]}
                occupation="Software Engineer"
                // passing a function into props
                userComponent={UserComponent}/>
            {/* <UserComponent /> */}
            <ProfileComponent 
                user={user}
                setUser={setUser}
            />
            <FeedComponent />
            <h1 style={{color: 'red'}}>Hello {name}</h1>
            {/* button that will change the value of name when you click it */}
            <button onClick={() => setName('Mark')}>Change Name</button>
        </>
    );
}

function ChildComponent(props) {
    let { age, occupation, hobbies } = props;
    return (
        <>
            <h1>In Child Component</h1>
            <p>Hello World! my name is {props.name} and 
            my age is {age} and 
            my occupation is {occupation}
            and my hobbies are</p>
            <ol>
                {hobbies.map((hobby, index) => 
                    <li key={index}>
                        {hobby}
                    </li>)}
            </ol> 
            {/* Changing state from child component */}
            <button onClick={() => props.setName('Luke')}>Change Name</button>
            {/* using a passed function/component from props */}
            {props.userComponent()}
        </>
    );
}

function UserComponent() {
    return <h1> User Component </h1>;
}

function ProfileComponent(props) {
    const { user, setUser } = props;

    // Conditional Rendering using  a ternary operator
    let buttonText = user ? <h3>Login</h3> : <h3>Logout</h3>;

    // Partial conditional rendering using a variable
    // to switch between rendering the login and logout buttons, 
    // depending on the availability of the user state:
    let button = <button onClick={() => setUser(true)}>{buttonText}</button>
    if (user) {
        button = <button onClick={() => setUser(false)}>{buttonText}</button>
    }
    
    return (
        <>
            <h1>Hello there!</h1>
            {button}
        </>
    )
}

function FeedComponent() {
    const newEmails = 2;

    return (
        <>
            <h1> Feed Component</h1>
            {/* Inline Contitional Rendering Example */}
            {newEmails > 0 &&
            <h2>
                You have {newEmails} new emails in your inbox.
            </h2>}
        </>);
        
}