import styles from './DetailsPage.module.css';
import React, { useState, useEffect } from 'react';
import jobsService from '../../utils/jobsService';
import { useParams, useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



export default function DetailPage(props) {
  const [job, setJob] = useState({});

  //const { id } = props.match?.params || {};
  const {id} = useParams()
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
    const data = await jobsService.show(id);
    setJob(data);
    };
    fetchData();
  }, [id]);


  const handleDelete = async () => {
    await jobsService.delete(id);
    const data = await jobsService.getAll();
    props.updateStudentState(data)
    console.log('navigate students route')
    navigate(`/all jobs`);

    
  }

  const handleUpdate = async () =>{
    console.log('update')
    const updatejob = await jobsService.update(id);
    console.log(updatejob)
    navigate(`/jobs/${job._id}/update jobs`);
    
  }



  return (
    <>
        <Stack spacing={5} direction="row"></Stack>

        <div className={styles.list}>
          <div className={styles.Grid}>

                <div className={styles.jobTitle}>{job.title}</div>
                <div className={styles.payTitle}>C${job.pay} /hour </div>
                <div className={styles.detailsTitle}>Details</div>
                <div className={styles.locationTitle}>Location: {job.location}</div>

                <div className={styles.descriptionTitle}>{job.description}</div>
                <div className={styles.emailTitle}>Email: {job.contactEmail}</div>
                <div className={styles.numberTitle}>Phone: {job.contactNumber}</div>

       
                <Button variant="contained"onClick = {handleUpdate}>Update</Button>
                <Button variant="contained"onClick = {handleDelete}>Delete</Button>
               
          </div>
        </div>
    
    </>
  );
}



