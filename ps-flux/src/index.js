// This is the application's entry point. create-react-app looks at the index.js imports to
// determine what files are in the application.

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// using a named import for react-dom and we will import the render function. Named imports
// are a handy way to get a reference to a function inside the element that we're importing.
// So this creates a const called render that references react-dom's render function.
// This is equivalent to:
//      import ReactDOM from 'react-dom'
//      const render = ReactDOM.render;
// The render function is what will render the application.
import { render } from 'react-dom';
// We want to render the HomePage so we'll import that as well
import App from './components/App';

// Render accepts two arguments, the component we want to render and the DOM element
// where we want to place our application. To determine where we want to render we can
// open up index.html where we'll find a div with an id of "root" which is where we'll
// mount the application.
// JSX supports self-closing tags like HTML
render(<App />, document.getElementById('root'));
