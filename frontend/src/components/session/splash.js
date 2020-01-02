import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

class Splash extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <section className="splash">
        <span className="splash-logo">
          <h1>OOTD</h1>
        </span>
        <div className="splash-form-container">
          <Route exact path="/splash" component={LoginFormContainer} />
          <Route exact path="/splash/signup" component={SignupFormContainer} />
        </div>
      </section>
    );
  }
}

export default Splash;