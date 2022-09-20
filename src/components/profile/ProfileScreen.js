import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import { useParams} from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import ProfileInformation from './ProfileInformation';
import { updatePhoto, updateProfilePicture, getUser} from '../../service/addressapi';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
export default function ProfileScreen() {
const [photo, setPhoto] = useState()
const {id} = useParams();
const mypicture =async ()=>{
  const my = await getUser(id);
  console.log('picture', my.data.photo)
  setPhoto(my.data.photo)
}
useEffect(()=>{mypicture()},[])

// const changePhoto = async (filePath)=>{
//   console.log("change photo function")
//  // await updateProfilePicture({filePath:URL.createObjectURL(filePath)})
//   await updatePhoto(filePath)
// }
//mypicture();
//console.log("",photo)
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
       <Box  component="nav" sx={{ m:20,  height:20}} >
    <Avatar sx={{mr:10, width:100, height:100}} alt="user profile" src={photo}
    />
    {/* `/Image/user2.jpeg` */}
    <TextField type="file" onChange={ async(e)=>{
      e.preventDefault();
     const file=e.target.files[0];
     await updatePhoto(file)
     setPhoto(URL.createObjectURL(file))
console.log("target file function")
  }}/>
      </Box> 
        <Box component="main" sx={{ m:20,  height:20}} >
            <ProfileInformation/>
</Box>
</Box>
  );
}
 
