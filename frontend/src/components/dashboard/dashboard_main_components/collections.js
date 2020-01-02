import React from 'react';

import { Route, Link } from 'react-router-dom';

import CollectionShowContainer from '../../collections/collection_show_container';
import CollectionsList from '../../collections/collections_list';

class Collections extends React.Component{
  constructor(props){
    super(props);

  }

  componentDidMount(){

    // debugger;
    this.props.fetchCollections(this.props.currentUser.id);
  }

  render(){

    if(Object.keys(this.props.collections).length === 0){
      return <p>loading</p>
    }
    // debugger;
    let collectionsArr = Object.values(this.props.collections);
    // debugger;
    let showPath;
    collectionsArr = collectionsArr.map((collection) => {
      showPath = `/collections/${collection._id}`
      return <li key={collection._id}><Link to={showPath}>
          <p>{collection.label}</p>
          <img src={collection.image_url}></img>
      </Link></li>;
    })
    // debugger;
    // const CollectionsList = (
    //   <ul>
    //     {collectionsArr}
    //   </ul>
    // );

    return(
      <>
        <Route exact path="/collections" component={() => <CollectionsList collectionsArr={collectionsArr}/> }></Route>
        <Route exact path="/collections/:collection_id" component={CollectionShowContainer} />
      </>
    )
  }
}

export default Collections;