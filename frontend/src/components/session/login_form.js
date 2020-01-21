import React from 'react';
import { Link } from 'react-router-dom';
// import { WorkMail } from 'aws-sdk';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/');
    }
    this.setState({ errors: nextProps.errors });
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.login(user);
  }
  
  handleDemoLogin(e) {
    e.preventDefault();

    let user = {
      email: 'user14@mail.com',
      password: 'password'
    };
    this.props.login(user);
  }

  render() {
    return (
      <div className="splash-form-container">
        <h2>Sign In</h2>
        {/* <Link to="/splash/signup">
          <button>Signup</button>
        </Link> */}
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
            <br />
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
            <br />
            <input type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
        <form onSubmit={this.handleDemoLogin}>
          <input type ="submit" value="Demo User" />
        </form>
        <p>Don't have an account? <Link to="/splash/signup">Sign up</Link></p>
      </div>
    );
  }
}

export default LoginForm;

