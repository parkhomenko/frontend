export default function postReducer(state = [], action) {
    switch (action.type) {
        case "LATEST_POSTS":
            return action.latestPosts;
        
        default:
            return state;
    }
}
