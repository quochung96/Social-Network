import React,{useState} from 'react';
import {Box,TextField,ButtonBase,Avatar} from '@mui/material';
import SidebarChat from './components/SidebarChat';
import ListFriendChat from './components/ListFriendChat';
import HeaderChat from './components/HeaderChat';
import MessageCard from './components/MessageCard';
import {useNavigate} from 'react-router-dom';


const Message = ({user,userProfile}) => {
  const navigate = useNavigate();
  const [message,setMessage] = useState('');
  const [formMessage, setFormMessage] = useState({chatContent: ''});
  const handleSubmit = (e) => {
    if(e.keyCode === 13 || e.key === 'Enter'){
      console.log(formMessage);
    }
  }
  const handleChange = (e) => {
    setMessage(e.target.value);
    setFormMessage({...formMessage,[e.target.name]: e.target.value});
  }
  return (
    <Box display = 'flex' flexDirection = "row" justifyContent = 'space-between' sx = {{height: 'auto',marginTop: '-10px', marginLeft: "-11.2rem"}}>
      <SidebarChat />
      <ListFriendChat />
      <Box flex = {4} p={1} sx = {{width: '100%', height: 'auto'}}>
        <HeaderChat />
        <Box sx = {{display: 'flex', flexDirection: 'column',marginTop: 5, height: '800px',overflow: 'scroll', whiteSpace: 'nowrap'}}>
          <MessageCard isSender = {true} />
          <MessageCard isSender = {false} />
          <MessageCard isSender = {true} />
          <MessageCard isSender = {false} />
          <MessageCard isSender = {true} />
          <MessageCard isSender = {false} />
          <MessageCard isSender = {true} />
          <MessageCard isSender = {false} />
          <MessageCard isSender = {true} />
          <MessageCard isSender = {false} />
          <MessageCard isSender = {true} />
          <MessageCard isSender = {false} />
          <MessageCard isSender = {true} />
          <MessageCard isSender = {false} />
          <MessageCard isSender = {true} />
          <MessageCard isSender = {false} />
        </Box>
        <Box display = 'flex' flexDirection = 'row' sx = {{width: '100%', background: 'white',borderRadius: '30px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
          <ButtonBase onClick = {() => navigate(`/profile/${user?.user_id}`)} sx = {{marginLeft: 2}}>
            {userProfile.avatar_url !== null && <Avatar alt = "avatar" src = {userProfile.avatar_url}/>}
          </ButtonBase>
        <TextField name = "chatContent" variant = "filled" value = {message} onKeyPress={handleSubmit} onChange={handleChange} multiline label = "Aa" fullWidth InputProps = {{ disableUnderline: true}} sx = {{marginLeft: 2,marginRight: 3}}/>
      </Box>
      </Box>
    </Box>
  )
}

export default Message
