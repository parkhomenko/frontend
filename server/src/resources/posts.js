import {Rest} from "express-restful-es6";
import PostRepository from "../repository/posts-repository";

@Rest('/posts')
class PostResource {
    
    constructor() {
        this.postRepository = new PostRepository();
    }
    
    get(req, resp, next) {
        return this.postRepository.getPosts()
            .then(result => {
                return {
                    status: 'success',
                    data: result
                }
            })
            .catch(next);
    }
    
    post(req, resp, next) {
        return this.postRepository.newPost(this.body.title, this.body.content)
            .then(result => {
                return {
                    status: 'success'
                }
            })
            .catch(next);
    }
    
    put(req, resp, next) {
        return this.postRepository.editPost(this.body.id, this.body.title, this.body.content)
            .then(result => {
                return {
                    status: 'success'
                }
            })
            .catch(next);
    }
    
    delete(req, resp, next) {
        return this.postRepository.deletePost(this.body.id)
            .then(result => {
                return {
                    status: 'success'
                }
            })
            .catch(next);
    }
}
