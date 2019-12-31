import { connect } from 'react-redux';

import Navbar from './navbar';

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

const msd = (dispatch) => ({
  generate: () => receiveGenerate,
  generated: () => receiveGenerated,
  items: () => receiveItems,
  collections: () => receiveCollections
});

export default connect(msp, mdp)(Navbar);

