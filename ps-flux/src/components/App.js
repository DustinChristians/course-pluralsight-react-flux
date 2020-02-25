// This component will decide which page to render. This component will look at the pathname in the
// URL to determine which component it should render.
import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import CoursesPage from './CoursesPage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='container-fluid'>
      <Header />
      {/* The "exact" syntax here says that this route should only match
      if the URL is exactly "/". We need to do this or the "/courses" route
      will render the HomePage component and the CoursesPage component. */}
      <Route path='/' exact component={HomePage} />
      <Route path='/courses' component={CoursesPage} />
      <Route path='/about' component={AboutPage} />
    </div>
  );
}

export default App;
