import React,{useState} from 'react';
import {Dialog,IconButton,Stack,Box,Avatar,Typography,ButtonBase,Tooltip,Button} from '@mui/material';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {deleteComment} from '../../../actions/comment';

const Comment = ({comment}) => {
  const dispatch = useDispatch();
  const [open,setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  const handleDelete = () => {
    dispatch(deleteComment(comment.cmtId));
    window.location.reload(false);
  }
  return (
    <Box display = 'flex' flexDirection = 'row' marginLeft = '10px' marginTop = '20px' gap = '10px'>
      <Avatar alt = "avatar" src = {comment.users.avatar_url} />
      <Box flexDirection = 'column'>
      <Box sx = {{background: 'whitesmoke',display: 'flex', flexDirection: 'row', borderRadius: 5, minHeight: 70,width: 400}}>
        <Box sx ={{flexDirection: 'column',display: 'flex',justifyContent: 'center', wordWrap: 'break-word',whiteSpace: 'pre-wrap'}}>
          <Stack direction = "row" justifyContent = "space-between">
            <Typography sx = {{marginLeft: 3,marginBottom: 0.5,fontWeight: '600',opacity: 0.8}}>{comment.users.userName}</Typography>
            <IconButton onClick = {handleOpen}>
              <MoreHorizIcon />
            </IconButton>
            <Dialog open = {open} onClose = {handleClose}>
              <Button onClick = {handleDelete}>Delete</Button>
              <Button onClick = {null}>Update</Button>
            </Dialog>
          </Stack>
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
