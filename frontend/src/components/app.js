import React from 'react';
import { AuthRoute, ProtectedRoute} from '../util/route_util';
// import { Route } from 'react-router-dom';

import DashboardContainer from './main/dashboard_container';

import SplashContainer from './session/splash_container';

// let showPath = '/collections/:_id';

const App = (props) => (

  <div>
    <ProtectedRoute path="/" component={DashboardContainer} loggedIn={props.state().session.isAuthenticated}/>
    <AuthRoute path="/splash" component={SplashContainer} loggedIn={props.state().session.isAuthenticated}/>
    <AuthRoute path="/login" component={SplashContainer} loggedIn={props.state().session.isAuthenticated}/>
    {/* <Route exact path="/item-creation" component={SimpleItemFormContainer}/> */}
    {/* <Route exact path="/collection-creation" component={CollectionCreateFormContainer} /> */}
  </div>

);

export default App;