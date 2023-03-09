import React from 'react'
import {Stack,Box} from '@mui/material';
import NavBarPost from '../Navbar/NavbarPost/NavbarPost';
import NotificationFeed from './components/NotificationFeed/NotificationFeed';
import NotificationSettings from './components/NotificationSettings/NotificationSettings';
const Notifications = ({user,setUser,userProfile}) => {
  return (
      <Box >
        <NavBarPost user = {user} setUser = {setUser} userProfile = {userProfile} />
        <Stack direction = "row" justifyContent="space-evenly">
            <NotificationSettings />
            <NotificationFeed />
        </Stack>
      </Box>
  )
}

export default Notifications
