import requester from "./http-requester";

const widgets_data = {
    
    getLatestPosts() {
        return requester("/widgets/latest", "GET");
    },
    
    getPostsCount() {
        return requester("/widgets/count", "GET");
    }
};

export default widgets_data;