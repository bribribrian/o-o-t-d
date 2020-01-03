import {
    RECEIVE_ITEM,
    RECEIVE_ITEMS,
    REMOVE_ITEM,
} from '../actions/item_actions';



const ItemsReducer = (state={}, action) => {
    Object.freeze(state);
    let newState;
    switch(action.type){
        case RECEIVE_ITEM:
            return Object.assign({}, state, {[action.item.data._id] : action.item.data});
        case RECEIVE_ITEMS:
            newState = {};
            action.items.data.forEach((item) => {
                newState[item._id] = item;
            });
            return Object.assign({}, state, newState);
        case REMOVE_ITEM:
            newState = Object.assign({}, state);
            delete newState[action.itemId];
            return newState;
        default:
            return state;
    }
};

export default ItemsReducer;