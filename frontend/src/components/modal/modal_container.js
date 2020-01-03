import { connect } from 'react-redux';

import Modal from './modal';

import { receivePickNone } from '../../actions/modal_actions';

const msp = state => ({
  modalSlice: state.ui.modal,
  items: state.entities.items
});

const mdp = (dispatch, ownProps) => ({
  receivePickNone: () => dispatch(receivePickNone()),
  pickHat: (hatId) => ownProps.pickHat(hatId),
  pickTop: (top_id) => ownProps.pickTop(top_id),
  pickBottom: (bottom_id) => ownProps.pickBottom(bottom_id),
  pickShoes: (shoe_id) => ownProps.pickShoes(shoe_id)
});

export default connect(msp, mdp)(Modal);