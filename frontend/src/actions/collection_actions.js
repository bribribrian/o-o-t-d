import * as APIUtil from '../util/collection_util';

export const RECEIVE_COLLECTION = "RECEIVE_COLLECTION";
export const RECEIVE_COLLECTIONS = "RECEIVE_COLLECTIONS";
export const REMOVE_COLLECTION = "REMOVE_COLLECTION";

const receiveCollection = (collection) => ({
    type: RECEIVE_COLLECTION,
    collection
});

const receiveCollections = (collections) => ({
    type: RECEIVE_COLLECTIONS,
    collections
});

const removeCollection = (collectionId) => ({
    type: REMOVE_COLLECTION,
    collectionId
});

export const fetchCollection = (collectionId) => dispatch => (
    APIUtil.fetchCollection(collectionId)
        .then(collection => dispatch(receiveCollection(collection)))
);

export const fetchCollections = () => dispatch => (
    APIUtil.fetchCollections()
        .then(collections => dispatch(receiveCollections(collections)))
);

export const createCollection = (collection) => dispatch => (
    APIUtil.createCollection(collection)
        .then(collection => dispatch(receiveCollection(collection)))
);

export const updateCollection = (collection) => dispatch => (
    APIUtil.updateCollection(collection)
        .then(collection => dispatch(receiveCollection(collection)))
);

export const deleteCollection = (collectionId) => dispatch => (
    APIUtil.deleteCollection(collectionId)
        .then(collection => dispatch(removeCollection(collection)))
);