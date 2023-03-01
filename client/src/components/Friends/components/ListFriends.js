import React from 'react';
import {Avatar,Box,Typography,ButtonBase} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const ListFriends = ({userRequest}) => {
  const navigate = useNavigate();
  const openProfile = () => navigate(`/profile/${userRequest.sendUser.user_id}`);
  return (
    <>
    {userRequest?.isAccepted ? (
        <ButtonBase onClick = {openProfile}>
            <Box display = 'flex' flexDirection = 'row' marginBottom = '10px' gap = '14px' borderRadius = '10px' minWidth = '600px' border = '0.5px solid #A2A2A2'>
                <Avatar alt = 'avatar-img' src = {userRequest?.sendUser.avatar_url} sx = {{width: 60, height: 60, margin: '6px 6px 6px'}} />
                <Box display = 'flex' flexDirection = 'column' alignItems = 'flex-start' sx = {{marginTop: 1}}>
                    <Typography fontSize = '16px'>{userRequest?.sendUser.userName}</Typography>
                </Box> 
            </Box>
        </ButtonBase>
    ): null}
    </>
  )
}

export default ListFriends
