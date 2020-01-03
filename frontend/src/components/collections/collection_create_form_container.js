import { connect } from 'react-redux';

import CollectionCreateForm from './collection_create_form';

import { fetchItems } from '../../actions/item_actions';
import { createCollection } from '../../actions/collection_actions';
import {
  receivePickNone,
  receivePickHat,
  receivePickTop,
  receivePickBottom,
  receivePickShoes
} from '../../actions/modal_actions';

const msp = state => ({
  modalSlice: state.ui.modal,
  currentUser: state.session.user
});

const mdp = dispatch => ({
  createCollection: (collection) => dispatch(createCollection(collection)),
  fetchItems: () => dispatch(fetchItems()),
  receivePickNone: () => dispatch(receivePickNone()),
  receivePickTop: () => dispatch(receivePickTop()),
  receivePickBottom: () => dispatch(receivePickBottom()),
  receivePickHat: () => dispatch(receivePickHat()),
  receivePickShoes: () => dispatch(receivePickShoes())
});

export default connect(msp, mdp)(CollectionCreateForm);