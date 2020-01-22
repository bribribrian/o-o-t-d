import React from 'react';
<<<<<<< HEAD
import {Link} from 'react-router-dom';
=======
import { Link, Redirect } from 'react-router-dom';
>>>>>>> master

class CollectionShow extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(){
    const collectionId = this.props.collection._id
    this.props.deleteCollection(collectionId);
  }

  componentDidMount(){
    this.props.itemsIds.forEach((id) => {
      if(id !== undefined){
        this.props.fetchItem(id);
      }
    });
  }

  render(){

    if(Object.keys(this.props.items).length === 0){
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
        <img src={item.image_url} alt='description goes here'></img>
      </li>
    })

    let editPath = `${this.props.path}/edit`;

    return(
      <div>
        <Link to={editPath}><p>Edit Collection</p></Link>
        <p>{this.props.collection.label}</p>
        <ul>
          {collectionItems}
          <Link to="/collections"><button onClick={this.handleSubmit}>Delete</button></Link>
        </ul>
      </div>
    );
  }

}

export default CollectionShow;