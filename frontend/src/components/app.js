import React from 'react';
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import { Route } from 'react-router-dom';

import DashboardContainer from './main/dashboard_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashContainer from './session/splash_container';


const App = (props) => (

  <div>
    <ProtectedRoute exact path="/" component={DashboardContainer} loggedIn={props.state().session.isAuthenticated}/>
    <AuthRoute path="/splash" component={SplashContainer} loggedIn={props.state().session.isAuthenticated}/>
    <Route exact path="/splash" component={LoginFormContainer} />
    <Route exact path="/splash/signup" component={SignupFormContainer} />
  </div>

);

export default App;