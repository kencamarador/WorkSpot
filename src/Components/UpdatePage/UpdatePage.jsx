
import React, { Component } from 'react';
import UpdatePageForm from './UpdatePageForm';
import './UpdatePage.module.css';

class UpdatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className='CreatePage'>
        <UpdatePageForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default UpdatePage;



