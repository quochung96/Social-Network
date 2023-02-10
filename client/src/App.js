import React,{useState} from 'react';
import {Container} from '@mui/material';
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom';

import Home from './components/HomePage/Home';
import {GoogleOAuthProvider} from '@react-oauth/google';
import Auth from './components/Auth/Auth';
import Posts from './components/Posts/Posts';
import Profile from './components/Profile/Profile';
import Message from './components/Message/Message';
import Friends from './components/Friends/Friends';
import ForgotPassword from './components/Auth/ForgotPassword';
import {useSelector} from 'react-redux';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const setUser = useState(JSON.parse(localStorage.getItem('profile')));
  const userProfile = useSelector((state) => state.users.user);

  return (
        <GoogleOAuthProvider clientId = "890312707554-b73u9stq65c8njg26h9k7bogoi5b1luk.apps.googleusercontent.com"> 
        <BrowserRouter>
          <Container maxWidth = "xl">
            <Routes>
              <Route path = "/" element = {<Home/>} />
              <Route path = "/profile/:id" element = {<Profile user = {user} userProfile = {userProfile} />}/>
              <Route path = "/forgotPassword" element = {<ForgotPassword />}/>
              <Route path = "/message" element = {<Message />}/>
              <Route path = "/friends" element = {<Friends user = {user} setUser = {setUser} userProfile = {userProfile} />}/>
              <Route path = "/auth" element = {!user ? <Auth /> : <Navigate to = "/posts"/>}/>
              <Route path = "/posts" element = {!user ? <Navigate to = "/auth"/> : <Posts user = {user} setUser = {setUser} userProfile = {userProfile}/>} />
            </Routes>
          </Container>
        </BrowserRouter>
        </GoogleOAuthProvider>
    )
}

export default App;