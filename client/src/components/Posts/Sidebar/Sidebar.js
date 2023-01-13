import React,{useState,useEffect} from 'react';
import {Tooltip,IconButton,Avatar,Paper,Box,List,ListItem,ListItemButton,ListItemIcon,ListItemText} from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupIcon from '@mui/icons-material/Group';
import FeedIcon from '@mui/icons-material/Feed';
import {useLocation} from 'react-router-dom';
import useStyles from './styles';
const Sidebar = () => {
  const classes = useStyles();
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const location = useLocation();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
  },[location]);
  return (
    <Box flex={1} p={2} sx={{display: {xs: 'none',sm: 'block'}}}>
      <Paper>
        <div className = {classes.inner_container}>
            <Tooltip title = {user?.result.name}>
                <IconButton className = {classes.profile} onClick = {null}>
                  <Avatar alt = {user?.result.name} src = {user?.result.picture} />
              </IconButton>
            </Tooltip>
        </div>
        <List className = {classes.listItem}>
          <ListItem>
            <ListItemButton component = 'a' href="#friends">
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary = "Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem>
              <ListItemButton component = 'a' href="#recently">
                <ListItemIcon>
                    <FeedIcon />
                </ListItemIcon>
                <ListItemText primary = "Recently" />
              </ListItemButton>  
          </ListItem>
          <ListItem>
              <ListItemButton component = 'a' href="#groups">
                <ListItemIcon>
                    <GroupsIcon />
                </ListItemIcon>
                <ListItemText primary = "Groups" />
              </ListItemButton>  
          </ListItem>
      </List>
      </Paper>
    </Box>
  )
}
export default Sidebar;