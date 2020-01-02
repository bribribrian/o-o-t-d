import { connect } from 'react-redux';

import DashboardMain from './dashboard_main';

const msp = (state) => ({
  navSlice: state.entities.navbar
});

const mdp = (dispatch) => ({

});


export default connect(msp, null)(DashboardMain);
