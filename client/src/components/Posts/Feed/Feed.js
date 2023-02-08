import React, {useState,useEffect} from 'react';
import {Container, Skeleton,Box} from '@mui/material';
import Post from './Post/Post';
import AddPost from './Post/AddPost';
import { useSelector } from 'react-redux';

const Feed = ({user, userProfile}) => {
  //Khi nào kết nối database và xử lý xong redux thì xài này
  const {posts} = useSelector((state) => state.posts);
  // if(!posts.length && !isLoading) {
  //   return 'No Posts';
  // }
  const [isLoading,setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [1000]);
  useEffect(() => {
    console.log(posts);
  });

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
      {/* {posts.map((post) => (
        <Post post = {post} user = {user} userProfile = {userProfile}/>
      ))} */}
      <Post user = {user} userProfile = {userProfile}/>
      <Post user = {user} userProfile = {userProfile}/>
    </Box>
  )
}
export default Feed;