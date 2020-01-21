import React from 'react';
import Dropdown from '../../dropdown/dropdown';
import FilteredCollectionsContainer from '../../collections/filtered_collections_container';

class Generate extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      data: {
        occasion: 'casual',
        temperature: 'all',
        precipitation: 'sunny'
      },
      activeDD: {
        occasion: false,
        temperature: false,
        precipitation: false
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getActiveDD = this.getActiveDD.bind(this);
    this.setActiveDD = this.setActiveDD.bind(this);
    this.updateDD = this.updateDD.bind(this);
    this.removeActiveDD = this.removeActiveDD.bind(this);
    this.getActiveDDIcon = this.getActiveDDIcon.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.fetchCollectionsWithFilters(this.props.currentUser.id, this.state.data);
  }

  update(field){
    return e => this.setState({ [field] : e.currentTarget.value});
  }

  setActiveDD(type) {
    return e => {
      e.preventDefault();
      // this.state.activeDD[type] = !this.state.activeDD[type];
      let activeDD = this.state.activeDD;
      activeDD[type] = !this.state.activeDD[type];
      this.setState(Object.assign({}, this.state, activeDD));
    };
  }

  removeActiveDD(type) {
    return e => {
      // this.state.activeDD[type] = false;
      let activeDD = this.state.activeDD;
      activeDD[type] = false;
      this.setState(Object.assign({}, this.state, activeDD));
    }
  }

  getActiveDD(type) {
    return this.state.activeDD[type] ? " active" : "";
  }

  updateDD([type, value]) {
    return e => {
      this.removeActiveDD(type);
      // this.state.data[type] = value;
      let data = this.state.data;
      data[type] = value;
      this.setState(Object.assign({}, this.state, data))
    }
  }

  getActiveDDIcon(type) {
    return this.state.activeDD[type] ? "up" : "down";
  }

  render(){
    return(
      <div>
        <div className="generate-container">
          <div className="generate-filters-container">
            <Dropdown label="occasion" 
              value={this.state.data.occasion} 
              list={["casual", "formal", "semi-formal"]}
              getActiveDD={this.getActiveDD} 
              setActiveDD={this.setActiveDD} 
              updateDD={this.updateDD}
              removeActiveDD={this.removeActiveDD}
              getActiveDDIcon={this.getActiveDDIcon}
            />
            <Dropdown label="temperature"
              value={this.state.data.temperature}
              list={["all", "hot", "warm", "chill", "cold"]}
              getActiveDD={this.getActiveDD}
              setActiveDD={this.setActiveDD}
              updateDD={this.updateDD}
              removeActiveDD={this.removeActiveDD}
              getActiveDDIcon={this.getActiveDDIcon}
            />
            <Dropdown label="precipitation"
              value={this.state.data.precipitation}
              list={["sunny", "rainy", "snowy"]}
              getActiveDD={this.getActiveDD}
              setActiveDD={this.setActiveDD}
              updateDD={this.updateDD}
              removeActiveDD={this.removeActiveDD}
              getActiveDDIcon={this.getActiveDDIcon}
            />
          </div>
          <div className="generate-button">
            <input type="submit" onClick={this.handleSubmit} value="Generate"/>
          </div>
        </div>
        <FilteredCollectionsContainer/>
      </div>
    );
  }
}

export default Generate;