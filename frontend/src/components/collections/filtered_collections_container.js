import { connect } from 'react-redux'

import FilteredCollections from './filtered_collections';

const msp = (state) => {
  debugger;
  return({
  filteredCollections: state.entities.filteredCollections
  })
};

const mdp = (dispatch) => ({

});

export default connect(msp, mdp)(FilteredCollections);
