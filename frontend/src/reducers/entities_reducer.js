import { combineReducers } from 'redux';

import UsersReducer from './users_reducer';
import ItemsReducer from './items_reducer';
import CollectionsReducer from './collections_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    items: ItemsReducer,
    collections: CollectionsReducer
});

export default EntitiesReducer;