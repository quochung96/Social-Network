import {combineReducers} from 'redux';
import auth from './auth.js';
import posts from './posts.js';
import users from './users.js';
import requests from './requests.js';
import comments from './comments.js';
import search from './search.js';

export default combineReducers({
    auth,posts,users,requests,comments,search
});