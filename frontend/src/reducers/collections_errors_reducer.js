import {
  RECEIVE_COLLECTION_ERROR
} from '../actions/collection_actions';

const CollectionsErrorsReducer = (state=[], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_COLLECTION_ERROR:
      return action.error;
    default:
      return state;
  }
};


export default CollectionsErrorsReducer;