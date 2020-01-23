import { connect } from 'react-redux';

import Generate from './generate';

import { fetchCollectionsWithFilters } from '../../../actions/collection_actions';

import {
  receiveOccasion,
  receivePrecipitation,
  receiveTemperature
} from '../../../actions/generate_filter_actions';

const msp = state => ({
  currentUser: state.session.user,
  currentFilters: state.generateFilters
});

const mdp = dispatch => ({
  fetchCollectionsWithFilters: (userId, bodyFilters) => dispatch(fetchCollectionsWithFilters(userId, bodyFilters)),
  receiveOccasion: (occasion) => dispatch(receiveOccasion(occasion)),
  receiveTemperature: (temperature) => dispatch(receiveTemperature(temperature)),
  receivePrecipitation: (precipitation) => dispatch(receivePrecipitation(precipitation)),
});

export default connect(msp, mdp)(Generate);