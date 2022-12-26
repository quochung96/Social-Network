import React from 'react'
<<<<<<< HEAD
import {AppBar, Typography, Button, Toolbar} from '@material-ui/core'; 
import {Link} from 'react-router-dom';
=======
import {AppBar, Typography, Button, Toolbar,Divider,Box} from '@material-ui/core'; 
import {Link, useHistory} from 'react-router-dom';
>>>>>>> 5585eb84adb6c48445f81bd496ee808ec5a97af1
import memoriesLogo from '../../../assets/icons/memories-Logo.png';
import memoriesText from '../../../assets/icons/memories-Text.png';
import compass from '../../../assets/icons/compass 1.png';
import memorable from '../../../assets/icons/research 1.png';
import sharing from '../../../assets/icons/mental-health 1.png';
<<<<<<< HEAD
=======
import line from '../../../assets/icons/Line 1.png';
>>>>>>> 5585eb84adb6c48445f81bd496ee808ec5a97af1

import useStyles from './styles.js';
const NavbarHomePage = () => {
  const classes = useStyles();
<<<<<<< HEAD
=======
  const history = useHistory();
>>>>>>> 5585eb84adb6c48445f81bd496ee808ec5a97af1

  return (
    <AppBar className = {classes.appBar} position = "static" color = "inherit">
        <Link to = '/' className = {classes.brandContainer}>
            <img className = {classes.image} src={memoriesLogo} alt="icon" height="40"/>
            <img src = {memoriesText} alt = "icon" height = "45px" />
        </Link>
        <Toolbar className = {classes.toolbar}>
            <Link to = '/discover' className = {classes.iconText}>
                <img className = {classes.icon} src = {compass} alt= "icon" height = "40px" />
                <Typography className = {classes.menuText} variant ="h6">Discover</Typography>
            </Link>
            <Link to = '/memorable' className = {classes.iconText}>
                <img className = {classes.icon} src = {memorable} alt= "icon" height = "40px" />
                <Typography className = {classes.menuText} variant ="h6">Memorable</Typography>
            </Link>
            <Link to = '/sharing' className = {classes.iconText}>
                <img className = {classes.icon} src = {sharing} alt= "icon" height = "40px" />
                <Typography className = {classes.menuText} variant ="h6">Sharing</Typography>
            </Link>
        </Toolbar>
        <Toolbar>
            <Button size = "large" variant="text" color = "primary" component = {Link} to = "/auth"  >Join now</Button>
            <Button size = "large" className = {classes.btn} sx = {{width: 600}} variant = "contained" color = "primary" component = {Link} to = "/auth">Sign In</Button>
        </Toolbar>
    </AppBar>
  )
}

export default NavbarHomePage;
