import React from 'react';

class CollectionsList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    // debugger;
    return(
      <ul>
        {this.props.collectionsArr}
      </ul>
    )
  }
}

export default CollectionsList;