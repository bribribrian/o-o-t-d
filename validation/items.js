const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function(data) {
  let errors = {};

  data.category = validText(data.category) ? data.category : '';
  data.label = validText(data.label) ? data.label : '';
  data.image_url = validText(data.image_url) ? data.image_url : '';

  if (Validator.isEmpty(data.category)) {
    errors.category = 'Category field is required';
  }

  if (!Validator.isIn(data.category, ['top', 'bottom', 'hat', 'shoes'])) {
    errors.category = 'Category must be either a Top, Bottom, Hat, or Shoes';
  }

  // if (Validator.isURL(data.image_url)) {
  //   errors.image_url = 'Image does not have a valid URL';
  // }

  if (Validator.isEmpty(data.label)) {
    errors.label = 'Label field is required';
  }

  // if (Validator.isEmpty(data.occasion)) {
  //   errors.occasion = 'Occasion field is required';
  // }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};