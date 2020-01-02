import React from 'react';

class CollectionShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.itemsIds.forEach((id) => {
      // debugger;
      if(id !== undefined){
        // debugger;
        this.props.fetchItem(id);
      }
    });
  }

  render(){

    if(Object.keys(this.props.items).length < 4){
      return <p>loading</p>
    };
    let itemsArr = Object.values(this.props.items);

    let collectionItems = [];
    itemsArr.forEach((item) => {
      if(item !== null){
        if(this.props.itemsIds.includes(item._id)){
          collectionItems.push(item);
        }
      }
    })
    debugger;
    collectionItems = collectionItems.map((item) => {
      return <li>
        <p>{item.label}</p>
        <img src={item.image_url}></img>
      </li>
    })

    return(
      <div>
        <p>{this.props.collection.label}</p>
        <ul>
          {collectionItems}
        </ul>
      </div>
    );
  }

}

export default CollectionShow;