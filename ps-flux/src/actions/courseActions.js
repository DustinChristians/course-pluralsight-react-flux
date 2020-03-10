import dispatcher from '../appDispatcher';
import * as courseApi from '../api/courseApi'; // Wildcard import, so you don't have to maintain an ongoing list of imports
import actionTypes from './actionTypes';

// This entire function is the action creator.
export function saveCourse(course) {
  return courseApi.saveCourse(course).then(savedCourse => {
    // use a return here to return the result fo the promise so that the caller
    // will be notified when the promise resolves
    return dispatcher.dispatch({
      // dispatcher tells all the stores that a course was just created
      // Anything inside this object is called the action
      actionType: actionTypes.CREATE_COURSE, // This is the only required property
      course: savedCourse
    });
  });
}
