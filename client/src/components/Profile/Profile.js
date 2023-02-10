import React,{useState,useEffect} from 'react';
import {Box, Stack,ThemeProvider,createTheme} from '@mui/material';
import NavBarPost from '../Navbar/NavbarPost/NavbarPost';
import Sidebar from '../Posts/Sidebar/Sidebar';
import EditProfile from './EditProfile/EditProfile';
import { useDispatch } from 'react-redux';
import { getUser } from '../../actions/users';
<<<<<<< HEAD
import { getPostByUserId } from '../../actions/posts';
import FeedProfile from './FeedProfile';
import { useParams } from 'react-router-dom';
=======
import { getPosts } from '../../actions/posts';
>>>>>>> 1cdb347cddf709261f43732bac204529641486cb

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
<<<<<<< HEAD
    dispatch(getPostByUserId(id));
  },[dispatch, id]);
  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);
=======
    dispatch(getUser(user?.user_id))
  }, [dispatch, user?.user_id]);
  useEffect(() => {
    dispatch(getPosts());
  },[dispatch]);
>>>>>>> 1cdb347cddf709261f43732bac204529641486cb
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
