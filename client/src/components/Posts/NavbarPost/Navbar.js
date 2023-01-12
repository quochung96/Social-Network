import React,{useState,useEffect} from 'react';
import {AppBar,Typography,Box,Toolbar,InputBase,Badge,IconButton,Avatar,Tooltip} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import memoriesLogo from '../../../assets/icons/memories-Logo.png';
import useStyles from './styles';
import {styled, alpha} from '@mui/material/styles';
import {Link,useNavigate,useLocation} from 'react-router-dom';
import Home from '../../../assets/icons/house.png';
import Networking from '../../../assets/icons/networking.png';
import Messager from '../../../assets/icons/messager.png';
import Notifications from '../../../assets/icons/notification.png';
import Emphasis from '../../../assets/icons/Line 2.png';
import {useDispatch} from 'react-redux';
import * as actionType from '../../../constants/actionTypes';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius * 4.7,
  backgroundColor: '#EEF3F8',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 15, 1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(5)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const NavbarPost = () => {
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
  },[location])

  return (
    <Box sx = {{flexGrow: 1}}>
      <AppBar className = {classes.appBar} position = "static" color = "inherit">
        <Toolbar>
          <Link to = "/posts">
            <img src={memoriesLogo} alt="icon" height="60px"/>
          </Link>
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
                <Typography className = {classes.menuText} variant ="h6">My Network</Typography>
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
              <Box>
                <Tooltip title = "Account">
                  <IconButton onClick = {handleOpenUserMenu} sx = {{p: 0}}>
                    <Avatar className = {classes.avatar} alt = {user?.result.name} src = {user?.result.picture}>
                      {user?.result.name.charAt(0)}
                    </Avatar>
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
                      {settings.map((setting) => (
                        <MenuItem key={setting} onClick= {logout}>
                          <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
              </Box>
              <Tooltip title = "Settings">
                <IconButton>
                  <ArrowDropDownIcon />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  
  );
}

export default NavbarPost
