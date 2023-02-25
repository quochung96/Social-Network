import axios from 'axios';

//API hosting back-end server
const API = axios.create({baseURL: 'http://localhost:8080/api'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

//FriendRequests
export const fetchUserFriendRequest = (userId) => API.get(`/user/${userId}/friendrequests`);
export const acceptUserFriendRequest = (id) => API.put(`/friendrequest/${id}/accept`); 
export const deleteFriendRequest = (id) => API.delete(`/friendrequest/${id}`);
export const createFriendRequest = (userId,formData) => API.post(`user/${userId}/friendrequests`,formData);

//User
export const createUser = (user) => API.post('/users',user); // OK
export const fetchUsers = () => API.get('/users'); // OK
export const fetchUser = (id) => API.get(`/users/${id}`); // OK
export const deleteUser = (id) => API.delete(`/users/${id}`); // OK
export const updateUser = (user,id) => API.put(`/users/${id}`,user); // OK
//Posts
export const fetchPostByUserId = (userId) => API.get(`/${userId}/posts`);
export const fetchPost = (id) => API.get(`/posts/${id}`); // OK
export const fetchPosts = () => API.get("/posts"); // OK
// export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`); // To-do
export const createPost = (user_id, newPost) => API.post(`/${user_id}/posts`, newPost); // OK
export const likePost = (id) => API.patch(`/posts/${id}/likePost`); // To-do
export const comment = (value,id) => API.post(`/posts/${id}/commentPost`, {value}); // To-do
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost); // OK
export const deletePost = (id) => API.delete(`/posts/${id}`); // OK

//Chat


//Authentication
export const signin = (formData) => API.post('accounts/signin',formData); // OK
export const signup = (formData) => API.post('accounts/signup',formData); // OK
