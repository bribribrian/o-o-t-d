import React from 'react';

class ItemsErrors extends React.Component{
  constructor(props){
    super(props);

  }

  render(){

    let errorsList = this.props.errors.map((error) => {
      return <li key={error.length}>{error}</li>;
    })

    return(
      <ul>
        {errorsList}
      </ul>
    );
  }
}

export default ItemsErrors;