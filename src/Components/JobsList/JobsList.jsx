

import styles from './JobsList.module.css';
import SearchBar from '../SearchBar/SearchBar';
import React from 'react';
import {Link} from 'react-router-dom';
export default function JobsList(props) {


    
    return (
      <>
    
          {props.jobs.map(job => (
            <Link className={"link-container"} style={{ textDecoration: 'none' }}  to={`/jobs/${job._id}`} key={job._id}>
  <div className={styles.list}>
    <div className={styles.Grid}>
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <p>Location: {job.location}</p>
      <p>Pay: ${job.pay}/Hour</p>
    </div>
  </div>
</Link>
          ))}
    
      </>
    );
  }
 