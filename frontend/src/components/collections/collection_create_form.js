import React from 'react';
import { itemImageToAWS } from '../../util/aws_util';

import ModalContainer from '../modal/modal_container';
import CollectionPreview from './collection_create_form_preview';
import Dropdown from '../dropdown/dropdown';
import CollectionErrors from '../errors/collection_errors';



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
    this.errors = [];
    this.renderedErrors = <p></p>;

    this.previewImages = [];

    this.pickItem = this.pickItem.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleTotalSubmit = this.handleTotalSubmit.bind(this);
    // this.handleUpload = this.handleUpload.bind(this);
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

  componentDidUpdate(prevProps, prevState){
    if(this.errors.length > 0){
      this.errors = [];
    }

  }

  handleTotalSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    if (this.state.imageFile) {
      formData.append('image', this.state.imageFile);
    }
    itemImageToAWS(formData)
      .then(({ data }) => {
        this.setState({ image_url: data['imageUrl'] });
    });
    e.preventDefault();
    if(this.validateInput() === 0){
      // this.renderedErrors = <p></p>;
      this.setState({errors: []});
      this.props.createCollection(this.state)
        .then(res => {
          window.location.hash = `#/collections`
        });
    }else{
      this.forceUpdate();
    }
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.validateInput() === 0){
      // this.renderedErrors = <p></p>;
      this.setState({errors: []});
      this.props.createCollection(this.state)
        .then(res => {
          window.location.hash = `#/collections`
        });
    }else{
      this.forceUpdate();
    }
  }

  validateInput(){
    let errorsCount = 0;
    let items = [
      this.state.hat_id,
      this.state.top_id,
      this.state.bottom_id,
      this.state.shoe_id
    ];
    let itemsCount = 0;
    items.forEach(item => {
      if(item){
        itemsCount += 1;
      }
    })
    if(itemsCount < 1){
      this.errors.push('must select at least one item');
      errorsCount += 1;
    }
    if(!this.state.label){
      this.errors.push('you must give the collection a label');
      errorsCount += 1;
    }
    if(!this.state.image_url || this.state.image_url === ""){
      this.errors.push('you must submit an image for the collection');
      errorsCount += 1;
    }
    return errorsCount;
  }

  pickItem(type, id, imgUrl) {
    if(this.state[`${type}_id`]){
      for(let i = 0; i < this.previewImages.length; i++){
        let curImage = this.previewImages[i];
        if(curImage.key === this.state[`${type}_id`]){
          this.previewImages.splice(i, 1);
        }
      }
    }
    this.setState({[type + "_id"]: id});
    this.previewImages.push(
      <li className="col-preview-image-li-container" key={id}>
        <img className="col-preview-image-li" src={imgUrl} alt='description goes here'></img>
        <input className="col-preview-image-li-button" type="submit" value="Clear Item" onClick={this.clear(`${type}_id`, id)} />
        {/* <button className="col-preview-image-li-button" onClick={this.clear(`${type}_id`, id)}>Clear Item</button> */}
      </li>
    )
  }

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

  // handleUpload(e) {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   if (this.state.imageFile) {
  //     formData.append('image', this.state.imageFile);
  //   }
  //   // send ajax request, when we get json back, we save item (state) to the database
  //   itemImageToAWS(formData)
  //     .then(({ data }) => {
  //       this.setState({ image_url: data['imageUrl'] });
  //     });
  // }

  clear(field, id){
    return e => {
      this.setState({[field] : null})
      for(let i = 0; i < this.previewImages.length; i++){
        let curImage = this.previewImages[i];
        if(curImage.key === id){
          this.previewImages.splice(i, 1);
        }
      }
    };
  }

  update(field){
    return e => this.setState({[field] : e.currentTarget.value});
  }

  setActiveDD(type) {
    return e => {
      e.preventDefault();
      let activeDD = this.state.activeDD;
      activeDD[type] = !this.state.activeDD[type];
      this.setState(Object.assign({}, this.state, {activeDD: activeDD}));
    }
  }

  removeActiveDD(type) {
    return e => {
      let activeDD = this.state.activeDD;
      activeDD[type] = false;
      this.setState(Object.assign({}, this.state, {activeDD: activeDD}));
    }
  }

  getActiveDD(type) {
    return this.state.activeDD[type] ? " active" : "";
  }

  updateDD([type, value]) {
    return e => {
      this.removeActiveDD(type);
      let data = this.state.data;
      data[type] = value;
      this.setState(Object.assign({}, this.state, {[type]: value}));
    }
  }

  getActiveDDIcon(type) {
    return this.state.activeDD[type] ? "up" : "down";
  }
  
  render(){
    const imgTag = this.state.image_url ? (
      <>
        <img className="chosen-col-image" src={this.state.image_url} alt='description goes here' />
      </>
    ) : <div className="empty-col-image">No Preview Image</div>;


    return(
      <div className="collection-creation-container">
        <div className="collection-creation-header">
          <h2>Create New Collection</h2>
        </div>
        <div>
          <p>Label</p>
          <input type='text' value={this.state.label} onChange={this.update('label')}></input>
        </div>
        <div>
          <form onSubmit={this.handleTotalUpload}>
            <label className="col-creation-image-label">
              Select Collection Image
              <input className="col-creation-image-button" type='file' onChange={this.handleImageInput}></input>
            </label>
            {imgTag}
            {/* <input type='submit'></input> */}
          </form>
        </div>
        <p className="col-add-items-title">Add Items</p>
        <div className="col-pick-items-container">
          <ModalContainer pickItem={this.pickItem} />
          <input className="col-pick-item-button" type="submit" value="Hat" onClick={this.props.receivePickHat} />
          <input className="col-pick-item-button" type="submit" value="Top" onClick={this.props.receivePickTop} />
          <input className="col-pick-item-button" type="submit" value="Bottom" onClick={this.props.receivePickBottom} />
          <input className="col-pick-item-button" type="submit" value="Shoes" onClick={this.props.receivePickShoes} />
          {/* <button onClick={this.clear('hat_id', this.state.hat_id)}>Clear Hat</button> */}
          {/* <button onClick={this.clear('top_id', this.state.top_id)}>Clear Top</button> */}
          {/* <button onClick={this.clear('bottom_id', this.state.bottom_id)}>Clear Bottom</button> */}
          {/* <button onClick={this.clear('shoe_id', this.state.shoe_id)}>Clear Shoes</button> */}
        </div>
        <CollectionPreview previewImages={this.previewImages} />
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
        <div className="btn-create-form-wrapper">
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </div>
        <CollectionErrors errors={this.errors}/>

      </div>

    );
  }
}

export default CollectionCreateForm;