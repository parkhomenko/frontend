import {combineReducers} from "redux";
import posts from "./postReducer";
import latestPosts from "./latestPostsReducer";
import postsCount from "./postsCountReducer";

const postReducer = combineReducers({
    posts,
    latestPosts,
    postsCount
});

export default postReducer;
