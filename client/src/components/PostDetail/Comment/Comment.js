import React from 'react';
import {Box,Avatar,Typography,ButtonBase,Tooltip} from '@mui/material';
import moment from 'moment';
const Comment = ({comment}) => {
  return (
    <Box display = 'flex' flexDirection = 'row' marginLeft = '10px' marginTop = '20px' gap = '10px'>
      <Avatar alt = "avatar" src = {comment.users.avatar_url} />
      <Box flexDirection = 'column'>
      <Box sx = {{background: 'whitesmoke',display: 'flex', flexDirection: 'row', borderRadius: 5, minHeight: 70,minWidth: 400 ,maxWidth: 500}}>
        <Box sx ={{flexDirection: 'column',display: 'flex',justifyContent: 'center'}}>
          <Typography sx = {{marginLeft: 3,marginBottom: 0.5,fontWeight: '600',opacity: 0.8}}>{comment.users.userName}</Typography>
          <Typography sx = {{marginLeft: 3}}>{comment.cmtContent}</Typography>
        </Box>
      </Box>
      <Box display = 'flex' flexDirection = 'row' justifyContent = 'space-between' width = '200px' marginLeft = '20px' marginTop = '5px'>
        <ButtonBase onClick = {console.log("Click Like")} sx = {{fontWeight: 'bold', opacity: 0.7, '&:hover': {textDecoration: 'underline'}}}>Like</ButtonBase>
        <ButtonBase onClick = {console.log("Reply")} sx = {{fontWeight: 'bold', opacity: 0.7, '&:hover': {textDecoration: 'underline'}}}>Reply</ButtonBase>
        <Tooltip title = {moment(comment.createAt).format('LLLL')}>
          <Box sx = {{fontWeight: 'bold', opacity: 0.6,fontSize: 14,cursor: 'pointer','&:hover': {textDecoration: 'underline'}}}>{moment(comment.createAt, "YYYYMMDD").fromNow()}</Box>
        </Tooltip>
      </Box>
      </Box>
    </Box>
  )
}

export default Comment
