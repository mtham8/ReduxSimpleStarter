// react creates multiple components
// a component is a js function that produces html
import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyCdWcWxdO0zUOZP5Hd7cQkWhOrP3C8Usmw';

// create a new component. This component should produce some HTML
// const app = function () {}
const App = () => {
  // const is ES6 syntax -- declares a variable with a final value -- not going to reassign app
  return <div>Hello world!</div>;
}

// take this component's generated html and put it on
// the page (in the DOM)
// when you're creating a component, you're creating a class of a component
// you want to pass in an instance of a component in .render()
// wrap your component in jsx tags when render
ReactDOM.render(<App />, document.querySelector('.container'));
// a component is a function/object that returns HTML

