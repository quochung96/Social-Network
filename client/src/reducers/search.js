import { CREATE, UPDATE, DELETE, FETCH_ALL, FETCH_SEARCH_USER } from "../constants/actionTypes";

const searchReducer = (state = {isLoading: true, searchs: []}, action) => {
    switch(action.type){
        case 'START_LOADING':
            return {
                ...state, isLoading: true
            };
        case 'END_LOADING':
            return {
                ...state, isLoading: false
            };
        case FETCH_ALL:
            return {
                ...state,
                searchs: action.payload.data
            };
        case FETCH_SEARCH_USER:
            return {
                ...state,
                searchUser: action.payload.searchUser
            }
        case CREATE:
            return {
                ...state,
                searchs: [
                    ...state.searchs,
                    action.payload
                ]
            };
        case UPDATE:
            return {
                ...state,
                searchs: state.searchs.map((search) => (search.id === action.payload.id ? action.payload : search))
            };
        case DELETE:
            return {
                ...state,
                searchs: state.searchs.filter((search) => search.id !== action.payload)
            };
        default:
            return state;
    }
}
export default searchReducer;