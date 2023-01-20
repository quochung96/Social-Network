import React,{useState} from 'react';
import {Box, Stack,ThemeProvider,createTheme} from '@mui/material';
import NavBarPost from '../Navbar/NavbarPost/NavbarPost';
import Sidebar from '../Posts/Sidebar/Sidebar';
import ProfileDetails from './ProfileDetails/ProfileDetails';
import Feed from '../Posts/Feed/Feed';
import EditProfile from './EditProfile/EditProfile';

const Profile = () => {
  const [user] = useState(JSON.parse(localStorage.getItem('profile')));
  const [mode,setMode] = useState('light');
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  });
  return (
    <ThemeProvider theme = {darkTheme}>
      <Box>
        <NavBarPost user = {user}/>
        <Stack direction = 'row' justifyContent = "space-between">
          <Sidebar setMode = {setMode} mode = {mode} user = {user}/>
          <Box display = 'flex' flexDirection = 'column' p = {1} flex = {4}>
            <ProfileDetails user = {user}/>
            <EditProfile user = {user}/>
            <Feed />
          </Box>
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default Profile
