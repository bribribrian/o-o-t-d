import React from 'react';

import { Switch, Route } from 'react-router-dom';

import CollectionShowContainer from '../../collections/collection_show_container';
import CollectionsList from '../../collections/collections_list';
import CollectionCreateFormContainer from '../../collections/collection_create_form_container';
import EditCollectionContainer from '../../collections/edit_collection_container';

class Collections extends React.Component{
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchCollections(this.props.currentUser.id);
  }

  render(){
    const { collections } = this.props;

    if(Object.keys(collections).length === 0){
      return <p>loading</p>;
    }

    return(
      <>
        <Switch>
          <Route exact path="/collections" component={() => <CollectionsList collections={collections} /> }></Route>
          <Route exact path="/collections/new" component={CollectionCreateFormContainer} />
          <Route exact path="/collections/:collection_id" component={CollectionShowContainer} />
          <Route exact path="/collections/:collection_id/edit" component={EditCollectionContainer} />
        </Switch>
      </>
    );
  }
}

export default Collections;