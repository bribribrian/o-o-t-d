const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollectionSchema = new Schema({
  label: {
    type: String,
    required: true
  },
  hat_id: {
    type: Schema.Types.ObjectId,
    ref: 'items'
  },
  top_id: {
    type: Schema.Types.ObjectId,
    ref: 'items'
  },
  bottom_id: {
    type: Schema.Types.ObjectId,
    ref: 'items'
  },
  shoe_id: {
    type: Schema.Types.ObjectId,
    ref: 'items'
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
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

const Collection = mongoose.model('collections', CollectionSchema);
module.exports = Collection;