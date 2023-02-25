import { START_LOADING, END_LOADING,FETCH_REQUEST_USER,CREATE, UPDATE, DELETE } from "../constants/actionTypes";
import * as api from '../api/index.js';

export const getRequestByUserId = (userId) => async(dispatch) => {
    try{
      dispatch({type: START_LOADING});
  
      const { data } = await api.fetchUserFriendRequest(userId);
  
      dispatch({ type: FETCH_REQUEST_USER, payload: {request: data}});
      dispatch({type: END_LOADING});
  
    }catch(e){
      console.log(e);
    }
}
export const acceptUserFriendRequest = (id) => async(dispatch) => {
    try{
        const {data} = await api.acceptUserFriendRequest(id);
        
        dispatch({type: UPDATE, payload: data});

    }catch(e){
        console.log(e);
    }
}

export const createFriendRequest = (userId,formData) => async(dispatch) => {
  try{
    dispatch({ type: START_LOADING });
    const { data } = await api.createFriendRequest(userId,formData);

    dispatch({ type: CREATE, payload: data });
  }catch(e){
    console.log(e);
  }
}

export const acceptFriendRequest = (id) => async (dispatch) => {
  try{
    const { data } = await api.acceptUserFriendRequest(id);
    dispatch({ type: UPDATE, payload: data});
  }catch(e){
    console.log(e);
  }
}
export const deleteFriendRequest = (id) => async(dispatch) => {
  try{
    await api.deleteFriendRequest(id);
    dispatch({type: DELETE, payload: id});
  }catch(e){
    console.log(e);
  }
}