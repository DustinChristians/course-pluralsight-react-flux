// ES import syntax. Native JavaScript imports were added to the language in 2015.
// This lines says import an NPM package named 'react' and store it in a variable
// called 'React'
import React from 'react';

// Using functional component instead of a class component.
// Function names should begin with a capital letter which is important for 2 reasons.
// 1. React components are instantiated and JavaScript classes and functions that create
//    an instance traditionally start with a capital letter.
// 2. React assumes that any elements in JSX that start with a capital letter are assumed to be
//    React components. Lowercase elements are assumed to be native HTML.
// Function components render whatever JSX we return.
function HomePage() {
  return (
    <div className='jumbotron'>
      <h1>Pluralsight Administration</h1>
      <p>React, Flux, and react Router for ultra-responsive web apps.</p>
      <a href='/about'>About</a>
    </div>
  );
}

// By default, everything in each file is private. That's because create React app is configured to use
// ES modules and everything in an ES module is private by default. So, we need to export the component
// so it can be used by other files. Traditionally, if only a single item is being exported, it is declared
// as the "default" export. The benefit of a default export is that it requires a little less code to
// import and the file doing the import can decide what to name that import.
export default HomePage;
