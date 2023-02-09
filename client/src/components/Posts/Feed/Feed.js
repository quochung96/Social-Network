import React from 'react';
import {Grid,Container, Skeleton,Box} from '@mui/material';
import Post from './Post/Post';
import AddPost from './Post/AddPost';
import { useSelector } from 'react-redux';

const Feed = ({setCurrentId,user, userProfile}) => {
  //Khi nào kết nối database và xử lý xong redux thì xài này
  const {isLoading,posts} = useSelector((state) => state.posts);

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
      {posts.map((post) => (
        <Grid key={post.postId} item xs={12} sm={12} md={6} lg= {3}>
          <Post post = {post} setCurrentId = {setCurrentId} user = {user} userProfile = {userProfile}/>
        </Grid>
      ))}
    </Box>
  )
}
export default Feed;