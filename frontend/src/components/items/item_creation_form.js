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
      image_url: '',
      user_id: this.props.currentUserId,
      imageFile: '',
      path: ''
    };
    this.handleUpload = this.handleUpload.bind(this);
    this.handleImageInput = this.handleImageInput.bind(this);
  }


  handleUpload(e){
    const formData = new FormData();
    if(this.state.imageFile){
      formData.append('post[image]', this.state.imageFile);

    }
    // send ajax request, when we get json back, we save item (state) to the database
    debugger;
    // itemImageToAWS(formData)
    itemImageToAWS(formData.get("post[image]"))
      .then(imageObj => this.setState({image_url: imageObj['imageUrl']}));
    debugger;
  }

  handleImageInput(e){
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({  path: reader.result, imageFile: file });
    // reader.onloadend();
    if (file) {
      reader.readAsDataURL(file);
    } else {
      debugger;
      this.setState({ imageUrl: "", imageFile: null });
    }

    debugger;
  }

  update(field) {
    debugger;
    return e => this.setState({ [field]: e.currentTarget.value });
  }


  render(){
    debugger;
    return(
      <div className="item-creation-container">
        <form onSubmit={this.handleUpload}>
          <input type='file' onChange={this.handleImageInput}></input>
          <input type='submit'></input>
        </form>
        <div>
          <form>

          </form>
        </div>

      </div>
    )
  }


}

export default ItemCreation; 