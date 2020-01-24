import { combineReducers } from 'redux';

import ModalReducer from './modal_reducer';
import DeleteModalReducer from './delete_modal_reducer';


const UiReducer = combineReducers({
  modal: ModalReducer,
  deleteModal:  DeleteModalReducer
});

export default UiReducer;