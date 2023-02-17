
import React, { Component } from 'react';
import CreatePageForm from './CreatePageForm';
import './CreatePage.module.css';


class CreatePage extends Component {
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
        <CreatePageForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default CreatePage;



