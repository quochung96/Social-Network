import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Container, IconButton, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CommentIcon from '@mui/icons-material/Comment';
import moment from 'moment';
import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getPost } from '../../actions/posts';
import NavbarPost from '../Navbar/NavbarPost/NavbarPost';
import lineBreak from '../../assets/icons/Line 2.png';
const PostDetail = ({user,setUser,userProfile}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams();
  const handleOpenProfile = () => {
    navigate(`/profile/${userProfile.user_id}}`)
  }
  const post = useSelector((state) => state.posts.post);
  useEffect(() => {
    dispatch(getPost(id));
  },[dispatch,id]);
  useEffect(() => {
    console.log(post);
  });
  if(!post){ return "No post found";}
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
              <Box width = '600px' marginLeft = '20px'>
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
                      <img alt = 'icon' src = {lineBreak} width = '550px'/>
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
                      <img alt = 'icon' src = {lineBreak} width = '550px'/>
                    </Box>
                    <Box display = 'flex' flexDirection = 'column'>
                      Comment
                    </Box>
                </Box>
              </Box>
          </Paper>
        </Container>
    </Box>
  )
}

export default PostDetail;
