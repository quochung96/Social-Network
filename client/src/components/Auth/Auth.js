import React, {useState} from 'react'
import useStyles from './styles.js';
import {Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core/';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input.js';
import {GoogleLogin } from '@react-oauth/google';
import {useDispatch} from 'react-redux';
import jwt_decode from 'jwt-decode';
import {useHistory} from 'react-router-dom';
import * as actionType from '../../constants/actionTypes.js';
import {signin,signup} from '../../actions/auth';
import jwt from 'jsonwebtoken';
import axios from 'axios';
const initialState = { firstName: '', lastName: '', email: '',password: '',confirmPassword: ''};
const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent load again
    
    if(isSignUp){
      dispatch(signup(formData, history));
    }
    else{
      dispatch(signin(formData,history));
    }
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }
  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    setShowPassword(false);
  }
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
  const googleSuccess = async (res) => {
      const result = jwt_decode(res.credential);
      const token = jwt.sign({email: result?.email, id: result?.sub}, 'test', {expiresIn: "1h"});
      try{
        console.log(result);
        dispatch({type: actionType.AUTH, data: {result,token}});
        history.push("/");
      }catch(e){
        console.log(e);
      }
  }
  const googleError = () => {
    console.log("Google Error")
  }
  
  return (
    <Container component = "main" maxWidth = "xs">
      <Paper className = {classes.paper} elevation = {3}>
        <Avatar className = {classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant = "h5">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
        <form className = {classes.form} onSubmit = {handleSubmit}>
          <Grid container spacing = {2}>
            {
              isSignUp &&(
                <>
                    <Input name = "firstName" label = "First Name" handleChange = {handleChange} autoFocus half/>
                    <Input name = "lastName" label = "Last Name" handleChange = {handleChange} half/>
                </>
              )
            }
            <Input name = "email" label = "Email Address" handleChange = {handleChange} type = "email"/>
            <Input name = "password" label = "Password" handleChange = {handleChange} type = {showPassword ? "text" : "password"} handleShowPassword = {handleShowPassword}/>
            { isSignUp && <Input name = "confirmPassword" label = "Repeat Password" handleChange = {handleChange} type = "password"/>}
          </Grid>
          <Button type = "submit" fullWidth variant = "contained" color = "primary" className = {classes.submit}>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
          <GoogleLogin
            onSuccess = {googleSuccess}
            onError = {googleError}
          />
          <Grid container justify = "flex-end">
            <Grid item>
              <Button onClick = {switchMode}>
                {isSignUp ? 'Already have an account ? Sign In' : "Don't have an account ? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth;