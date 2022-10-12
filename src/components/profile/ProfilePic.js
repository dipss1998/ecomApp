// import React from 'react';
// import Avatar from '@mui/material/Avatar'
// import {useMutation, gql} from "@apollo/client"

// const PROFILE_PIC = gql`
//   mutation uploadFile($file:Upload!){
//     uploadFile(file:$file)
//     url
//   }
// `

// const ProfilePic = () => {
//   const [uploadFile] = useMutation(PROFILE_PIC)
//   onCompleted: data =>console.log(data)

//   const handleFileCahnge = e =>{
//     const file = e.target.file[0]
//     if(!file) return 
//     uploadFile({variables: {file}})
//   }
//   return (
//     <div>
//       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//       <input type='file' onChange={handleFileCahnge} />
//     </div>

//   )
// }

// export default ProfilePic