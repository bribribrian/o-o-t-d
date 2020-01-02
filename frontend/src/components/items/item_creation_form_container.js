import { connect } from 'react-redux';
import ItemCreation from './item_creation_form';
import { createItem } from '../../actions/item_actions';

const msp = state => ({
  currentUserId: state.session.user.id
});

const mdp = dispatch => ({
  createItem: (item) => dispatch(createItem(item))

});

export default connect(msp, mdp)(ItemCreation);