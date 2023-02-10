import React from 'react';
import {Grid,Container, Skeleton,Box} from '@mui/material';
import { useSelector } from 'react-redux';
import AddPost from '../Posts/Feed/Post/AddPost';
import Post from '../Posts/Feed/Post/Post';

const FeedProfile = ({user, userProfile}) => {
  //Khi nào kết nối database và xử lý xong redux thì xài này
  const {isLoading,postUser} = useSelector((state) => state.posts);

  return (
    isLoading ? (
      <Container >
      <Box height = 'auto' width = "100%" sx={{justifyContent: 'center', display: 'flex', flexDirection: 'column', marginLeft: '40px'}}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
          <Skeleton />
      </Box>
      </Container>
    ) :
    <Box flex = {3} p={1} sx = {{width: '100%', height: 'auto'}}>
      <AddPost user = {user} userProfile = {userProfile} />
      {/* Nào kết nối redux của post và dùng selector thì xài này để lấy từ database */}
      
      {postUser.map((post) => (
        <Grid key={post.postId} item xs={12} sm={12} md={6} lg= {3}>
          <Post post = {post} user = {user} userProfile = {userProfile}/>
        </Grid>
      ))}
    </Box>
  )
}
export default FeedProfile;