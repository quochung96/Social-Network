import React from 'react';
import {Box,IconButton,ButtonBase,Typography} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import useStyles from './styles';
import ProfileCard from '../../widgets/ProfileCard';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
const ProfileDetails = ({handleCoverImage,user, userProfile}) => {
    const classes = useStyles();
    return (
        <Box flex = {4} p={2}>
        <Box className = {classes.cover_url} onClick = {handleCoverImage}>
            {userProfile?.cover_url != null || user?.result.picture != null ? 
                <div>
                    <img className = {classes.cover_url_img} alt = 'cover_url' src = {userProfile?.cover_url || user?.result.picture}/>
                </div>
            :  
            <>
            {userProfile?.user_id === user?.user_id && <>
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
            </>}
            </>
            }
        </Box>
        <ProfileCard handleAvatarImage = {handleCoverImage} avatarUrl = {user?.result.picture || userProfile?.avatar_url} marginTop = "-143px" />
        <Box display = 'flex' flexDirection = 'row' gap = '20px'>
        <ButtonBase onClick = {null} sx = {{display: 'flex',background: '#1B74E4', borderRadius: 2, width: 130, height: 40, color: 'white'}}>
            <Box display = 'flex' flexDirection = 'row' sx = {{gap: 1,alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                <PersonAddAlt1Icon fontSize = "large"/>
                <Typography fontWeight = 'bold'>Respond</Typography>
            </Box>
        </ButtonBase>
        <ButtonBase onClick = {null} sx = {{display: 'flex',background: '#E4E6EB', borderRadius: 2, width: 130, height: 40, color: 'black'}}>
            <Box display = 'flex' flexDirection = 'row' sx = {{gap: 1,alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                <MailOutlineIcon fontSize = "large"/>
                <Typography fontWeight = 'bold'>Message</Typography>
            </Box>
        </ButtonBase>
        </Box>
    </Box>
    )
}

export default ProfileDetails;