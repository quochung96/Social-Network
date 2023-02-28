import React,{useState,useEffect} from 'react';
import {Box,Stack,ThemeProvider,createTheme} from '@mui/material';
import NavBarPost from '../Navbar/NavbarPost/NavbarPost';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import { useDispatch } from 'react-redux';
import {useLocation} from 'react-router-dom';
import { getUser } from '../../actions/users';
import { getPosts } from '../../actions/posts';
import {getRequestBySendUserId} from '../../actions/friendRequest';

const Posts = ({user,setUser, userProfile}) => {
  const [mode,setMode] = useState('light');
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUser(user?.user_id));
    dispatch(getRequestBySendUserId(user?.user_id));
  }, [dispatch,user?.user_id,location]);
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  });

  return (
    <ThemeProvider theme = {darkTheme}>
      <Box bgcolor = {"background.light"} color = {'text.primary'}>
        <NavBarPost user = {user} setUser = {setUser} userProfile = {userProfile} />
        <Stack direction = "row" justifyContent="space-between">
          <Sidebar setMode = {setMode} mode = {mode} user = {user} setUser = {setUser} userProfile = {userProfile} />
          <Feed user = {user} userProfile = {userProfile} />
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default Posts
