import { connect } from 'react-redux';

import Modal from './modal';

import { receivePickNone } from '../../actions/modal_actions';

const msp = state => ({
  modalSlice: state.ui.modal,
  items: state.entities.items
});

const mdp = (dispatch, ownProps) => ({
  receivePickNone: () => dispatch(receivePickNone()),
  pickItem: (type, id, imgUrl) => ownProps.pickItem(type, id, imgUrl)
});

export default connect(msp, mdp)(Modal)

