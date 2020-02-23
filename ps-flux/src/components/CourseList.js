import React from 'react';
import PropTypes from 'prop-types';

// This is a dumb component which does nothing but define some markup. It does not change state.
// It receives an array of courses via props. This makes it easy to understand and test in
// isolation
function CourseList(props) {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map(course => {
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
  );
}

CourseList.propTypes = {
  // Tells React that a runtime error should be logged to the console if
  // the courses array was not passed into the component.
  // This check only happens during development for performance reasons.

  // This is the less specific way to declare that course is an array
  //courses: PropTypes.array.isRequired

  // To be more specific we can declare the shape of the array. Which
  // allows us tp specify the properties that are expected on each object
  // in the array. Now we are being more specific, stating that each object
  // in the array must have these properties otherwise we'll be notified in
  // the console.
  // We can also place this declaration in a separate file and imported so
  // it can be shared by multiple components.
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // You can omit the isRequired if the property is optional
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired
    })
  ).isRequired
};

export default CourseList;
