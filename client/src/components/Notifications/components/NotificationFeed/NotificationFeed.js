import React from 'react'
import {Box} from '@mui/material';
import NotificationCard from './NotificationCard';
const NotificationFeed = () => {
  return (
    <Box width = "800px" backgroundColor = "white" borderRadius = "5px">
      <NotificationCard onClick = {null}/>
      <NotificationCard onClick = {null}/>
      <NotificationCard onClick = {null}/>
    </Box>
  )
}

export default NotificationFeed
