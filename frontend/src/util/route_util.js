import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

// Route takes in a component, a path, props, and a redirect
// we take in props (inline and from msp/mdp)
// destructure props to set component we want to render in first half of turnary(not logged in),
// set path, set loggedIn bool, and set exact path (which we arent using right now)

// for auth route, if we are NOT logged in, we render component,
// and if we ARE logged in, we redirect to user-splash ("/")

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

// if we are logged in we render component passed in, if we are NOT,
// we redirect to login page

const Protected = ({ component: Component, loggedIn, ...rest}) => (
  <Route
    {...rest}
    render = {props =>
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/splash" />
      )
    }
  />
);

const msp = state => (
  {loggedIn: state.session.isAuthenticated}
);

// withRouter gives Auth component access to this.props.history
export const AuthRoute = withRouter(connect(msp)(Auth));

export const ProtectedRoute = withRouter(connect(msp)(Protected));