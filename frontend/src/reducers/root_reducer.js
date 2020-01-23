import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import EntitiesReducer from './entities_reducer';
import UiReducer from './ui_reducer';
import GenerateFiltersReducer from './generate_filters_reducer';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: ErrorsReducer,
  ui: UiReducer,
  generateFilters: GenerateFiltersReducer
});

export default RootReducer;