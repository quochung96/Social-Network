import React,{useState,useEffect} from 'react';
import {Box, Stack,ThemeProvider,createTheme} from '@mui/material';
import NavBarPost from '../Navbar/NavbarPost/NavbarPost';
import Sidebar from '../Posts/Sidebar/Sidebar';
import EditProfile from './EditProfile/EditProfile';
import { useDispatch } from 'react-redux';
import { getUser } from '../../actions/users';
import { getPostByUserId } from '../../actions/posts';
import {getRequestByUserId} from '../../actions/friendRequest';
import FeedProfile from './FeedProfile';
import { useParams } from 'react-router-dom';

const Profile = ({user,userProfile}) => {
  const dispatch = useDispatch();
  const {id } = useParams();
  const [mode,setMode] = useState('light');
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  });
  useEffect(() => {
    dispatch(getUser(id));
    dispatch(getRequestByUserId(user?.user_id));
    dispatch(getPostByUserId(id));
  },[dispatch, id, user?.user_id]);

  return (
    <ThemeProvider theme = {darkTheme}>
      <Box>
        <NavBarPost user = {user} userProfile = {userProfile} />
        <Stack direction = 'row' justifyContent = "space-between">
          <Sidebar setMode = {setMode} mode = {mode} user = {user} userProfile = {userProfile} />
          <Box display = 'flex' flexDirection = 'column' p = {1} flex = {4}>
            <EditProfile user = {user} id = {id} userProfile = {userProfile} />
            <FeedProfile user = {user} userProfile = {userProfile} />
          </Box>
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default Profile
