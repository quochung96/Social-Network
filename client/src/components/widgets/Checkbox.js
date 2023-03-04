import { Radio, Box, FormControl, FormControlLabel, RadioGroup, Typography } from '@mui/material';
import React from 'react'

const Checkbox = ({icon,title,subtitle,defaultValue}) => {
  return (
    <FormControl>
    <Box display = 'flex' flexDirection = 'row' justifyContent = 'space-evenly' alignItems= 'center' sx = {{cursor: 'pointer', '&:hover': {background: 'whitesmoke'}}}>
        <div style={{display: 'flex',width: '60px', height: '60px',borderRadius:'60px',background: 'whitesmoke', justifyContent: 'center', alignItems: 'center'}}>
            <img alt = "icon" src = {icon} width = '30px' height = '30px'/>
        </div>
        <Box display = 'flex' flexDirection = 'column' marginLeft = '4px'>
            <Typography fontSize = '16px' fontWeight= "600">{title}</Typography>
            <Typography variant='text.secondary'>{subtitle}</Typography>
        </Box>
        <Box>
            <RadioGroup defaultValue={defaultValue}>
                <FormControlLabel value = {title} control = {<Radio />} />
            </RadioGroup>
        </Box>
    </Box>
    </FormControl>
  )
}

export default Checkbox;