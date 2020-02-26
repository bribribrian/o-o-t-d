import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import DeleteModal from '../../components/delete_modal/delete_modal_container';

class CollectionShow extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e){
    // const collectionId = this.props.collection._id
    // this.props.deleteCollection(collectionId);
    e.preventDefault();
    this.props.openWarning();
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
      let showPath = `/items/${item._id}`;
      return <li className="show-col-li-container" key={item._id}>
        <Link to={showPath}>
          <p className="show-col-li-label" >{item.label}</p>
          <div className="show-col-li-image-container">
            <div className="show-col-li-image-inner">
              <img className="show-col-li-image" 
                src={item.image_url} 
                alt='description goes here'/>
            </div>
          </div>
        </Link>
      </li>
    })

    let editPath = `${this.props.path}/edit`;

    return(
      <div>
        <div className="show-col-header">
          <h2>{this.props.collection ? this.props.collection.label : ""}</h2>
        </div>
        <div className="show-col-buttons-container">
          <Link to={editPath}><p className="show-edit-col-button">Edit Collection</p></Link>
          <a className="show-delete-col-button" onClick={this.handleSubmit}><p>Delete Collection</p></a>
          {/* <button className="show-delete-col-button" onClick={this.handleSubmit}>Delete Collection</button> */}
        </div>
        <ul className="show-col-items-ul">
          {collectionItems}
          {/* <Link to="/collections"><button onClick={this.handleSubmit}>Delete</button></Link> */}
        </ul>
        <DeleteModal/>
      </div>
    );
  }

}

export default CollectionShow;