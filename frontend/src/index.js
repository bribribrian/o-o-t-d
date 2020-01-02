import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


import Root from './components/root.js';

import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';

// Stylesheets //
import './index.css';
import './style/reset.css';
import './style/main.css';
import './style/splash.css';
import './style/dashboard.css';
import './style/navbar.css';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  // if we have a jwtToken, this means we have an encoded user object
  // in localStorage. This means a user is authenticated, and we should
  // create a pls to match this and
  if(localStorage.jwtToken){

    // set common header for axios requests
    setAuthToken(localStorage.jwtToken);

    // decoded jwtToken will be equal to user object
    const decodedUser = jwt_decode(localStorage.jwtToken);

    const preloadedState = {
      session: {
        isAuthenticated: true,
        user: decodedUser
      }
    };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    // *** still need to make logout/login actions
    if(decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
  }
  else{
    store = configureStore({});
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);

  window.axios = axios;
  window.state = store.getState;

});

