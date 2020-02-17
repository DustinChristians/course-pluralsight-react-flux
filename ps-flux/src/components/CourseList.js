import React from 'react';

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

export default CourseList;
