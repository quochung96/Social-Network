import React,{useState,useEffect} from 'react';
import {AppBar,Typography,Box,Badge,IconButton,Avatar,Tooltip} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import memoriesLogo from '../../../assets/icons/memories-Logo.png';
import useStyles from './styles';
import {Search,SearchIconWrapper,StyledToolbar,StyledInputBase} from '../../widgets/Styles';
import {Link,useNavigate,useLocation} from 'react-router-dom';
import Home from '../../../assets/icons/house.png';
import Networking from '../../../assets/icons/networking.png';
import Messager from '../../../assets/icons/messager.png';
import Notifications from '../../../assets/icons/notification.png';
import Emphasis from '../../../assets/icons/Line 2.png';
import {useDispatch} from 'react-redux';
import * as actionType from '../../../constants/actionTypes';

const NavbarPost = ({mode}) => {
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const classes = useStyles();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logout = () => {
    dispatch({type: actionType.LOGOUT});

    navigate('/auth');

    setUser(null);
  }

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
  },[location]);

  return (
      <AppBar className = {classes.appBar} position = "static" color = "inherit">  
        <StyledToolbar>
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
          <div className = {classes.header_middle}>
            <div className = {classes.header_option}>
              <Link to = '/posts' className = {classes.iconText}>
                <img className = {classes.icon} src = {Home} alt= "icon" height = "40px" />
                <Typography className = {classes.menuText} variant ="h6">Home</Typography>
              </Link>
              <img className = {classes.emphasis} alt="icon" src = {Emphasis}/>
            </div>
            <div className = {classes.header_option}>
              <Link to = '/friends' className = {classes.iconText}>
                <img className = {classes.icon} src = {Networking} alt= "icon" height = "40px" />
                <Typography className = {classes.menuText} variant ="h6">Networking</Typography>
              </Link>
            </div>
            <div className = {classes.header_option}>
              <Link to = '/message' className = {classes.iconText}>
                <img className = {classes.icon} src = {Messager} alt= "icon" height = "40px" />
                <Typography className = {classes.menuText} variant ="h6">Message</Typography>
              </Link>
            </div>
              <IconButton size = "large" aria-label="show notifications" color = "inherit">
              <Badge badgeContent = {17} color = 'error'>
                <img className = {classes.icon} src = {Notifications} alt= "icon" height = "40px" />
              </Badge>
              </IconButton>
          </div>
          <div className = {classes.header_right}>
            <div className = {classes.header_info}>
                <Tooltip title = {user?.result.name}>
                  <IconButton onClick = {null}>
                    <Avatar alt = {user?.result.name} src = {user?.result.picture} />
                  </IconButton>
                </Tooltip>
              <Box>
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
                        <MenuItem key={"Profile"} onClick = {handleCloseUserMenu}>
                          <Typography textAlign="center">Profile</Typography>
                        </MenuItem>
                        <MenuItem key={"Settings"} onClick= {handleCloseUserMenu}>
                          <Typography textAlign="center">Settings</Typography>
                        </MenuItem>
                        <MenuItem key={"Language"} onClick= {handleCloseUserMenu}>
                          <Typography textAlign="center">Language</Typography>
                        </MenuItem>
                        <MenuItem key={"Sign Out"} onClick= {logout}>
                          <Typography textAlign="center">Sign Out</Typography>
                        </MenuItem>
                    </Menu>
              </Box>
              
            </div>
          </div>
        </StyledToolbar>
      </AppBar>
  );
}

export default NavbarPost
