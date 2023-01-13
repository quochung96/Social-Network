import React,{useState,useEffect} from 'react';
import {Collapse,FormControlLabel,Tooltip,IconButton,Avatar,Typography,Box,List,ListItem,ListItemButton,ListItemIcon,ListItemText} from '@mui/material';
import GroupsIcon from '../../../assets/icons/group.png';
import GroupIcon from '../../../assets/icons/friend.png';
import FeedIcon from '../../../assets/icons/most_recent.png';
import {Link,useNavigate,useLocation} from 'react-router-dom';
import useStyles from './styles';
import lineBreak from '../../../assets/icons/Line 2.png';
import {MaterialUISwitch,ExpandMore} from '../../widgets/Styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const tempData = [
  {userName:'TA Dũng',countFriends: '110021'},
  {userName:'Diệu Thanh',countFriends: '29101'},
];
const Sidebar = ({mode,setMode}) => {
  const classes = useStyles();
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const location = useLocation();
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
  },[location]);
  return (
    <Box flex={1} p={2} sx={{display: {xs: 'none',md: 'block'}}}>
      <Box position = 'fixed'>
      <Box className = {classes.outside_container} backgroundColor = {mode === 'light' ? 'white' : 'rgba(0,0,0,0.6)'}>
        <div className = {classes.inner_container}>
            <Tooltip title = {user?.result.name}>
              <div className = {classes.profile}>
                <IconButton onClick = {() => navigate('/profile')}>
                  <Avatar alt = {user?.result.name} src = {user?.result.picture} sx = {{width: 60,height: 60}}/>
                </IconButton>
              </div>
            </Tooltip>     
        </div>
        <Box flexDirection ='column' display = 'flex' alignItems='center' justifyContent = 'center' marginTop = '28px'>
          <Typography variant = 'h6' fontSize = '22px' fontWeight = '400' fontFamily = 'Helvetica'>{tempData[0].userName}</Typography>
          <Typography variant = 'h6' fontSize = '17px' fontWeight = '300' fontFamily = 'Helvetica'>{user?.result.name}</Typography>
          <Typography variant = 'h6' fontSize = '15px' fontWeight = '300' fontFamily = 'Helvetica' color = "grey">{Number(tempData[0].countFriends) > 1000 ? String(Number(tempData[0].countFriends / 1000)).replace('.',',') : tempData[1].countFriends} bạn bè</Typography>
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
                  <Avatar alt = 'avatar-test' src = {'https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/256757457_1040742616776316_3236270011013956668_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=RIwB5JYmADgAX9v2rZf&_nc_oc=AQkm2R7GCQNG8-nR1Y_zNbZ9d4QgZkgBYJ0vTt0KQMdoyYLvwIyVLYspbJZR2iymq24&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfB9fkOLppwz-67rKXu0pD6sbUdSOcjMKhTUYAqb8hao6A&oe=63C6172A'}/>
                  <Typography noWrap>Đoàn Thị Diệu Thanh</Typography>
              </div>
              <div className = {classes.recently}>
                  <Avatar alt = 'avatar-test' src = {'https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/301143340_2666743866791311_7425085974907217968_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=L9uDV_v1XhQAX_ENZ2R&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfAaFy0mmhoKBgOoSJiXh26cn7ol0IamGRMJXC6-JqJ0XQ&oe=63C6392F'}/>
                  <Typography noWrap>TA Dũng</Typography>
              </div>
              <div className = {classes.recently}>
                  <Avatar alt = 'avatar-test' src = {'https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/261456117_910764243160684_1245643603395113351_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=e34QCE7Ym7cAX_dROwx&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfA7NGbZvfGsWdv9OO5o8mKPFVRCyegvL41vW30NLQX4Ag&oe=63C72BC9'}/>
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
            <ListItemIcon onClick = {(e)=>setMode(mode === 'light' ? 'dark' : 'light')} >
              <FormControlLabel
                  control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                  label="Theme"
                />
            </ListItemIcon>
          </ListItem>
      </List>
      </Box>
      </Box>
    </Box>
  )
}
export default Sidebar;