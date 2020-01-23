import { connect } from 'react-redux';
import { withRouter } from "react-router";

import EditCollection from './edit_collection';

import { updateCollection } from '../../actions/collection_actions';

import { fetchItems } from '../../actions/item_actions';

import {
  receivePickNone,
  receivePickHat,
  receivePickTop,
  receivePickBottom,
  receivePickShoes
} from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  let collectionId = ownProps.match.params.collection_id;
  // let path = ownProps.match.
  return({
    collection: state.entities.collections[collectionId],
    currentUser: state.session.user,
    modalSlice: state.ui.modal,
    items: state.entities.items,
    collectionId
  }) 
};

const mdp = dispatch => ({
  updateCollection: (collection, id) => dispatch(updateCollection(collection, id)),
  fetchItems: () => dispatch(fetchItems()),
  receivePickNone: () => dispatch(receivePickNone()),
  receivePickTop: () => dispatch(receivePickTop()),
  receivePickBottom: () => dispatch(receivePickBottom()),
  receivePickHat: () => dispatch(receivePickHat()),
  receivePickShoes: () => dispatch(receivePickShoes())
});


export default connect(msp, mdp)(EditCollection);