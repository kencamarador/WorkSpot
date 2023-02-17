import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';
import userService from '../../../utils/userService'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

class LoginPage extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      email: '',
      pw: ''
    };
  }
  

  handleChange = (e) => {
    // TODO: implement in an elegant way
    //console.log(e.target.name)
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await userService.login(this.state);
      //update user variable in state on successful login
      this.props.setCurrentUser(userService.getUser())

      
    } catch (err) {
      console.log(err)
      // Invalid user data (probably duplicate email)
      //this.props.updateMessage(err.message);
    }
  }

  render() {
    return (
      <>
      <div className={styles.LoginTitle}>Log In</div>
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
      value={this.state.pw} 
      name="pw"
      onChange={this.handleChange} 
        />
      </div>

        
          
      <Button variant="contained"onClick = {this.handleSubmit}>Login</Button>

     
    </Box>
    </>
  );
 }
}

export default LoginPage;