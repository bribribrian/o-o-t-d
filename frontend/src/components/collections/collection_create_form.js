import React from 'react';

import ModalContainer from '../modal/modal_container';

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

  pickHat(hatId){
    this.setState({hat_id: hatId});
  }
  pickTop(topId) {
    this.setState({ top_id: topId });
  }
  pickBottom(bottomId) {
    this.setState({ bottom_id: bottomId });
  }
  pickShoe(shoeId) {
    this.setState({ shoe_id: shoeId });
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
    // debugger;
    // itemImageToAWS(formData.get("post[image]"))
    // itemImageToAWS({image: this.state.imageFile})
    itemImageToAWS(formData)
      .then(({ data }) => {
        // debugger;
        this.setState({ image_url: data['imageUrl'] });
      }
      );
    // debugger;
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
      <div>
        <p>CollectionCreateForm</p>
        <ModalContainer pickHat={this.pickHat} pickTop={this.pickTop} pickBottom={this.pickBottom} pickShoe={this.pickShoe}/>
        <button onClick={this.props.receivePickHat}>Hat</button>
        <button onClick={this.props.receivePickTop}>Top</button>
        <button onClick={this.props.receivePickBottom}>Bottom</button>
        <button onClick={this.props.receivePickShoes}>Shoes</button>
        <div className="collection-creation-container">
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
        <button onClick={this.handleSubmit}></button>
      </div>

    );
  }
}

export default CollectionCreateForm;