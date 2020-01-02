import React from 'react';

class Generate extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      // <p>generate</p>
      <div className="generate-container">
        <div className="generate-filters-container">
          <div className="generate-filter">
            <p>Occasion</p>
            <div className="dropdown">

            </div>
          </div>
          <div className="generate-filter">
            <p>Temperature</p>
            <div className="dropdown">

            </div>
          </div>
          <div className="generate-filter">
            <p>Precipitation</p>
            <div className="dropdown">

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