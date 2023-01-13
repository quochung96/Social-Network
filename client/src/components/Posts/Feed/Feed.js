import React,{useState} from 'react';
import {Container, Skeleton,Box} from '@mui/material';
import Post from './Post/Post';
const Feed = () => {
  //Khi nào kết nối database và xử lý xong redux thì xài này
  // const {posts,isLoading} = useSelector((state) => state.posts);
  const [loading,setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [2000]);

  return (
    loading ? (
      <Container >
      <Box sx={{ width: 1200 }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
      </Box>
      </Container>
    ) :
    <Box flex = {4} p={2}>
      {/* Nào kết nối redux của post và dùng selector thì xài này để lấy từ database
      {posts.map((post) => (
        <Post />
      ))} */}
      <Post />
      <Post />
    </Box>
  )
}
export default Feed;