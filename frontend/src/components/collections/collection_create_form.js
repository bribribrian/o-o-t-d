import React from 'react';

import ModalContainer from '../modal/modal_container';
import CollectionPreview from './collection_create_form_preview';

import { itemImageToAWS } from '../../util/aws_util';


class CollectionCreateForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      occasion: null,
      precipitation: null,
      temperature: null,
      label: null,
      hat_id: null,
      top_id: null,
      bottom_id: null,
      shoe_id: null,
      image_url: null,
      imageFile: null,
      user_id: this.props.currentUser.id
    };

    this.previewImages = [];

    this.pickHat = this.pickHat.bind(this);
    this.pickTop = this.pickTop.bind(this);
    this.pickBottom = this.pickBottom.bind(this);
    this.pickShoe = this.pickShoe.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleUpload = this.handleUpload.bind(this);
    this.handleImageInput = this.handleImageInput.bind(this);
  }

  componentDidMount(){
    this.props.fetchItems();
  }

  handleSubmit(e){
    e.preventDefault();
    // debugger;
    this.props.createCollection(this.state);
  }

  pickHat(hatId, imgUrl){
    this.setState({hat_id: hatId});
    this.previewImages.push(
      <li key={hatId}>
        <img src={imgUrl}></img>
      </li>
    )
  }
  pickTop(topId, imgUrl) {
    this.setState({ top_id: topId });
    this.previewImages.push(
      <li key={topId}>
        <img src={imgUrl}></img>
      </li>
    )
  }
  pickBottom(bottomId, imgUrl) {
    this.setState({ bottom_id: bottomId });
    this.previewImages.push(
      <li key={bottomId}>
        <img src={imgUrl}></img>
      </li>
    )
  }
  pickShoe(shoeId, imgUrl) {
    this.setState({ shoe_id: shoeId });
    this.previewImages.push(
      <li key={shoeId}>
        <img src={imgUrl}></img>
      </li>
    )
  }

  // ----------------------------------------------------------------------------------

  handleImageInput(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ image_url: reader.result, imageFile: file });
    // reader.onloadend();
    if (file) {
      reader.readAsDataURL(file);
    } else {
      // debugger;
      this.setState({ image_url: "", imageFile: null });
    }

    // debugger;
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
  
  render(){
    const imgTag = this.state.image_url ? (
      <>
        <img src={this.state.image_url} />
      </>
    ) : null;


    // debugger;
    return(
      <div className="collection-creation-container">
        <p>CollectionCreateForm</p>
        <CollectionPreview previewImages={this.previewImages}/>
        <ModalContainer pickHat={this.pickHat} pickTop={this.pickTop} pickBottom={this.pickBottom} pickShoe={this.pickShoe}/>
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
          <p>Occasion</p>
          <input type='text' value={this.state.occasion} onChange={this.update('occasion')}></input>
        </div>
        <div>
          <p>Precipitation</p>
          <input type='text' value={this.state.precipitation} onChange={this.update('precipitation')}></input>
        </div>
        <div>
          <p>Temperature</p>
          <input type='text' value={this.state.temperature} onChange={this.update('temperature')}></input>
        </div>
        <div>
          <p>Label</p>
          <input type='text' value={this.state.label} onChange={this.update('label')}></input>
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>

    );
  }
}

export default CollectionCreateForm;