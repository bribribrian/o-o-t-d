import { connect } from 'react-redux';
import ItemCreation from './item_creation_form';

const msp = state => ({
  currentUserId: state.session.user.id
});

const mdp = dispatch => ({

});

export default connect(msp, mdp)(ItemCreation);