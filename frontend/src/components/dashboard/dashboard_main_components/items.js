import React from 'react';

import { Switch, Route, Link } from 'react-router-dom';

import ItemsList from '../../items/items_list';
import SimpleItemFormContainer from '../../items/item_creation_form_container';

class Items extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchItems();
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
        </Switch>
      </>
    );
  }
}

export default Items;