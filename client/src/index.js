import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';
<<<<<<< HEAD
import thunk from 'redux-thunk';
import reducers from './reducers';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store = {store}> 
        <App /> 
    </Provider> ,document.getElementById('root')
=======
ReactDOM.render(
    <App /> ,document.getElementById('root')
>>>>>>> 5585eb84adb6c48445f81bd496ee808ec5a97af1
);
