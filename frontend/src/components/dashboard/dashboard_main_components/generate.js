import React from 'react';
import Dropdown from '../../dropdown/dropdown';

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
      this.state.activeDD[type] = !this.state.activeDD[type];
      this.setState(this.state);
    };
  }

  removeActiveDD(type) {
    return e => {
      this.state.activeDD[type] = false;
      this.setState(this.state);
    }
  }

  getActiveDD(type) {
    return this.state.activeDD[type] ? " active" : "";
  }

  updateDD([type, value]) {
    return e => {
      this.removeActiveDD(type);
      this.state.data[type] = value;
    }
  }

  getActiveDDIcon(type) {
    return this.state.activeDD[type] ? "up" : "down";
  }


  render(){
    return(
      <div className="generate-container">
        <div className="generate-filters-container">
          <div className="dd-outer">
            <label>occasion</label>
            <div className="dd-wrapper">
              <button className={"dd" + this.getActiveDD("occasion")} 
                onClick={this.setActiveDD("occasion")}
                onBlur={this.removeActiveDD("occasion")}
              >
                <p className="dd-value">
                  <span>{this.state.data.occasion}</span>
                  <i class="material-icons">{"arrow_drop_" + this.getActiveDDIcon("occasion")}</i>
                </p>
                <div className="dd-inner">
                  <ul className="dd-list">
                    <li onClick={this.updateDD(["occasion", "casual"])}><span>casual</span></li>
                    <li onClick={this.updateDD(["occasion", "formal"])}><span>formal</span></li>
                    <li onClick={this.updateDD(["occasion", "semi-formal"])}><span>semi-formal</span></li>
                  </ul>
                </div>
              </button>
            </div>
          </div>
          <div className="dd-outer">
            <label>temperature</label>
            <div className="dd-wrapper">
              <button className={"dd" + this.getActiveDD("temperature")}
                onClick={this.setActiveDD("temperature")}
                onBlur={this.removeActiveDD("temperature")}
              >
                <p className="dd-value">
                  <span>{this.state.data.temperature}</span>
                  <i class="material-icons">{"arrow_drop_" + this.getActiveDDIcon("temperature")}</i>
                </p>
                <div className="dd-inner">
                  <ul className="dd-list">
                    <li onClick={this.updateDD(["temperature", "all"])}><span>all</span></li>
                    <li onClick={this.updateDD(["temperature", "hot"])}><span>hot</span></li>
                    <li onClick={this.updateDD(["temperature", "warm"])}><span>warm</span></li>
                    <li onClick={this.updateDD(["temperature", "chill"])}><span>chill</span></li>
                    <li onClick={this.updateDD(["temperature", "cold"])}><span>cold</span></li>
                  </ul>
                </div>
              </button>
            </div>
          </div>
          <div className="dd-outer">
            <label>precipitation</label>
            <div className="dd-wrapper">
              <button className={"dd" + this.getActiveDD("precipitation")}
                onClick={this.setActiveDD("precipitation")}
                onBlur={this.removeActiveDD("precipitation")}
              >
                <p className="dd-value">
                  <span>{this.state.data.precipitation}</span>
                  <i class="material-icons">{"arrow_drop_" + this.getActiveDDIcon("precipitation")}</i>
                </p>
                <div className="dd-inner">
                  <ul className="dd-list">
                    <li onClick={this.updateDD(["precipitation", "sunny"])}><span>sunny</span></li>
                    <li onClick={this.updateDD(["precipitation", "rainy"])}><span>rainy</span></li>
                    <li onClick={this.updateDD(["precipitation", "snowy"])}><span>snowy</span></li>
                  </ul>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="generate-button">
          <input type="submit" onClick={this.handleSubmit} value="Generate"/>
        </div>
      </div>
    );
  }
}

export default Generate;