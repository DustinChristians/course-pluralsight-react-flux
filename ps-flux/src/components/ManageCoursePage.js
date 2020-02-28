import React, { useState } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import Toast, { toast } from "react-toastify";

const ManageCoursePage = props => {
  // This is array destructuring
  const [course, setCourse] = useState({
    // useState accepts a default value so it is being set to an empty course object
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  function handleChange(event) {
    // Don't do this. Don't set state directly. Treat state as immutable.
    // Use the setter method instead
    // course.title = event.target.title;

    // This copies the course object. We can also set the title at the same time
    // that we make the copy.
    // const updatedCourse = { ...course, title: event.target.value };
    // setCourse(updatedCourse);

    // This is a better way to handle all changes to a form at once
    // that uses the "name" attribute of an input to determine the property
    // that has changed. The convention is that the "name" attribute in the form
    // should match the property name in the state onject.
    const updatedCourse = {
      ...course,
      [event.target.name]: event.target.value
    };
    setCourse(updatedCourse);
  }

  // The above method could be written like this, using destructuring
  // to pull target off of event.
  // function handleChange({ target }) {
  //   setCourse({
  //     ...course,
  //     [target.name]: target.value
  //   });
  // }

  function handleSubmit(event) {
    event.preventDefault();
    courseApi.saveCourse(course).then(() => {
      // Redirects to the courses page after the course has been saved
      props.history.push("/courses");
      toast.success("Course saved");
    });
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
