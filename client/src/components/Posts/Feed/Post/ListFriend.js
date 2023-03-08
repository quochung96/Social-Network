import React from 'react'
import {Typography,Box,Avatar} from '@mui/material';
import RemoveCircleOutlineTwoToneIcon from '@mui/icons-material/RemoveCircleOutlineTwoTone';
const ListFriend = () => {
  return (
    <Box display = 'flex' flexDirection = 'row' justifyContent = 'space-between' alignItems = 'center' width = '500px' height = '50px' sx = {{'&:hover': {background: 'whitesmoke'},opacity: 1.4, borderRadius: 2, margin: '15px 5px 15px 1px',cursor: 'pointer'}}>
        <Box display = 'flex' flexDirection = 'row' gap = '10px'>
            <Avatar alt = "avatar" src = "https://i.pinimg.com/564x/a5/90/02/a59002ac37597770fa097593904f2348.jpg"/>
            <Typography fontWeight = "normal" variant = "body1" sx = {{marginTop:'-10px',display:'flex',justifyContent: 'center', alignItems: 'center'}}>Đoàn Thị Diệu Thanh</Typography>
        </Box>
        <RemoveCircleOutlineTwoToneIcon sx = {{opacity: 0.6}}/>
     </Box>
  )
}

export default ListFriend
