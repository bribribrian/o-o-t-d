import React from 'react';

class Collections extends React.Component{
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchCollections();
  }

  render(){

    if(Object.keys(this.props.collections).length === 0){
      return <p>loading</p>
    }
    let collectionsArr = Object.values(this.props.collections);

    collectionsArr = collectionsArr.map((collection) => {
      return <li key={collection._id}>{collection._id}</li>;
    })

    return(
      <ul>
        {collectionsArr}
      </ul>
    )
  }
}

export default Collections;