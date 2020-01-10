const express = require("express");
const router = express.Router();
const Item = require('../../models/Item');
const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const validateItemInput = require('../../validation/items');
mongoose.set('useFindAndModify', false);


router.get("/test", (req, res) => res.json({ msg: "This is the items route" }));

// router.get('/', (req, res) => {
//   Item.find()
//     .then(items => res.json(items))
//     .catch(err => res.status(404).json({ noitemsfound: 'No items found'}));
// });

// router.get('/user/:user_id', (req, res) => {
//   Item.find({user_id: req.params.user_id})
//     .then(items => res.json(items))
//     .catch(err => res.status(404).json({ noitemsfound: 'No items found' }));
// });

router.get('/', (req, res) => {
  // console.log(req);
  Item.find().
    then(items => {
      return res.json(items);
    })
    .catch(err => res.status(404).json({ noitemfound: 'No item found' }));
});

router.get('/:id', (req, res) => {
  // console.log(req);
  Item.findById(req.params.id).
    then(item => {
      return res.json(item);
    })
    .catch(err => res.status(404).json({ noitemfound: 'No item found' }));
});


router.post('/',
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {
    
    const { errors, isValid } = validateItemInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
    // const newItem = new Item(req.body);
    const newItem = new Item({
      category: req.body.category,
      label: req.body.label,
      // image_url: 'https://ootd-seeds.s3.amazonaws.com/blackhoodie_tn.jpg', //hardcode imageurl from 
      image_url: req.body.image_url,
      user_id: req.body.user_id //possibly hardcode for itemcreation
    });
  
    newItem.save().then(item => res.json(item));
  }
);

router.patch('/:id', (req, res) => {
  // console.log(req);
  // let newItem = {
  //   category: req.body.category,
  //   label: req.body.label,
  //   // image_url: req.body.image_url,
  //   user_id: req.body.user_id
  // };
  let query = req.params.id;
  Item.findByIdAndUpdate(
    query,
    {
      $set: req.body
    },
    { new: true },
    (err, item) => {
      if (err) {
        return res.json(err);
      }
      return res.json(item);
    })
      .catch(err => res.status(404).json({ noitemfound: 'No item found' }));
});


router.delete('/:id', (req, res) => {
  // console.log(req);
  Item.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch(err => res.status(404).json({ noitemfound: 'No item found' }));
});



module.exports = router;