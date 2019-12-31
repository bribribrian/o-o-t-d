import {
  RECEIVE_GENERATE,
  RECEIVE_GENERATED,
  RECEIVE_ITEMS,
  RECEIVE_COLLECTIONS
} from '../actions/navbar_actions';

const NavbarReducer = (state='none', action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_GENERATE:
      return 'generate';
    case RECEIVE_GENERATED:
      return 'generated';
    case RECEIVE_ITEMS:
      return 'items';
    case RECEIVE_COLLECTIONS:
      return 'collections';
    default:
      return state;
  }
};

export default NavbarReducer;