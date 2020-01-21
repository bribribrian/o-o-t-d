import React from 'react';
import { itemImageToAWS } from '../../util/aws_util';

import ModalContainer from '../modal/modal_container';
import CollectionPreview from './collection_create_form_preview';
import Dropdown from '../dropdown/dropdown';



class CollectionCreateForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      label: '',
      hat_id: null,
      top_id: null,
      bottom_id: null,
      shoe_id: null,
      image_url: null,
      imageFile: null,
      user_id: this.props.currentUser.id,
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

    this.previewImages = [];

    this.pickItem = this.pickItem.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleUpload = this.handleUpload.bind(this);
    this.handleImageInput = this.handleImageInput.bind(this);

    this.getActiveDD = this.getActiveDD.bind(this);
    this.setActiveDD = this.setActiveDD.bind(this);
    this.updateDD = this.updateDD.bind(this);
    this.removeActiveDD = this.removeActiveDD.bind(this);
    this.getActiveDDIcon = this.getActiveDDIcon.bind(this);
  }

  componentDidMount(){
    this.props.fetchItems();
  }

  handleSubmit(e){
    e.preventDefault();
    // debugger;
    this.props.createCollection(this.state);
  }

  pickItem(type, id, imgUrl) {
    this.setState({[type + "_id"]: id});
    this.previewImages.push(
      <li key={id}>
        <img src={imgUrl} alt='description goes here'></img>
      </li>
    )
  }

  // ----------------------------------------------------------------------------------

  handleImageInput(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];

    reader.onloadend = () =>
      this.setState({ image_url: reader.result, imageFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ image_url: "", imageFile: null });
    }
  }

  handleUpload(e) {
    e.preventDefault();
    const formData = new FormData();
    if (this.state.imageFile) {
      formData.append('image', this.state.imageFile);
    }
    // send ajax request, when we get json back, we save item (state) to the database
    itemImageToAWS(formData)
      .then(({ data }) => {
        this.setState({ image_url: data['imageUrl'] });
      });
  }

  // ----------------------------------------------------------------------------------

  update(field){
    return e => this.setState({[field] : e.currentTarget.value});
  }

  setActiveDD(type) {
    return e => {
      e.preventDefault();
      // this.state.activeDD[type] = !this.state.activeDD[type];
      let activeDD = this.state.activeDD;
      activeDD[type] = !this.state.activeDD[type];
      this.setState(Object.assign({}, this.state, activeDD));
    }
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
      this.setState(Object.assign({}, this.state, data));
    }
  }

  getActiveDDIcon(type) {
    return this.state.activeDD[type] ? "up" : "down";
  }
  
  render(){
    const imgTag = this.state.image_url ? (
      <>
        <img src={this.state.image_url} alt='description goes here' />
      </>
    ) : null;


    // debugger;
    return(
      <div className="collection-creation-container">
        <p>CollectionCreateForm</p>
        <CollectionPreview previewImages={this.previewImages}/>
        <ModalContainer pickItem={this.pickItem} />
        <button onClick={this.props.receivePickHat}>Hat</button>
        <button onClick={this.props.receivePickTop}>Top</button>
        <button onClick={this.props.receivePickBottom}>Bottom</button>
        <button onClick={this.props.receivePickShoes}>Shoes</button>
        <div>
          <form onSubmit={this.handleUpload}>
            <input type='file' onChange={this.handleImageInput}></input>
              {imgTag}
            <input type='submit'></input>
          </form>
        </div>
        <div>
          <p>Label</p>
          <input type='text' value={this.state.label} onChange={this.update('label')}></input>
        </div>
        <div className="dd-container">
          <div className="dd-bm">
            <Dropdown label="occasion"
              value={this.state.data.occasion}
              list={["casual", "formal", "semi-formal"]}
              getActiveDD={this.getActiveDD}
              setActiveDD={this.setActiveDD}
              updateDD={this.updateDD}
              removeActiveDD={this.removeActiveDD}
              getActiveDDIcon={this.getActiveDDIcon}
            />
          </div>
          <div className="dd-bm">
            <Dropdown label="temperature"
              value={this.state.data.temperature}
              list={["all", "hot", "warm", "chill", "cold"]}
              getActiveDD={this.getActiveDD}
              setActiveDD={this.setActiveDD}
              updateDD={this.updateDD}
              removeActiveDD={this.removeActiveDD}
              getActiveDDIcon={this.getActiveDDIcon}
            />
          </div>
          <div className="dd-bm">
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
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>

    );
  }
}

export default CollectionCreateForm;