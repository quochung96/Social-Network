import React,{useState} from 'react';
import {AppBar,Typography,Box,Badge,IconButton,Avatar,Tooltip} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import memoriesLogo from '../../../assets/icons/memories-Logo.png';
import useStyles from './styles';
import {Search,SearchIconWrapper,StyledToolbar,StyledInputBase,UserBox} from '../../widgets/Styles';
import {Link,useNavigate} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import {useDispatch} from 'react-redux';
import * as actionType from '../../../constants/actionTypes';

const NavbarPost = ({user,setUser,userProfile}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const openProfile = () => {
    navigate("/profile");
  }
  const openFriendPage = () => {
    navigate("/friends")
  }
  const openMessage = () => {
    navigate("/message")
  }
  const logout = () => {
    dispatch({type: actionType.LOGOUT});

    navigate('/auth');
    setUser(null);
  }

  return (
      <AppBar className = {classes.appBar} position = "static" color = "inherit">  
        <StyledToolbar>
          <Box display = 'flex' flexDirection = 'row' gap = '20px' alignItems = 'center'>
            <Box sx={{display: {xs: 'none',sm: 'block'}}}>
              <Link to = "/posts">
                <img src={memoriesLogo} alt="icon" height="60px"/>
              </Link>
            </Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon fontSize = 'large'/>
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>
          <Box sx = {{display: {xs: 'none', md: 'block'}}}>
            <div className = {classes.header_middle}>
              <div className = {classes.header_option}>
                <IconButton component = {Link} to = "/posts">
                  <HomeIcon fontSize = "large"/>
                </IconButton>
              </div>
              <div className = {classes.header_option}>
                <IconButton component = {Link} to = "/friends">
                  <GroupsIcon fontSize = "large"/>
                </IconButton>
              </div>
              <div className = {classes.header_option}>
              <Badge badgeContent = {2} color = 'error'>
                <IconButton component = {Link} to = "/message">
                  <SmsOutlinedIcon fontSize = "large"/>
                </IconButton>
                </Badge>
              </div>       
            </div>
          </Box>
          <div className = {classes.header_right}>
            <div className = {classes.header_info}>
              <IconButton>
                <Badge badgeContent = {17} color = 'error'>
                  <NotificationsNoneIcon fontSize = "medium"/>
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent = {2} color = 'error'>
                  <PeopleAltIcon fontSize = "medium"/>
                </Badge>
              </IconButton>
              <Box sx = {{display: {xs: 'none', md: 'block'}}}>
                <Tooltip title = {user?.result.name}>
                  <IconButton onClick = {() => navigate(`/profile/${user?.result.acc_id || user?.result.sub}`)}>
                    <Avatar alt = {user?.result.name} src = {user?.result.picture || userProfile?.avatar_url} />
                  </IconButton>
                </Tooltip>
              </Box>        
              <UserBox>
                  <Tooltip title = "Settings">
                    <IconButton onClick = {handleOpenUserMenu} sx = {{p: 0}}>
                      <ArrowDropDownIcon />
                    </IconButton>
                  </Tooltip>
                  <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                        <MenuItem key={"Profile"} onClick = {openProfile}>
                          <Typography textAlign="center">Profile</Typography>
                        </MenuItem>
                        <MenuItem key={"Settings"} onClick= {handleCloseUserMenu}>
                          <Typography textAlign="center">Settings</Typography>
                        </MenuItem>
                        <MenuItem key={"Friends"} onClick= {openFriendPage}>
                          <Typography textAlign="center">Friends</Typography>
                        </MenuItem>
                        <MenuItem key={"Message"} onClick= {openMessage}>
                          <Typography textAlign="center">Message</Typography>
                        </MenuItem>
                        <MenuItem key={"Log Out"} onClick= {logout}>
                          <Typography textAlign="center">Log out</Typography>
                        </MenuItem>
                    </Menu>
              </UserBox>   
            </div>
          </div>
        </StyledToolbar>
      </AppBar>
  );
}

export default NavbarPost
