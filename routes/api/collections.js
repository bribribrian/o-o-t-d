const express = require("express");
const router = express.Router();
const Item = require('../../models/Item');
const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Collection = require('../../models/Collection');

// allCollectyions

// [occasion, temp, precipitation].forEach((filter) => {
//   if(filter !== 'all'){
//     filter by filter
//   }
// })

// filtered collections

router.get('/', (req, res) => {
  // all default values from frontend = 'all'

  let filters = [req.query.occasion, req.query.temperature, req.query.precipitation];
  let filterKeys = ['occasion', 'temperature', 'precipitation'];
  let filtersObj = {user_id: req.query.user_id};
  for(let i = 0; i < filters.length; i++){
    let f = filters[i];
    let key = filterKeys[i];
    if(f !== 'all'){
      req.query.occasion
      req.query.precipitation
      filtersObj[key] = f;
    }
  }


// 
  if (req.query.occasion || req.query.temperature || req.query.precipitation) {
    Collection.find(filtersObj)
      .then(collections => {
        return res.json(collections);
      })
      .catch(err => res.status(404).json({ nocollections: 'No collections found' }));
  } else if (req.query.user_id) {
    Collection.find({ user_id: req.query.user_id }).
      then(collections => {
        return res.json(collections);
      })
      .catch(err => res.status(404).json({ nocollectionsfound: 'No collections found' }));
  } else {
    res.json({ errortest: "error test"});
  }
});

router.post('/', (req, res) => {
  const newCollection = new Collection(req.body);
  newCollection.save()
    .then(collection => res.json(collection))
    .catch(err => res.status(404).json({ collectionerror: 'could not save'}));
});

router.get('/:id', (req, res) => {
  Collection.findById(req.params.id).
    then(collection => {
      return res.json(collection);
    })
    .catch(err => res.status(404).json({ nocollectionfound: 'No collection found' }));
});

router.patch('/:id', (req, res) => {
  let query = req.params.id;
  Collection.findByIdAndUpdate(
    query,
    {
      $set: req.body
    },
    { new: true },
    (err, collection) => {
      if (err) {
        return res.json(err);
      }
      return res.json(collection);
    })
    .catch(err => res.status(404).json({ nocollectionfound: 'No collection found' }));
});

router.delete('/:id', (req, res) => {
  Collection.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch(err => res.status(404).json({ nocollectionfound: 'No collection found' }));
});

module.exports = router;