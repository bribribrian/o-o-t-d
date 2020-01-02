import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.sendGenerated = this.sendGenerated.bind(this);
    this.sendGenerate = this.sendGenerate.bind(this);
    this.sendItems = this.sendItems.bind(this);
    this.sendCollections = this.sendCollections.bind(this);
  }

  sendGenerate(e) {
    e.preventDefault();
    this.props.generate();
  }

  sendGenerated(e) {
    e.preventDefault();
    this.props.generated();
  }

  sendItems(e) {
    e.preventDefault();
    this.props.items();
  }

  sendCollections(e) {
    e.preventDefault();
    this.props.collections();
  }

  handleClick(e) {
    e.preventDefault();
    this.props.generate();
    this.props.logout();
  }


  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-weather">
          <p>Weather goes here</p>
        </div>
        <div>
          <button onClick={this.sendGenerate}>Generate</button>
          <button onClick={this.sendCollections}>Collections</button>
          <button onClick={this.sendItems}>Items</button>
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