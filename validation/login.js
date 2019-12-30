const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function(data) {
  let errors = {};

  data.email = validText(data.email) ? data.email : '';
  data.password = validText(data.password) ? data.password : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Invalid Email';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.email = 'Password field required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};