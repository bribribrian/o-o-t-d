import { connect } from 'react-redux'

import FilteredCollections from './filtered_collections';

const msp = (state) => {
  return({
  filteredCollections: state.entities.filteredCollections
  })
};

const mdp = (dispatch) => ({

});

export default connect(msp, mdp)(FilteredCollections);
