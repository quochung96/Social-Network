import React from 'react';
import {Container} from '@material-ui/core';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './components/HomePage/Home';
import {GoogleOAuthProvider} from '@react-oauth/google';
import Auth from './components/Auth/Auth';
import Posts from './components/Posts/Posts';

const App = () => {
  // const user = JSON.parse(localStorage.getItem('profile')); -- We use when finish config the posts layout
  return (
    <GoogleOAuthProvider clientId = "890312707554-b73u9stq65c8njg26h9k7bogoi5b1luk.apps.googleusercontent.com"> 
    <BrowserRouter>
      <Container maxWidth = "xl">
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/auth" element = {<Auth />}/>
          <Route path = "/posts" element = {<Posts/>} />
        </Routes>
      </Container>
    </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App;