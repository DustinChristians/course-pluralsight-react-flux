import React, { useState, useEffect } from 'react';
import { getCourses } from '../api/courseApi';

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // We added an underscore onto the courses parameter so it doesn't conflict
    // with the courses variable in the state array above.
    getCourses().then(_courses => setCourses(_courses));
  }, []); // If we don't add the dependency array here, useEffect will rerun constantly.
  // So, in this case, we were calling getCourses when the component mounts/rerenders and ends up
  // calling setCourses which causes useEffect to run in an infinite loop. Each time getCourses and
  // setCourses is called the function renders again which causes useEffect ot make another API call.
  // If you add an empty array, like above, it tells React to run the effect only once.

  // Whatever we return from a function compnent is what is rendered so we don't need to use the
  // render() that we used from the class component.
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
        <tbody>
          {courses.map(course => {
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

export default CoursesPage;
