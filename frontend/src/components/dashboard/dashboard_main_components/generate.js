import React from 'react';

class Generate extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      occasion: 'casual',
      temperature: 'all',
      precipitation: 'sunny'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.fetchCollectionsWithFilters(this.props.currentUser.id, this.state);
  }

  update(field){
    return e => this.setState({ [field] : e.currentTarget.value});
  }

  render(){
    return(
      <div className="generate-container">
        <div className="generate-filters-container">
          <div className="generate-filter">
            <p>Occasion</p>
            <input type='text' onChange={this.update("occasion")} value={this.state.occasion}></input>
            {/* <button className="dropdown">
            </button> */}
          </div>
          <div className="generate-filter">
            <p>Temperature</p>
            <div className="dropdown">
              <input type='text' onChange={this.update("temperature")} value={this.state.temperature}></input>
            </div>
          </div>
          <div className="generate-filter">
            <p>Precipitation</p>
            <div className="dropdown">
              <input type='text' onChange={this.update("precipitation")} value={this.state.precipitation}></input>
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