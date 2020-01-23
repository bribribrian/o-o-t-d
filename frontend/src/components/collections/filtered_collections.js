import React from 'react';

import {Link, Route} from 'react-router-dom';

class FilteredCollections extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    debugger;
    if(Object.keys(this.props.filteredCollections).length === 0){
      return <p>loading</p>;
    }

    const { filteredCollections } = this.props;
    const collectionsLis = Object.values(filteredCollections).map((collection) => {
      let showPath = `/collections/${collection._id}`
      return (
        <li key={collection._id}>
          <div className="collection-container list-item-container">
            <div className="collection-img-wrapper list-item-img-wrapper" style={{ backgroundImage: 'url(' + collection.image_url + ')' }}></div>
            <div className="collection-hover-info list-item-hover-info">
              <Link to={showPath}>
                <p>{collection.label}</p>
              </Link>
            </div>
          </div>
        </li>
      );
    });

    return(
      <div className="collections-container list-container">
        <div className="list-header">
          {/* <h2><Link to="/collections">Collections</Link></h2> */}
        </div>
        <ul className="collections list">
          {/* <Link to='/collection-creation'>Add Collection</Link> */}
          {/* <li>
            <Link className="list-item-add-wrapper" to="/collections/new">
              <div className="list-item-add-inner">
                <p className="plus">+</p>
                <p className="add-text">Add New</p>
              </div>
            </Link>
          </li> */}
          {collectionsLis}
        </ul>
      </div>
    );
  }
}

export default FilteredCollections;