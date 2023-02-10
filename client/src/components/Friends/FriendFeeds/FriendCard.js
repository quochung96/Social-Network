import { Card, CardMedia } from '@mui/material';
import React from 'react'

const FriendCard = () => {
  return (
    <Card sx = {{maxWidth: 200}}>
        <CardMedia 
            sx = {{height: 140, borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}
            image = "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/261456117_910764243160684_1245643603395113351_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=oAsKRwwdOMEAX8Z_am7&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfAeKKZUhe5ws3rAYlfd_c8Z0DFinxOIMBHJhtRY0uXu5w&oe=63EA48CF"
        />
    </Card>
  )
}

export default FriendCard;