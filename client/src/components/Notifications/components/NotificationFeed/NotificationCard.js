import React from 'react';
import {Stack,Box, Avatar, Typography,ButtonBase} from '@mui/material';

const NotificationCard = ({onClick}) => {
  return (
    <ButtonBase onClick = {onClick}>
    <Box width = "750px" height = "100px" margin = "15px 20px" sx = {{background: 'whitesmoke',border :"1px solid whitesmoke", borderRadius: '10px'}}>
        <Stack direction = "row" gap = "20px" marginTop = '20px' marginLeft = '10px'>
            <Avatar alt ="avatar" src = "https://i.pinimg.com/564x/44/a7/b1/44a7b147bfd486d089fac588be715bc5.jpg"/>
            <Stack direction = "column">
                <Typography>Nguyễn Phương Nhi added a new photo </Typography>
                <Typography>a day ago</Typography>
            </Stack>
        </Stack>
    </Box>
    </ButtonBase>
  )
}

export default NotificationCard
