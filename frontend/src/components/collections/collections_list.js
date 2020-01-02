import React from 'react';

class CollectionsList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <ul>
        {this.props.collectionsArr}
      </ul>
    )
  }
}

export default CollectionsList;