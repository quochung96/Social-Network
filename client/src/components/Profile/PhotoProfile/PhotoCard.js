import React from 'react'
import {Grid,ButtonBase} from '@mui/material';
const PhotoCard = ({post}) => {
  return ( 
    <Grid item xs = {3.7}>
        <ButtonBase>
            {post.photoInPost.photoUrl && <img alt = 'photo_image' src = {post.photoInPost.photoUrl} width = "120px" height = "120px" style = {{ objectFit: 'cover', borderRadius: '5px'}}/>} 
            {!post.photoInPost.photoUrl && <img alt = 'photo_image' src = "https://st3.depositphotos.com/23594922/31822/v/450/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg" width = "120px" height = "120px" style = {{ objectFit: 'cover', borderRadius: '5px'}}/>} 
        </ButtonBase>
    </Grid>
    
  )
}

export default PhotoCard
