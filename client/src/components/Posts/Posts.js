import React,{useState} from 'react';
import {Box,Stack,ThemeProvider,createTheme} from '@mui/material';
import NavBarPost from './NavbarPost/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';

const Posts = () => {
  const [mode,setMode] = useState('light');
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme = {darkTheme}>
      <Box bgcolor = {"background.light"} color = {'text.primary'}>
        <NavBarPost/>
        <Stack direction = "row" justifyContent="space-between">
          <Sidebar setMode = {setMode} mode = {mode}/>
          <Feed />
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default Posts
