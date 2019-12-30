import { connect } from 'react-redux';
import UserMain from './user_main';

import { logout } from '../../actions/session_actions';

const msp = (state) => ({

});

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(UserMain);