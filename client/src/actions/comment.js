import { START_LOADING, END_LOADING,FETCH_COMMENT_POST,CREATE, UPDATE, DELETE } from "../constants/actionTypes";
import * as api from '../api/index.js';

export const getCommentByPostId = (postId) => async(dispatch) => {
    try{
      dispatch({type: START_LOADING});
  
      const { data } = await api.fetchCommentByPostId(postId);
  
      dispatch({ type: FETCH_COMMENT_POST, payload: { data}});
      dispatch({type: END_LOADING});
  
    }catch(e){
      console.log(e);
    }
}