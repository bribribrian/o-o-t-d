import { connect } from 'react-redux';

import Items from './items';

import {
  fetchItems,
} from '../../../actions/item_actions';

const msp = (state) => ({
  items: state.entities.items
});

const mdp = dispatch => ({
  fetchItems: () => dispatch(fetchItems())
});

export default connect(msp, mdp)(Items);