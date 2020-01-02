import React from 'react';
// import ItemCreationContainer from '../item_creation_form_container';
import NavbarContainer from '../dashboard/navbar_container';
import DashboardMainContainer from '../dashboard/dashboard_main_container';

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
    return (
      <>
        {/* <ItemCreationContainer/> */}
        <NavbarContainer />
        <DashboardMainContainer />
      </>
    );
  }
}

export default Dashboard;