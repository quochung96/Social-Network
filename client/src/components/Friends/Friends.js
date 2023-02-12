import { Box,Stack } from '@mui/material';
import React, {useEffect} from 'react';
import NavbarPost from '../Navbar/NavbarPost/NavbarPost';
import ListFriendFeeds from './FriendFeeds/ListFriendFeeds';
import SidebarFriend from './SidebarFriend/SidebarFriend';
import {useDispatch} from 'react-redux';
import {getRequestByUserId} from '../../actions/friendRequest';
import {getUser} from '../../actions/users';
const Friends = ({user,setUser,userProfile}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(user?.user_id));
    dispatch(getRequestByUserId(user?.user_id));
  },[dispatch,user?.user_id]);
  return (
    <Box>
      <NavbarPost user = {user} setUser = {setUser} userProfile = {userProfile} />
      <Stack direction = 'row' justifyContent="space-between">
        <SidebarFriend />
        <ListFriendFeeds />
      </Stack>
    </Box>
  )
}

export default Friends;
