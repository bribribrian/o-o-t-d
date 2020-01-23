import { combineReducers } from 'redux';

import UsersReducer from './users_reducer';
import ItemsReducer from './items_reducer';
import CollectionsReducer from './collections_reducer';
import NavbarReducer from './navbar_reducer';
import FilteredCollectionsReducer from './filtered_collections_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    items: ItemsReducer,
    collections: CollectionsReducer,
    filteredCollections: FilteredCollectionsReducer,
    navbar: NavbarReducer
});

export default EntitiesReducer;