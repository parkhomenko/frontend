import Post from "../model/Post";

class WidgetRepository {
    
    getLatestPosts() {
        return new Promise((resolve, reject) => {
            Post.find({}, {limit: 5, order: "-pdate"}, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
    
    getPostsCount() {
        return new Promise((resolve, reject) => {
            Post.count({}, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
}

export default WidgetRepository;
