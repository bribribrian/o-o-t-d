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
    let collectionsArr = Object.values(this.props.collections);
    let showPath;
    collectionsArr = collectionsArr.map((collection) => {
      showPath = `/collections/${collection._id}`
      return <Link to={showPath}><li key={collection._id}>
          <p>{collection.label}</p>
          <img src={collection.image_url}></img>
      </li></Link>;
    })

    // const CollectionsList = (
    //   <ul>
    //     {collectionsArr}
    //   </ul>
    // );

    return(
      <>
        <Route exact path="/collections" component={CollectionsList} collectionsArr={collectionsArr}/>
        <Route exact path="/collections/:collection_id" component={CollectionShowContainer} />
      </>
    )
  }
}

export default Collections;