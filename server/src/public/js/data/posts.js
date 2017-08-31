import requester from "./http-requester";

const posts_data = {
    
    getPosts() {
        return requester("/posts", "GET");
    },
    
    addPost(post) {
        return requester("/posts", "POST", post);
    },
    
    editPost(post) {
        return requester("/posts", "PUT", post);
    },
    
    deletePost(post) {
        return requester("/posts", "DELETE", post);
    }
};

export default posts_data;
