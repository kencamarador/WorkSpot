import React, { Component } from 'react';
import { Link, redirect } from 'react-router-dom';
import userService from '../../../utils/userService';
import { Navigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from './SignupPage.module.css';

class SignupForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  };
  handleChange = (e) => {
    // TODO: implement in an elegant way
    //console.log(e.target.name)
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await userService.signup(this.state);
      //update user variable in state on successful login
      this.props.setCurrentUser(userService.getUser())

      
    } catch (err) {
      console.log(err)
      // Invalid user data (probably duplicate email)
      //this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }


      render() {
        return (
          <>
          <div className={styles.SignupTitle}>Sign Up to get Started!</div>
          <Box  display="flex"
          flexDirection="column"
          alignItems="center"
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 2, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={this.handleSubmit} 
          style = {{color:"black"}}> 
            <div>
          <TextField
          type="text" 
          className="form-control" 
          placeholder="Name" 
          value={this.state.name} 
          name="name"
          onChange={this.handleChange} 
            />
          </div>
          <div>
          <TextField 
          type="email" 
          className="form-control" 
          placeholder="Email" 
          value={this.state.email} 
          name="email" 
          onChange={this.handleChange} 
          />
     </div>
     <div>
          <TextField
          type="password" 
          className="form-control" 
          placeholder="Password" 
          value={this.state.password} 
          name="password"
          onChange={this.handleChange} 
            />
          </div>

          <div>
          <TextField
          type="password" 
          className="form-control" 
          placeholder="Confirm Password" 
          value={this.state.passwordConf} 
          name="passwordConf"
          onChange={this.handleChange} 
            />
          </div>
    
            
              
          <Button variant="contained"onClick = {this.handleSubmit}>Signup</Button>
    
         
        </Box>
        </>
);
  }
}

export default SignupForm;