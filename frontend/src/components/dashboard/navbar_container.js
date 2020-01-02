import { connect } from 'react-redux';

import Navbar from './navbar';

import { logout } from '../../actions/session_actions';

import {
  receiveGenerate,
  receiveGenerated,
  receiveItems,
  receiveCollections
} from '../../actions/navbar_actions';


const msp = (state) => ({
  navSlice: state.entities.navbar,
  currentUser: state.session.user
});

const mdp = (dispatch) => ({
  generate: () => dispatch(receiveGenerate()),
  generated: () => dispatch(receiveGenerated()),
  items: () => dispatch(receiveItems()),
  collections: () => dispatch(receiveCollections()),
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(Navbar);

