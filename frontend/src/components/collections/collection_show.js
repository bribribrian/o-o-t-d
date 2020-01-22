import React from 'react';
import {Link} from 'react-router-dom';

class CollectionShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.itemsIds.forEach((id) => {
      if(id !== undefined){
        this.props.fetchItem(id);
      }
    });
  }

  render(){

    if(Object.keys(this.props.items).length == 0){
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
    collectionItems = collectionItems.map((item) => {
      return <li key={item._id}>
        <p>{item.label}</p>
        <img src={item.image_url}></img>
      </li>
    })

    let editPath = `${this.props.path}/edit`;

    return(
      <div>
        <Link to={editPath}><p>Edit Collection</p></Link>
        <p>{this.props.collection.label}</p>
        <ul>
          {collectionItems}
        </ul>
      </div>
    );
  }

}

export default CollectionShow;