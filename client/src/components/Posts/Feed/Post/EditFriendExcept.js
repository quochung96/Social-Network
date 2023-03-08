import React from 'react'
import {Box,Button,Dialog,DialogContent,DialogTitle,DialogActions, Typography} from '@mui/material';
import ListFriend from './ListFriend';
const EditFriendExcept = ({openFriendExcept, onClose}) => {
  return (
    <Dialog open = {openFriendExcept} onClose = {onClose}>
        <DialogTitle sx = {{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>Friend except...</DialogTitle>
        <DialogContent>
            <Box display = 'flex' flexDirection = 'column' gap = '20px'>
                <Typography variant="body1" color="initial" fontWeight="500">
                    Friends
                </Typography>
                <ListFriend />
            </Box>
        </DialogContent>
        <DialogActions>
            <Button variant = "text" onClick = {onClose}>Cancel</Button>
            <Button variant = "primary">Save changes</Button>
        </DialogActions>
    </Dialog>
  )
}

export default EditFriendExcept
