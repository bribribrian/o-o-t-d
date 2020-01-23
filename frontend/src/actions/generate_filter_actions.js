

export const RECEIVE_OCCASION = 'RECEIVE_OCCASION';
export const RECEIVE_TEMPERATURE = 'RECEIVE_TEMPERATURE';
export const RECEIVE_PRECIPITATION = 'RECEIVE_PRECIPITATION';

export const receiveOccasion = (occasion) => ({
  type: RECEIVE_OCCASION,
  occasion
});
export const receiveTemperature = (temperature) => ({
  type: RECEIVE_TEMPERATURE,
  temperature
});
export const receivePrecipitation = (precipitation) => ({
  type: RECEIVE_PRECIPITATION,
  precipitation
});
