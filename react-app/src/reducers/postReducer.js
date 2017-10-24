export default function postReducer(state = [], action) {
    switch (action.type) {
        case "GET_POSTS":
            return action.posts;

        case "CREATE_POST_SUCCESS":
            return [...state,
                Object.assign({}, action.post)
            ];
        
        default:
            return state;
    }
}
