import {
  RECEIVE_USER,
  REMOVE_USER
} from '../actions/user_actions';

const UsersReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_USER:
      return Object.merge({}, state, {[action.user.data.id]: action.user.data});
    case REMOVE_USER:
      let newState = Object.merge({}, state);
      delete newState[action.user.data.id];
      return newState;
    default:
      return state;
  }
};

export default UsersReducer;