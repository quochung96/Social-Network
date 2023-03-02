import React,{useState} from 'react';
import {Box,Avatar,IconButton,Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {StyledInputBase} from '../../../widgets/Styles';
import InsertPicture from '../../../../assets/icons/insertPicture.png';
import Player from '../../../../assets/icons/player.png';
import Calendar from '../../../../assets/icons/calendar.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PublicIcon from '@mui/icons-material/Public';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useDispatch } from 'react-redux';
import { createPost } from '../../../../api';
import FileBase from 'react-file-base64';

const AddPost = ({user,userProfile}) => {
  const [isShowImage, setIsShowImage] = useState(false);
  const [img, setImg] = useState(null);
  const [open, setOpen] = useState(false);
  const [formPost, setFormPost] = useState({content: ''});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openProfile = () => {navigate(`/profile/${userProfile?.user_id || user?.result.sub}`)};
  const handleChange = (e) => {
    setFormPost({...formPost, [e.target.name]: e.target.value}); 
  }
  const handleShowImage = () => setIsShowImage(true);
  const handleCloseImage = () => {
    setIsShowImage(false)
    setImg(null);
  };
  const getFiles = (files) => {
    setImg(files);
    setFormPost({ ...formPost, photoInPost: {photoUrl: files.base64}});
  }
  const handleSubmit = () => {
    console.log(formPost);

    dispatch(createPost(user?.user_id,formPost)); //OK
    window.location.reload(false);
  }
  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <Box bgcolor = "#FFFFFF" flex = {4} p = {2} display = 'flex' flexDirection = 'column' sx = {{margin: 4,width: '70%', height: 'auto', borderRadius: '20px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 5px'}}>
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
              <Dialog open = {open} onClose = {handleClose} sx = {{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <DialogTitle sx = {{fontWeight: 'bold', alignItems: 'center', justifyContent: 'center', display: 'flex', textAlign: 'center'}}>
                  Create post
                  <IconButton onClick = {handleClose} >
                    <CancelOutlinedIcon fontSize = "large"/>
                  </IconButton>
                </DialogTitle>
                <DialogContent>
                  <Box display='flex' flexDirection='column' sx = {{gap: '20px'}}>
                    <Box display='flex' flexDirection='row' sx = {{gap: '20px'}}>
                      <Avatar alt = {user?.result.name} src = {user?.result.picture || userProfile?.avatar_url } sx = {{width: '60px', height: '60px'}}/>
                      <Box display = 'flex' flexDirection = 'column' sx ={{gap: '3px', marginTop: '-5px'}}>
                        <Typography>{userProfile?.userName}</Typography>
                        <Box component={"button"} onClick = {() => console.log("Click to permission")} 
                          display= 'flex' flexDirection = 'row' justifyContent= 'center' alignItems='center' sx = {{width: '110px', height: '25px', background: '#A9A9A9',opacity: '0.7' ,borderRadius: '5px', gap: '5px', color: '#000000', cursor: 'pointer'}}>
                          <PublicIcon fontSize='small'/>
                          <div>Public</div>
                          <KeyboardArrowDownIcon fontSize = 'small'/>
                        </Box>
                      </Box>
                    </Box>
                    <TextField name = "content" onChange={handleChange} multiline label = "What's on your mind" fullWidth/>
                    {isShowImage && 
                      <Box display='flex' justifyContent = 'center' alignItems='center' width= "500px" height = "auto" minHeight = "300px" sx = {{border: '2px solid', borderRadius: '20px', borderStyle: 'groove'}}>
                        <IconButton onClick = {handleCloseImage} sx = {{position: 'absolute', right: '40px', bottom: '380px'}}>
                            <CancelOutlinedIcon />
                        </IconButton>
                        {!img && 
                          <FileBase multiple = {false} onDone = {getFiles} />
                        }
                        {img && <img alt = "postImage" src = {img["base64"]} width = "450px" height = 'auto' />}
                      </Box>
                    }
                    {!isShowImage && <Box width = "500px"/>}
                  </Box>
                </DialogContent>
                <DialogActions sx = {{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <Box display='flex' flexDirection = 'row' width='95%' height = 'auto' minHeight="40px" sx = {{justifyContent: 'space-between', alignItems: 'center',border: '2px solid', borderRadius: '10px', borderStyle: 'groove'}}>
                    <Typography sx = {{marginLeft: '20px'}}>Add to your post</Typography>
                      <IconButton onClick = {handleShowImage}><AddPhotoAlternateIcon /></IconButton>
                  </Box>
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