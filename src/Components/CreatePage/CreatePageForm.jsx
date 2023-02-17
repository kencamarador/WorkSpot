import React, { Component } from 'react';
import { Link, redirect, Navigate } from 'react-router-dom';
import jobsService from '../../utils/jobsService';
import styles from './CreatePage.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

class CreatePageForm extends Component {
  constructor(props) {
    super(props)

  this.state = {
    title: '',
    description: '',
    location: '',
    pay: '',
    contactEmail: '',
    contactNumber: ''
  };
}

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const data = await jobsService.create(this.state);
      this.props.updateStudentState(data)
      //update user variable in state on successful login
      this.setState({ redirect: true});
      console.log("redirecting to all");

      
    } catch (err) {
      this.props.updateMessage(err.message);
      console.log("redirecting to all");
      // Invalid user data (probably duplicate email)
      //this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.title && this.state.description && this.state.location && this.state.pay && this.state.contactEmail && this.state.contactNumber);
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/all jobs" />;
      
  }
    return (
        <>
        <div className={styles.taskTitle}> Add a Task</div>

        <div className={styles.taskTitle2}>Have your local neighbours complete your job fror you! </div>
        <Box  display="flex"
        flexDirection="column"
        alignItems="center"
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={this.handleSubmit} 
        style = {{color:"black"}}> 
      
        <div>
        <TextField 
        type="text" 
        className="form-control" 
        placeholder="Title" 
        value={this.state.title} 
        name="title" 
        onChange={this.handleChange} 
        />

        <TextField
        type="text" 
        className="form-control" 
        placeholder="Description" 
        value={this.state.description} 
        name="description" 
        onChange={this.handleChange} 
          />


          
              
          
           
        </div>
        <div>
        <TextField
        type="text" 
        className="form-control" 
        placeholder="Location" 
        value={this.state.location} 
        name="location" 
        onChange={this.handleChange} 
          />    

        <TextField
        type="number" 
        className="form-control" 
        placeholder="Pay" 
        value={this.state.pay} 
        name="pay" 
        onChange={this.handleChange} 
          /> 
        </div>
        <div>
        <TextField
        type="text" 
        className="form-control" 
        placeholder="Contact Email" 
        value={this.state.contactEmail} 
        name="contactEmail" 
        onChange={this.handleChange} 
          /> 
                  <TextField
        type="number" 
        className="form-control" 
        placeholder="Contact Number" 
        value={this.state.contactNumber} 
        name="contactNumber" 
        onChange={this.handleChange} 
          /> 
          </div>
        
        <button className="btn btn-default" disabled={this.isFormInvalid()}>Create</button>
       
      </Box>
      </>
    );
  }
}

export default CreatePageForm;



