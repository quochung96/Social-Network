import axios from 'axios';

//API hosting back-end server
const API = axios.create({baseURL: 'http://localhost:8080/api'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

//Profile
export const saveUser = (user) => API.post('/users',user);
export const getUsers = () => API.get('/users');
export const getUserById = (id) => API.get(`/users/${id}`);
export const deleteUserById = (id) => API.delete(`/users/${id}`);
export const updateUserById = (user,id) => API.put(`/users/${id}`,user);

//Posts
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = () => API.get(`/posts`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const comment = (value,id) => API.post(`/posts/${id}/commentPost`, {value});
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
//Chat

//Friends

//Authentication
export const signin = (formData) => API.post('accounts/signin',formData);
export const signup = (formData) => API.post('accounts/signup',formData);
