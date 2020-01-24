import {connect} from 'react-redux';
import ItemShow from './item_show;'

import { fetchCollections } from '../../actions/collection_actions';

const msp = (state, ownProps) => {
  debugger;
  let item = state.entities.items[ownProps.match.params._id]
  let collections = state.entities.collections;

  return({
    item: item,
    
  })
}

const mdp = dispatch => ({
  fetchCollections: () => dispatch(fetchCollections())
});

export default connect(msp, mdp)(ItemShow);