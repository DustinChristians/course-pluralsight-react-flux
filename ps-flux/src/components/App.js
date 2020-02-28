// This component will decide which page to render. This component will look at the pathname in the
// URL to determine which component it should render.
import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      {/* When using a boolean as a prop to a component we don't need to set it true,
      because the existence of the property ensures truthiness */}
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      {/* The "exact" syntax here says that this route should only match
      if the URL is exactly "/". We need to do this or the "/courses" route
      will render the HomePage component and the CoursesPage component. */}
      <Switch>
        {/* First route found is used because of the Switch */}
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        {/* This route needs to be placed beneath the route above it or it will never get hit.
            In a switch the more specific route should be listed first. */}
        <Route path="/course" component={ManageCoursePage} />
        {/* This will redirect the user to the /about page when they request /about-page */}
        <Redirect from="/about-page" to="/about" />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
