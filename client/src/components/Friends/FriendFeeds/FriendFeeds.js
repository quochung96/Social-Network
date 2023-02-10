import { Box } from '@mui/system'
import React from 'react'
import FriendCard from './FriendCard';

const FriendFeeds = () => {
  return (
    <Box flex = {3} p={1} sx = {{width: '100%', height: 'auto', background: 'white', marginLeft: '20px',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '10px'}}>
        <FriendCard />
    </Box>
  )
}

export default FriendFeeds;
