import { Box } from '@mui/system';
import React from 'react'
import NavbarPost from '../Navbar/NavbarPost/NavbarPost';

const PostDetail = ({user,setUser,userProfile}) => {
  return (
    <Box>
        <NavbarPost user = {user} setUser = {setUser} userProfile = {userProfile}/>
    </Box>
  )
}

export default PostDetail;
