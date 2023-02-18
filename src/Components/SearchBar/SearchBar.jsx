import style from './SearchBar.module.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import './SearchBar.jsx';



export default function SearchBar(props){
    
//     const [localSearchQuery, setLocalSearchQuery] = useState("")
  
 
//  function handleTextSearch(e) {   
//     setLocalSearchQuery(e.target.value)
//   }

//   const handleSubmit = async (evt) => {
//     evt.preventDefault();
//     props.setSearchQuery(localSearchQuery)
//     try {
//       let fetchResponse = await fetch(`/api/posts/search?s=${localSearchQuery}`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json"
//         },
//       });

//       let serverResponse = await fetchResponse.json();
//       props.setSearchResults(serverResponse)
//       props.searchExecute()
//     } catch (err) {
//       console.log(err)
//     }
//   }
return (
    <>
    <Stack spacing={5} direction="row"></Stack>
    <div className={style.SearchBar}>
        <div className={style.SearchBox}>
            <input type="text"/>
            <Button variant="contained" >Find Jobs</Button>
            
        </div>


    </div>


    </>
    
)
}