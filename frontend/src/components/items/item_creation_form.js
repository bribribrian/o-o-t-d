import React from 'react';
import { itemImageToAWS } from '../../util/aws_util';
import Dropdown from '../dropdown/dropdown';

// in the constructor, generate a new formdata object - this.formData = FormData.new()
// for each input field, call a function which sets or edits a formdata key to match that input
// For the file input, our handler will
// 

class ItemCreation extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      category: 'hat',
      label: '',
      user_id: this.props.currentUserId,
      image_url: '',
      imageFile: '',
      path: '',
      activeDD: false
    };
    this.handleUpload = this.handleUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageInput = this.handleImageInput.bind(this);

    this.getActiveDD = this.getActiveDD.bind(this);
    this.setActiveDD = this.setActiveDD.bind(this);
    this.updateDD = this.updateDD.bind(this);
    this.removeActiveDD = this.removeActiveDD.bind(this);
    this.getActiveDDIcon = this.getActiveDDIcon.bind(this);
  }


  handleUpload(e){
    e.preventDefault();
    const formData = new FormData();
    if(this.state.imageFile){
      formData.append('image', this.state.imageFile);
    }
    // send ajax request, when we get json back, we save item (state) to the databas
    itemImageToAWS(formData)
      .then(({ data }) => {
        this.setState({ image_url: data['imageUrl']});
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = {
      label: this.state.label,
      category: this.state.category,
      image_url: this.state.image_url,
      user_id: this.state.user_id
    };

    this.props.createItem(formData)
      .then(res => {
        window.location.hash = `#/items`
      });
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

  setActiveDD(type) {
    return e => {
      e.preventDefault();
      // this.state.activeDD = !this.state.activeDD;
      let activeDD = {activeDD: !this.state.activeDD};
      this.setState(Object.assign({}, this.state, activeDD));
    };
  }

  removeActiveDD(type) {
    return e => {
      // this.state.activeDD = false;
      this.setState(Object.assign({}, this.state, {activeDD: false}));
    }
  }

  getActiveDD(type) {
    return this.state.activeDD ? " active" : "";
  }

  updateDD([type, value]) {
    return e => {
      this.removeActiveDD(type);
      // this.state.category = value;
      this.setState(Object.assign(this.state, {category: value}))
    }
  }

  getActiveDDIcon(type) {
    return this.state.activeDD ? "up" : "down";
  }


  render() {
    const imgTag = this.state.image_url ? (
      <>
        <img src={this.state.image_url} alt='description goes here'/>
      </>
    ) : null;
    
    return(
      <div className="item-creation-container">
        <form onSubmit={this.handleUpload}>
          <input type='file' onChange={this.handleImageInput}></input>
          {imgTag}
          <input type='submit' value="Upload"></input>
        </form>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <p>Label</p>
              <input type='text' onChange={this.update('label')} value={this.state.label}></input>
            </div>
            <div className="dd-bm">
              <Dropdown label="category"
                value={this.state.category}
                list={["hat", "top", "bottom", "shoes"]}
                getActiveDD={this.getActiveDD}
                setActiveDD={this.setActiveDD}
                updateDD={this.updateDD}
                removeActiveDD={this.removeActiveDD}
                getActiveDDIcon={this.getActiveDDIcon}
              />
            </div>
            <input type='submit' value="Submit"></input>
          </form>
        </div>

      </div>
    );
  }
}

export default ItemCreation; 