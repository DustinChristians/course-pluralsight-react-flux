import React from 'react';
import { getCourses } from '../api/courseApi';

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: []
    };
  }

  componentDidMount() {
    // Uses a fetch which has a promise based API. With a promise based API
    // you declare a .then function to handle the response. Promises are a way
    // to handle async calls and they're built in to JavaScript. Promises represent
    // a future value. That function that is declared within the `then()` will be
    // called when the API call is completed.

    // This is an example of an anonymous function that is passed into .then()
    //getCourses().then(function(courses) {
    // setState accepts an object that describes the new properties
    // that we'd like to set in state.

    // Note, that setState calls only update the properties that we
    // declare inside the call to set state. This call only sets
    // course data. If there were other data stored in state on this
    // component, it would be unaffected by this code.

    // What we want to do is set courses to the courses that we just
    // received so we specify an object inside the setState call and
    // set the courses property to the courses that we just received.
    //this.setState({ courses: courses });
    //});

    // This is an example of an arrow function that is passed into .then()
    // Usually there are parenthesis around the parameter before the arrow =>
    // but we don't need them if there is only one parameter.
    // Arrow functions provide a more concise syntax. With an arrow function
    // we can omit the function keyword as well as the parenthesis around
    // the argument when there's single parameter.
    // getCourses().then(courses => {
    //   this.setState({ courses: courses });
    // });

    // We can also omit the curly braces using whats known as the concise
    // arrow syntax. So this code now becomes a one liner.
    // This code says, get courses from the API. When the call completes,
    // store the array of courses in state.
    getCourses().then(courses => this.setState({ courses: courses }));
  }

  render() {
    return (
      <>
        <h2>Courses</h2>
        <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author ID</th>
              <th>Category</th>
            </tr>
          </thead>
          {/* A curly brace in JSX says I want to write some JS here */}
          <tbody>
            {/* Map returns a new array. So this code returns an array of rows */}
            {/* There are two benefits to using an arrow function here instead of an
            anonymous function. 
            1. Less code 
            2. No "this" binding issues */}
            {/* We could create a separate function to handle creating the course rows
            but it's a little more common to do it inline like it is here */}
            {this.state.courses.map(course => {
              return (
                <tr key={course.id}>
                  <td>{course.title}</td>
                  <td>{course.authorId}</td>
                  <td>{course.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default CoursesPage;
