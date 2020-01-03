import React from 'react';

import { itemImageToAWS } from '../../util/aws_util';

// in the constructor, generate a new formdata object - this.formData = FormData.new()
// for each input field, call a function which sets or edits a formdata key to match that input
// For the file input, our handler will
// 

class ItemCreation extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      category: '',
      label: '',
      user_id: this.props.currentUserId,
      image_url: '',
      imageFile: '',
      path: ''
    };
    this.handleUpload = this.handleUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageInput = this.handleImageInput.bind(this);
  }


  handleUpload(e){
    e.preventDefault();
    const formData = new FormData();
    if(this.state.imageFile){
      formData.append('image', this.state.imageFile);
    }
    // send ajax request, when we get json back, we save item (state) to the databas
    // itemImageToAWS(formData.get("post[image]"))
    // itemImageToAWS({image: this.state.imageFile})
    itemImageToAWS(formData)
      .then(({data}) => {
          this.setState({ image_url: data['imageUrl']});
        }
      );
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = {
      label: this.state.label,
      category: this.state.category,
      image_url: this.state.image_url,
      user_id: this.state.user_id
    };

    this.props.createItem(formData);
  }

  handleImageInput(e){
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ image_url: reader.result, imageFile: file });
    // reader.onloadend();
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ image_url: "", imageFile: null });
    }
  }

  update(field){ 
    return e => this.setState({ [field]: e.currentTarget.value });
  }


  render(){
    const imgTag = this.state.image_url ? (
      <>
        <img src={this.state.image_url} />
      </>
    ) : null;
    
    return(
      <div className="item-creation-container">
        <form onSubmit={this.handleUpload}>
          <input type='file' onChange={this.handleImageInput}></input>
          {imgTag}
          <input type='submit'></input>
        </form>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <p>Category</p>
              <input type='text' onChange={this.update('category')} value={this.state.category}></input>
            </div>
            <div>
              <p>Label</p>
              <input type='text' onChange={this.update('label')} value={this.state.label}></input>
            </div>
            <input type='submit'></input>
          </form>
        </div>

      </div>
    )
  }


}

export default ItemCreation; 