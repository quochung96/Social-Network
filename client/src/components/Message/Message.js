import React, {useState} from 'react'
import {Box,Stack,Avatar,Typography,TextField,IconButton} from '@mui/material';
import memoLogo from '../../assets/icons/memories-Logo.png';
import SearchIcon from '@mui/icons-material/Search';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
const Message = () => {
  const [search,setSearch] = useState('');
  const handleChange = (e) => {
    setSearch({...search,[e.target.name]: e.target.value});
  }
  
  return (
    <Stack direction = "row" justifyContent = "space-between" sx = {{height: '1200px'}}>
      <Box flex = {0.2} sx={{display: {xs: 'none',md: 'block', marginLeft: '-11.2rem',marginTop: -10 ,background: '#575757'}}}>
        <Box display = 'flex' justifyContent = 'center' alignItems = 'center' margin = '20px 5px' sx = {{background: '#D9D9D9', width: '60px', height: '60px',borderRadius: 30}} >
          <Avatar alt = "groups" src = {memoLogo}/>
        </Box>
      </Box>
      <Box flex = {1} p = {1} marginTop = '-10px' sx = {{background: '#535151'}}>
        <Stack direction = 'column' justifyContent = 'space-between'>
          {/*Search*/}
          <Box p = {1} display = 'flex' flexDirection = 'row' sx = {{background: '#6D6767', width: '90%',height: '60px',borderRadius: '5px',color: 'white'}}>
            <TextField name = "search" label = {<Typography variant = 'body1' fontSize = '16px'>Search</Typography>} onChange = {handleChange} />
            <IconButton onClick = {() => console.log("clicked")}><SearchIcon color = 'primary' fontSize = 'large'/></IconButton>
          </Box>
          {/*Friends */}
          <Box display = 'flex' flexDirection = 'row' justifyContent = 'start' alignItems = 'center' marginTop = '10px' sx = {{background: '#B5B5B5', width: '90%', borderRadius: '10px', height: '60px',gap: 3, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
            <GroupOutlinedIcon fontSize = "large" sx = {{marginLeft: 4, fontSize: 40}}/>
            <Typography variant="body1" color="#535151">Friends</Typography>
          </Box>
          <Typography variant = "body1" color = "#D9D9D9" sx = {{marginTop: '10px', marginLeft: '5px'}}>DIRECT MESSAGE</Typography>
        </Stack>
      </Box>
      <Box flex = {3} p={1} sx = {{width: '100%', height: 'auto'}}>
        Direct Message
      </Box>

    </Stack>
  )
}

export default Message
