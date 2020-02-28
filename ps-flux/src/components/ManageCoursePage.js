import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import Toast, { toast } from "react-toastify";

const ManageCoursePage = props => {
  const [errors, setErrors] = useState({});
  // This is array destructuring
  const [course, setCourse] = useState({
    // useState accepts a default value so it is being set to an empty course object
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  useEffect(() => {
    // from the path `/courses/:slug` in app.js.  We need to use the name `slug`
    // here because that is the name of the path parameter. If the path was
    // `/courses/:id` then we would use props.match.params.id here instead
    const slug = props.match.params.slug;
    if (slug) {
      // If there is a slug in the URL then make an API call to get the
      // course by that slug and set the course state variable to the
      // returned course using the setCourse method
      courseApi.getCourseBySlug(slug).then(_course => setCourse(_course));
    }
  }, [props.match.params.slug]); // <-- specifies that if the slug changes in the URL
  // then useEffect should re-run. Use-effect will re-run everytime react re-renders
  // so it's important to declare a dependency array because anytime any state or props
  // change useEffect will re-run and we only want this to happen if the dependencies
  // in the dependency array change

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

  function formIsValid() {
    // Storing objects as an object instead of an array makes referencing errors easier in
    // the form
    const _errors = {};

    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author is required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);
    // The form is vlaid if the errors object has no properties
    return Object.keys(_errors).length === 0;
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
    if (!formIsValid()) return;
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
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
