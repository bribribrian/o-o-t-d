const Validator = require('validator');

module.exports = function(data) {
  let errors = {};

  if (!Validator.isIn(data.occasion, ['casual', 'formal', 'semi-formal'])) {
    errors.occasion = 'Occasion must be either casual, formal, or semi-formal';
  }

  if (!Validator.isIn(data.precipitation, ['sunny', 'rainy', 'snowy'])) {
    errors.precipitation = 'Precipitation must be either Sunny, Rainy, or Snowy';
  }

  if (!Validator.isIn(data.temperature, ['all', 'hot', 'cold'])) {
    errors.temperature = 'Temperature must be either hot, cold, or all';
  }

  if (Validator.isEmpty(data.label)) {
    errors.label = 'Label field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};

