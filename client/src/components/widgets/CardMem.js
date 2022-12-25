import React from 'react'
import {Grid, Container, Paper, Typography} from '@material-ui/core';
const CardMem = ({classes,classes_,text, img}) => {
  return (
    <Grid xs = {4}>
    <Container  component = "main" maxWidth = "md" >
      <Paper className = {classes} elevation = {2}>
        <Typography variant = "h6">{text}</Typography>
          <img className = {classes_} alt = "img_bg_2" src = {img} />
      </Paper>
    </Container>
  </Grid>
  )
}

export default CardMem
