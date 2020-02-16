
import {
  RECEIVE_OCCASION,
  RECEIVE_TEMPERATURE,
  RECEIVE_PRECIPITATION
} from '../actions/generate_filter_actions';

const defState = {
  occasion: 'all',
  temperature: 'all',
  precipitation: 'all'
}

const GenerateFiltersReducer = (state=defState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_OCCASION:
      newState = Object.assign({}, state);
      newState['occasion'] = action.occasion;
      return newState;
    case RECEIVE_TEMPERATURE:
      newState = Object.assign({}, state);
      newState['temperature'] = action.temperature;
      return newState;
    case RECEIVE_PRECIPITATION:
      newState = Object.assign({}, state);
      newState['precipitation'] = action.precipitation;
      return newState;
    default:
      return state;
  }
}

export default GenerateFiltersReducer;