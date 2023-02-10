import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import NavbarPost from '../Navbar/NavbarPost/NavbarPost';
import FriendFeeds  from './FriendFeeds/FriendFeeds';
import SidebarFriend from './SidebarFriend/SidebarFriend';


const Friends = ({user,setUser,userProfile}) => {
  return (
    <Box>
      <NavbarPost user = {user} setUser = {setUser} userProfile = {userProfile} />
      <Stack direction = 'row' justifyContent="space-between">
        <SidebarFriend />
        <FriendFeeds />
      </Stack>
    </Box>
  )
}

export default Friends;
