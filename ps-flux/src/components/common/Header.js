import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const activeStyle = { color: 'orange' };
  return (
    <nav>
      {/* The "exact" syntax here says that this NavLink path should only match
      if the URL is exactly "/". We need to do this or the "/courses" and "/about" route
      will also have the activeStyle. */}
      <NavLink activeStyle={activeStyle} exact to='/'>
        Home
      </NavLink>
      {' | '}
      <NavLink activeStyle={activeStyle} to='/courses'>
        Courses
      </NavLink>
      {' | '}
      <NavLink activeStyle={activeStyle} to='/about'>
        About
      </NavLink>
    </nav>
  );
}

export default Header;
