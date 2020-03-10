import React, { useState, useEffect } from 'react';
import courseStore from '../stores/courseStore';
import CourseList from './CourseList';
import { Link } from 'react-router-dom';
import { loadCourses } from '../actions/courseActions';

// Note that this component is simple. It's focused on state concerns.
// It makes an API call, populates state and passes that state down to the
// course list. This can be thought of as separation between smart components
// and dumb components.
function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());
  // Each time the page is loaded the courses state variable above will be initialized
  // to whatever list of courses are in the flux store

  useEffect(() => {
    // Accepts a function that it will call when the store changes
    courseStore.addChangeListener(onChange); // onChange is the function we created below

    if (courses.length === 0) {
      loadCourses();
    }
    // When you add a changeListener onMount (navigate to this page) you should also clean it up when
    // the component unMounts (navigate to another page). With useEffect, you declare the code to run on
    // unMount by returning a function.
    return () => courseStore.removeChangeListener(onChange); // onChange is the function we created below
  }, [courses.length]); // If we don't add the dependency array here, useEffect will rerun constantly.
  // So, in this case, we were calling getCourses when the component mounts/rerenders and ends up
  // calling setCourses which causes useEffect to run in an infinite loop. Each time getCourses and
  // setCourses is called the function renders again which causes useEffect ot make another API call.
  // If you add an empty array, like above, it tells React to run the effect only once.

  // When the courseStore changes we want to get the list of courses and update state. Since
  // the component is connected to the Flux store, when courses are added to the store, onChange
  // will be called.
  function onChange() {
    // Requests the courses from the store and then adds them to this component's state
    // using the setCourses method
    setCourses(courseStore.getCourses());
  }

  // Whatever we return from a function component is what is rendered so we don't need to use the
  // render() that we used from the class component.
  return (
    <>
      <h2>Courses</h2>
      <Link className='btn btn-primary' to='/course'>
        Add Course
      </Link>
      {/* CourseList is the dumb component which does nothing but define some markup */}
      <CourseList courses={courses} />
    </>
  );
}

export default CoursesPage;
