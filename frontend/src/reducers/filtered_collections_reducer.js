import {
  RECEIVE_FILTERED_COLLECTIONS
} from '../actions/collection_actions';

const FilteredCollectionsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_FILTERED_COLLECTIONS:
      newState = {};
      action.collections.data.forEach(collection => {
        newState[collection._id] = collection;
      });
      return newState;
    default:
      return state;
  }
}

export default FilteredCollectionsReducer;