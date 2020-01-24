import React from 'react';

class CollectionErrors extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    debugger;
    let errorsList = this.props.errors.map((error) => {
      return <li key={error.length}><p>{error}</p></li>;
    })

    debugger;
    return(
      <ul>
        {errorsList}
      </ul>
    );
  }
}

export default CollectionErrors;