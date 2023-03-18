import React from 'react';
import {Paper,Typography,Avatar,Box,IconButton} from '@mui/material';
import Emotion from '../../../assets/icons/emotion_message.png';
import Reply from '../../../assets/icons/reply_message.png';
import More from '../../../assets/icons/expand_message.png';

const MessageCard = ({isSender}) => {

  return (
    <Paper sx = {{display: 'flex',justifyContent: 'space-between', flexDirection: 'row', height: 80, alignItems: 'center', marginTop: 1}}>
        {isSender ?
        <>
        <Box sx = {{display: 'flex', flexDirection: 'row', gap: 2, marginTop: 2, marginBottom: 2}}>
            <Avatar alt = "avt_img" src = "https://i.pinimg.com/564x/59/0a/10/590a10d14672b41fa9e148a06b6c97ed.jpg" sx = {{marginLeft: 4}}/>
            <div>
                <Typography variant = "body2" fontSize = "18px">Lưu Châu Ánh Thắm</Typography>
                <Typography variant = "body2">Đâu cho chị xem nào, ảnh hôm qua mình chụp đúng khum.</Typography>
            </div>
        </Box>
        <Box height = '32px' width = '150px' sx = {{display: 'flex',justifyContent: 'center', alignItems: 'center',background: '#D9D9D9',borderRadius: 30, gap: 1, position: 'static', marginTop: -4, marginRight: 2}}>
            <IconButton onClick = {null}>
                <img alt = "icon" src = {Emotion} height = '20px'/>
            </IconButton>
            <IconButton onClick = {null}>
                <img alt = "icon" src = {Reply} height = '20px'/>
            </IconButton>
            <IconButton onClick = {null}>
                <img alt = "icon" src = {More} height = '20px'/>
            </IconButton>
        </Box>
        </>
        :
        <>     
        <Box height = '32px' width = '150px' sx = {{display: 'flex',justifyContent: 'center', alignItems: 'center',background: '#D9D9D9',borderRadius: 30, gap: 1, position: 'static', marginTop: -4, marginLeft: 2}}>
            <IconButton onClick = {null}>
                <img alt = "icon" src = {Emotion} height = '20px'/>
            </IconButton>
            <IconButton onClick = {null}>
                <img alt = "icon" src = {Reply} height = '20px'/>
            </IconButton>
            <IconButton onClick = {null}>
                <img alt = "icon" src = {More} height = '20px'/>
            </IconButton>
        </Box>
        <Box sx = {{display: 'flex', flexDirection: 'row', gap: 2,marginTop: 2, marginBottom: 2}}>
            <div>
                <Typography variant = "body2" fontSize = "18px" sx = {{display: 'flex', justifyContent: 'end'}}>Lưu Châu Ánh Thắm</Typography>
                <Typography variant = "body2">Đâu cho chị xem nào, ảnh hôm qua mình chụp đúng khum.</Typography>
            </div>
            <Avatar alt = "avt_img" src = "https://i.pinimg.com/564x/59/0a/10/590a10d14672b41fa9e148a06b6c97ed.jpg" sx = {{marginRight: 4}}/>
        </Box>
        </>
        }
    </Paper>
  )
}

export default MessageCard
