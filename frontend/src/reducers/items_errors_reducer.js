import {
    RECEIVE_ITEM_ERROR
} from '../actions/item_actions';

const ItemsErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ITEM_ERROR:
            return action.error
        default:
            return state;
    };
};

export const ItemsErrorsReducer;