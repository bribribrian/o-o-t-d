import {connect} from 'react-redux';
import ItemShow from './item_show';

import {filterCollectionsByItem} from '../../util/item_util';

import { fetchCollections } from '../../actions/collection_actions';

const msp = (state, ownProps) => {
  // debugger;
  let item = state.entities.items[ownProps.match.params.item_id]
  let collections = state.entities.collections;
  let memberCollections;
  if(item.category === 'hat'){
    memberCollections = filterCollectionsByItem(item, 'hat_id', collections);
  }else if(item.category === 'top'){
    memberCollections = filterCollectionsByItem(item, 'top_id', collections);
  }else if(item.category === 'bottom'){
    memberCollections = filterCollectionsByItem(item, 'bottom_id', collections);
  }else if(item.category === 'shoes'){
    memberCollections = filterCollectionsByItem(item, 'shoe_id', collections);
  }
  debugger;
  return({
    item,
    memberCollections,
    currentUser: state.session.user
  })
}

const mdp = dispatch => ({
  // fetchCollections: (userId) => dispatch(fetchCollections(userId))
});

export default connect(msp, mdp)(ItemShow);