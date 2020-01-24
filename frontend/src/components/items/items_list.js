import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Dropdown from '../dropdown/dropdown';


class ItemsList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      filter: "all",
      activeDD: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getActiveDD = this.getActiveDD.bind(this);
    this.setActiveDD = this.setActiveDD.bind(this);
    this.updateDD = this.updateDD.bind(this);
    this.removeActiveDD = this.removeActiveDD.bind(this);
    this.getActiveDDIcon = this.getActiveDDIcon.bind(this);
  }

  setActiveDD(type) {
    return e => {
      e.preventDefault();
      // this.state.activeDD = !this.state.activeDD;
      let activeDD = {activeDD: !this.state.activeDD};
      this.setState(Object.assign({}, this.state, activeDD));
    };
  }

  removeActiveDD(type) {
    return e => {
      // this.state.activeDD = false;
      let activeDD = {activeDD: false};
      this.setState(Object.assign({}, this.state, activeDD));
    }
  }

  getActiveDD(type) {
    return this.state.activeDD ? " active" : "";
  }

  updateDD([type, value]) {
    return e => {
      this.removeActiveDD(type);
      // this.state.filter = value;
      this.setState(Object.assign(this.state, {filter: value}));
      console.log(this.state);
    }
  }

  getActiveDDIcon(type) {
    return this.state.activeDD ? "up" : "down";
  }

  handleSubmit(e){
    // this.setState({
    //   this.state.entities[e.currentTarget.id]
    // })
    this.props.deleteItem(e.currentTarget.id)
  }

  render() {
    const { items } = this.props;
    const itemsArr = Object.values(items);
    let filteredItemsArr;

    // map to filter
    if (this.state.filter === "all"){
      filteredItemsArr = itemsArr;
    } else if (this.state.filter) {
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
      let showPath = `/items/${item._id}`;
      return (
        <li key={item._id}>
          <Link to={showPath}>
            <div className="item-container list-item-container">
              <div className="item-img-wrapper list-item-img-wrapper" style={{ backgroundImage: 'url(' + item.image_url + ')' }}></div>
              <div className="item-hover-info list-item-hover-info">
                <p>{item.label}</p>
                <Link to="/items"><button id={item._id} onClick={this.handleSubmit}>Delete</button></Link>
              </div>
            </div>
            </Link>
        </li>
      );
    });

    return (
      <div className="items-container list-container">
        <div className="list-header">
          <h2><Link to="/items">Items</Link></h2>
          <Dropdown label="category"
            hideLabel={true}
            value={this.state.filter}
            list={["all", "hat", "top", "bottom", "shoes"]}
            getActiveDD={this.getActiveDD}
            setActiveDD={this.setActiveDD}
            updateDD={this.updateDD}
            removeActiveDD={this.removeActiveDD}
            getActiveDDIcon={this.getActiveDDIcon}
          />
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