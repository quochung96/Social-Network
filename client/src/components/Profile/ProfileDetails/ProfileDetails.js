import React from 'react';
import {Box,IconButton} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import useStyles from './styles';
import ProfileCard from '../../widgets/ProfileCard';

const ProfileDetails = ({user}) => {
    const classes = useStyles();
    const handleCoverImage = () => {
        console.log('Click cover image');
    }
    return (
        <Box flex = {4} p={2}>
        <div className = {classes.cover_url} onClick = {handleCoverImage}>
            <Box sx = {{display: {xs: 'none', md: 'block'}}}>
            <div className = {classes.btn_cover}>
                <PhotoCameraIcon />
                Edit Cover Photo
            </div>
            </Box>
            <Box sx = {{display: {xs: 'block', md: 'none'}}}>
            <Box className = {classes.btn_cover}>
                <IconButton onClick = {handleCoverImage}>
                <PhotoCameraIcon />
                </IconButton>
            </Box>
            </Box>
        </div>
        <ProfileCard avatarUrl = {user?.result.picture || user?.result.users.avatar_url} marginTop = "-143px" />
    </Box>
    )
}

export default ProfileDetails;