import React from 'react';
import {Container} from '@material-ui/core';
<<<<<<< HEAD
import {BrowserRouter, Routes, Route} from 'react-router-dom';
=======
import {BrowserRouter, Switch, Route,Redirect} from 'react-router-dom';
>>>>>>> 5585eb84adb6c48445f81bd496ee808ec5a97af1

import Home from './components/HomePage/Home';
import {GoogleOAuthProvider} from '@react-oauth/google';
import Auth from './components/Auth/Auth';
<<<<<<< HEAD
import Posts from './components/Posts/Posts';

const App = () => {
  // const user = JSON.parse(localStorage.getItem('profile')); -- We use when finish config the posts layout
=======
const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
>>>>>>> 5585eb84adb6c48445f81bd496ee808ec5a97af1
  return (
    <GoogleOAuthProvider clientId = "890312707554-b73u9stq65c8njg26h9k7bogoi5b1luk.apps.googleusercontent.com"> 
    <BrowserRouter>
      <Container maxWidth = "xl">
<<<<<<< HEAD
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/auth" element = {<Auth />}/>
          <Route path = "/posts" element = {<Posts/>} />
        </Routes>
=======
        <Switch>
          <Route path = "/" exact component = {Home} />
          <Route path = "/auth" exact component = {() => (!user ? <Auth /> : <Redirect to = "/"/>)}/>
        </Switch>
>>>>>>> 5585eb84adb6c48445f81bd496ee808ec5a97af1
      </Container>
    </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App;