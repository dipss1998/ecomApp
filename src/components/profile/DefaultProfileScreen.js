import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom'
import { updateInfo, getUser } from '../../service/addressapi';
import AppBar from '@mui/material/AppBar';
import {Box, Typography, Card,Grid, Button, TextField, Select, MenuItem} from '@mui/material';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { CenterFocusStrong } from '@mui/icons-material';
 import Avatar from '@mui/material/Avatar'
 import { LoginContext } from '../context/ContextProvider';
import { profilepic } from '../../redux/actions/user';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ebf1f7',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  // color: theme.palette.text.primary,
}));

const AvatarDesign = styled(Avatar)`
    margin-top: 57px
    width: 250
`;

const DefaultProfileScreen = () => {
  const { id } = useParams();
  const [old, setOld] = useState({})
  const [profile, setProfile] = useState(old)
  const {accounts, setAccounts} = useContext(LoginContext);
  const [image, setImage] = useState("")
  const [url, setUrl] = useState("")
  const dispatch = useDispatch()
   const user = JSON.parse(localStorage.getItem("user"))
   console.log('user', user.pic)

    const olddata = async () => {
      const data = await getUser(id)
      setOld(data.data)
    }
    useEffect(() => {
          olddata()
        },[])

        useEffect(()=>{
          if(image){
           const data = new FormData()
           data.append("file", image)
           data.append("upload_preset","cbnitsecomapp")
           data.append("cloud_name","webs")
           fetch("https://api.cloudinary.com/v1_1/webs/image/upload",{
               method:"post",
               body:data
           })
           .then(res=>res.json())
           .then(data=>{
       
              fetch('/Profile/photo',{
                  method:"put",
                  headers:{
                      "Content-Type":"application/json",
                      "Authorization":"Bearer "+localStorage.getItem("token")
                  },
                  body:JSON.stringify({
                      pic:data.url
                  })
              }).then(res=>res.json())
              .then(result=>{
                  console.log(result)
                  // localStorage.setItem("user",JSON.stringify({...accounts,pic:result.pic}))
                  // dispatch(profilepic())
                  window.location.reload()
              })
          
           })
           .catch(err=>{
               console.log(err)
           })
          }
       },[image])
        


        const profilepic = (file)=>{
            setImage(file)
        }


  const presskey = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
    //console.log("==========")
  }
   const updateUserInfo = async (data)=>{
  setProfile({...profile, data})
console.log("data in user update function:", data);
await updateInfo(profile);
 }
  return(
  <Box sx={{ flexGrow: 1 }} style={{ marginLeft:70}}>
        <Typography variant='h4'>Personal Information</Typography>

    <Box style={{justifyItems:'center', marginTop: 20,  marginBottom: 30}}>
    <AvatarDesign alt="Remy Sharp" src={old.pic} /> 

        <Button  variant='contained' >

             <input type='file' placeholder='upload pic ' onChange={(e)=>{
              profilepic(e.target.files[0])
             }} />
        </Button>
{/* 
        <Button variant='contained' onClick={()=>{
              profilepic()
             }}>Submit</Button> */}
    </Box>
    <Card style={{ backgroundColor:"#debf12", width:800, padding:10}}>
            <Grid container spacing={3} style={{marginLeft:50, width:600, paddingButtom:20}}>
            <Grid item xs={6} style={{height:30}} >
              <Typography>Username</Typography>
                <TextField id="outlined-basic" label={old.name} variant="standard" name="name" onChange={presskey} />
            </Grid>
            <Grid item xs={6} >
              <Typography>Contact</Typography>
                <TextField id="outlined-basic" label={old.contact} name="contact" variant="standard" onChange={presskey} />
            </Grid>
            <Grid item xs={6}>
              <Typography>email Address</Typography>
                <TextField id="outlined-basic" label={old.email} name="email" variant="standard" onChange={presskey}></TextField>
            </Grid>
            <Grid item xs={6}>
              <Typography>Address line 1</Typography>
                <TextField id="outlined-basic" label={old.address1 ? old.address1 : "not added"} name="address1" variant="standard" onChange={presskey} />
            </Grid>
            <Grid item xs={6} >
              <Typography>Address line 2</Typography>
                <TextField id="outlined-basic" label={old.address2} variant="standard" name="address2" onChange={presskey} />
            </Grid>
            <Grid item xs={6}>
              <Typography>City</Typography>
                <TextField id="outlined-basic" label={old.city} variant="standard" name="city" onChange={presskey} />
            </Grid>
            <Grid item xs={6}>
              <Typography>State</Typography>
                <TextField id="outlined-basic" label={old.state} variant="standard" name="state" onChange={presskey} />
            </Grid>
            <Grid item xs={6}>
              <Typography>Country</Typography>
                <TextField id="outlined-basic" label={old.country} variant="standard" name="country" onChange={presskey} />
            </Grid>
            <Grid item xs={6}>
              <Typography>Zipcode</Typography>
                <TextField id="outlined-basic" label={old.zipcode} variant="standard" name="zipcode" onChange={presskey} />
            </Grid>
            <Grid item xs={6}>
              <Typography>Gender</Typography>
               <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={old.gender ? old.gender : "not selected"}
                label="Gender"
                name="gender"
                onChange={presskey}
              >
                <MenuItem value={"not selected"}>not selected</MenuItem>
                <MenuItem value={"male"}>male</MenuItem>
                <MenuItem value={"female"}>female</MenuItem>
                <MenuItem value={"other"}>other</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>
            <Button variant="contained" size="medium" onClick={() => {console.log("profile:", profile);updateUserInfo(profile)}}>Edit</Button></Grid>
            </Grid>
   
      </Card>
    </Box>
  )
}

export default DefaultProfileScreen