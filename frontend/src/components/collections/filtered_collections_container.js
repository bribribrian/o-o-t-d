import { connect } from 'react-redux'

import FilteredCollections from './filtered_collections';

const msp = (state) => ({
  collections: state.entities.collections
});

const mdp = (dispatch) => ({

});

export default connect(msp, mdp)(FilteredCollections);
