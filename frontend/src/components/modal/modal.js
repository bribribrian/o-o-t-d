import React from 'react';

class Modal extends React.Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();

    const { modalSlice, pickItem, receivePickNone } = this.props;
    const { id, img } = e.currentTarget.dataset;

    pickItem(modalSlice, id, img);
    receivePickNone();
  }


  render(){
    // debugger;
    let { modalSlice: currentCategory, items } = this.props;

    if (currentCategory === 'none'){
      return <p></p>
    } else if (currentCategory === "shoe") {
      currentCategory += "s";
    }

    let filteredItems = [];
    Object.values(items).forEach((item) => {
      if(item.category === currentCategory) filteredItems.push(item);
    });

    filteredItems = filteredItems.map((item) => {
      // debugger;
      return (
        <li key={item._id} onClick={this.handleClick} data-id={item._id} data-img={item.image_url}>
          <div className="modal-item-container list-item-container">
            <div className="modal-item-img-wrapper list-item-img-wrapper" style={{ backgroundImage: 'url(' + item.image_url + ')' }}></div>
            <div className="modal-item-hover-info list-item-hover-info">
              <p>{item.label}</p>
            </div>
          </div>
        </li>
      );
    });

    return(
      <div className="modal-wrapper" onClick={this.props.receivePickNone}>
        <div className="modal-inner">
          <div className="items-container modal-container list-container">
            <div className="list-header">
              <h2>Select an item</h2>
            </div>
            <ul className="modal-items list">
              {filteredItems}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;