import {Rest} from "express-restful-es6";
import postRepository from "../repository/posts-repository";

@Rest("/posts")
class PostResource {
    
    get(req, resp, next) {
        return postRepository.getPosts()
            .then(result => {
                return {
                    status: "success",
                    data: result
                };
            })
            .catch(next);
    }
    
    post(req, resp, next) {
        const post = {
            title: this.body.title,
            content: this.body.content,
            pdate: new Date()
        };
        
        return postRepository.newPost(post)
            .then(result => {
                return {
                    status: "success"
                };
            })
            .catch(next);
    }
    
    put(req, resp, next) {
        return postRepository.editPost(this.body)
            .then(result => {
                return {
                    status: "success"
                };
            })
            .catch(next);
    }
    
    delete(req, resp, next) {
        return postRepository.deletePost(this.body.id)
            .then(result => {
                return {
                    status: "success"
                };
            })
            .catch(next);
    }
}
