import { START_LOADING,FETCH_POST_USER, END_LOADING, FETCH_ALL, FETCH_POST, CREATE, COMMENT, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
import * as api from '../api/index.js';

//OK
//Get detail post by post_id
export const getPost = (id) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
  
      const { data } = await api.fetchPost(id);
  
      dispatch({ type: FETCH_POST, payload: { post: data } });
    } catch (error) {
      console.log(error);
    }
};
export const getPostByUserId = (userId) => async(dispatch) => {
  try{
    dispatch({type: START_LOADING});

    const {data} = await api.fetchPostByUserId(userId);

    dispatch({ type: FETCH_POST_USER, payload: {postUser: data}});
    dispatch({type: END_LOADING});

  }catch(e){
    console.log(e);
  }
}
//OK
//List all posts when access in feed
export const getPosts = () => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const {data } = await api.fetchPosts();
  
      dispatch({ type: FETCH_ALL, payload: {data}});
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
};
// Do later
// export const getPostsBySearch = (searchQuery) => async (dispatch) => {
//     try {
//       dispatch({ type: START_LOADING });
//       const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
  
//       dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
//       dispatch({ type: END_LOADING });
//     } catch (error) {
//       console.log(error);
//     }
// };

//OK
export const createPost = (user_id, post) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createPost(user_id,post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
//TO-DO: implement update post
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('profile'));

  try {
    const { data } = await api.likePost(id, user?.token);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const commentPost = (value, id) => async (dispatch) => {
  try{
    const {data} = await api.comment(value,id);
    
    dispatch({ type: COMMENT, payload: data });

    return data.comments;
  }catch(e){
    console.log(e);
  }
}