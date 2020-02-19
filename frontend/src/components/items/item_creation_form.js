import React from 'react';
import { itemImageToAWS } from '../../util/aws_util';
import Dropdown from '../dropdown/dropdown';
import ItemsErrors from '../errors/items_errors';


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

    this.errors = [];
    // this.renderedErrors = <p></p>;

    this.handleTotalSubmit = this.handleTotalSubmit.bind(this);
    // this.handleUpload = this.handleUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageInput = this.handleImageInput.bind(this);

    this.getActiveDD = this.getActiveDD.bind(this);
    this.setActiveDD = this.setActiveDD.bind(this);
    this.updateDD = this.updateDD.bind(this);
    this.removeActiveDD = this.removeActiveDD.bind(this);
    this.getActiveDDIcon = this.getActiveDDIcon.bind(this);
  }
  handleTotalSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    if(this.state.imageFile){
      formData.append('image', this.state.imageFile);
    }
    itemImageToAWS(formData)
      .then(({ data }) => {
        this.setState({ image_url: data['imageUrl']});
    });
    if(this.validateInput.length === 0){
      this.renderedErrors = <p></p>;
      this.errors = [];
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
    }else{
      // this.renderedErrors = <ItemsErrors errors={this.errors}/>
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(this.errors.length > 0){
      this.errors = [];
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.validateInput() === 0){
      this.errors = [];
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
    }else{
      this.forceUpdate();
    }
  }

  validateInput(){
    let errorsCount = 0;
    if(!this.state.image_url || this.state.image_url === ""){
      this.errors.push('must give item an image');
      errorsCount += 1;
    }
    if(!this.state.label){
      this.errors.push('must give item a label')
      errorsCount += 1;
    }
    return errorsCount;
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
        <img className="chosen-item-image" src={this.state.image_url} alt='description goes here'/>
      </>
    ) : <div className="empty-item-image">No Preview Image</div>;
    
    return(
      <div className="item-creation-container">
        <form onSubmit={this.handleTotalSubmit}>
          <label className="item-creation-image-label">
            Select Image
            <input className="item-creation-image-button" type='file' onChange={this.handleImageInput}></input>
          </label>
          {imgTag}
          {/* <input type='submit' value="Upload"></input> */}
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
          {/* {this.renderedErrors} */}
          <ItemsErrors errors={this.errors}/>
        </div>

      </div>
    );
  }
}

export default ItemCreation; 