import React from 'react';

class Dashboard extends React.Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();

    this.props.logout();
  }

  render(){
    return(
      <>
        <p>You are on the user home page</p>
        <button onClick={this.handleClick}>Log Out</button>
      </>
    );
  }
}

export default Dashboard;