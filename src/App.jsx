import { Fragment } from "react";
import { Route, Routes } from 'react-router-dom'
import ParentComponent from "./ParentComponent"
import MapComponent from "./MapComponent"
import EventComponent from "./EventComponent";
import FormComponent from "./FormComponent";
import './styles.css'
import FetchDataComponent from "./FetchDataComponent";

function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/parent" element={ <ParentComponent />} />
        <Route path="/map" element={ <MapComponent />} />
        <Route path="/event" element={ <EventComponent />} />
        <Route path="/fetch" element={ <FetchDataComponent />} />
        <Route path="/form" element={ <FormComponent />} />
        <Route path="*" element={ <Home />} />
      </Routes>
    </main>
  );
}

const Home = () => {
  const text = 'Hello World!';

  // Because the style attribute is an object, you can also separate the style by 
  // writing it as a constant. This way, you can reuse the style 
  // in other elements as needed:
  const pStyle = {
    fontSize: '16px',
    //color: 'blue',
  }

  const myElement = (
    <Fragment>
      <h1 className='text-lowercase' style={{ textAlign: 'center'}}>
        {text}
      </h1>
      <h2 style={pStyle}>Learning to code with React</h2>
       {/* Spread syntax "expands" an array into its elements */}
      <p className="paragraph-text"
        style={{ ...pStyle, textAlign: 'center'}}>
          It's fun.
      </p>
      <p style={{ ...pStyle, textAlign: 'right'}}>For Beginners.</p>
    </Fragment>);
  return myElement;
}


export default App;