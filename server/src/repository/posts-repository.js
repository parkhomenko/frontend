import Post from "../model/post";

const postRepository = {

    getPosts() {
        return new Promise((resolve, reject) => {
            Post.all((error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    },

    newPost(post) {
        return new Promise((resolve, reject) => {
            Post.create(post, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    },

    editPost(post) {
        return new Promise((resolve, reject) => {
            Post.get(post.id, (error, item) => {
                if (error) {
                    reject(error);
                } else {
                    item.title = post.title;
                    item.content = post.content;
                    item.save(error => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(item);
                        }
                    });
                }
            });
        });
    },

    deletePost(id) {
        return new Promise((resolve, reject) => {
            Post.get(id, (error, item) => {
                if (error) {
                    reject(error);
                } else {
                    item.remove(error => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(item);
                        }
                    });
                }
            });
        });
    }
};

export default postRepository;
