import React,{useState} from 'react';
import {Box,Avatar,IconButton,Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {StyledInputBase} from '../../../widgets/Styles';
import InsertPicture from '../../../../assets/icons/insertPicture.png';
import Player from '../../../../assets/icons/player.png';
import Calendar from '../../../../assets/icons/calendar.png';
import PublicIcon from '@mui/icons-material/Public';
import { useDispatch } from 'react-redux';
import { createPost } from '../../../../api';

const AddPost = ({user,userProfile}) => {
  const [open, setOpen] = useState(false);
  const [formPost, setFormPost] = useState({content: ''});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openProfile = () => {navigate(`/profile/${user?.result.acc_id || user?.result.sub}`)};
  const handleChange = (e) => {
    setFormPost({...formPost, [e.target.name]: e.target.value}); 
  }
  const handleSubmit = (e) => {
    console.log(formPost);

    dispatch(createPost(user?.user_id,formPost)); //OK
  }
  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <Box bgcolor = "#FFFFFF" flex = {4} p = {2} display = 'flex' flexDirection = 'column' sx = {{margin: 4,width: '90%', height: 'auto', borderRadius: '20px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 5px'}}>
        <Box display = 'flex' flexDirection = 'row'>
            <IconButton onClick = {openProfile}>
              <Avatar alt = {user?.result.name} src = {user?.result.picture || userProfile?.avatar_url}/>
            </IconButton>
            <Box marginTop = '10px' width = '100%' sx = {{borderRadius: '30px'}}>
            <StyledInputBase
                onClick = {handleClickOpen}
                sx = {{border: '2px solid', borderRadius: '20px', borderStyle: 'groove', width: '100%', height: '40px', marginLeft: '10px'}}
            >
              <Typography variant='outlined'>Start a post</Typography> 
            </StyledInputBase>
            </Box>
            <div>
              <Dialog open = {open} onClose = {handleClose}>
                <DialogTitle sx = {{fontWeight: 'bold', alignItems: 'center', justifyContent: 'center', display: 'flex', textAlign: 'center'}}>Create post</DialogTitle>
                <DialogContent>
                  <Box display='flex' flexDirection='column' sx = {{gap: '20px'}}>
                    <Box display='flex' flexDirection='row' sx = {{gap: '20px'}}>
                      <Avatar alt = {user?.result.name} src = {user?.result.picture || userProfile?.avatar_url }/>
                      <Box display = 'flex' flexDirection = 'column' sx ={{gap: '3px'}}>
                        <Typography>{userProfile?.userName}</Typography>
                        <Box display= 'flex' flexDirection = 'row' justifyContent= 'center' alignItems='center' sx = {{width: '100px', height: '25px', background: '#A9A9A9', opacity: '0.9', borderRadius: '5px', gap: '5px'}}>
                          <PublicIcon fontSize='small'/>
                          Public
                        </Box>
                      </Box>
                    </Box>
                    <TextField name = "content" onChange={handleChange}/>
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button fullWidth variant='contained' onClick = {handleSubmit}>POST</Button>
                </DialogActions>
              </Dialog>
            </div>
        </Box>
        <Box display = 'flex' flexDirection = 'row' justifyContent = 'space-evenly' alignItems = 'center'>
                <IconButton onClick = {handleClickOpen}>
                    <img alt = 'icon' src = {InsertPicture} height = '30px' width = '30px'/>
                    <Typography sx = {{margin: '20px 20px'}}>Image</Typography>
                </IconButton>
                <IconButton onClick = {handleClickOpen}>
                    <img alt = 'icon' src = {Player} height = '30px' width = '30px'/>
                    <Typography sx = {{margin: '20px 20px'}}>Video</Typography>
                </IconButton>
                <IconButton onClick = {handleClickOpen}>
                    <img alt = 'icon' src = {Calendar} height = '30px' width = '30px'/>
                    <Typography sx = {{margin: '20px 20px'}}>Event</Typography>
                </IconButton> 
        </Box>
    </Box>
  )
}

export default AddPost;