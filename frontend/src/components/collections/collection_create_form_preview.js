import React from 'react';

class CollectionPreview extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <ul className="col-preview-images-ul">
        {this.props.previewImages}
      </ul>
    );
  }
}

export default CollectionPreview;