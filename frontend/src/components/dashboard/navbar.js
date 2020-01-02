import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeNav: this.props.navSlice
    };

    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.navSlice !== this.props.navSlice) {
      this.setState({activeNav: this.props.navSlice});
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  getActiveNav(target) {
    return this.state.activeNav === target ? "active" : "";
  }

  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>OOTD</h1>
        </div>
        <div className="navbar-weather">
          <p>Weather goes here</p>
        </div>
        <div>
          <h2>Nav</h2>
          <ul>
            <li><Link to="/" className={this.getActiveNav("")}>Generate</Link></li>
            <li><Link to="/collections" className={this.getActiveNav("collections")}>Collections</Link></li>
            <li><Link to="/items" className={this.getActiveNav("items")}>Items</Link></li>
          </ul>
        </div>
        <div>
          <p>Hello, {this.props.currentUser.username}</p>
          <p>You are on the user home page</p>
          <button onClick={this.handleClick}>Log Out</button>
        </div>

      </div>
    );
  }
}

export default Navbar;