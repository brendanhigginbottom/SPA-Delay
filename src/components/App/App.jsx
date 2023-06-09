import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage.jsx';
import UserPage from '../UserPage/UserPage.jsx';
import InfoPage from '../InfoPage/InfoPage.jsx';
import LandingPage from '../LandingPage/LandingPage.jsx';
import LoginPage from '../LoginPage/LoginPage.jsx';
import RegisterPage from '../RegisterPage/RegisterPage.jsx';
import MainView from '../MainView/MainView.jsx';
import UserPresets from '../UserPresets/UserPresets.jsx';
import SavePreset from '../UserPresets/SavePreset.jsx';
import CommunityPresets from '../CommunityPresets/CommunityPresets.jsx';


import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);
  // get presetValues reducer. If it has values, unregistered user clicked "Save Preset"
  // and will be directed to /savepreset. Otherwise, they click "login / register " and
  // are redirected to the delay.
  const isPreset = useSelector(store => store.presetValues);

  // conditionally routes unregistered user based on whether they went to nav bar
  // or tried to save preset while not logged in
  const presetOrNot = () => {
    if (user.id && Object.keys(isPreset).length === 0) {
      // If the user is already logged in, 
      // redirect them to the /main page
        return <Redirect to="/main" />
      } else if (user.id && Object.keys(isPreset).length > 0) {
        return <Redirect to="/savepreset" />
      } else {
        // Otherwise, show the registration page
        return <RegisterPage />
      }
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/main" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          <Route
            // Default shows MainView 
            exact
            path="/main"
          >
            <MainView />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows UserPresets else shows LoginPage
            exact
            path="/mypresets"
          >
            <UserPresets />

          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows SavePreset else shows LoginPage
            exact
            path="/savepreset"
          >
            <SavePreset />

          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows SavePreset else shows LoginPage
            exact
            path="/communitypresets"
          >
            <CommunityPresets />

          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >

            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {/* conditionally routes unregistered user based on whether they went to nav bar
            or tried to save preset while not logged in */}
            {presetOrNot()}
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
