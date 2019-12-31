import {
  RECEIVE_COLLECTION,
  RECEIVE_COLLECTIONS,
  REMOVE_COLLECTION
} from '../actions/collection_actions';

const CollectionsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_COLLECTION:
      return Object.assign({}, state, {[action.collection.data.id] : action.collection.data});
    case RECEIVE_COLLECTIONS:
      return Object.assign({}, state, action.collections.data);
    case REMOVE_COLLECTION:
      let newState = Object.assign({}, state);
      delete newState[action.collection.data.id];
      return newState;
    default:
      return state;
  }
};

export default CollectionsReducer;