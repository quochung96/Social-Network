import React,{useState,useEffect} from 'react';
import {Box, Stack,ThemeProvider,createTheme} from '@mui/material';
import NavBarPost from '../Navbar/NavbarPost/NavbarPost';
import Sidebar from '../Posts/Sidebar/Sidebar';
import Feed from '../Posts/Feed/Feed';
import EditProfile from './EditProfile/EditProfile';
import { useDispatch } from 'react-redux';
import { getUser } from '../../actions/users';

const Profile = ({user,userProfile, id}) => {
  const dispatch = useDispatch();
  const [mode,setMode] = useState('light');
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  });
  useEffect(() => {
    dispatch(getUser(user?.user_id))
  }, [dispatch, user?.user_id]);
  return (
    <ThemeProvider theme = {darkTheme}>
      <Box>
        <NavBarPost user = {user} userProfile = {userProfile} />
        <Stack direction = 'row' justifyContent = "space-between">
          <Sidebar setMode = {setMode} mode = {mode} user = {user} userProfile = {userProfile} />
          <Box display = 'flex' flexDirection = 'column' p = {1} flex = {4}>
            <EditProfile user = {user} id = {id} userProfile = {userProfile} />
            <Feed user = {user} userProfile = {userProfile} />
          </Box>
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default Profile
