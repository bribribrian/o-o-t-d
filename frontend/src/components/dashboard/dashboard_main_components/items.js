import React from 'react';

import ItemCreationForm from '../../items/item_creation_form_container';
import { Link } from 'react-router-dom';

class Items extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: null
    };

  }
  
  componentDidMount(){
    this.props.fetchItems();
  }

  update(field){
    return e => this.setState({filter: field});
  }

  render() {
    if(Object.keys(this.props.items).length === 0){
      return <p>loading...</p>;
    }


    let itemsArr = Object.values(this.props.items);
    let filteredItemsArr;

    // debugger;
    // map to filter
    if(this.state.filter){
      filteredItemsArr = [];
        itemsArr.forEach((item) => {
        if(item.category === this.state.filter){
          filteredItemsArr.push(item);
        }
      })
    } else{
      filteredItemsArr = itemsArr;
    }

    // map to get image and label only
    filteredItemsArr = filteredItemsArr.map((item) => {
      return (
        <li key={item._id}>
          <div className="item-container">
            {/* <img src={item.image_url}></img> */}
            <div className="item-img-wrapper" style={{backgroundImage: 'url(' + item.image_url + ')'}}></div>
            <div className="item-hover-info">
              <p>{item.label}</p>
            </div>
          </div>
        </li>
      );
    })


    return (
      <div className="items-container">
        <h2><Link to="/items">Items</Link></h2>
        <div className="item-filters">
          <button value="hat" onClick={this.update('hat')}>Hat</button>
          <button value="top" onClick={this.update('top')}>Top</button>
          <button value="bottom" onClick={this.update('bottom')}>Bottom</button>
          <button value="shoes" onClick={this.update('shoes')}>Shoes</button>
        </div>
        <ul className="items">
          <li>
            <Link className="item-add-wrapper" to="/item-creation">
              <div className="item-add-inner">
                <p className="plus">+</p>
                <p className="add-text">Add New</p>
              </div>
            </Link>
          </li>
          {filteredItemsArr}
        </ul>
      </div>
    );
  }
}

export default Items;