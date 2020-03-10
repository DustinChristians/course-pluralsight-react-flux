import { EventEmitter } from 'events'; // Included with node so you don't need to install it
import Dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';
const CHANGE_EVENT = 'change';
let _courses = [];

// There should be 3 functions in every Flux store:
// 1. addChangeListener (wraps EventEmitter's 'on' method)
// 2. removeChangeListener (wraps EventEmitter's 'removeListener' method)
// 3. emitChange (wraps EventEmitter's 'emit' method)
class CourseStore extends EventEmitter {
  // This will allow React components to subscribe to
  // our store so they're notified when changes occur.
  // Whatever callback is passed is going to get called
  // anytime that things change in our store.
  addChangeListener(callBack) {
    this.on(CHANGE_EVENT, callBack);
  }

  // This will allow React components to unsubscribe from
  // the store
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCourses() {
    return _courses;
  }

  // Create any number of handy functions that return data from the
  // flux store that you like. You can think of these functions a bit like
  // views or stored procedures in a relational database that return a
  // specified subset of data.
  getCourseBySlug(slug) {
    return _courses.find(course => course.slug === slug);
  }
}

const store = new CourseStore(); // Instantiate the store

// The action gets called anytime any action is dispatched.
// Every single store is notified of every single action.
// We need some logic that switches based on the actionType that's
// being passed.
Dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.CREATE_COURSE:
      _courses.push(action.course);
      // Anytime the store changes we need to call emit change.
      // By emitting a change, any React components that have registered
      // with the store will be notified so they'll know that they
      // need to update the UI accordingly. More specifically, any stores
      // that ever called addChangeListener will then be notified anytime
      // that I call emit change.
      store.emitChange(); // always need to call emitChange
      break;
    case actionTypes.UPDATE_COURSE:
      _courses = _courses.map(course =>
        course.id === action.course.id ? action.course : course
      );
      store.emitChange(); // always need to call emitChange
      break;
    case actionTypes.LOAD_COURSES:
      _courses = action.courses;
      store.emitChange(); // always need to call emitChange
      break;
    // Every store's dispatcher receives every action, so if the store
    // isn't interested in that action, there's nothing to do.
    default:
  }
});

export default store;
