import React from 'react'
import {Box,Stack} from '@mui/material';
import NavBarPost from './NavbarPost/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import Rightbar from './Rightbar/Rightbar';

const Posts = () => {
  return (
    <Box>
      <NavBarPost />
      <Stack direction = "row" justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  )
}

export default Posts
