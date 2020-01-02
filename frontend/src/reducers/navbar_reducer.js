import {
  RECEIVE_NAV_GENERATE,
  RECEIVE_NAV_GENERATED,
  RECEIVE_NAV_ITEMS,
  RECEIVE_NAV_COLLECTIONS
} from '../actions/navbar_actions';

const NavbarReducer = (state='none', action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_NAV_GENERATE:
      return 'generate';
    case RECEIVE_NAV_GENERATED:
      return 'generated';
    case RECEIVE_NAV_ITEMS:
      return 'items';
    case RECEIVE_NAV_COLLECTIONS:
      return 'collections';
    default:
      return state;
  }
};

export default NavbarReducer;