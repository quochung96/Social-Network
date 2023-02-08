import { START_LOADING, END_LOADING,FETCH_ALL_USER,FETCH_USER,CREATE, UPDATE, DELETE } from "../constants/actionTypes";
import * as api from '../api/index.js';


//OK
//Get detail of user by id
export const getUser = (id) => async (dispatch) => {
    try{
        dispatch({type: START_LOADING});
        const {data} = await api.fetchUser(id);

        dispatch({type: FETCH_USER, payload: {user: data}});
    }catch(e){
        console.log(e);
    }
};

//Get all user in admin
export const getUsers = () => async (dispatch) => {
    try{
        dispatch({type: START_LOADING});
        const {data: {data}} = await api.fetchUsers();

        dispatch({type: FETCH_ALL_USER, payload: {data}});
        dispatch({type: END_LOADING});
    }
    catch(e){
        console.log(e);
    }
}

//Create a new user in admin board
export const createUser = (user) => async (dispatch) => {
    try{
        dispatch({type: START_LOADING});
        const {data} = await api.createUser(user);
        
        dispatch({type: CREATE, payload: data});
    }
    catch(e){
        console.log(e);
    }
}

//Update user by an id
export const updateUser = (id,user) => async(dispatch) => {
    try{
        const {data} = await api.updateUser(id, user);

        dispatch({type: UPDATE, payload: data});
    }catch(e){
        console.log(e);
    }
}

//Delete user by an id
export const deleteUser = (id) => async(dispatch) => {
    try{
        await api.deleteUser(id);

        dispatch({type: DELETE, payload: id});
    }catch(e){
        console.log(e);
    }
}