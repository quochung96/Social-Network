import React,{useState} from 'react';
import {Box,Stack,ThemeProvider,createTheme} from '@mui/material';
import NavBarPost from '../Navbar/NavbarPost/NavbarPost';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import Rightbar from './Rightbar/Rightbar';

const Posts = () => {
  const [user] = useState(JSON.parse(localStorage.getItem('profile')));
  const [mode,setMode] = useState('light');
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme = {darkTheme}>
      <Box bgcolor = {"background.light"} color = {'text.primary'}>
        <NavBarPost user = {user}/>
        <Stack direction = "row" justifyContent="space-between">
        <Sidebar setMode = {setMode} mode = {mode} user = {user}/>
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default Posts
