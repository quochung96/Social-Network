import * as actionType from '../constants/actionTypes';

const reducer = (state = {isLoading: true, posts: []}, action)=>{
    switch (action.type) {
        case actionType.START_LOADING :
            return {
                ...state,isLoading: true
            };
        case actionType.END_LOADING:
            return {
                ...state,
                isLoading: false
            };
        case actionType.FETCH_ALL:
        case actionType.FETCH_BY_SEARCH:
            return {
                ...state,
                posts: action.payload.data
            };
        case actionType.FETCH_POST:
            return {
                ...state,
                posts: action.payload.post
            };
        case actionType.LIKE:
            return {
                ...state,
                posts: state.posts.map((post) => (post.id === action.payload.id ? action.payload : post))
            };
        case actionType.CREATE:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    action.payload
                ]
            };
        case actionType.UPDATE:
            return {
                ...state,
                posts: state.posts.map((post) => (post.id === action.payload.id ? action.payload : post : post ))
            };
        case actionType.DELETE:
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.payload)
            };
        default:
            return state;
    }
}

export default reducer;