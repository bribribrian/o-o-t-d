import React from 'react';
import { Link } from 'react-router-dom';
// import { fetchWeather } from '../../util/weather_util';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    
    const date = new Date(),
          options = { weekday: "long" };

    this.state = {
      activeNav: this.props.navSlice,
      day: new Intl.DateTimeFormat('en-US', options).format(date),
      weather: "loading..."
    };

    this.handleClick = this.handleClick.bind(this);
  }

  fetchWeather(zipcode) {
    const request = new XMLHttpRequest();
    request._setState = this.setState.bind(this);

    request.open(
      "GET",
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=237a55ff816b3b94c79c1feeb38db97d`,
      true
    );

    request.onload = this.ajaxSuccess.bind(request);
    request.send();
  }

  ajaxSuccess() {
    if (this.status >= 200 && this.status < 400) {
      const data = JSON.parse(this.response);
      const reformattedTemp = "L " + Math.floor((data.main.temp_min - 273.15) * (9 / 5) + 32) + "° / H " + Math.floor((data.main.temp_max - 273.15) * (9 / 5) + 32) + "°";
      this._setState({
        weather: reformattedTemp
      });
    } else {
      // error
    }
  }

  componentDidMount() {
    this.fetchWeather(this.props.currentUser.zipcode);
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
        <div className="navbar-head">
          <div className="navbar-logo">
            <h1>OOTD</h1>
          </div>
          <div className="navbar-weather">
            <p>{this.state.day},  {this.state.weather}</p>
          </div>
        </div>

        <div className="navbar-body">
          <div className="nav-container">
            <ul>
              <li className={this.getActiveNav("")}><Link to="/">Generate</Link></li>
              <li className={this.getActiveNav("collections")}><Link to="/collections">Collections</Link></li>
              <li className={this.getActiveNav("items")}><Link to="/items">Items</Link></li>
            </ul>
          </div>
        </div>
        <div className="navbar-foot">
          <p>Signed in as, <b>{this.props.currentUser.username}</b></p>
          <input type="submit" onClick={this.handleClick} value="Sign Out" />
          {/* <button onClick={this.handleClick}>Log Out</button> */}
          <span className="copyright">OOTD 2020 ©</span>
        </div>
      </div>
    );
  }
}

export default Navbar;