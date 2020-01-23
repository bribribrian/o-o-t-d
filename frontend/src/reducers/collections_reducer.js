import {
  RECEIVE_COLLECTION,
  RECEIVE_COLLECTIONS,
  RECEIVE_FILTERED_COLLECTIONS,
  REMOVE_COLLECTION
} from '../actions/collection_actions';

const CollectionsReducer = (state={}, action) => {
  let newState;
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_COLLECTION:
      return Object.assign({}, state, {[action.collection.data._id] : action.collection.data});
    case RECEIVE_COLLECTIONS:
      newState = {};
      action.collections.data.forEach(collection => {
        newState[collection._id] = collection;
      });
      // return Object.assign({}, state, newState);
      return newState;
    case REMOVE_COLLECTION:
      newState = Object.assign({}, state);
      delete newState[action.collection.data._id];
      return newState;
    default:
      return state;
  }
};

export default CollectionsReducer;