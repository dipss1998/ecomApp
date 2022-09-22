import React, { useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
//import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import EditIcon from '@mui/icons-material/Edit';
import { updateInfo, getUser } from '../../service/addressapi';
import { Box, Typography, Card, Grid, Button } from '@mui/material';
import { useParams } from 'react-router-dom'

// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

// const gridWraper = styled(Grid)`
//       backgroundcolor:red;
 
// `

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#6b84a1' : '#ebf1f7',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   // color: theme.palette.text.primary,
// }));

const ProfileInformation = () => {
  const { id } = useParams();
  //const userdata = JSON.parse(localStorage.getItem("user"))
  const [old, setOld] = useState({})
  const olddata = async () => {
    const data = await getUser(id)
   // console.log("id and data of user:",id, data)
    setOld(data.data)
  }
  useEffect(() => {
    olddata()
  },[])
  const [profile, setProfile] = useState(old)

  const presskey = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
    //console.log("==========")
  }
 const updateUserInfo = async (data)=>{
  //setProfile(...profile, [data])
console.log("data in user update function:", data);

await updateInfo(profile);
 }
  //console.log("olddata:", old)

  // const updateInfo = async ()=>{
  //   // const Info = {
  //   //   name:profile.name,
  //   //   email:profile.email,
  //   //   contact:profile.contact,
  //   //   address:profile.address,
  //   //   gender:profile.gender
  //   // }
  //  await updateInfo(profile)
  //   console.log('profile', profile)
  // }
  return (
    <>
      <Box sx={{ flexGrow: 1, }} style={{}}>
        <Typography variant='h4'>Personal Information</Typography>
        <Card style={{ height: 500, backgroundColor: "#808000", width: 800 }}>
          <Grid container spacing={3} style={{ margin: 30, width: 600, paddingTop: 30, paddingButtom: 20 }}>
            <Grid item xs={6} >
              {/* <Typography>Username</Typography> */}
              {/* <Item>{userdata.name} */}
              <TextField id="outlined-basic" label={old.name} variant="standard" name="name" onChange={presskey} />
              {/* </Item> */}
              {/* <Link to={`/edit?id/${userdata._id}`}> <EditIcon/></Link> */}
            </Grid>
            <Grid item xs={6} >
              {/* <Typography>Contact</Typography>*/}
              {/* <Item>{userdata.contact} */}
              <TextField id="outlined-basic" label={old.contact} name="contact" variant="standard" onChange={presskey} />
              {/* </Item>  */}
              {/* <Link to={`/edit?id/${userdata._id}`}> <EditIcon/></Link> */}

            </Grid>
            <Grid item xs={6}>
              {/* <Typography>email Address</Typography>*/}
              {/* <Item>{userdata.email} */}
              <TextField id="outlined-basic" label={old.email} name="email" variant="standard" onChange={presskey}></TextField>
              {/* </Item>  */}
              {/* <Link to={`/edit?id/${userdata._id}`}> <EditIcon/></Link> */}

            </Grid>
            <Grid item xs={6}>
              {/* <Typography>Address</Typography> */}
              <TextField id="outlined-basic" label={old.address ? old.address : "not added"} name="address" variant="standard" onChange={presskey} />
              {/* {userdata.address?<Item>{userdata.address}</Item>:<Item>not added</Item>} */}

              {/* <Link to={`/edit?id/${userdata._id}`}> <EditIcon/></Link> */}

            </Grid>
            <Grid item xs={6}>
              {/* <Typography>Gender</Typography>
              {userdata.gender?<Item>{userdata.gender}</Item>:<Item>not added</Item>} */}
              <InputLabel id="demo-simple-select-label" >Gender</InputLabel>
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

              {/* <Item>Female</Item> */}
              {/* <Link to={`/edit?id/${userdata._id}`}> <EditIcon/></Link> */}

            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" size="medium" onClick={() => {console.log("profile:", profile);updateUserInfo(profile)}}>Edit</Button>
            </Grid>
          </Grid>
        </Card>
      </Box>

    </>



  )
}

export default ProfileInformation