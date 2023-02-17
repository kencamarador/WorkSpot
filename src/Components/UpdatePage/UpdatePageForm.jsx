import React, { Component, useCallback, useEffect, useState } from 'react';
import { Link, redirect, Navigate } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import jobsService from '../../utils/jobsService';
import styles from './UpdatePage.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { flattenOptionGroups } from '@mui/base';
import userService from '../../utils/userService';

export default function UpdatePageForm() {

  const [job, setJob] = useState({

    title: '',
    description: '',
    location: '',
    pay: '',
    contactEmail: '',
    contactNumber: ''

  });
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getJobs = async () => {
        const rec = await jobsService.show(id);
        setJob(rec);
    }
   getJobs();
  }, [])

  
  const handleChange = useCallback((e) => {
  
    let newJob = {
        ...job,
    };
    newJob[e.target.name] = e.target.value;

    setJob(newJob);

  }, [job, setJob]);


  const handleSave = async (e) => {
    e.preventDefault();
    
    try {
      const data = await jobsService.update(id, job);
    navigate(`/jobs/${id}`);
    
    } catch (err) {

    }
  }

  const isFormInvalid = useCallback(() => {
    return !(job.title && job.description && job.location && job.pay && job.contactEmail && job.contactNumber);
  }, [job]);



    return (
      <>

<div className={styles.LoginTitle}>Update</div>
          <Box  display="flex"
    flexDirection="column"
    alignItems="center"
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    onSubmit= {async (e) => await handleSave(e)}
    style = {{color:"black"}}> 
  
    <div>
    <TextField 
    type="text" 
    className="form-control" 
    placeholder="Title" 
    value={job.title} 
    name="title" 
    onChange={handleChange} 
    />

    <TextField
    type="text" 
    className="form-control" 
    placeholder="Description" 
    value={job.description} 
    name="description" 
    onChange={handleChange} 
      />


      
          
      
       
    </div>
    <div>
    <TextField
    type="text" 
    className="form-control" 
    placeholder="Location" 
    value={job.location} 
    name="location" 
    onChange={handleChange} 
      />    

    <TextField
    type="number" 
    className="form-control" 
    placeholder="Pay" 
    value={job.pay} 
    name="pay" 
    onChange={handleChange} 
      /> 
    </div>
    <div>
    <TextField
    type="text" 
    className="form-control" 
    placeholder="Contact Email" 
    value={job.contactEmail} 
    name="contactEmail" 
    onChange={handleChange} 
      /> 
              <TextField
    type="number" 
    className="form-control" 
    placeholder="Contact Number" 
    value={job.contactNumber} 
    name="contactNumber" 
    onChange={handleChange} 
      /> 
      </div>
    
  
    <Button variant="contained"onClick = {handleSave}>Update</Button>
    </Box>
      </>
    );
  }


