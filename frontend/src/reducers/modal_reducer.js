import * as modalActions from '../actions/modal_actions';


const ModalReducer = (state='none', action) => {
  Object.freeze(state);
  switch(action.type){
    case modalActions.RECEIVE_PICK_HAT:
      return 'hat';
    case modalActions.RECEIVE_PICK_TOP:
      return 'top';
    case modalActions.RECEIVE_PICK_BOTTOM:
      return 'bottom';
    case modalActions.RECEIVE_PICK_SHOES:
      return 'shoe';
    case modalActions.RECEIVE_PICK_NONE:
      return 'none';
    default:
      return state;
  }
};

export default ModalReducer;