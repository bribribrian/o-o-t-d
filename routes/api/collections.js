const express = require("express");
const router = express.Router();
const Item = require('../../models/Item');
const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Collection = require('../../models/Collection');

router.get('/', (req, res) => {
  console.log(req);
  debugger;
  const { filter } = req.body;
  if (filter) {
    Collection.find(filter)
      .then(collections => {
        return res.json(collections);
      })
      .catch(err => res.status(404).json({ nocollections: 'No collections found' }));
  } else {
    Collection.find({ user_id: req.body.user_id }).
      then(collections => {
        return res.json(collections);
      })
      .catch(err => res.status(404).json({ nocollectionsfound: 'No collections found' }));
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
  console.log(req);
  // debugger;
  Collection.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch(err => res.status(404).json({ nocollectionfound: 'No collection found' }));
});

module.exports = router;