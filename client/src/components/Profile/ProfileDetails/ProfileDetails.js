import React from 'react';
import {Box,IconButton} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import useStyles from './styles';
import ProfileCard from '../../widgets/ProfileCard';

const ProfileDetails = ({user, userProfile}) => {
    const classes = useStyles();
    const handleCoverImage = () => {
        console.log('Click cover image');
    }
    return (
        <Box flex = {4} p={2}>
        <Box className = {classes.cover_url} onClick = {handleCoverImage}>
            {userProfile?.cover_url != null || user?.result.picture != null ? 
                <div>
                    <img className = {classes.cover_url_img} alt = 'cover_url' src = {userProfile?.cover_url || user?.result.picture}/>
                </div>
            :  
            <>
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
            </>
            }
        </Box>
        <ProfileCard avatarUrl = {user?.result.picture || userProfile?.avatar_url} marginTop = "-143px" />
    </Box>
    )
}

export default ProfileDetails;