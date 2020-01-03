import React from 'react';

import {Link, Route} from 'react-router-dom';

class CollectionsList extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    // debugger;
    return(
      <ul>
        <Link to='/collection-creation'>Add Collection</Link>
        {this.props.collectionsArr}
      </ul>
    )
  }
}

export default CollectionsList;