import axios from 'axios';

export const fetchItems = () => {
    return axios.get('/api/items');
};

export const fetchItem = (itemId) => {
    return axios.get(`/api/items/${itemId}`);
};

export const createItem = (item) => {
    return axios.post('/api/items', item);
};

export const updateItem = (item) => {
    return axios.patch(`/api/items/${item.id}`, item);
};

export const deleteItem = (itemId) => {
    return axios.delete(`/api/items/${itemId}`);
};


export const filterCollectionsByItem = (item, itemCategory, collections) => {
    let collectionsArr = Object.values(collections);
    let res = [];
    for(let i = 0; i < collectionsArr.length; i++){
        let coll = collectionsArr[i];
        if(coll[itemCategory] === item._id){
            res.push(coll);
        }
    }
    return res;
}