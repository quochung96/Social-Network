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

//Authentication
export const signin = (formData) => API.post('accounts/login',formData);
export const signup = (formData) => API.post('accounts/register',formData);
