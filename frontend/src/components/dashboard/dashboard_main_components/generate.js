import React from 'react';

class Generate extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      occasion: '',
      temperature: '',
      precipitation: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.fetchCollections(this.props.currentUser.id, this.state);
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
            <button className="dropdown">
              
            </button>
          </div>
          <div className="generate-filter">
            <p>Temperature</p>
            <div className="dropdown">
              <input type='text'></input>
            </div>
          </div>
          <div className="generate-filter">
            <p>Precipitation</p>
            <div className="dropdown">
              <input type='text'></input>
            </div>
          </div>
        </div>
        <div className="generate-button">
          <input type="submit"></input>
        </div>
      </div>
    );
  }
}

export default Generate;