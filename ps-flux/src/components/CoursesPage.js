import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";

// Note that this component is simple. It's focused on state concerns.
// It makes an API call, populates state and passes that state down to the
// course list. This can be thought of as separation between smart components
// and dumb components.
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
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      {/* CourseList is the dumb component which does nothing but define some markup */}
      <CourseList courses={courses} />
    </>
  );
}

export default CoursesPage;
