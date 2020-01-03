import { connect } from 'react-redux';

import Generate from './generate';

import { fetchCollectionsWithFilters } from '../../../actions/collection_actions';

const msp = state => ({
  currentUser: state.session.user
});

const mdp = dispatch => ({
  fetchCollectionsWithFilters: (userId, bodyFilters) => dispatch(fetchCollectionsWithFilters(userId, bodyFilters))
});

export default connect(msp, mdp)(Generate);