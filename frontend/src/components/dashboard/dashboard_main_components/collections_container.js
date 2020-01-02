import { connect } from 'react-redux';

import Collections from './collections';

import { fetchCollections } from '../../../actions/collection_actions';

const msp = (state) => ({
  collections: state.entities.collections,
  currentUser: state.session.user
});

const mdp = dispatch => ({
  fetchCollections: (userId) => dispatch(fetchCollections(userId))
});

export default connect(msp, mdp)(Collections);