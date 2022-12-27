import React from 'react';
import {Container} from '@material-ui/core';
import {BrowserRouter, Switch, Route,Redirect} from 'react-router-dom';

import Home from './components/HomePage/Home';
import {GoogleOAuthProvider} from '@react-oauth/google';
import Auth from './components/Auth/Auth';
import PostDetail from './components/PostDetail/PostDetail';
const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <GoogleOAuthProvider clientId = "890312707554-b73u9stq65c8njg26h9k7bogoi5b1luk.apps.googleusercontent.com"> 
    <BrowserRouter>
      <Container maxWidth = "xl">
        <Switch>
          <Route path = "/" exact component = {Home} />
          <Route path = "/auth" exact component = {() => (!user ? <Auth /> : <Redirect to = "/"/>)}/>
          <Route path = "/postDetail" exact component = {PostDetail}/>
        </Switch>
      </Container>
    </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App;