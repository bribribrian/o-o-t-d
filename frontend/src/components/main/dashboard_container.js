import { connect } from 'react-redux';
import Dashboard from './dashboard';

import { logout } from '../../actions/session_actions';

const msp = (state) => ({

});

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(Dashboard);