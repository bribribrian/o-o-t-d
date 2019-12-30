const express = require("express");
const router = express.Router();
const Item = require('../../models/Item');
const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const validateItemInput = require('../../validation/items');



router.get("/test", (req, res) => res.json({ msg: "This is the items route" }));

// router.get('/', (req, res) => {
//   Item.find()
//     .then(items => res.json(items))
//     .catch(err => res.status(404).json({ noitemsfound: 'No items found'}));
// });

router.get('/user/:user_id', (req, res) => {
  Item.find({user_id: req.params.user_id})
    .then(items => res.json(items))
    .catch(err => res.status(404).json({ noitemsfound: 'No items found' }));
});


router.post('/create',
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {
    
    const { errors, isValid } = validateItemInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
    
    const newItem = new Item({
      category: req.body.category,
      label: req.body.label,
      image_url: req.body.image_url,
      user_id: req.body.user_id
    });
  
    newItem.save().then(item => res.json(item));
  }
);

module.exports = router;