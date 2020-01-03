import React from 'react';

class CollectionPreview extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    // debugger;
    return(
      <ul>
        {this.props.previewImages}
      </ul>
    );
  }
}

export default CollectionPreview;