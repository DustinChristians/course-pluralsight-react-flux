// This component will decide which page to render. This component will look at the pathname in the
// URL to determine which component it should render.
import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

function App() {
  // window.location is built into all browsers
  const route = window.location.pathname;
  if (route === '/about') return <AboutPage />;
  return <HomePage />;
}

export default App;
