import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import ItemsErrorsReducer from './items_errors_reducer';

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  items: ItemsErrorsReducer
});

export default ErrorsReducer;