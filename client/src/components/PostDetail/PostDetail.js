import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Container, IconButton, Paper, Typography,Box,TextField } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import moment from 'moment';
import React,{useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getPost } from '../../actions/posts';
import { getCommentByPostId } from '../../actions/comment';
import { getUser } from '../../actions/users';
import NavbarPost from '../Navbar/NavbarPost/NavbarPost';
import lineBreak from '../../assets/icons/Line 2.png';
import Comment from './Comment/Comment';
import SendIcon from '@mui/icons-material/Send';
const PostDetail = ({user,setUser,userProfile}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams();
  const [formComment, setFormComment] = useState({content: ''})
  const handleOpenProfile = () => {
    navigate(`/profile/${userProfile.user_id}}`)
  }
  const handleChange = (e) => {
    setFormComment({...formComment,[e.target.name]: e.target.value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formComment);
  }
  const post = useSelector((state) => state.posts.post);
  const {comments} = useSelector((state) => state.comments);
  useEffect(() => {
    dispatch(getPost(id));
    dispatch(getUser(user?.user_id));
    dispatch(getCommentByPostId(id));
  },[dispatch,id,user?.user_id]);
  useEffect(() => {
    console.log(userProfile);
    console.log(comments);
  });
  if(!post) { return "No post found";}
  if(!comments) {return "No Comments";}
  return (
    <Box>
        <NavbarPost user = {user} setUser = {setUser} userProfile = {userProfile}/>
        <Container maxWidth="xl">
          <Paper sx = {{minHeight: '600px', display: 'flex', flexDirection: 'row'}}>
              <Card >
                <Box flex = {2}>
                {post.photoInPost && 
                    <CardMedia
                          sx = {{width: '100%',Width: 1200, height: 800, objectFit: 'cover'}}
                          component="img"
                          image = {post?.photoInPost.photoUrl}
                          alt="img-post"
                      />
                  }
                </Box>
              </Card>
              <Box>
              <Box width = '500px' marginLeft = '20px'>
                    <CardHeader
                      avatar={
                        <IconButton onClick = {handleOpenProfile}>
                          <Avatar sx = {{width: '60px',height:'60px',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 2px 8px'}} alt = 'avatar-test' src = {post?.user.avatar_url}/>
                        </IconButton>
                      }
                      action={
                        <IconButton aria-label="settings" onClick={null}>
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
                    <Box sx ={{ paddingLeft: 2, opacity: 0.3}}>
                      <img alt = 'icon' src = {lineBreak} width = '450px'/>
                    </Box>
                    <CardActions sx = {{marginLeft: '20px',display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <IconButton onClick = {null} sx = {{gap: 1, opacity: 0.8}}>
                          <Checkbox
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite sx={{ color: "red" }} />}
                          />
                          <Typography variant="body2" color="text.secondary">Like</Typography>
                        </IconButton>
                        <IconButton onClick = {null} sx = {{gap: 1, opacity: 0.8}}>
                          <CommentIcon />
                          <Typography variant="body2" color="text.secondary">Comment</Typography>
                        </IconButton>
                        <IconButton onClick = {null} sx = {{gap: 1, opacity: 0.8}}>
                          <Share />
                          <Typography variant="body2" color="text.secondary">Share</Typography>
                        </IconButton>
                    </CardActions>
                    <Box sx ={{ paddingLeft: 2, opacity: 0.3}}>
                      <img alt = 'icon' src = {lineBreak} width = '450px'/>
                    </Box>
                    <Box display = 'flex' flexDirection = 'column'>
                      {comments.map((comment) => (
                        <Comment key = {comment.cmtId} comment = {comment}/>
                      ))}
                    </Box>
                </Box>
                <Box display = 'flex' flexDirection = 'row' width = '400px' sx = {{position: 'absolute',bottom:-80,marginLeft: 4}}>
                  <Avatar alt = "avatar" src = {userProfile.avatar_url}/>
                  <TextField name = "content" onChange={handleChange} multiline label = "Write a comment..." fullWidth sx = {{marginLeft: 2}}/>
                  <IconButton onClick = {handleSubmit}><SendIcon /></IconButton>
                </Box>
              </Box>
          </Paper>
        </Container>
    </Box>
  )
}

export default PostDetail;
