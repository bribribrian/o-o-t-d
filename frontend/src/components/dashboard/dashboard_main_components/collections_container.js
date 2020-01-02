import { connect } from 'react-redux';

import Collections from './collections';

import { fetchCollections } from '../../../actions/collection_actions';

const msp = (state) => ({
  collections: state.entities.collections
});

const mdp = dispatch => ({
  fetchCollections: () => dispatch(fetchCollections())
});

export default connect(msp, mdp)(Collections);