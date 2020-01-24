import * as deleteModalActions from '../actions/delete_modal_actions';


const DeleteModalReducer = (state='closed', action) => {
  Object.freeze(state);
  switch(action.type){
    case deleteModalActions.OPEN_WARNING:
      return 'open';
    case deleteModalActions.CLOSE_WARNING:
      return 'closed';
    default:
      return state;
  }
};

export default DeleteModalReducer;