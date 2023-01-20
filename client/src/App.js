import React from 'react';
import {Container} from '@mui/material';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './components/HomePage/Home';
import {GoogleOAuthProvider} from '@react-oauth/google';
import Auth from './components/Auth/Auth';
import Posts from './components/Posts/Posts';
import Profile from './components/Profile/Profile';
import Message from './components/Message/Message';
import Friends from './components/Friends/Friends';
import ForgotPassword from './components/Auth/ForgotPassword';

const App = () => {
  
  // const user = JSON.parse(localStorage.getItem('profile')); -- We use when finish config the posts layout
  return (
        <GoogleOAuthProvider clientId = "890312707554-b73u9stq65c8njg26h9k7bogoi5b1luk.apps.googleusercontent.com"> 
        <BrowserRouter>
          <Container maxWidth = "xl">
            <Routes>
              <Route path = "/" element = {<Home/>} />
              <Route path = "/profile" element = {<Profile />}/>
              <Route path = "/forgotPassword" element = {<ForgotPassword />}/>
              <Route path = "/message" element = {<Message />}/>
              <Route path = "/friends" element = {<Friends />}/>
              <Route path = "/auth" element = {<Auth />}/>
              <Route path = "/posts" element = {<Posts/>} />
            </Routes>
          </Container>
        </BrowserRouter>
        </GoogleOAuthProvider>
  )
}

export default App;