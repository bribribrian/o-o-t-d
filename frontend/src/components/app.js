import React from 'react';
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import UserMainContainer from './main/user_main_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';


const App = () => (
  <Switch>
    <ProtectedRoute exact path="/" component={UserMainContainer} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </Switch>
);

export default App;