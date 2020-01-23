import axios from 'axios';

export const fetchCollections = (userId) => {
    return axios.get(`/api/collections?user_id=${userId}`);
};

export const fetchCollectionsWithFilters = (userId, bodyFilters) => {
    const { occasion, temperature, precipitation } = bodyFilters;
    return axios.get(`/api/collections?user_id=${userId}&occasion=${occasion}&temperature=${temperature}&precipitation=${precipitation}`);
};

export const fetchCollection = (collectionId) => {
    return axios.get(`/api/collections/${collectionId}`);
};

export const createCollection = (collection) => {
    return axios.post('/api/collections', collection);
};

export const updateCollection = (collection, id) => {
    debugger;
    // return axios.patch(`/api/collections/${collection._id}`, collection);
    return (axios.patch(`/api/collections/${id}`, collection))
};

export const deleteCollection = (collectionId) => {
    return axios.delete(`/api/collections/${collectionId}`);
};
