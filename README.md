# React + Vite

[Learn React – A Handbook for Beginners - FCC Tutorial Link](https://www.freecodecamp.org/news/react-for-beginners-handbook/)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Chapter 1: Introduction

React advantages
- DOM manipulation is an expensive operation and should be minimized


Vite (pronounced 'veet') is a build tool that you can use to bootstrap a new React project. Inside the 'beginning_react' folder, you need to run the following command to create a new React project with Vite:

`npm create vite@5.1.0 my-react-app -- --template react`

To run the app do `npm run dev`

## Chapter 2: How to create react components

What you write inside a component will determine what should appear on the browser screen at a given time.

When you want a component to render nothing, you can return a null or false instead of an element.

```jsx
function App() {
  return null
  // return false
}
```

All React javascript components are saved under the .jsx file extension. JSX is an extension of JavaScript that produces JavaScript-powered HTML elements.

### How to return multiple elements with fragments

A component must always return a single element. When you need to return multiple elements, you need to wrap all of them in a single element like a `<div>`

But this will make your application render one extra `<div>` element in the browser. To avoid cluttering your application, you can render an empty tag <> like this.

The empty tag above is a React feature called a Fragment. By using a Fragment, your component won't render an extra element to the screen.

You can also import the Fragment module from React to make it explicit.

But you don't need to explicitly state the Fragment tag. Using an empty tag <> is enough.

### How to Render to the Screen

### How to write comments in react
You can use the double forward slash syntax `//` to comment any single line of code.

When you want to comment multiple lines of code you need to use the curly brackets, forward slash, and asterisk format `{/* comment here */}` as shown below:

```jsx
function App() {
    return (
        <>
        <h1>Hello World</h1>
        {/* <h2>Learning to code with React</h2>*/}
        </>
    )
}
```

You don't need to rememeber the comment syntax, you can do it using the VS code shortcut `CTRL + /` or `Command + /` for mac after selecting the line/lines.

### How to compose multiple components as one

applications built using React can be composed of tens or hundreds of components.

Composing components is the process of forming the user interface by using loosely coupled components. 

```jsx
export default function ParentComponent() {
    return (
        <>
            <UserComponent />
            <ProfileComponent />
            <FeedComponent />
        </>
    );
}

function UserComponent() {
    return <h1> User Component </h1>;
}

function ProfileComponent() {
    return <h1> Profile Component </h1>;
}

function FeedComponent() {
    return <h1> Feed Component</h1>
}
```

The composition of many components will form a single tree of React components in a top-down approach.

The tree will then be rendered into the DOM through the ReactDOM.render() method:

![Tree of React Components](https://www.freecodecamp.org/news/content/images/2024/02/2-react-tree.png)

By composing multiple components, you can split the user interface into independent, reusable pieces, and develop each piece in isolation.

## Chapter 3: Making Sense of JSX

a component must always have a return statement that contains elements to render on the screen.

```
function App() {
    return <h1>Hello World</h1>
}
```

The tag <h1> looks like a regular HTML tag, but it's actually a special template language included in React called JSX.

JSX is a syntax extension that produces JavaScript powered HTML elements. It can be assigned to JavaScript variables and can be returned from function calls. For example:

```jsx
function App() {
    const myElement = <h1>Hello World</h1>
    return myElemnt; 
}
```

Because of JSX, you can also embed JavaScript expressions inside an element by using curly brackets {}:

```
const lowercaseClass = 'text-lowercase';
const text = 'Hello World!';
const App = <h1 className={lowercaseClass}>{text}</h1>; 
```

This is what makes React elements different from HTML elements. You can't embed JavaScript directly by using curly braces in HTML.

### How to render a list using JSX

React will trigger an error in the console, saying that you need to put a "key" prop in each child of a list (the element that you return from map() function):

A prop (short for property) is an input that you can pass to a component when rendering that component. 

The key prop is a special prop that React will use to determine which child element has been changed, added, or removed from the list.

You won't use it actively in any part of your array rendering code, but React will ask for one when you render a list.

It is recommended that you put the unique identifier of your data as the key value.

When you don't have any unique identifiers for your list, you can use the array index value as the last resort:

```
users.map(function(user, index){
    return (
        <li key={index}>
            {user.name} as the {user.role}
        </li>
    )
})
```

### How to Add the Class Attribute

You can add the class attribute to your elements by using the className keyword:

```jsx
function App() {
  return <h1 className='text-lowercase'>Hello World!</h1>
}
```

Adding className prop to a JSX Element
The keyword class is reserved for JavaScript classes, so you need to use className instead.

## Chapter 4: Props and States

Props and states are used to pass data inside React components. Props (or properties) are inputs passed down from a parent component to its child component.

On the other hand, states are variables defined and managed inside the components.

The props parameter will always be an object, and any prop you define when rendering the component will be passed as a property to the object.

### How to pass down multiple props

You can pass as many props as you want into a single child component.

You can even pass a function into props

Note that if you pass anything other than a string as a prop value, you need to put the value in curly brackets (numbers, functions, arrays, objects, and so on)

This is because JavaScript expressions can't be processed by JSX unless you put the expression inside curly brackets.

### Props in Immutable

Immutable means that a prop's value can't be changed no matter what happens.

What error will the below piece of code throw?
```jsx
function ChildComponent(props){
  props.name = 'Mark';
  return <p>Hello World! my name is {props.name}</p>
}

function ParentComponent() {
  return <ChildComponent name='John'/>
}

export default ParentComponent
```
??
`Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'`

React props can't be changed once you declare them. But what if your data needs to change as a user interacts with your application? This is where state comes to the rescue.

### State in React

In React, states are arbitrary data that you can declare and manage in your components. To create a state in React, you need to call the useState hook as shown below:
```jsx
import { useState } from 'react'

function ParentComponent() {
  const [name, setName] = useState('John')

}
export default ParentComponent
```

In React, hooks are functions that allow you to tap into the features provided by React. The useState hook is a function that enables you to put value into the state mechanism.

When calling the useState() function, you can pass an argument that will serve as the initial value of the state. The function then returns an array with two elements.

The first element holds the state value, and the second element is a function that allows you to change the state value. You need to use the destructuring array syntax to receive both elements as shown above

You can give any names to the variables returned by useState, but it's recommended to use [something, setSomething].

If you want to change the value of the name variable, you need to use the provided setName() function.

But you can't call setName() in the component's body, because React will refresh itself anytime you change the state value.

### How to pass state to a child component

You can pass the state into any child component. When you need to update the state from a child component, you need to pass the setSomething function received from the useState hook.

### How to use React DevTools to Inspect States and Props

one can inspect the state and props of React components using the react developer tools. Click the Components tab, and inspect one of the two components we created earlier.

When you click on the button/perform event, the state value will change accordingly. You can inspect the ChildComponent to view its details.
You can also inspect the props, hooks, rendering tree.

## Chapter 5: React Conditional Rendering

You can control what output is being rendered by a component by implementing conditional rendering in your JSX code.

### Partial Rendering with a Regular Variable

Instead of writing two return statements, you store the dynamic UI element inside a variable and use that variable in the return statement.

This way, you can have a component that has static and dynamic elements.

### Inline Rendering with the && Operator
It's possible to render a component only if a certain condition is met and render null otherwise.

For example, let's say you want to render a dynamic message for users when they have new emails in their inbox:

### Inline Rendering with the Conditional(Ternary) Operator

It's also possible to use a ternary operator in order to render the UI dynamically.


## Chapter 6: How to Handle User Events

Under the hood, React has an internal event handler that connects to the native DOM event.

When you call a function in response to events, the event object will be passed to the callback function as follows:

When you click on the button above, the event variable will be logged as a SyntheticBaseEvent object in your console:

![Event console](https://www.freecodecamp.org/news/content/images/2024/02/8-react-synthetic-event.png)

The SyntheticBaseEvent object is a built-in React object used to interact with the native DOM events. Different browsers have different implementations of the DOM event object, so the SyntheticBaseEvent makes React compatible with these browsers.

Whenever a DOM event is triggered, that synthetic event will be handled by React so that you can decide what to do with that event.

The use case for this Synthetic event is the same as the native DOM event. Three of the most common event handlers you're going to use are:

onChange
onClick
onSubmit

You can respond to user interactions like clicking, hovering, focusing or typing on a form input, submitting a form, and so on.

## Chapter 7: CSS In React

There are 4 common ways you can add CSS in a React application:

Inline styling
CSS files
CSS modules
Tailwind CSS

### React Inline Styling

The only difference with JSX and html is that in jsx inline styles must be written as an object instead of a string like below

```jsx
function App() {
    <h1 style={{ color: 'red'}}>Hello World</h1>
}
```

In the style attribute above, the first set of curly brackets is used to write JavaScript expressions. The second set of curly brackets initializes a JavaScript object.

Style property names that have more than one word are written in camelCase instead of using the traditional hyphenated style. For example, the usual text-align property is written as textAlign in JSX:

```jsx
function App() {
    return (
        <h1 style={{ textAlign: 'center'}}></h1>
    );
}
```

Because the style attribute is an object, you can also separate the style by writing it as a constant. This way, you can reuse the style in other elements as needed:

```
const pStyle = {
  fontSize: '16px',
  color: 'blue'
}

export default function App() {
  return (
    <>
      <p style={pStyle}>Hello World!</p>
      <p style={pStyle}>The weather is sunny today.</p>
    </>
  )
}
```

If you need to extend your paragraph style further down the line, you can use the spread operator.

This will let you add inline styles to your already declared style object. See the `<p>` element below:

```jsx
const pStyle = {
    fontSize: '16px',
    color: 'blue'
}

export default function App() {
    return (
        <p style={{...pStyle, color: 'green', textAlign: 'right' }}>
            When you go to work, bring your umbrella with you!
        </p>
    );
}
```

Spread syntax can be used when all elements from an object or array need to be included in a new array or object, or should be applied one-by-one in a function call's arguments list. There are three distinct places that accept the spread syntax:

Function arguments list (myFunction(a, ...iterableObj, b))
Array literals ([1, ...iterableObj, '4', 'five', 6])
Object literals ({ ...obj, key: 'value' })

One of the benefits of using the inline style approach is that you will have a simple component-focused styling technique. When using an object for styling, you can extend your style by spreading the object. Though this is not recommended for big projects.

The limitation with inline style is
- You can't specify pseudo classes using inline styles. That means you can't define rules like :hover, :focus, :active, and so on.
- Also, you can't specify media queries for responsive styling.

### CSS Files

Vite already knows how to handle a .css file, so all you need to do is import the CSS file into your JSX file and add the right className prop to your component.

Let's create a style.css file in your project folder with the following content:

/* style.css */
.paragraph-text {
  font-size: 16px;
  color: #ff0000;
}
Plain CSS File
Now, let's import the CSS file into the App.jsx file and add the class prop to the component:

import './style.css';

function App() {
  return (
      <p className="paragraph-text">
        The weather is sunny today.
      </p>
  );
}
Importing CSS File to React Component
This way, the CSS will be separated from your JavaScript files, and you can just write CSS syntax as usual.

You can even include a CSS framework such as Bootstrap in React with this approach. All you need to do is import the CSS file in your root component.

This method will enable you to use all CSS features, including pseudo classes and media queries.

### CSS Modules

A CSS module is a regular CSS file with all of its class and animation names scoped locally by default.

When applying this method, each React component will have its own CSS file, and you need to import that CSS file into your component.

To let React know you're using CSS modules, name your CSS file using the [name].module.css convention.

```jsx
/* App.module.css */
.BlueParagraph {
  color: blue;
  text-align: left;
}
.GreenParagraph {
  color: green;
  text-align: right;
}
```

Then import it to your component file:

```jsx
import styles from "./App.module.css";

function App() {
  return (
    <>
      <p className={styles.BlueParagraph}>
        The weather is sunny today.
      </p>
      <p className={styles.GreenParagraph}>
        Still, don't forget to bring your umbrella!
      </p>
    </>
  )
} 
```

When you build your app, Vite will automatically look for CSS files that have the .module.css name and process the class names to a new localized name.

Using CSS Modules ensures that your CSS classes are scoped locally, preventing CSS rules from colliding with each other.

Another advantage of using CSS Modules is that you can compose a new class by inheriting from other classes that you've written. This way, you'll be able to reuse CSS code that you've written previously, like this:

```css
.MediumParagraph {
  font-size: 20px;
}
.BlueParagraph {
  composes: MediumParagraph;
  color: blue;
  text-align: left;
}
.GreenParagraph {
  composes: MediumParagraph;
  color: green;
  text-align: right;
}
```

### Tailwind CSS

Tailwind CSS is a modern utility-first CSS framework that allows you to style elements by combining a bunch of classes together.

CSS frameworks like Bootstrap and Bulma provide you with high-level components that you can immediately use in your project. When you need to style a button, you just need to apply the classes that contain the desired CSS properties:

```jsx
<button className="btn btn-primary">Subscribe</button>`
```
Bootstrap CSS Example

When using Bootstrap, the btn class provides a combination of CSS properties such as padding, color, opacity, font weight, and so on.

On the other hand, Tailwind gives you utility classes where each class has only one or two properties:

```jsx
<button className='px-5 py-2 text-white bg-blue-500 border-2'>
  Subscribe
</button>
```
Tailwind CSS Example

In the example above, the px-5 is short for padding padding-left and padding-right, while 5 is a specific size for the paddings. The text-white applies color: white, the bg-blue-500 applies the background-color property, and border applies border-width.

[Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)

### Which one should you use
Remember: Always use only one way to style React components in a specific project to avoid confusion.

## Chapter 8: How to Build Forms in React
One of the most common interfaces you're going to build as a web developer is a form. In React, you can create a form by using state as the single source of that form's data.

### How to handle form input
### How to handle form submission

### How to Handle Form Validation
To handle form validation, you need to create another state that will store the error message. You can name this state usernameError

A form can be as complex or as simple as required, but you'll use the pattern you see here no matter what form you build:

State values are used as the source of form data and validation
onChange prop as a way to update the state
Validations are triggered by user inputs
A handleSubmit() function is executed when the form is submitted

## Chapter 9: Network Requests in React
Modern web applications tend to have a modular architecture, where the back end is separated from the front end. The front end app will need to send an HTTP network request to a remote endpoint.

React doesn't tell you how you should send network requests. The library only focuses on rendering UI with data management using props and states.

To fetch data using React, you can use any valid JavaScript library like Axios, Superagent, and even the native Fetch API.

### The useEffect Hook

When you create a React application that needs to synchronize with a system outside of React, you need to use the useEffect hook.

This hook allows you to run some code after rendering so that you can synchronize your component with some system outside of React.

When the hook has finished performing the data request, you can set the response into your component states and render the appropriate components based on the state values.

The useEffect hook itself is a function that accepts two arguments:

A callback function to run on every render
An array of state variables to watch for changes. useEffect will be skipped if none of the variables are updated.
When you want to run useEffect only once, you can pass an empty array as the second argument to the function, as shown in the example above.

By using the useEffect hook, React can send HTTP requests and fetch data from any external system, then store that data in the component state.

Note: Always start component names with a capital letter.

React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.


## Class Components

Class components should always call the base constructor with props.
As a best practice, I will recommend using the constructor for all class components.

Also, if you're using a constructor, you need to call super(). This is not optional, and you will get the syntax error "Missing super() call in constructor" otherwise. 

And my last point is about the use of super() vs. super(props). super(props) should be used if you're going to call this.props inside the constructor. Otherwise, using super() alone is sufficient.

## Stateful Components vs. Stateless Components
## Container Components vs. Presentational Components

Presentational Components
Presentational components are coupled with the view or how things look. These components accept props from their container counterpart and render them. Everything that has to do with describing the UI should go here. 

Presentational components are reusable and should stay decoupled from the behavioral layer. A presentational component receives the data and callbacks exclusively via props, and when an event occurs, like a button being pressed, it performs a callback to the container component via props to invoke an event handling method. 

Functional components should be your first choice for writing presentational components. If a presentational component requires a state, it should be concerned with the UI state and not actual data. The presentational component doesn't interact with the Redux store or make API calls. 

Container Components
Container components will deal with the behavioral part. A container component tells the presentational component what should be rendered using props. It shouldn't contain limited DOM markups and styles. If you're using Redux, a container component contains the code that dispatches an action to a store. Alternatively, this is the place where you should place your API calls and store the result into the component's state. 

The usual structure is that there is a container component at the top that passes down the data to its child presentational components as props. This works for smaller projects; however, when the project gets bigger and you have a lot of intermediate components that just accept props and pass them on to child components, this will get nasty and hard to maintain. When this happens, it's better to create a container component unique to the leaf component, and this will ease the burden on the intermediate components.

## To Read
1. DOM Events in general and in react
2. [Meet Material-UI — your new favorite user interface library + yarn](https://www.freecodecamp.org/news/meet-your-material-ui-your-new-favorite-user-interface-library-6349a1c88a8c/)
3. [How to Build Reusable React Components](https://www.freecodecamp.org/news/how-to-build-reusable-react-components/)
4. [How to write highly readable React code — 10 coding style tips](https://www.freecodecamp.org/news/10-points-to-remember-thatll-help-you-master-coding-in-reactjs-library-d0520d8c73d8/)
    https://www.freecodecamp.org/news/how-the-golden-rule-of-react-components-can-help-you-write-better-code-127046b478eb/

5. Structuring React Code
    https://www.freecodecamp.org/news/how-to-structure-your-project-and-manage-static-resources-in-react-native-6f4cfc947d92/
    https://www.freecodecamp.org/news/a-better-way-to-structure-react-projects/
    https://www.freecodecamp.org/news/best-file-structure-for-react-components/

6. [Where to Hold React Component Data: state, store, static, and this](https://www.freecodecamp.org/news/where-do-i-belong-a-guide-to-saving-react-component-data-in-state-store-static-and-this-c49b335e2a00/)

7.  Reusable Components in React
    https://www.freecodecamp.org/news/how-to-create-a-truly-reusable-react-component-from-scratch/
    https://www.freecodecamp.org/news/how-to-build-reusable-components-with-props-in-react/
    https://www.freecodecamp.org/news/how-to-build-reusable-react-components/

8. [How to use the spread operator (...) in React](https://scrimba.com/articles/react-spread-operator/)

9. [Axios React – How to Make Get, Post, and Delete API Requests](https://www.freecodecamp.org/news/axios-react-how-to-make-get-post-and-delete-api-requests/)

10. [How To Use Axios With React: The Definitive Guide (2021)](https://www.freecodecamp.org/news/how-to-use-axios-with-react/)

11. [React Testing: How to test React components?](https://www.browserstack.com/guide/react-testing-tutorial)

12. [Functional Components vs Class Components in React](https://www.freecodecamp.org/news/functional-components-vs-class-components-in-react/)

13. [JSX In Depth](https://legacy.reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized)

14. [https://www.freecodecamp.org/news/a-complete-beginners-guide-to-react-router-include-router-hooks/](https://www.freecodecamp.org/news/a-complete-beginners-guide-to-react-router-include-router-hooks/)

15. [https://www.freecodecamp.org/news/react-router-in-5-minutes/](Learn React Router in 5 Minutes - A Beginner's Tutorial)

16. [https://www.freecodecamp.org/news/how-to-use-react-router-version-6/](https://www.freecodecamp.org/news/how-to-use-react-router-version-6/)

17. [The React Router Cheatsheet – Everything You Need to Know](https://www.freecodecamp.org/news/react-router-cheatsheet/)