import { combineReducers } from "redux";
import postReducer from "./post";

const rootReducer = combineReducers({
    post: postReducer,
});

export default rootReducer;
