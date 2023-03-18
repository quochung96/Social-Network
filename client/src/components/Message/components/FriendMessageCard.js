import React from 'react'
import {Box, Avatar,Typography} from '@mui/material';
import Online from '../../../assets/icons/online.png';
const FriendMessageCard = () => {
  return (
    <Box display = 'flex' flexDirection = 'row' justifyContent = 'space-evenly' alignItems = 'center' gap = '20px' margin = '10px 20px' sx = {{background: 'white', borderRadius: 2, width: '90%', height: '100px',boxShadow: 'rgba(255,255,252, 0.2) 0px 7px 29px 0px','&:hover': {background: 'whitesmoke'}, cursor: 'pointer'}}>
    <Avatar alt = "avatar_img" src = "https://i.pinimg.com/564x/59/0a/10/590a10d14672b41fa9e148a06b6c97ed.jpg" sx = {{width: '60px', height: '60px', objectFit: 'cover'}}/>
    <div style = {{display: 'flex', flexDirection: 'column'}}>
      <Typography>Lưu Châu Ánh Thắm</Typography>
      <div style = {{display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center'}}>
        <img alt = 'icon' src = {Online} width = '15px' height = '15px'/>
        <Typography variant = 'body2'>Online</Typography>
      </div>
    </div>
  </Box>
  )
}

export default FriendMessageCard
