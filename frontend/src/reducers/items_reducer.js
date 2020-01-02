import {
    RECEIVE_ITEM,
    RECEIVE_ITEMS,
    REMOVE_ITEM,
} from '../actions/item_actions';



const ItemsReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ITEM:
            return Object.assign({}, state, {[action.item.data._id] : action.item.data});
        case RECEIVE_ITEMS:
            return Object.assign({}, state, action.items.data);
        case REMOVE_ITEM:
            let newState = Object.assign({}, state);
            delete newState[action.itemId];
            return newState;
        default:
            return state;
    }
};

export default ItemsReducer;