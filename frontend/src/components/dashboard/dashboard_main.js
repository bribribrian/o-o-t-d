import React from 'react';

import GeneratedOutfitContainer from './dashboard_main_components/generated_outfit_container';
import ItemsContainer from './dashboard_main_components/items_container';
import CollectionsContainer from './dashboard_main_components/collections_container';
import GenerateContainer from './dashboard_main_components/generate_container';

class DashboardMain extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    // debugger;
    let component;
    if(this.props.navSlice === 'generated'){
      component = <GeneratedOutfitContainer/>;
    }else if(this.props.navSlice === 'items'){
      component = <ItemsContainer/>;
    }else if(this.props.navSlice === 'collections'){
      component = <CollectionsContainer/>;
    }else{
      component = <GenerateContainer/>;
    }
    return(
      <div className="main-container">
        {component}
      </div>
    );
  }
}

export default DashboardMain;