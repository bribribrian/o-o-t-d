import React from 'react';
import { Redirect, Link } from 'react-router-dom'

class DeleteModal extends React.Component{
  constructor(props){
    super(props);
    console.log(props);
    this.handleClick = this.handleClick.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  handleClick(e){
    console.log(this.props);
    e.preventDefault();
    const { deleteCollection, closeWarning, collection } = this.props;
    // const { id, img } = e.currentTarget.dataset;

    deleteCollection(collection._id)
        .then(res => {
            window.location.hash = `#/collections`
        });
    // this.redirect();
    closeWarning();
  }

  redirect(){
      return <Redirect to="/collections" />
  }

  render(){
    // let { modalSlice: currentCategory, items } = this.props; 

    // if (currentCategory === 'none'){
    //   return <p></p>
    // } else if (currentCategory === "shoe") {
    //   currentCategory += "s";
    // }

    // let filteredItems = [];
    // Object.values(items).forEach((item) => {
    //   if(item.category === currentCategory) filteredItems.push(item);
    // });

    // filteredItems = filteredItems.map((item) => {
    //   return (
    //     <li key={item._id} onClick={this.handleClick} data-id={item._id} data-img={item.image_url}>
    //       <div className="modal-item-container list-item-container">
    //         <div className="modal-item-img-wrapper list-item-img-wrapper" style={{ backgroundImage: 'url(' + item.image_url + ')' }}></div>
    //         <div className="modal-item-hover-info list-item-hover-info">
    //           <p>{item.label}</p>
    //         </div>
    //       </div>
    //     </li>
    //   );
    // });
    if (this.props.deleteModalSlice === 'closed') {
        return null
    } 
    return(
      <div className="delete-collection-modal-wrapper" onClick={this.props.receivePickNone}>
        <div className="modal-inner">
          <div className="items-container modal-container list-container">
            <div className="delete-collection-list-header">
              <h2>Are you sure you want to delete the collection?</h2>
            </div>
            <button onClick={this.handleClick}>Delete Collection</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteModal;