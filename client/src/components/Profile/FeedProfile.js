import React,{useEffect} from 'react';
import {Grid,Box} from '@mui/material';
import { useSelector } from 'react-redux';
import AddPost from '../Posts/Feed/Post/AddPost';
import Post from '../Posts/Feed/Post/Post';

const FeedProfile = ({user, userProfile}) => {
  const {postUser} = useSelector((state) => state.posts);
  useEffect(() => {
    console.log(postUser);
  });
  if(!postUser) return 'No post user';
  return (
    (postUser ? 
    <Box flex = {3} p={1} sx = {{width: '100%', height: 'auto'}}>
      <AddPost user = {user} userProfile = {userProfile} /> 
      {postUser.map((post) => (
        <Grid key={post.postId} item xs={12} sm={12} md={6} lg= {3}>
          <Post post = {post} user = {user} userProfile = {userProfile}/>
        </Grid>
      ))} 
    </Box>
    : null
    )
  )
}
export default FeedProfile;