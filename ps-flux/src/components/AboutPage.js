import React from 'react';

// Function components are preferred over class components like this one. However, we may find
// a lot of class based components in applications built with earlier versions of React because
// those versions only supported class components.
// Here is a list of reasons why:
// 			1. They are easier to understand. They eliminate the extends keyword and the constructor.
// 			2. Avoid JavaScript's annoying quirks of the `this` keyword.
// 			3. Dumping classes eliminates the need for binding.
// 			4. Functional components transpile smaller than class components and produce less code.
// 			5. High signal-to-noise ratio - Functional components require less code. Great code maximizes the signal to noise ratio.
// 			6. Enhanced code completion and intellisense - If you destructure your props in a functional component then all the data that you use is now
// 			   specified as a simple function argument. This means you get improved code completion support
// 			   compared to class based components.
// 			7. Bloated components are obvious to spot - When you use destructuring in functional components your argument list clearly conveys
// 			   the components dependencies so it's easy to spot components that are too large and need attention.
// 			8. Easy to test - Since functional components are pure functions your assertions are very straight forward; given
// 			   these values for props I expect this markup.
// 			9. Improved performance - As of react 16 there's no instance created to wrap them.
// 			10. Classes may be removed in the future from React's core. With React Hooks, function
// 			    components can handle virtually all use cases.

class AboutPage extends React.Component {
  // render is the only required method for a react class
  render() {
    return (
      // Because adjacent JSX elements must be wrapped in an enclosing tag. We can wrap
      // wrap the elements below in a <div> but then the div will be rendered to the page and
      // we don't want that. instead <React.Fragment> allows us to wrap adjacent elements but React
      // won't render the extra wrapper element to the screen. Even better we can use an
      // empty tag <> which is the shorthand way to specify a fragment.
      <>
        <h2>About</h2>
        <p>This app uses React.</p>
      </>
    );
  }
}

export default AboutPage;
