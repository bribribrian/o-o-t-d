import { combineReducers } from 'redux';

import ItemsReducer from './items_reducer';

const EntitiesReducer = combineReducers({
    items: ItemsReducer
});

export const EntitiesReducer;