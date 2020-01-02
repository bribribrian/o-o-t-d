import { connect } from 'react-redux';

import CollectionShow from './collection_show';

import { fetchItem } from '../../actions/item_actions';

const msp = (state, ownProps) => {
  let collectionId = ownProps.match.params.collection_id;
  let collectionsArr = Object.values(state.entities.collections);
  let collection;
  collectionsArr.forEach((c) => {
    if(c._id === collectionId){
      collection = c;
    }
  });
  // each item id from the collection we just found from the state,
  // we need to fetch each of these items in order to be able
  // to display the corresponding images
  let itemsIds = [];
  itemsIds.push(collection.hat_id);
  itemsIds.push(collection.top_id);
  itemsIds.push(collection.bottom_id);
  itemsIds.push(collection.shoe_id);

  return({
    collection: collection,
    items: state.entities.items,
    itemsIds: itemsIds
  });
};

const mdp = dispatch => ({
  fetchItem: (itemId) => dispatch(fetchItem(itemId))
});

export default connect(msp, mdp)(CollectionShow);