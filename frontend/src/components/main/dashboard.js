import React from 'react';
// import ItemCreationContainer from '../item_creation_form_container';
import Navbar from '../dashboard/navbar';
import DashboardMain from '../dashboard/dashboard_main';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.logout();
  }

  render() {
    const { navSlice, currentUser, logout } = this.props;

    return (
      <>
        {/* <ItemCreationContainer/> */}
        <Navbar navSlice={navSlice} currentUser={currentUser} logout={logout} />
        <DashboardMain navSlice={navSlice} />
      </>
    );
  }
}

export default Dashboard;