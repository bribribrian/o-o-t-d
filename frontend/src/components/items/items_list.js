import React from 'react';
import { Link } from 'react-router-dom';

class ItemsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: null
    };
  }

  update(field) {
    return e => this.setState({ filter: field });
  }

  render() {
    const { items } = this.props;
    const itemsArr = Object.values(items);
    let filteredItemsArr;

    // map to filter
    if (this.state.filter) {
      filteredItemsArr = [];
      itemsArr.forEach((item) => {
        if (item.category === this.state.filter) {
          filteredItemsArr.push(item);
        }
      });
    } else {
      filteredItemsArr = itemsArr;
    }

    // map to get image and label only
    filteredItemsArr = filteredItemsArr.map((item) => {
      return (
        <li key={item._id}>
          <div className="item-container list-item-container">
            <div className="item-img-wrapper list-item-img-wrapper" style={{ backgroundImage: 'url(' + item.image_url + ')' }}></div>
            <div className="item-hover-info list-item-hover-info">
              <p>{item.label}</p>
            </div>
          </div>
        </li>
      );
    });

    return (
      <div className="items-container list-container">
        <h2><Link to="/items">Items</Link></h2>
        <div className="item-filters">
          <button value="hat" onClick={this.update('hat')}>Hat</button>
          <button value="top" onClick={this.update('top')}>Top</button>
          <button value="bottom" onClick={this.update('bottom')}>Bottom</button>
          <button value="shoes" onClick={this.update('shoes')}>Shoes</button>
        </div>
        <ul className="items list">
          <li>
            <Link className="list-item-add-wrapper" to="/items/new">
              <div className="list-item-add-inner">
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

export default ItemsList;