import { connect } from 'react-redux';

import Items from './items';

import {
  fetchItems,
  deleteItem
} from '../../../actions/item_actions';

import { fetchCollections } from '../../../actions/collection_actions';

const msp = (state) => ({
  items: state.entities.items,
  currentUser: state.session.user
});

const mdp = dispatch => ({
  fetchItems: () => dispatch(fetchItems()),
  deleteItem: (itemId) => dispatch(deleteItem(itemId)),
  fetchCollections: (userId) => dispatch(fetchCollections(userId))
});

export default connect(msp, mdp)(Items);