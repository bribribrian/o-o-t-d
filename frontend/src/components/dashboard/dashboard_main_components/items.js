import React from 'react';

import { Switch, Route } from 'react-router-dom';

import ItemsList from '../../items/items_list';
import SimpleItemFormContainer from '../../items/item_creation_form_container';
import ItemShowContainer from '../../items/item_show_container';

class Items extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchItems();
    this.props.fetchCollections(this.props.currentUser.id);
  }

  render() {

    const { items } = this.props;
    const { deleteItem } = this.props;

    if (Object.keys(items).length === 0) {
      return <p>loading...</p>;
    }

    return (
      <>
        <Switch>
          <Route exact path="/items" component={() => <ItemsList items={items} deleteItem={deleteItem} />}></Route>
          <Route exact path="/items/new" component={SimpleItemFormContainer} />
          <Route exact path="/items/:item_id" component={ItemShowContainer}/>
        </Switch>
      </>
    );
  }
}

export default Items;