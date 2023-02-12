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