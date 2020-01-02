import React from 'react';


class SimpleItemForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      category: '',
      label: '',
      user_id: this.props.currentUserId
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createItem(this.state);
  }

  update(field){
    return e => this.setState({[field] : e.currentTarget.value});
  }


  render(){
    return(
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
    )
  }

}

export default SimpleItemForm;