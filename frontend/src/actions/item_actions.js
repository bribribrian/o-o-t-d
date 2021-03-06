import * as APIUtil from '../util/item_util';

export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const RECEIVE_ITEM_ERROR = "RECEIVE_ITEM_ERROR";

const receiveItem = (item) => ({
    type: RECEIVE_ITEM,
    item
});

const receiveItems = (items) => ({
    type: RECEIVE_ITEMS,
    items
});

const receiveItemsError = (error) => ({
    type: RECEIVE_ITEM_ERROR,
    error
});

// takes in an item id, but we could change this to take in an item,
// it depends on what the backend sends in response to the axios request
const removeItem = (item) => ({
    type: REMOVE_ITEM,
    item
});

export const fetchItem = (itemId) => dispatch => {
    return(
        APIUtil.fetchItem(itemId)
            .then(item => {
                dispatch(receiveItem(item));
            })
            .catch(error => dispatch(receiveItemsError(error)))
    );
            
};

export const fetchItems = () => dispatch => (
    APIUtil.fetchItems()
        .then(items => dispatch(receiveItems(items)))
);

export const createItem = (item) => dispatch => (
    APIUtil.createItem(item)
        .then(item => dispatch(receiveItem(item)))
        .catch(error => dispatch(receiveItemsError(error)))
);

export const updateItem = (item) => dispatch => (
    APIUtil.updateItem(item)
        .then(item => dispatch(receiveItem(item)))
        .catch(error => dispatch(receiveItemsError(error)))
);

export const deleteItem = (itemId) => dispatch => (
    APIUtil.deleteItem(itemId)
        .then(item => dispatch(removeItem(item)))
        .catch(error => dispatch(receiveItemsError(error)))
);

