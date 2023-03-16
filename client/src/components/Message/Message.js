import React from 'react'
import {Box,Stack,Avatar} from '@mui/material';
import memoLogo from '../../assets/icons/memories-Logo.png'
const Message = () => {
  return (
    <Stack direction = "row" justifyContent = "space-between">
      <Box flex = {0.2} sx={{display: {xs: 'none',md: 'block', marginLeft: '-32px',marginTop: -10 ,background: '#575757',height: '1200px'}}}>
        <Box display = 'flex' justifyContent = 'center' alignItems = 'center' margin = '20px 5px' sx = {{background: '#D9D9D9', width: '60px', height: '60px',borderRadius: 30}} >
          <Avatar alt = "groups" src = {memoLogo}/>
        </Box>
      </Box>
      <Box flex = {1} p = {1} sx = {{background: '#535151'}}>
        Client
      </Box>
      <Box flex = {3} p={1} sx = {{width: '100%', height: 'auto'}}>
        Direct Message
      </Box>

    </Stack>
  )
}

export default Message
