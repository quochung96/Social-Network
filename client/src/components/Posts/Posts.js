import React from 'react'
import {Grow,Box,Stack} from '@mui/material';
import NavBarPost from './NavbarPost/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';

const Posts = () => {
  return (
    <Grow in>
      <NavBarPost />
        <Box>
            <Stack direction = "row" spacing = {2} justifyContent = "space-between">
                <Sidebar />
                <Feed />
            </Stack>
        </Box>
    </Grow>
  )
}

export default Posts
