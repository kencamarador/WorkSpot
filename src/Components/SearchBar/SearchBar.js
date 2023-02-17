import style from './SearchBar.module.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import './SearchBar.js';



export default function SearchBar(props){

const [searchTerm, setSearchTerm] = useState('');
 
const handleTextSearch = (e) => {
        setSearchTerm(e.currentTarget.value)
       
        }

const handleButtonClick = () => {
    props.onSearch(searchTerm)    
}

    return (
        <>
        <Stack spacing={5} direction="row"></Stack>
        <div className={style.SearchBar}>
            <div className={style.SearchBox}>
                <input type="text" onChange={handleTextSearch} />
                <Button variant="contained" onClick={handleButtonClick}>Find Jobs</Button>
                
            </div>


        </div>


        </>
        
    )
}