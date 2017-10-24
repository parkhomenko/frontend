export default function postReducer(state = [], action) {
    switch (action.type) {
        case "POSTS_COUNT":
            return action.postsCount;
        
        default:
            return state;
    }
}
