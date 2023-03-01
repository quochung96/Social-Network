import React,{useState} from 'react';
import {Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import CommentIcon from '@mui/icons-material/Comment';
import {ButtonBase,TextField,Box,Avatar,Card,CardActions,CardContent,CardHeader,CardMedia,Checkbox,IconButton,Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button} from "@mui/material";
import {useNavigate} from 'react-router-dom';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import FileBase from 'react-file-base64';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PublicIcon from '@mui/icons-material/Public';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { updatePost } from '../../../../actions/posts';
const Post = ({post,user,userProfile}) => {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);
  const [isShowImage, setIsShowImage] = useState(false);
  const [formPost, setFormPost] = useState({content: ''});
  const [img, setImg] = useState(null);
  const [open, setOpen] = useState(false);
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

  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
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
  const openDetailPost = () => navigate(`/posts/${post.postId}`);
  
  return (
    <Card sx={{ margin: 4,width: '1000px', borderRadius: '30px',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 10px 15px' }} raised elevation = {6}>
      <CardHeader
        avatar={
          <IconButton onClick = {handleOpenProfile}>
            <Avatar sx = {{width: '60px',height:'60px',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 2px 8px'}} alt = 'avatar-test' src = {post?.user.avatar_url}/>
          </IconButton>
        }
        action={
          (user?.user_id === post?.user.user_id &&
          <>
            <IconButton aria-label="settings" onClick={handleClickOpen}>
              <MoreVert />
            </IconButton>
            <Dialog open = {open} onClose = {handleClose}>
            <DialogTitle sx = {{fontWeight: 'bold', alignItems: 'center', justifyContent: 'center', display: 'flex', textAlign: 'center'}}>
                  Edit Post
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
                    <TextField name = "content" onChange={handleChange} label = "What's on your mind" fullWidth/>
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
      {post.photoInPost && 
      <ButtonBase sx = {{display: 'flex',flexDirection: 'column'}} onClick = {openDetailPost}>  
        <CardMedia
              sx = {{width: '100%',minWidth: 1000, height: 800, objectFit: 'cover'}}
              component="img"
              image = {post?.photoInPost.photoUrl}
              alt="img-post"
          />
      </ButtonBase>
      }
      <CardActions sx = {{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton onClick = {handleExpandClick}>
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