import Post from '../model/Post';

class PostRepository {
    
    getPosts() {
        return new Promise((resolve, reject) => {
            Post.all((error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        })
    }
    
    newPost(title, content) {
        const post = {
            title: title,
            content: content,
            pdate: new Date()
        };
        
        return new Promise((resolve, reject) => {
            Post.create(post, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            })
        })
    }
    
    editPost(id, title, content) {
        return new Promise((resolve, reject) => {
            Post.get(id, (error, item) => {
                if (error) {
                    reject(error);
                } else {
                    item.title = title;
                    item.content = content;
                    item.save(error => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(item);
                        }
                    })
                }
            })
        })
    }
    
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
                    })
                }
            })
        })
    }
}

export default PostRepository;
