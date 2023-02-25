import React,{useState} from 'react';
import {Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import CommentIcon from '@mui/icons-material/Comment';
import {ButtonBase,TextField,Tooltip,Collapse,Box,Avatar,Card,CardActions,CardContent,CardHeader,CardMedia,Checkbox,IconButton,Typography} from "@mui/material";
import {useNavigate} from 'react-router-dom';
import AuthorIcon from '../../../../assets/icons/author.png';
import AvatarIcon from '../../../../assets/icons/user.png';
import moment from 'moment';

const intialComment = {comment: ''};
const Post = ({post,setCurrentId,user,userProfile}) => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  //Fetch all the comment in the specified post
  // const [comments,setComments] = useState(posts?.comments);
  //Set one comment in the post
  const [comment, setComment] = useState(intialComment);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleOpenProfile = () => {
    navigate(`/profile/${post?.user.user_id}`)
  }
  const handleChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalComment = `${userProfile?.userName}: ${comment}`;
    /*const newComments = await dispatch(commentPost(finalComment));
     setComments(newComments); */
    console.log(finalComment);
    // setComment('');
  }
  const openDetailPost = () => navigate(`/posts/${post.postId}`);
  
  return (
    <Card sx={{ margin: 4, borderRadius: '30px',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 10px 15px' }} raised elevation = {6}>
      <CardHeader
        avatar={
          <IconButton onClick = {handleOpenProfile}>
            <Avatar sx = {{width: '60px',height:'60px',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 2px 8px'}} alt = 'avatar-test' src = {post?.user.avatar_url}/>
          </IconButton>
        }
        action={
          <IconButton aria-label="settings" onClick={() => setCurrentId(post.postId)}>
            <MoreVert />
          </IconButton>
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
              sx = {{width: '100%',minWidth: 1040, height: 1200, objectFit: 'cover'}}
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
      <Collapse in = {expanded} timeout='auto' unmountOnExit sx = {{width: '100%', height: 'auto'}}>
        <Box marginLeft = '25px' justifyContent = 'start' display = 'flex' flexDirection = 'column'>
          <form onSubmit = {handleSubmit}>
          <Box display = 'flex' flexDirection = 'row'>
            <Tooltip title = {user?.result.name}>
                <IconButton onClick = {() => navigate('/profile')}>
                  <Avatar alt = {user?.result.name || "No Avatar"} src = {user?.result.picture || userProfile?.avatar_url || <AvatarIcon />} />
                </IconButton>
            </Tooltip>
            <Box marginTop = '10px' width = '900px'>
              <TextField style ={{
                '& fieldset':{
                  borderRadius: '30px'
                }
              }}
                name = "comment"
                label = "Add a comment ..."
                size = 'small'
                variant = 'outlined'
                color = 'primary'
                fullWidth
                autoFocus 
                type = 'text'
                onClick = {handleChange}
              />
            </Box>
          </Box>
          </form>
          <Box display = 'flex' flexDirection = 'row'>
            <IconButton onClick = {null}>
              <Avatar alt = 'avatar-test' src = {userProfile?.avatar_url}/>
            </IconButton>
            <Box backgroundColor = 'rgba(239, 239, 240, 1)' marginTop = '10px' marginBottom = '15px' borderRadius = '40px' display ='flex' flexDirection='column' width = '40%' height = 'auto'>
              <Box marginLeft = '30px' marginTop = '15px' fontFamily = 'Inter' marginBottom = '15px'>
                <img alt = 'icon' src = {AuthorIcon} height = '20px'/>
                <span>Author</span>
                <Typography variant = 'h4' fontSize = '14px' fontWeight = '600' fontFamily = 'Inter'>Đam mê ngôn tình</Typography>
                <Typography variant = 'h4' fontSize = '14px' fontWeight = '400' fontFamily = 'Inter'>Chó thui chứ mk k thấy vậy</Typography>
              </Box>
            </Box>
          </Box>
          <Box display = 'flex' flexDirection = 'row'>
            <IconButton onClick = {null}>
              <Avatar alt = 'avatar-test' src = {userProfile?.avatar_url}/>
            </IconButton>
            <Box backgroundColor = 'rgba(239, 239, 240, 1)' marginTop = '10px' marginBottom = '15px' borderRadius = '40px' display ='flex' flexDirection='column' width = '40%' height = 'auto'>
              <Box marginLeft = '30px' marginTop = '15px' fontFamily = 'Inter' marginBottom = '15px'>
                <img alt = 'icon' src = {AuthorIcon} height = '20px'/>
                <span>Author</span>
                <Typography variant = 'h4' fontSize = '14px' fontWeight = '600' fontFamily = 'Inter'>Đam mê ngôn tình</Typography>
                <Typography variant = 'h4' fontSize = '14px' fontWeight = '400' fontFamily = 'Inter'>Chó thui chứ mk k thấy vậy</Typography>
              </Box>
            </Box>
          </Box>
          <Box display = 'flex' flexDirection = 'row'>
            <IconButton onClick = {null}>
              <Avatar alt = 'avatar-test' src = {userProfile?.avatar_url}/>
            </IconButton>
            <Box backgroundColor = 'rgba(239, 239, 240, 1)' marginTop = '10px' marginBottom = '15px' borderRadius = '40px' display ='flex' flexDirection='column' width = '40%' height = 'auto'>
              <Box marginLeft = '30px' marginTop = '15px' fontFamily = 'Inter' marginBottom = '15px'>
                <img alt = 'icon' src = {AuthorIcon} height = '20px'/>
                <span>Author</span>
                <Typography variant = 'h4' fontSize = '14px' fontWeight = '600' fontFamily = 'Inter'>Đam mê ngôn tình</Typography>
                <Typography variant = 'h4' fontSize = '14px' fontWeight = '400' fontFamily = 'Inter'>Chó thui chứ mk k thấy vậy</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Collapse>
    </Card>
  );
};

export default Post;