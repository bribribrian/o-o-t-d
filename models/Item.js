const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  category: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  image_url: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  }
});

const Item = mongoose.model('items', ItemSchema);
module.exports = Item;