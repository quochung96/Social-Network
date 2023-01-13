import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import {GoogleOAuthProvider} from '@react-oauth/google';
import PostDetails from './components/PostDetails/PostDetail.jsx';
const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
  <GoogleOAuthProvider clientId = "890312707554-b73u9stq65c8njg26h9k7bogoi5b1luk.apps.googleusercontent.com">
  <BrowserRouter>
    <Container maxWidth="xl">
      <Navbar />
      <Switch>
        <Route path="/" exact component = {() => <Redirect to = "/posts" />} />
        <Route path = "/posts" exact component = {Home} />
        <Route path = "/posts/search" exact component ={Home} />
        <Route path = "/posts/:id" exact component = {PostDetails} />
        <Route path="/auth" exact component = {() => (!user ? <Auth /> : <Redirect to="/posts"/>)} />
      </Switch>
    </Container>
  </BrowserRouter>
  </GoogleOAuthProvider>
  )
};

export default App;