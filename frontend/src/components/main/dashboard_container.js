import { connect } from 'react-redux';
import Dashboard from './dashboard';

import { logout } from '../../actions/session_actions';

const msp = (state, ownProps) => {
  return {
    navSlice: ownProps.location.pathname.split("/")[1],
    currentUser: state.session.user
  };
};

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(Dashboard);