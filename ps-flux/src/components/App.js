// This component will decide which page to render. This component will look at the pathname in the
// URL to determine which component it should render.
import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import CoursesPage from './CoursesPage';

function App() {
  function getPage() {
    // window.location is built into all browsers
    const route = window.location.pathname;
    if (route === '/courses') return <CoursesPage />;
    if (route === '/about') return <AboutPage />;
    return <HomePage />;
  }
  return (
    <div className='container-fluid'>
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
