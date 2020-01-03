import React from 'react';


class Modal extends React.Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    // debugger;
    if(this.props.modalSlice === 'hat'){
      this.props.pickHat(e.currentTarget.dataset.value, e.currentTarget.dataset.image_url);
    }else if(this.props.modalSlice === 'top'){
      this.props.pickTop(e.currentTarget.dataset.value, e.currentTarget.dataset.image_url);
    }else if(this.props.modalSlice === 'bottom'){
      this.props.pickBottom(e.currentTarget.dataset.value, e.currentTarget.dataset.image_url);
    }else if(this.props.modalSlice === 'shoes'){
      this.props.pickShoe(e.currentTarget.dataset.value, e.currentTarget.dataset.image_url);
    }

    this.props.receivePickNone();
  }


  render(){
    // debugger;
    if(this.props.modalSlice === 'none'){
      return <p></p>
    }

    let currentCategory = this.props.modalSlice;
    let itemsArr = Object.values(this.props.items);

    let filteredItems = [];

    itemsArr.forEach((item) => {
      if(item.category === currentCategory){
        filteredItems.push(item);
      }
    });

    filteredItems = filteredItems.map((item) => {
      // debugger;
      return <li key={item._id}>
        <div onClick={this.handleClick} data-value={item._id} data-img={item.image_url}>
          <img src={item.image_url}></img>
        </div>
      </li>
    })

    return(
      <ul>
        {filteredItems}
      </ul>
    );
  }
}

export default Modal;