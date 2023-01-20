import React from 'react';
import {Box, List,ListItem,Button,ListItemIcon,ListItemText, Typography} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import moment from 'moment';
import PersonIcon from '@mui/icons-material/Person';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ManIcon from '@mui/icons-material/Man';
import BusinessIcon from '@mui/icons-material/Business';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
const EditProfile = ({user}) => {
  const handleEditProfile = (e) => {
    e.preventDefault();
  }
  return (
    <Box p = {1} flex = {1}>
      <Box display = 'flex' flexDirection = 'column' sx = {{borderRadius: '20px',background :"#FFF", width :'100%', height: 'auto', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
        <List>
            <ListItem>
                <ListItemIcon>
                    <PersonIcon />
                </ListItemIcon>
                <ListItemText primary = "Name" secondary = "Full Name"/>
                <ListItemText primary = {<Typography noWrap>{user?.result.users.userName}</Typography>} />
                <Box sx = {{position: 'static', right: '20px'}} component = {Button} onClick = {handleEditProfile}>
                    <ListItemIcon>
                        <EditIcon />
                    </ListItemIcon>
                </Box>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <CelebrationIcon />
                </ListItemIcon>
                <ListItemText primary = "Birthday" />
                <ListItemText primary = {
                    <Typography noWrap>{user?.result.users.birth_day}</Typography>}/>
                <Box sx = {{position: 'static', right: '20px'}} component = {Button} onClick = {handleEditProfile}>
                    <ListItemIcon>
                        <EditIcon />
                    </ListItemIcon>
                </Box>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <ManIcon />
                </ListItemIcon>
                <ListItemText primary = "Gender" />
                <ListItemText primary = {
                    <Typography noWrap>{user?.result.users.gender}</Typography>}/>
                <Box sx = {{position: 'static', right: '20px'}} component = {Button} onClick = {handleEditProfile}>
                    <ListItemIcon>
                        <EditIcon />
                    </ListItemIcon>
                </Box>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <BusinessIcon />
                </ListItemIcon>
                <ListItemText primary = "Address" />
                <ListItemText primary = {
                    <Typography noWrap>{user?.result.users.address}</Typography>}/>
                <Box sx = {{position: 'static', right: '20px'}} component = {Button} onClick = {handleEditProfile}>
                    <ListItemIcon>
                        <EditIcon />
                    </ListItemIcon>
                </Box>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <FavoriteIcon />
                </ListItemIcon>
                <ListItemText primary = "Relationship" />
                <ListItemText primary = {
                    <Typography noWrap>{user?.result.users.relationship || 'Chưa có mối quan hệ nào'}</Typography>}/>
                <Box sx = {{position: 'static', right: '20px'}} component = {Button} onClick = {handleEditProfile}>
                    <ListItemIcon>
                        <EditIcon />
                    </ListItemIcon>
                </Box>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <AccessTimeIcon />
                </ListItemIcon>
                <ListItemText primary = "Create At" />
                <ListItemText primary = {
                    <Typography color = "primary" fontWeight = '400' noWrap>{moment(user?.result.users.createAt,"YYYYMMDD").fromNow()}</Typography> }/>
                 <ListItemIcon>
                    <AccessTimeIcon />
                </ListItemIcon>
            </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default EditProfile;
