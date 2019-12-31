import React from 'react';

class Navbar extends React.Component{
  constructor(props){
    super(props);

    this.sendGenerated = this.sendGenerated.bind(this);
  }

  sendGenerated(e){
    e.preventDefault();
    this.props.generated();
  }

  sendItems(e){
    e.preventDefault();
    this.props.items();
  }

  sendCollections(e){
    e.preventDefault();
    this.props.collections();
  }


  render(){
    return(
      <div className="navbar-container">
        <div className="navbar-weather">
          {/* weather component */}
        </div>
        <div>
          <button onClick={this.sendGenerated}>Generate</button>
          <button onClick={this.sendCollections}>Collections</button>
          <button onClick={this.sendItems}>Items</button>
        </div>
        <div>

        </div>

      </div>
    );
  }
}

export default Navbar;