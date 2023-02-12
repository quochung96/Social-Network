import { Card, CardMedia,Button, Typography } from '@mui/material';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Avatar from '../../../assets/icons/user.png';
import { acceptUserFriendRequest } from '../../../actions/friendRequest';
const FriendCard = ({userRequest}) => {
  const [formData] = useState({
    reqId: userRequest?.reqId,
  });
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(acceptUserFriendRequest(formData.reqId));
  }
  return (
    <>
    {!userRequest?.isAccepted ? (
        <Card sx = {{maxWidth: 200, borderRadius: 5,margin: '10px 1rem 2px'}}>
            <CardMedia 
                sx = {{height: 160, borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}
                image = {userRequest?.receiveUser.avatar_url || Avatar}
            />
            <Typography variant="h7" fontFamily="Helvetica" paddingLeft = '2px'>{userRequest?.receiveUser.userName}</Typography>
            <Button variant = "contained" fullWidth onClick = {handleSubmit} sx = {{borderRadius: 20, marginTop: '20px'}}>Confirm</Button>
            <Button variant = "outlined" fullWidth onClick = {handleSubmit} sx = {{borderRadius: 20, marginTop: '5px'}}>Delete</Button>
        </Card>
    ) : null
    }
    </>
  )
}

export default FriendCard;