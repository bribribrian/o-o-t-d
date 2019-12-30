import React from 'react';
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import UserMainContainer from './main/user_main_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashContainer from './session/splash_container';


const App = () => (
  // <Switch>

  <div>
    <ProtectedRoute exact path="/" component={UserMainContainer} />
    <AuthRoute path="/splash" component={SplashContainer}/>
    {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
    <Route exact path="/splash" component={LoginFormContainer} />
    <Route exact path="/splash/signup" component={SignupFormContainer} />
  </div>

);

export default App;