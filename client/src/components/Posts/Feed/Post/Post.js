import React,{useState} from 'react';
import {Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import CommentIcon from '@mui/icons-material/Comment';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import {RadioGroup,FormControl,Grid,Checkbox,Container,Paper,Collapse,ButtonBase,TextField,Box,Avatar,Card,CardActions,CardContent,CardHeader,CardMedia,IconButton,Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button} from "@mui/material";
import {useNavigate} from 'react-router-dom';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import FileBase from 'react-file-base64';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PublicIcon from '@mui/icons-material/Public';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { updatePost,updateAudiencePost } from '../../../../actions/posts';
import lineBreak from '../../../../assets/icons/Line 2.png';
import CheckBox from '../../../widgets/Checkbox';
import World from '../../../../assets/icons/public.png';
import Friends from '../../../../assets/icons/friends.png';
import FriendsExcept from '../../../../assets/icons/friends_except.png';
import Lock from '../../../../assets/icons/padlock.png';
const Post = ({post,user,userProfile}) => {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);
  const [isShowImage, setIsShowImage] = useState(false);
  const [formPost, setFormPost] = useState({content: ''});
  const [img, setImg] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAudience, setOpenAudience] = useState(false);
  const [openRecycleBin, setOpenRecycleBin] = useState(false);

  const [audienceValue, setAudienceValue] = useState("Public");
  const handleChangeAudience = (e) => {
    setAudienceValue(e.target.value);
    console.log({permission: audienceValue});
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
  const navigate = useNavigate();

  function handleClickOpen(id) {
    switch (id) {
      case 1:
        setOpenEdit(true);   
        break;
      case 2:
        setOpenAudience(true);
        break;
      case 3:
        setOpenRecycleBin(true);
        break;
      default:
        break;
    }
  }
  function handleClose(id){
    switch (id) {
      case 1:
        setOpenEdit(false);   
        break;
      case 2:
        setOpenAudience(false);
        break;
      case 3:
        setOpenRecycleBin(false);
        break;
      default:
        break;
    }
  }
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleOpenProfile = () => {
    navigate(`/profile/${post?.user.user_id}`)
  }
  const handleChange = (e) => {
    setFormPost({ ...post, [e.target.name]: e.target.value});
  };
  const handleEditPost = (e) => {
    e.preventDefault();
    console.log(formPost);
    dispatch(updatePost(post.postId, formPost));
    window.location.reload(false);
  }
  const handleSubmitAudience = (e) => {
    e.preventDefault();
    if(post.permission === audienceValue){return null;}
    else{
      dispatch(updateAudiencePost(post.postId, {permission: audienceValue}));
    }
    window.location.reload(false);
  }
  const openDetailPost = () => navigate(`/posts/${post.postId}`);
  
  return (
    <Card sx={{ margin: 4,width: '800px', borderRadius: '30px',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 10px 15px' }} raised elevation = {6}>
      <CardHeader
        avatar={
          <IconButton onClick = {handleOpenProfile}>
            <Avatar sx = {{width: '60px',height:'60px',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 2px 8px'}} alt = 'avatar-test' src = {post?.user.avatar_url}/>
          </IconButton>
        }
        action={
          (user?.user_id === post?.user.user_id &&
          <>
            <IconButton onClick={handleExpandClick}>
              <MoreVert />
            </IconButton>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Paper sx = {{marginLeft: -30,display: 'flex', flexDirection: 'column',alignItems: 'start', gap: '5px'}}>
                  <ButtonBase onClick = {() => handleClickOpen(2)}>
                    <Box display = 'flex' flexDirection = 'row' gap = '5px'>
                      <PublicIcon />
                      <Typography variant = 'text.secondary' fontWeight = 'bold'>Edit audience</Typography>
                    </Box>
                  </ButtonBase>
                  <ButtonBase onClick = {() => handleClickOpen(1)}>
                    <Box display = 'flex' flexDirection = 'row' gap = '5px'>
                      <EditOutlinedIcon />
                      <Typography variant = 'text.secondary' fontWeight = 'bold'>Edit Post</Typography>          
                    </Box>
                  </ButtonBase>
                  <img alt = 'icon' src = {lineBreak} width = '200px'/>
                  <ButtonBase onClick = {null}>
                    <Box display = 'flex' flexDirection = 'row' gap = '5px'>
                      <ArchiveOutlinedIcon />
                      <Typography variant = 'text.secondary' fontWeight = 'bold'>Move to archive</Typography>     
                    </Box>
                  </ButtonBase>
                  <ButtonBase onClick = {() => handleClickOpen(3)}>
                    <Box display = 'flex' flexDirection = 'row' gap = '5px'> 
                      <DeleteOutlinedIcon />
                      <Typography variant = 'text.secondary' fontWeight = 'bold'>Move to Recycle Bin</Typography>
                    </Box>
                  </ButtonBase>
                </Paper>
            </Collapse>
            {/* Open Edit Audience*/}
            <Dialog open = {openAudience} onClose = {() => handleClose(2)}>
              <DialogTitle sx = {{fontWeight: 'bold', textAlign: 'center'}}>
                  <Container maxWidth = "xl">
                    <Paper sx = {{display: 'flex', justifyContent:'space-between', alignItems: 'center'}}>
                      <div style={{marginLeft: '11rem'}}>Select Audience</div>
                      <IconButton onClick = {() => handleClose(2)} >
                        <CancelOutlinedIcon fontSize = "large"/>
                      </IconButton>
                    </Paper>
                  </Container>
              </DialogTitle>
              <DialogContent>
                <Typography fontSize = '16px' fontWeight='bold'>To help friends find you, your current profile picture can be seen by everyone.</Typography>
                <Typography variant = 'text.secondary'>You can decide who should see the other details, such as the description, likes or comments.</Typography>
                <Grid container spacing = {4} item xs = {12} sm = {12} md = {6} sx = {{marginTop: 2}}>
                  <FormControl>
                  <RadioGroup value = {audienceValue} onChange = {handleChangeAudience}>
                    <CheckBox icon = {World} title = "Public" subtitle = "Anyone on or off Memories"/>
                    <CheckBox icon = {Friends} title = "Friends" subtitle = "Your friends on Facebook ."/>
                    <CheckBox icon = {FriendsExcept} title = "Friends except" subtitle = "Don't show to some friends"/>
                    <CheckBox icon = {Lock} title = "Only me" subtitle = "Only you can see your post ."/>
                  </RadioGroup>
                  </FormControl>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button variant = "text" onClick = {() => handleClose(2)}>Cancel</Button>
                <Button variant = "contained" onClick = {handleSubmitAudience}>Save</Button>
              </DialogActions>
            </Dialog>
            {/* Open Edit Post*/}
            <Dialog open = {openEdit} onClose = {() => handleClose(1)}>
                <DialogTitle sx = {{fontWeight: 'bold', alignItems: 'center', justifyContent: 'center', display: 'flex', textAlign: 'center'}}>
                  Edit Post
                  <IconButton onClick = {() => handleClose(1)} >
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
                <Button fullWidth variant='contained' onClick = {handleEditPost}>POST</Button>
                </DialogActions>
            </Dialog>
            {/* Open Recycle Bin*/}
            <Dialog open = {openRecycleBin} onClose = {() => handleClose(3)}>
              <DialogTitle sx = {{fontWeight: 'bold', alignItems: 'center', justifyContent: 'center', display: 'flex', textAlign: 'center'}}>
                  Move to your recycle bin?
                  <IconButton onClick = {() => handleClose(3)} >
                    <CancelOutlinedIcon fontSize = "large"/>
                  </IconButton>
              </DialogTitle>
            </Dialog>
          </>
          )
        }
        title={
            <Typography variant = 'h6' fontSize = '18px' fontWeight = '500'>{post?.user.userName}</Typography>
        }
        subheader={
            <Typography color = 'grey'>{moment(post?.createAt).format('LLLL')} .</Typography>
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            {post?.content}
        </Typography>
      </CardContent>
      {post.photoInPost.photoUrl && (
        <ButtonBase sx = {{display: 'flex',flexDirection: 'column'}} onClick = {openDetailPost}>  
        <CardMedia
              sx = {{width: '100%', height: 'auto', objectFit: 'cover'}}
              component="img"
              image = {post.photoInPost.photoUrl}
              alt="img-post"
          />
      </ButtonBase>
      )
      }
      <CardActions sx = {{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton onClick = {() => navigate(`/posts/${post.postId}`)}>
          <CommentIcon />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;