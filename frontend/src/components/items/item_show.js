import React from 'react';
import { Link } from 'react-router-dom';

// what is the best time to fetch collections???
// I need them for this but dont want to re fetch every time I go to an item show page
class ItemShow extends React.Component{
  constructor(props){
    super(props);

  }


  render(){
    let {item, memberCollections} = this.props;
    let memberCollectionsArr = memberCollections.map((c) => {
      let showPath = `/collections/${c._id}`
      return (
        <li key={c._id}>
          <Link to={showPath}>
            <div className="collection-container list-item-container">
              <div className="collection-img-wrapper list-item-img-wrapper" style={{ backgroundImage: 'url(' + c.image_url + ')' }}></div>
              <div className="collection-hover-info list-item-hover-info">
                  <p>{c.label}</p>
              </div>
            </div>
          </Link>
        </li>
      );
    })
    return(
      <div className='item-show-container'>
        <p>{item.label}</p>
        <img src={item.image_url}></img>
        <p>This item is a part of these collections</p>
        <ul>
          {memberCollectionsArr}
        </ul>
      </div>
    )
  }
}

export default ItemShow;