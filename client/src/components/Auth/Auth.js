import React, {useState} from 'react';
import useStyles from './styles.js';
import {Link,Grow,Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core/';
import LockOutlinedIcon from '../../assets/icons/padlock 1.png';
import Input from '../widgets/Input';
import {GoogleLogin } from '@react-oauth/google';
import {useDispatch} from 'react-redux';
import jwt_decode from 'jwt-decode';
import {useNavigate} from 'react-router-dom';
import * as actionType from '../../constants/actionTypes.js';
import Navbar from './Navbar/Navbar';

const initialState = { firstName: '', lastName: '', email: '',password: '',confirmPassword: ''};
const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent load again
    
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
      // const token = jwt.sign({email: result?.email, id: result?.sub}, 'test', {expiresIn: "1h"});
      try{
        console.log(result);
        dispatch({type: actionType.AUTH, data: {result}});
        navigate("/posts");
      }catch(e){
        console.log(e);
      }
  }
  const googleError = () => {
    console.log("Google Error")
  }
  
  return (
    <Grow in>
      <Container component = "main" maxWidth = 'xl'>
      <Navbar />
      <Container component = "main" maxWidth = "xs">
      <Paper className = {classes.paper} elevation = {3}>
        <Avatar className = {classes.avatar}>
          <img alt = "pad_lock" src = {LockOutlinedIcon} width = "30px" height = "30px"/>
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
          <Link to = '/forgotPassword' className = {classes.forgot_password}>
              <Typography variant = "h6">Forgot password?</Typography>
          </Link>
          <Button type = "submit" fullWidth variant = "contained" color = "primary" className = {classes.submit}>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
          <GoogleLogin
            onSuccess = {googleSuccess}
            onError = {googleError}
          />
        </form>
      </Paper>
    </Container>
      <Grid container justify = "flex-end">
          <Grid item>
            <Button className = {classes.switch_mode} onClick = {switchMode}>
              {isSignUp ? 'Already have an account ? Sign In' : "New member? Join now"}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )
}

export default Auth;