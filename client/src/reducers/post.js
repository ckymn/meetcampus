import * as types from "../actions/types";

const initialState = {
  posts: [],
  currentPost: null, // ne ise yariyor ogren
};
//posts 
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POSTS:
      return {
        ...state, // return new pure state
        posts: action.payload,
      };
    case types.FETCH_SINGLE_POST:
      return {
        ...state,
        currentPost: action.payload,
      };
    case types.CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case types.UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post._id === action.payload._id) {
            return action.payload;
          } else {
            return post;
          }
        }),
        currentPost: action.payload,
      };
    case types.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
        currentPost: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default postReducer;

// reducer'lar ilgili action'i icerip icermedigine bakiyor.
// ve action'a gore state degeri belirlemek (return state )