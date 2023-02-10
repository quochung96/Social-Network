import React,{useState} from 'react';
import {Collapse,FormControlLabel,Tooltip,IconButton,Avatar,Typography,Box,List,ListItem,ListItemButton,ListItemIcon,ListItemText} from '@mui/material';
import GroupsIcon from '../../../assets/icons/group.png';
import GroupIcon from '../../../assets/icons/friend.png';
import FeedIcon from '../../../assets/icons/most_recent.png';
import {Link,useNavigate} from 'react-router-dom';
import useStyles from './styles';
import lineBreak from '../../../assets/icons/Line 2.png';
import {MaterialUISwitch,ExpandMore} from '../../widgets/Styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LogoutIcon from '../../../assets/icons/logout.png';
import {useDispatch} from 'react-redux';
import * as actionType from '../../../constants/actionTypes';

const Sidebar = ({mode,setMode, user,setUser, userProfile}) => {

  const classes = useStyles();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch({type: actionType.LOGOUT});

    navigate('/auth');

    setUser(null);
  }
  const handleExpandClick = () => setExpanded(!expanded);
  return (
    <Box flex={1} p={2} sx={{display: {xs: 'none',md: 'block', marginLeft: '-20px'}}}>
      <Box position = 'fixed' width = '220px'>
      <Box className = {classes.outside_container} backgroundColor = {mode === 'light' ? 'white' : 'rgba(0,0,0,0.6)'}>
        <div className = {classes.inner_container}>
            <Tooltip title = {user?.result.name}>
              <div className = {classes.profile}>
                <IconButton onClick = {() => navigate(`/profile/${user?.result.acc_id || user?.result.sub}`)}>
                 <Avatar alt = {user?.result.name} src = {user?.result.picture || userProfile?.avatar_url} sx = {{width: 60,height: 60}}/>
                </IconButton>
              </div>
            </Tooltip>     
        </div>
        <Box flexDirection ='column' display = 'flex' alignItems='center' justifyContent = 'center' marginTop = '28px'>
          <Typography variant = 'h6' fontSize = '22px' fontWeight = '400' fontFamily = 'Helvetica'>{user?.result.name}</Typography>
          <Typography variant = 'h6' fontSize = '17px' fontWeight = '300' fontFamily = 'Helvetica'>{user?.result.given_name || userProfile?.userName || "No Name"}</Typography>
          <Typography variant = 'h6' fontSize = '15px' fontWeight = '300' fontFamily = 'Helvetica' color = "grey">{Number(userProfile?.follower) > 1000 ? String(Number(userProfile?.follower / 1000)).replace('.',',') : userProfile?.follower || 0} bạn bè</Typography>
          <img alt = "icon" className = {classes.lineBreak} src = {lineBreak}/>
        </Box>
        <List>
          <ListItem>
            <ListItemButton component = {Link} to = '/friends'>
              <ListItemIcon>
                <img alt = 'icon' src ={GroupIcon} width = '40px'/>
              </ListItemIcon>
              <ListItemText primary = "Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem>
              <ListItemButton>
                <ListItemIcon onClick = {handleExpandClick}>
                    <img alt = 'icon' src ={FeedIcon} width = '40px'/>
                </ListItemIcon>
                <ListItemText primary = "Views" />
                <ExpandMore
                  expand = {expanded}
                  onClick = {handleExpandClick}
                  aria-expanded = {expanded}
                  aria-label = 'show more'
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </ListItemButton>  
          </ListItem>
          <Collapse in = {expanded} timeout='auto' unmountOnExit>
              <div className = {classes.recently}>
                  <Avatar alt = 'avatar-test' src = {'https://i.pinimg.com/564x/a6/2a/b1/a62ab1fdb7ca99e0bd54e1085d5c1afc.jpg'}/>
                  <Typography noWrap>Đoàn Thị Diệu Thanh</Typography>
              </div>
              <div className = {classes.recently}>
                  <Avatar alt = 'avatar-test' src = {'https://i.pinimg.com/564x/fe/5a/c1/fe5ac1ecfccda4762e9573fca03f8862.jpg'}/>
                  <Typography noWrap>TA Dũng</Typography>
              </div>
              <div className = {classes.recently}>
                  <Avatar alt = 'avatar-test' src = {'https://i.pinimg.com/736x/3f/cd/99/3fcd99e32520fef54f6f1015869b29e4.jpg'}/>
                  <Typography noWrap>Trung Trần</Typography>
              </div>
          </Collapse>
          <ListItem>
              <ListItemButton component = {Link} to = '/groups'>
                <ListItemIcon>
                    <img alt = 'icon' src ={GroupsIcon} width = '40px'/>
                </ListItemIcon>
                <ListItemText primary = "Groups"/>
              </ListItemButton>  
          </ListItem>
          <ListItem>
            <ListItemButton onClick = {logout}>
              <ListItemIcon>
                <img alt = 'icon' src ={LogoutIcon} width = '40px'/>
              </ListItemIcon>
              <ListItemText primary = "Log out"/>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick = {(e)=>setMode(mode === 'light' ? 'dark' : 'light')} >
              <FormControlLabel
                  control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                  label="Theme"
                />
            </ListItemButton>
          </ListItem>
      </List>
      </Box>
      </Box>
    </Box>
  )
}
export default Sidebar;