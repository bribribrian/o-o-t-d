import {
    RECEIVE_ITEM,
    RECEIVE_ITEMS,
    REMOVE_ITEM,
} from '../actions/item_actions';

// multiple ways to do reducers now, have to decide whether to keep state simple or make it complex


const ItemsReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ITEM:
            return Object.assign({}, state, {[action.item.id] : action.item});
        case RECEIVE_ITEMS:
            return Object.assign({}, state, action.items);
        case REMOVE_ITEM:
            let newState = Object.assign({}, state);
            delete newState[action.itemId];
            return newState;
        default:
            return state;
    };
};

export default ItemsReducer;