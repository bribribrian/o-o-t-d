import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DeleteModal from './delete_modal';

import { closeWarning } from '../../actions/delete_modal_actions';
import { deleteCollection } from '../../actions/collection_actions';

const msp = (state, ownProps) => {
    debugger;
    console.log(ownProps);
    let path = ownProps.match.url;
    let collectionId = ownProps.match.params.collection_id;
    let collection = state.entities.collections[collectionId];

    return({
      deleteModalSlice: state.ui.deleteModal,
      collection,
      path
    });
  };

const mdp = dispatch => ({
    // fetchItem: (itemId) => dispatch(fetchItem(itemId)),
    deleteCollection: (collectionId) => dispatch(deleteCollection(collectionId)),
    closeWarning: () => dispatch(closeWarning())
  });

export default withRouter(connect(msp, mdp)(DeleteModal));