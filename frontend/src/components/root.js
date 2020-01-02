import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './app';

const Root = (props) => (
  <Provider store={props.store}>
    <HashRouter>
      <App state={props.store.getState}/>
    </HashRouter>
  </Provider>
);

export default Root;