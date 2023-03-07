import React from 'react'
import {Box,Typography} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const Notifications = () => {
  return (
      <Box sx = {{position: 'absolute',right: -20,top:80,width: 280,height: '600px',background: 'white', borderRadius: '2px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}}>
        <Box display = 'flex' flexDirection = 'row' justifyContent = 'space-between'>
            <Typography variant = 'h4' fontWeight = 'bold' fontSize = '20px' sx = {{margin: '1rem 1rem'}}>Notifications</Typography>
            <MoreHorizIcon sx = {{margin: '1rem 1rem'}}/>
        </Box>
        <Box display = 'flex' justifyContent = 'space-evenly' width = '140px' flexDirection = 'row' sx = {{margin: '0.2rem 0.4rem'}}>
            <Box sx = {{'&:hover': {backgroundColor: 'whitesmoke'},borderRadius: '20px', width: 60, alignItems: 'center', justifyContent: 'center', display: 'flex', color: '#2381fa', backgroundColor: '#d3e5fe'}}>
                All
            </Box>
            <Box sx = {{'&:hover': {backgroundColor: 'whitesmoke'},borderRadius: '20px', width: 60, alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                Unread
            </Box>
        </Box>

      </Box>
  )
}

export default Notifications
