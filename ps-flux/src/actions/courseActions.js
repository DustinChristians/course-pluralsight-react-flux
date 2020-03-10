import dispatcher from '../appDispatcher';
import * as courseApi from '../api/courseApi'; // Wildcard import, so you don't have to maintain an ongoing list of imports
import actionTypes from './actionTypes';

// This entire function is the action creator.
export function saveCourse(course) {
  return courseApi.saveCourse(course).then(savedCourse => {
    // use a return here to return the result of the promise so the caller
    // will be notified when the promise resolves
    return dispatcher.dispatch({
      // dispatcher tells all the stores that a course was just created
      // Anything inside this object is called the action
      actionType: course.id
        ? actionTypes.UPDATE_COURSE
        : actionTypes.CREATE_COURSE, // actionType is the only required property
      course: savedCourse
    });
  });
}

export function loadCourses() {
  return courseApi.getCourses().then(courses => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses: courses
    });
  });
}
