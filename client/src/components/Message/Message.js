import React from 'react';
import {Box} from '@mui/material';
import SidebarChat from './components/SidebarChat';
import ListFriendChat from './components/ListFriendChat';
import HeaderChat from './components/HeaderChat';
import MessageCard from './components/MessageCard';

const Message = () => {
  return (
    <Box display = 'flex' flexDirection = "row" justifyContent = 'space-between' sx = {{height: '1200px',marginTop: '-10px', marginLeft: "-11.2rem"}}>
      <SidebarChat />
      <ListFriendChat />
      <Box flex = {4} p={1} sx = {{width: '100%', height: 'auto'}}>
        <HeaderChat />
        <Box sx = {{marginTop: 5}}>
          <MessageCard />
          <MessageCard />
        </Box>
      </Box>
    </Box>
  )
}

export default Message
