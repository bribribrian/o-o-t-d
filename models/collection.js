const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollectionSchema = new Schema({
  label: {
    type: String,
    required: true
  },
  hat_id: {
    type: Number
  },
  top_id: {
    type: Number
  },
  bottom_id: {
    type: Number
  },
  shoe_id: {
    type: Number
  },
  occasion: {
    type: String,
    default: 'casual',
    required: true
  },
  precipitation: {
    type: String,
    default: 'sunny',
    required: true
  },
  temperature: {
    type: String,
    default: 'all',
    required: true
  },
  image_url: {
    type: String,
    required: true
  }
});

const Collection = mongoose.model('collections', CollectionSchema);
module.exports = Collection;