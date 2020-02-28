import React, { useState } from "react";
import CourseForm from "./CourseForm";

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

  function handleTitleChange(event) {
    // Don't do this. Don't set state directly. Treat state as immutable.
    // course.title = event.target.title;

    // This copies the course object. We can also set the title at the same time
    // that we make the copy.
    const updatedCourse = { ...course, title: event.target.value };
    setCourse(updatedCourse);
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm course={course} onTitleChange={handleTitleChange} />
    </>
  );
};

export default ManageCoursePage;
