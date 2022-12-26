import React  from 'react';
import {Link} from 'react-router-dom';
import {AppBar} from '@material-ui/core';
import useStyles from './styles.js';
import memoriesLogo from '../../../assets/icons/memories-Logo.png';
import memoriesText from '../../../assets/icons/memories-Text.png';

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className = {classes.appBar} position="static" color="inherit">
        <Link to = "/" className = {classes.brandContainer}> 
            <img src = {memoriesText} alt = "icon" height = "45px" />
            <img className = {classes.image} src={memoriesLogo} alt="icon" height="40"/>
        </Link>   
    </AppBar>
  )
}

export default Navbar;

