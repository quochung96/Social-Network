import React,{useState} from 'react';
import {Box,Avatar,IconButton,Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {StyledInputBase} from '../../../widgets/Styles';
import InsertPicture from '../../../../assets/icons/insertPicture.png';
import Player from '../../../../assets/icons/player.png';
import Calendar from '../../../../assets/icons/calendar.png';


const AddPost = () => {
  const [user] = useState(JSON.parse(localStorage.getItem('profile')));
  const navigate = useNavigate();
  const openProfile = () => {navigate("/profile")};
  const handleChange = (e) => {
    e.preventDefault();

  }
  return (
    <Box bgcolor = "#FFFFFF" flex = {4} p = {2} display = 'flex' flexDirection = 'column' sx = {{margin: 4,width: '90%', height: 'auto', borderRadius: '20px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 5px'}}>
        <Box display = 'flex' flexDirection = 'row'>
            <IconButton onClick = {openProfile}>
              <Avatar alt = {user?.result.name} src = {user?.result.picture}/>
            </IconButton>
            <Box marginTop = '10px' width = '100%' sx = {{borderRadius: '30px'}}>
            <StyledInputBase
                placeholder="Start a post"
                inputProps={{ 'aria-label': 'search' }}
                onChange = {handleChange}
                sx = {{border: '2px solid', borderRadius: '20px', borderStyle: 'groove', width: '100%'}}
              />
            </Box>
        </Box>
        <Box display = 'flex' flexDirection = 'row' justifyContent = 'space-evenly' alignItems = 'center'>
                <IconButton onClick = {() => {}}>
                    <img alt = 'icon' src = {InsertPicture} height = '30px' width = '30px'/>
                    <Typography sx = {{margin: '20px 20px'}}>Image</Typography>
                </IconButton>
                <IconButton onClick = {() => {}}>
                    <img alt = 'icon' src = {Player} height = '30px' width = '30px'/>
                    <Typography sx = {{margin: '20px 20px'}}>Video</Typography>
                </IconButton>
                <IconButton onClick = {() => {}}>
                    <img alt = 'icon' src = {Calendar} height = '30px' width = '30px'/>
                    <Typography sx = {{margin: '20px 20px'}}>Event</Typography>
                </IconButton> 
        </Box>
    </Box>
  )
}

export default AddPost;